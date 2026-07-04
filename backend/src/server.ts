import app from "./app";
import { env } from "./config/env";
import { initDb } from "./database";

app.get("/health", (_req, res) => {
	res.json({ status: "ok" });
});

app.listen(env.PORT, () => {
	console.log(`Server is running on port ${env.PORT}`);
});

initDb().catch((err) => {
	console.error("Database connection failed:", err);
});

