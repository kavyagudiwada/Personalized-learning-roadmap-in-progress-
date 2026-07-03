import type { Response } from "express";
import type { AuthRequest } from "@/middleware/authenticate";
import { AppError } from "@/utils/errors";
import { runCode } from "../services/code-execution-service";

interface TestCaseInput {
	input: string;
	expected: string;
	description: string;
}

export async function runCodeController(req: AuthRequest, res: Response) {
	if (!req.user) throw new AppError("Unauthorized", 401);
	const { code, language, fnName, testCases } = req.body as {
		code: string;
		language: string;
		fnName: string;
		testCases: TestCaseInput[];
	};

	if (!code || !language || !fnName || !testCases?.length) {
		throw new AppError("Missing required fields: code, language, fnName, testCases", 400);
	}

	const supported = ["javascript", "python", "java", "cpp"];
	if (!supported.includes(language)) {
		throw new AppError(`Unsupported language: ${language}. Supported: ${supported.join(", ")}`, 400);
	}

	const results = await runCode(code, language, fnName, testCases);
	res.json({ results });
}
