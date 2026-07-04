import path from "path";
import cors from "cors";
import express from "express";
import { auth } from "@/config/auth";
import { assessmentRoutes } from "@/features/assessments";
import adminResourceRoutes from "@/features/recommendations/routes/admin-resource-routes";
import recommendationRoutes from "@/features/recommendations/routes/recommendation-routes";
import { skillGapRoutes } from "@/features/skill-gap-analysis";
import { userRoutes } from "@/features/users";
import githubRoutes from "@/features/users/routes/github-routes";
import resumeRoutes from "@/features/users/routes/resume-routes";
import { chatbotRoutes } from "@/features/chatbot";
import { roadmapRoutes } from "@/features/roadmap-generator";
import { codingRoutes } from "@/features/coding-challenge";
import { refreshMarketProfilesController } from "@/features/recommendations/controllers/admin-market-controller";
import { authenticateToken } from "@/middleware/authenticate";
import { requireRole } from "@/middleware/rbac";
import { errorHandler } from "@/middleware/error-handler";

const app = express();

const frontendUrls = (process.env.FRONTEND_URL || "")
	.split(",")
	.map((s) => s.trim())
	.filter(Boolean);
const allowedOrigins: (string | RegExp)[] = [
	...frontendUrls,
	/^https:\/\/.*\.vercel\.app$/,
	"http://localhost:5173",
	"http://localhost:3000",
];

app.use(
	cors({
		origin: (origin, callback) => {
			if (!origin) return callback(null, true);
			if (allowedOrigins.some((o) => (typeof o === "string" ? o === origin : o.test(origin)))) return callback(null, true);
			callback(new Error(`CORS blocked: ${origin}`));
		},
		credentials: true,
	}),
);

app.use(express.json({ limit: "15mb" }));
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth/callback", (req, _res, next) => {
	console.log(`[Auth Callback Req] ${req.method} ${req.url} host=${req.headers.host} cookies:`, req.headers.cookie);
	next();
});

app.all("/api/auth/*", async (req, res) => {
	const host = req.headers.host || "localhost";
	const url = new URL(req.url || "", `http://${host}`);
	const skipHeaders = new Set([
		"host", "connection", "content-length", "keep-alive",
		"transfer-encoding", "accept-encoding",
	]);
	const headers = new Headers();
	for (const key of Object.keys(req.headers)) {
		if (skipHeaders.has(key.toLowerCase())) continue;
		const value = req.headers[key];
		if (value) {
			headers.set(key, Array.isArray(value) ? value.join(", ") : value);
		}
	}
	const isGetOrHead = req.method === "GET" || req.method === "HEAD";
	const body =
		!isGetOrHead && req.body && typeof req.body === "object" && Object.keys(req.body).length > 0
			? JSON.stringify(req.body)
			: undefined;
	const request = new Request(url.toString(), {
		method: req.method,
		headers,
		body,
	});
	try {
		const response = await auth.handler(request);
		res.status(response.status);
		const contentType = response.headers.get("content-type");
		if (contentType) res.setHeader("content-type", contentType);
		response.headers.forEach((value, key) => {
			const lower = key.toLowerCase();
			if (lower === "content-type" || lower === "set-cookie") return;
			res.setHeader(key, value);
		});
	const isSecure = req.headers["x-forwarded-proto"] === "https" || req.protocol === "https";
	const allSetCookies = response.headers.getSetCookie();
	if (allSetCookies.length > 0) {
		console.log(`[Auth Proxy OUT original] ${req.method} ${req.path} (isSecure=${isSecure}) —`, allSetCookies);
	}
	for (const cookie of allSetCookies) {
		const modified = cookie.replace(/;\s*SameSite=Lax/gi, isSecure ? "; SameSite=None; Secure" : "; SameSite=None");
		console.log(`[Auth Proxy OUT modified] ${req.method} ${req.path} —`, modified);
		res.append("set-cookie", modified);
	}
		const text = await response.text();
		if (text) {
			res.send(text);
		} else {
			res.end();
		}
	} catch (err) {
		console.error("Better Auth handler error:", err);
		res.status(500).json({ error: "Internal server error" });
	}
});

app.use("/api/user", userRoutes);
app.use("/api/resume", resumeRoutes);
app.use("/api/github", githubRoutes);
app.use("/api/skill-gap", skillGapRoutes);
app.use("/api/assessment", assessmentRoutes);
app.use("/api/recommendations", recommendationRoutes);
app.use("/api/admin/resources", adminResourceRoutes);
app.use("/api/chatbot", chatbotRoutes);
app.use("/api/roadmap", roadmapRoutes);
app.use("/api/coding", codingRoutes);

// const frontendDist = path.join(__dirname, "../../frontend/dist");
// app.use(express.static(frontendDist));
// app.get("*", (_req, res) => {
// 	res.sendFile(path.join(frontendDist, "index.html"));
// });

const adminMarketRouter = express.Router();
adminMarketRouter.use(authenticateToken);
adminMarketRouter.use(requireRole("admin"));
adminMarketRouter.post("/refresh", refreshMarketProfilesController);
app.use("/api/admin/market", adminMarketRouter);

app.use(errorHandler);

export default app;

