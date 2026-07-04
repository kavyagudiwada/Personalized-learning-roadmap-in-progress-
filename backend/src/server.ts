import app from "./app";
import { env } from "./config/env";
import { initDb } from "./database";

app.get("/health", (_req, res) => {
	res.json({ status: "ok" });
});

app.get("/", (_req, res) => {
	res.json({ service: "LearnFlow API", status: "running" });
});

const server = app.listen(env.PORT, () => {
	console.log(`Server is running on port ${env.PORT}`);
});

server.on("error", (err) => {
	console.error("Server failed to start:", err);
	process.exit(1);
});

initDb().catch((err) => {
	console.error("Database connection failed:", err);
});
