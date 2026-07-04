import axios from "axios";
import { prisma } from "@/database";
import { AppError } from "@/utils/errors";
import type { RoadmapPhase, RoadmapResponse } from "../types/roadmap.types";
import type { Prisma } from "@prisma/client";

function asJson<T>(v: T): Prisma.InputJsonValue {
	return JSON.parse(JSON.stringify(v)) as Prisma.InputJsonValue;
}

const AI_TIMEOUT_MS = 60_000;

const STRUCTURED_ROADMAPS: Record<string, Omit<RoadmapPhase, "status" | "order">[]> = {
	"AI / Machine Learning Engineer": [
		{ id: "phase-1", label: "Math & Python Foundations", duration: "3 weeks", description: "Build the mathematical and programming foundation required for all ML work.", skills: ["Linear Algebra", "Statistics", "NumPy", "Pandas", "Python OOP"], milestones: ["Implement matrix operations from scratch", "Complete a statistics project with NumPy/Pandas", "Write unit tests for your data processing pipeline"], resources: [
			{ label: "3Blue1Brown – Essence of Linear Algebra", url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab" },
			{ label: "Kaggle Learn – Python", url: "https://www.kaggle.com/learn/python" },
			{ label: "Khan Academy – Statistics & Probability", url: "https://www.khanacademy.org/math/statistics-probability" },
			{ label: "NumPy Official Guide", url: "https://numpy.org/doc/stable/user/absolute_beginners.html" },
			{ label: "Pandas Documentation – Getting Started", url: "https://pandas.pydata.org/docs/getting_started/index.html" },
			{ label: "MIT OCW – Linear Algebra", url: "https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/" },
			{ label: "Real Python – Python OOP", url: "https://realpython.com/python3-object-oriented-programming/" },
			{ label: "DataCamp – Intro to Python", url: "https://www.datacamp.com/courses/intro-to-python-for-data-science" },
			{ label: "StatQuest – Statistics Basics", url: "https://www.youtube.com/playlist?list=PLblh5JKOoLUK0FLuzwntyYI10UQFUhsY9" },
			{ label: "Google Colab Tutorial", url: "https://colab.research.google.com/notebooks/intro.ipynb" },
		] },
		{ id: "phase-2", label: "Classic Machine Learning", duration: "4 weeks", description: "Master supervised and unsupervised learning algorithms with scikit-learn.", skills: ["Regression", "Classification", "Clustering", "Scikit-learn", "Model Evaluation"], milestones: ["Train and evaluate 3 models on a real dataset", "Achieve 80%+ accuracy on a Kaggle beginner competition", "Create a model comparison notebook with cross-validation"], resources: [
			{ label: "Hands-On ML with Scikit-Learn", url: "https://www.oreilly.com/library/view/hands-on-machine-learning/9781492032632/" },
			{ label: "StatQuest – ML Fundamentals", url: "https://www.youtube.com/@statquest" },
			{ label: "Scikit-learn Official Tutorials", url: "https://scikit-learn.org/stable/tutorial/index.html" },
			{ label: "Kaggle – Intro to Machine Learning", url: "https://www.kaggle.com/learn/intro-to-machine-learning" },
			{ label: "Google ML Crash Course", url: "https://developers.google.com/machine-learning/crash-course" },
			{ label: "Towards Data Science – ML Articles", url: "https://towardsdatascience.com/" },
			{ label: "Analytics Vidhya – ML Guide", url: "https://www.analyticsvidhya.com/blog/2021/01/5-free-courses-to-learn-machine-learning/" },
			{ label: "Machine Learning Mastery", url: "https://machinelearningmastery.com/" },
			{ label: "Kaggle – Intermediate ML", url: "https://www.kaggle.com/learn/intermediate-machine-learning" },
			{ label: "Coursera – ML Specialization (Andrew Ng)", url: "https://www.coursera.org/specializations/machine-learning-introduction" },
		] },
		{ id: "phase-3", label: "Deep Learning", duration: "5 weeks", description: "Understand neural networks and build deep learning models with PyTorch.", skills: ["PyTorch", "CNNs", "RNNs", "Backpropagation", "Transfer Learning"], milestones: ["Train a CNN on CIFAR-10 with >85% accuracy", "Build an RNN for text generation", "Implement transfer learning on a custom dataset"], resources: [
			{ label: "PyTorch Official Tutorials", url: "https://pytorch.org/tutorials/" },
			{ label: "fast.ai – Practical Deep Learning", url: "https://course.fast.ai" },
			{ label: "Deep Learning Specialization – Coursera", url: "https://www.coursera.org/specializations/deep-learning" },
			{ label: "d2l.ai – Dive into Deep Learning", url: "https://d2l.ai/" },
			{ label: "CS231n – Stanford CNNs", url: "https://cs231n.github.io/" },
			{ label: "PyTorch Lightning Docs", url: "https://lightning.ai/docs/pytorch/stable/" },
			{ label: "Papers With Code – Trending Research", url: "https://paperswithcode.com/" },
			{ label: "Neural Networks from Scratch – YouTube", url: "https://www.youtube.com/playlist?list=PLQVvvaa0QuDcjD5BAw2DxE6OF2tius3V3" },
			{ label: "Distill.pub – Visual ML Explanations", url: "https://distill.pub/" },
			{ label: "TensorFlow Tutorials (for comparison)", url: "https://www.tensorflow.org/tutorials" },
		] },
		{ id: "phase-4", label: "NLP & Transformers", duration: "4 weeks", description: "Master transformer architecture and large language models.", skills: ["Tokenization", "Attention Mechanism", "HuggingFace", "Fine-tuning", "RAG"], milestones: ["Fine-tune a language model on custom data", "Build a RAG pipeline with vector search", "Deploy a model behind a Gradio interface"], resources: [
			{ label: "HuggingFace NLP Course", url: "https://huggingface.co/learn/nlp-course" },
			{ label: "Attention Is All You Need (Paper)", url: "https://arxiv.org/abs/1706.03762" },
			{ label: "Stanford CS224n – NLP with Deep Learning", url: "https://web.stanford.edu/class/cs224n/" },
			{ label: "Gradio Docs – ML Demos", url: "https://www.gradio.app/docs" },
			{ label: "LangChain Documentation", url: "https://python.langchain.com/docs/get_started/introduction" },
			{ label: "Weaviate – Vector Search Guide", url: "https://weaviate.io/developers/weaviate" },
			{ label: "OpenAI Tokenizer Playground", url: "https://platform.openai.com/tokenizer" },
			{ label: "The Annotated Transformer", url: "https://nlp.seas.harvard.edu/2018/04/03/attention.html" },
			{ label: "HuggingFace Transformers Docs", url: "https://huggingface.co/docs/transformers/index" },
			{ label: "LLM University by Cohere", url: "https://docs.cohere.com/docs/llmu" },
		] },
		{ id: "phase-5", label: "MLOps & Deployment", duration: "3 weeks", description: "Ship models to production with monitoring and CI/CD.", skills: ["FastAPI", "Docker", "MLflow", "Model Serving", "CI/CD"], milestones: ["Deploy a model as a REST API", "Set up experiment tracking with MLflow", "Containerize your ML app with Docker"], resources: [
			{ label: "Full Stack Deep Learning", url: "https://fullstackdeeplearning.com" },
			{ label: "MLflow Docs", url: "https://mlflow.org/docs/latest/index.html" },
			{ label: "FastAPI Official Docs", url: "https://fastapi.tiangolo.com/" },
			{ label: "Docker Curriculum", url: "https://docker-curriculum.com/" },
			{ label: "Made With ML – MLOps", url: "https://madewithml.com/" },
			{ label: "Neptune.ai – MLOps Guide", url: "https://neptune.ai/blog/mlops" },
			{ label: "GitHub Actions CI/CD Docs", url: "https://docs.github.com/en/actions" },
			{ label: "Kubeflow Docs", url: "https://www.kubeflow.org/docs/" },
			{ label: "Weights & Biases Docs", url: "https://docs.wandb.ai/" },
			{ label: "Ray – ML Compute", url: "https://docs.ray.io/en/latest/" },
		] },
		{ id: "phase-6", label: "Capstone Project", duration: "4 weeks", description: "Build an end-to-end ML project demonstrating all acquired skills.", skills: ["Problem Scoping", "Data Collection", "Model Training", "Deployment", "Documentation"], milestones: ["Ship a complete ML project on GitHub", "Write a detailed README with results and architecture", "Present your project with a live demo video"], resources: [
			{ label: "Kaggle Competitions", url: "https://www.kaggle.com/competitions" },
			{ label: "Papers With Code", url: "https://paperswithcode.com" },
			{ label: "Awesome ML Projects on GitHub", url: "https://github.com/maelfabien/Machine-Learning" },
			{ label: "Google Dataset Search", url: "https://datasetsearch.research.google.com/" },
			{ label: "UCI ML Repository", url: "https://archive.ics.uci.edu/ml/index.php" },
			{ label: "GitHub README Guide", url: "https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes" },
			{ label: "Streamlit – ML App Builder", url: "https://docs.streamlit.io/" },
			{ label: "HuggingFace Spaces", url: "https://huggingface.co/spaces" },
			{ label: "DagsHub – ML Project Hosting", url: "https://dagshub.com/" },
			{ label: "ML Project Checklist", url: "https://www.mlprojectchecklist.com/" },
		] },
	],
	"Frontend Engineer": [
		{ id: "phase-1", label: "HTML & CSS Mastery", duration: "2 weeks", description: "Build pixel-perfect, responsive layouts with modern CSS.", skills: ["Semantic HTML5", "CSS Grid", "Flexbox", "Responsive Design", "CSS Animations"], milestones: ["Clone 3 real website layouts from scratch", "Build a fully responsive portfolio page", "Create an animated landing page with CSS transitions"], resources: [
			{ label: "CSS Tricks – Complete Guide to Grid", url: "https://css-tricks.com/snippets/css/complete-guide-grid/" },
			{ label: "Kevin Powell – CSS YouTube", url: "https://www.youtube.com/@KevinPowell" },
			{ label: "MDN Web Docs – HTML", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
			{ label: "Flexbox Froggy Game", url: "https://flexboxfroggy.com/" },
			{ label: "CSS Grid Garden Game", url: "https://cssgridgarden.com/" },
			{ label: "web.dev – Learn Responsive Design", url: "https://web.dev/learn/design/" },
			{ label: "Frontend Mentor Challenges", url: "https://www.frontendmentor.io/" },
			{ label: "Codepip – CSS Games", url: "https://codepip.com/" },
			{ label: "Can I Use – Browser Support", url: "https://caniuse.com/" },
			{ label: "CSS Zen Garden", url: "https://csszengarden.com/" },
		] },
		{ id: "phase-2", label: "JavaScript Deep Dive", duration: "3 weeks", description: "Master JavaScript fundamentals, async patterns, and modern ES6+ features.", skills: ["Closures & Scope", "Async/Await", "Promises", "Array Methods", "Modules"], milestones: ["Build a weather app with fetch API", "Implement a promise-based task queue", "Create a vanilla JS SPA with routing"], resources: [
			{ label: "javascript.info", url: "https://javascript.info" },
			{ label: "You Don't Know JS (Free Book)", url: "https://github.com/getify/You-Dont-Know-JS" },
			{ label: "MDN – JS Guide", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" },
			{ label: "FreeCodeCamp – JS Algorithms", url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/" },
			{ label: "JSConf YouTube Channel", url: "https://www.youtube.com/user/jsconfeu" },
			{ label: "Codewars – JS Practice", url: "https://www.codewars.com/" },
			{ label: "Namaste JavaScript (YouTube)", url: "https://www.youtube.com/playlist?list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP" },
			{ label: "Eloquent JS (Free Book)", url: "https://eloquentjavascript.net/" },
			{ label: "TypeScript Handbook for JS Devs", url: "https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html" },
			{ label: "Dave Gray – JS Playlist", url: "https://www.youtube.com/@DaveGrayTeachesCode" },
		] },
		{ id: "phase-3", label: "React & TypeScript", duration: "4 weeks", description: "Build component-driven UIs with type safety and modern React patterns.", skills: ["JSX", "Hooks", "React Router", "TypeScript", "State Management"], milestones: ["Build a typed e-commerce product page", "Implement a custom hook library", "Set up React Router with auth guards"], resources: [
			{ label: "React Official Docs", url: "https://react.dev" },
			{ label: "Total TypeScript – Free Tutorials", url: "https://www.totaltypescript.com" },
			{ label: "Epic React (Kent C. Dodds)", url: "https://www.epicreact.dev/" },
			{ label: "React Router Docs", url: "https://reactrouter.com/en/main" },
			{ label: "Zustand – State Management", url: "https://docs.pmnd.rs/zustand/getting-started/introduction" },
			{ label: "TypeScript Cheatsheets – React", url: "https://react-typescript-cheatsheet.netlify.app/" },
			{ label: "Josh Comeau – React Blog", url: "https://www.joshwcomeau.com/" },
			{ label: "React Query Docs", url: "https://tanstack.com/query/latest" },
			{ label: "Framer Motion Docs", url: "https://www.framer.com/motion/" },
			{ label: "Vitest with React Testing Library", url: "https://vitest.dev/guide/" },
		] },
		{ id: "phase-4", label: "Modern Tooling & Testing", duration: "3 weeks", description: "Learn build tools, testing frameworks, and developer workflows.", skills: ["Vite", "Vitest", "React Testing Library", "Git Workflows", "CI/CD"], milestones: ["Set up a full CI pipeline with tests", "Achieve 80%+ test coverage on a project", "Configure lint-staged and commit hooks"], resources: [
			{ label: "Vite Official Docs", url: "https://vitejs.dev/guide/" },
			{ label: "Testing Library Docs", url: "https://testing-library.com/docs/react-testing-library/intro/" },
			{ label: "Vitest Guide", url: "https://vitest.dev/guide/" },
			{ label: "GitHub Actions Docs", url: "https://docs.github.com/en/actions" },
			{ label: "Husky – Git Hooks", url: "https://typicode.github.io/husky/" },
			{ label: "ESLint Configuration Guide", url: "https://eslint.org/docs/latest/user-guide/configuring/" },
			{ label: "Prettier Docs", url: "https://prettier.io/docs/en/" },
			{ label: "Biome.js Docs", url: "https://biomejs.dev/" },
			{ label: "kentcdodds – Testing Fundamentals", url: "https://testingjavascript.com/" },
			{ label: "Playwright Docs", url: "https://playwright.dev/docs/intro" },
		] },
		{ id: "phase-5", label: "Performance & Accessibility", duration: "2 weeks", description: "Make apps fast, accessible, and production-ready.", skills: ["Core Web Vitals", "WCAG 2.1", "Lighthouse", "Code Splitting", "SEO"], milestones: ["Achieve 90+ Lighthouse score", "Implement full keyboard navigation", "Set up lazy loading and code splitting"], resources: [
			{ label: "web.dev – Performance", url: "https://web.dev/learn/performance/" },
			{ label: "A11y Project Checklist", url: "https://www.a11yproject.com/checklist/" },
			{ label: "MDN – Accessibility", url: "https://developer.mozilla.org/en-US/docs/Web/Accessibility" },
			{ label: "Chrome DevTools – Lighthouse", url: "https://developer.chrome.com/docs/lighthouse/overview/" },
			{ label: "React Code Splitting Guide", url: "https://react.dev/reference/react/lazy" },
			{ label: "WCAG 2.1 Quick Reference", url: "https://www.w3.org/WAI/WCAG21/quickref/" },
			{ label: "WebPageTest", url: "https://www.webpagetest.org/" },
			{ label: "Patterns for Performant CSS", url: "https://web.dev/patterns/" },
			{ label: "Accessibility Insights Chrome Extension", url: "https://accessibilityinsights.io/docs/web/overview/" },
			{ label: "Smashing Magazine – Performance", url: "https://www.smashingmagazine.com/tag/performance/" },
		] },
		{ id: "phase-6", label: "Portfolio & Deployment", duration: "2 weeks", description: "Ship real projects and build a compelling portfolio.", skills: ["Project Planning", "Vercel/Netlify", "README Writing", "GitHub Profile"], milestones: ["Deploy 2 full-stack projects", "Write detailed case studies for each", "Optimize GitHub profile with pinned repos"], resources: [
			{ label: "Vercel Deployment Docs", url: "https://vercel.com/docs" },
			{ label: "Frontend Mentor", url: "https://www.frontendmentor.io" },
			{ label: "Netlify Docs", url: "https://docs.netlify.com/" },
			{ label: "GitHub Profile README Guide", url: "https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme" },
			{ label: "Awesome GitHub Profile README", url: "https://github.com/abhisheknaiidu/awesome-github-profile-readme" },
			{ label: "Dribbble – Design Inspiration", url: "https://dribbble.com/" },
			{ label: "dev.to – Developer Blog", url: "https://dev.to/" },
			{ label: "Hashnode – Blog for Devs", url: "https://hashnode.com/" },
			{ label: "Product Hunt – Launch Projects", url: "https://www.producthunt.com/" },
			{ label: "Readme.so – README Generator", url: "https://readme.so/" },
		] },
	],
};

function generateId(): string {
	return `phase-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}

function buildStructuredPhases(goal: string): RoadmapPhase[] {
	const template = STRUCTURED_ROADMAPS[goal] || STRUCTURED_ROADMAPS["Frontend Engineer"];
	return template.map((p, i) => ({
		...p,
		id: generateId(),
		status: i === 0 ? "available" : "locked",
		order: i + 1,
	})) as RoadmapPhase[];
}

async function callGemini(prompt: string): Promise<string | null> {
	const apiKey = process.env.GEMINI_API_KEY;
	if (!apiKey || apiKey === "your_gemini_api_key") return null;
	try {
		const model = process.env.GEMINI_MODEL || "gemini-2.5-flash";
		const response = await axios.post(
			`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,
			{ contents: [{ role: "user", parts: [{ text: prompt }] }], generationConfig: { temperature: 0.7, maxOutputTokens: 4096 } },
			{ headers: { "Content-Type": "application/json", "x-goog-api-key": apiKey }, timeout: AI_TIMEOUT_MS },
		);
		return response.data?.candidates?.[0]?.content?.parts?.[0]?.text || null;
	} catch {
		return null;
	}
}

async function callGroq(prompt: string): Promise<string | null> {
	const apiKey = process.env.GROQ_API_KEY;
	if (!apiKey || apiKey === "your_groq_api_key") return null;
	try {
		const response = await axios.post(
			"https://api.groq.com/openai/v1/chat/completions",
			{ model: process.env.GROQ_MODEL || "llama-3.3-70b-versatile", messages: [{ role: "user", content: prompt }], temperature: 0.7, max_tokens: 4096 },
			{ headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" }, timeout: AI_TIMEOUT_MS },
		);
		return response.data?.choices?.[0]?.message?.content || null;
	} catch {
		return null;
	}
}

async function callGithub(prompt: string): Promise<string | null> {
	const apiKey = process.env.GITHUB_TOKEN;
	if (!apiKey || apiKey === "your_github_token") return null;
	try {
		const response = await axios.post(
			"https://models.inference.ai.azure.com/chat/completions",
			{ model: "gpt-4o-mini", messages: [{ role: "user", content: prompt }], temperature: 0.7, max_tokens: 4096 },
			{ headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" }, timeout: AI_TIMEOUT_MS },
		);
		return response.data?.choices?.[0]?.message?.content || null;
	} catch {
		return null;
	}
}

async function generateAIReply(prompt: string): Promise<string> {
	const gemini = await callGemini(prompt);
	if (gemini) return gemini;
	const groq = await callGroq(prompt);
	if (groq) return groq;
	const github = await callGithub(prompt);
	if (github) return github;
	throw new AppError("All AI providers are currently unavailable.", 503);
}

function buildAIPrompt(goal: string, skills: string[], weak: string[]): string {
	return `You are a senior career roadmap architect. Create a personalized 6-phase learning roadmap for someone pursuing "${goal}".

Their current skills: ${skills.join(", ") || "not specified"}.
Their skill gaps to fill: ${weak.join(", ") || "not specified"}.

Return a JSON array of 6 phases, each with:
- "label": short phase name
- "duration": estimated time (e.g. "3 weeks")
- "description": 1-2 sentence description
- "skills": array of 4-6 specific skills to learn
- "milestones": array of 3-4 measurable milestones
- "resources": array of 10 objects with "label" and "url" (use real, well-known resources)

Order them from foundational to advanced. Make the roadmap specific to ${goal} and tailored to the user's skill gaps.

Respond with ONLY the JSON array, no other text.`;

}

function parseAIPhases(text: string): RoadmapPhase[] {
	try {
		const cleaned = text.replace(/```json\s*/g, "").replace(/```\s*/g, "").trim();
		const data = JSON.parse(cleaned);
		if (!Array.isArray(data)) throw new Error("Not an array");
		return data.map((p: Record<string, unknown>, i: number) => ({
			id: generateId(),
			label: String(p.label || `Phase ${i + 1}`),
			duration: String(p.duration || "2 weeks"),
			description: String(p.description || ""),
			skills: Array.isArray(p.skills) ? p.skills.map(String) : [],
			milestones: Array.isArray(p.milestones) ? p.milestones.map(String) : [],
			resources: Array.isArray(p.resources) ? p.resources.map((r: Record<string, string>) => ({ label: String(r.label || ""), url: String(r.url || "") })) : [],
			status: i === 0 ? "available" : "locked",
			order: i + 1,
		}));
	} catch {
		throw new AppError("AI returned an invalid roadmap format. Please try again.", 500);
	}
}

export async function generateRoadmap(
	userId: string,
	goal: string,
	source: "ai" | "structured" = "ai",
): Promise<RoadmapResponse> {
	const userRecord = await prisma.user.findUnique({
		where: { id: userId },
		select: { skills: true, careerGoal: true },
	});

	const latestSkillGap = await prisma.skillGap.findFirst({
		where: { userId },
		orderBy: { updatedAt: "desc" },
		select: { weak: true },
	});

	const skills = userRecord?.skills || [];
	const weak = latestSkillGap?.weak || [];

	let phases: RoadmapPhase[];

	if (source === "structured") {
		phases = buildStructuredPhases(goal);
	} else {
		const prompt = buildAIPrompt(goal, skills, weak);
		const aiText = await generateAIReply(prompt);
		phases = parseAIPhases(aiText);
	}

	const totalWeeks = phases.reduce((sum, p) => {
		const match = p.duration.match(/(\d+)/);
		return sum + (match ? Number.parseInt(match[1]) : 2);
	}, 0);

	const roadmap = await prisma.roadmap.create({
		data: {
			userId,
			title: `${goal} Learning Roadmap`,
			goal,
			duration: `${totalWeeks} weeks`,
			phases: asJson(phases),
		},
	});

	return formatRoadmap(roadmap);
}

export async function getUserRoadmaps(userId: string): Promise<RoadmapResponse[]> {
	const roadmaps = await prisma.roadmap.findMany({
		where: { userId },
		orderBy: { updatedAt: "desc" },
	});
	return roadmaps.map(formatRoadmap);
}

export async function getRoadmapById(userId: string, roadmapId: string): Promise<RoadmapResponse> {
	const roadmap = await prisma.roadmap.findUnique({ where: { id: roadmapId } });
	if (!roadmap || roadmap.userId !== userId) {
		throw new AppError("Roadmap not found", 404);
	}
	return formatRoadmap(roadmap);
}

export async function updatePhaseStatus(
	userId: string,
	roadmapId: string,
	phaseId: string,
	status: RoadmapPhase["status"],
): Promise<RoadmapResponse> {
	const roadmap = await prisma.roadmap.findUnique({ where: { id: roadmapId } });
	if (!roadmap || roadmap.userId !== userId) {
		throw new AppError("Roadmap not found", 404);
	}

	const phases = (roadmap.phases as unknown as RoadmapPhase[]).map((p) => {
		if (p.id !== phaseId) return p;
		return { ...p, status };
	});

	if (status === "completed") {
		const currentIndex = phases.findIndex((p) => p.id === phaseId);
		if (currentIndex >= 0 && currentIndex < phases.length - 1) {
			phases[currentIndex + 1] = { ...phases[currentIndex + 1], status: "available" };
		}
	}

	const updated = await prisma.roadmap.update({
		where: { id: roadmapId },
		data: { phases: asJson(phases) },
	});

	return formatRoadmap(updated);
}

export async function deleteRoadmap(userId: string, roadmapId: string): Promise<void> {
	const roadmap = await prisma.roadmap.findUnique({ where: { id: roadmapId } });
	if (!roadmap || roadmap.userId !== userId) {
		throw new AppError("Roadmap not found", 404);
	}
	await prisma.roadmap.delete({ where: { id: roadmapId } });
}

function formatRoadmap(roadmap: { id: string; title: string; goal: string; duration: string; phases: unknown; createdAt: Date; updatedAt: Date }): RoadmapResponse {
	const phases = roadmap.phases as unknown as RoadmapPhase[];
	const completed = phases.filter((p) => p.status === "completed").length;
	const progress = phases.length > 0 ? Math.round((completed / phases.length) * 100) : 0;

	return {
		id: roadmap.id,
		title: roadmap.title,
		goal: roadmap.goal,
		duration: roadmap.duration,
		phases,
		progress,
		createdAt: roadmap.createdAt.toISOString(),
		updatedAt: roadmap.updatedAt.toISOString(),
	};
}
