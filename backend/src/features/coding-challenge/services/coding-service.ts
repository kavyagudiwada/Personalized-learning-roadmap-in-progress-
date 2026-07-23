import axios from "axios";
import { AppError } from "@/utils/errors";

const AI_TIMEOUT_MS = 90_000;

const SYSTEM_PROMPT =
	"You are a precise JSON generator. Your response must be ONLY valid JSON. No markdown, no code fences, no explanation outside the JSON.";

function buildPrompt(
	question: string,
	language: string,
	userCode?: string,
): string {
	const userCodeSection = userCode
		? `\n\nThe user attempted this problem with this code:\n${userCode}\nReview it and provide a corrected/optimized solution.`
		: "";

	return `You are a coding tutor. Given a problem, respond with ONLY valid JSON (no markdown, no backticks).

Problem:
${question}

Language: ${language}${userCodeSection}

Required JSON format:
{
  "solution": "complete working code as a plain string (no markdown code fences)",
  "explanation": "step-by-step explanation of the approach",
  "timeComplexity": "Big O time complexity",
  "spaceComplexity": "Big O space complexity"
}`;
}

async function callGemini(
	question: string,
	language: string,
	userCode?: string,
): Promise<string | null> {
	const apiKey = process.env.GEMINI_API_KEY;
	if (!apiKey || apiKey === "your_gemini_api_key") return null;

	try {
		const model = process.env.GEMINI_MODEL || "gemini-2.5-flash";
		const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`;

		const response = await axios.post(
			url,
			{
				contents: [
					{ parts: [{ text: buildPrompt(question, language, userCode) }] },
				],
				generationConfig: {
					responseMimeType: "application/json",
					temperature: 0.3,
					maxOutputTokens: 4096,
				},
			},
			{
				headers: {
					"Content-Type": "application/json",
					"x-goog-api-key": apiKey,
				},
				timeout: AI_TIMEOUT_MS,
			},
		);

		const text = response.data?.candidates?.[0]?.content?.parts?.[0]?.text;
		return text || null;
	} catch (err) {
		console.error(
			"Gemini coding solution call failed:",
			err instanceof Error ? err.message : String(err),
		);
		return null;
	}
}

async function callGroq(
	question: string,
	language: string,
	userCode?: string,
): Promise<string | null> {
	const apiKey = process.env.GROQ_API_KEY;
	if (!apiKey || apiKey === "your_groq_api_key") return null;

	try {
		const model = process.env.GROQ_MODEL || "llama-3.3-70b-versatile";
		const response = await axios.post(
			"https://api.groq.com/openai/v1/chat/completions",
			{
				model,
				messages: [
					{ role: "system", content: SYSTEM_PROMPT },
					{ role: "user", content: buildPrompt(question, language, userCode) },
				],
				temperature: 0.3,
				max_tokens: 4096,
				response_format: { type: "json_object" },
			},
			{
				headers: {
					Authorization: `Bearer ${apiKey}`,
					"Content-Type": "application/json",
				},
				timeout: AI_TIMEOUT_MS,
			},
		);

		const text = response.data?.choices?.[0]?.message?.content;
		return text || null;
	} catch (err) {
		console.error(
			"Groq coding solution call failed:",
			err instanceof Error ? err.message : String(err),
		);
		return null;
	}
}

async function callGitHub(
	question: string,
	language: string,
	userCode?: string,
): Promise<string | null> {
	const apiKey = process.env.GITHUB_TOKEN;
	if (!apiKey || apiKey === "your_github_token") return null;

	try {
		const response = await axios.post(
			"https://models.inference.ai.azure.com/chat/completions",
			{
				model: "gpt-4o-mini",
				messages: [
					{ role: "system", content: SYSTEM_PROMPT },
					{ role: "user", content: buildPrompt(question, language, userCode) },
				],
				response_format: { type: "json_object" },
				temperature: 0.3,
				max_tokens: 4096,
			},
			{
				headers: {
					Authorization: `Bearer ${apiKey}`,
					"Content-Type": "application/json",
				},
				timeout: AI_TIMEOUT_MS,
			},
		);

		const text = response.data?.choices?.[0]?.message?.content;
		return text || null;
	} catch (err) {
		console.error(
			"GitHub coding solution call failed:",
			err instanceof Error ? err.message : String(err),
		);
		return null;
	}
}

function extractJson(text: string): Record<string, unknown> {
	const cleaned = text.trim();

	// Try direct parse first
	try {
		const parsed = JSON.parse(cleaned);
		if (
			typeof parsed === "object" &&
			parsed !== null &&
			Object.keys(parsed).length > 0
		) {
			return parsed as Record<string, unknown>;
		}
	} catch {
		// fall through
	}

	// Try extracting from markdown code fences
	const jsonMatch = cleaned.match(/```(?:json)?\s*([\s\S]*?)```/);
	if (jsonMatch) {
		try {
			const parsed = JSON.parse(jsonMatch[1].trim());
			if (typeof parsed === "object" && parsed !== null) {
				return parsed as Record<string, unknown>;
			}
		} catch {
			// fall through
		}
	}

	// Try extracting first { } block
	const braceMatch = cleaned.match(/\{[\s\S]*\}/);
	if (braceMatch) {
		try {
			const parsed = JSON.parse(braceMatch[0]);
			if (
				typeof parsed === "object" &&
				parsed !== null &&
				Object.keys(parsed).length > 0
			) {
				return parsed as Record<string, unknown>;
			}
		} catch {
			// fall through
		}
	}

	// If response starts with a language name (e.g. "javascript\nfunction..."),
	// it's raw code — wrap it into our format
	if (
		/^[a-zA-Z]+\n/.test(cleaned) ||
		/^function|^def |^public |^vector|^const |^let |^var /.test(cleaned)
	) {
		return {
			solution: cleaned,
			explanation: "Solution generated by AI.",
			timeComplexity: "N/A",
			spaceComplexity: "N/A",
		};
	}

	throw new Error(
		`Could not parse AI response as JSON. Raw: ${cleaned.slice(0, 100)}`,
	);
}

export async function generateSolution(
	title: string,
	description: string,
	language: string,
	userCode?: string,
): Promise<{
	solution: string;
	explanation: string;
	timeComplexity?: string;
	spaceComplexity?: string;
}> {
	try {
		const question = `## ${title}\n\n${description}`;

		const geminiResult = await callGemini(question, language, userCode);
		if (geminiResult) {
			const parsed = extractJson(geminiResult);
			return {
				solution: String(parsed.solution ?? ""),
				explanation: String(parsed.explanation ?? ""),
				timeComplexity: parsed.timeComplexity
					? String(parsed.timeComplexity)
					: undefined,
				spaceComplexity: parsed.spaceComplexity
					? String(parsed.spaceComplexity)
					: undefined,
			};
		}

		const groqResult = await callGroq(question, language, userCode);
		if (groqResult) {
			const parsed = extractJson(groqResult);
			return {
				solution: String(parsed.solution ?? ""),
				explanation: String(parsed.explanation ?? ""),
				timeComplexity: parsed.timeComplexity
					? String(parsed.timeComplexity)
					: undefined,
				spaceComplexity: parsed.spaceComplexity
					? String(parsed.spaceComplexity)
					: undefined,
			};
		}

		const githubResult = await callGitHub(question, language, userCode);
		if (githubResult) {
			const parsed = extractJson(githubResult);
			return {
				solution: String(parsed.solution ?? ""),
				explanation: String(parsed.explanation ?? ""),
				timeComplexity: parsed.timeComplexity
					? String(parsed.timeComplexity)
					: undefined,
				spaceComplexity: parsed.spaceComplexity
					? String(parsed.spaceComplexity)
					: undefined,
			};
		}

		throw new AppError(
			"All AI providers are currently unavailable. Please try again later.",
			503,
		);
	} catch (err) {
		if (err instanceof AppError) throw err;
		const message =
			err instanceof Error
				? err.message
				: "Unexpected error generating solution";
		throw new AppError(message, 502);
	}
}
