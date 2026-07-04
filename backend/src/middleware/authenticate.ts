import type { NextFunction, Request, Response } from "express";
import { auth } from "@/config/auth";

export interface AuthRequest extends Request {
	user?: { id: string; email: string; role: string };
}

export async function authenticateToken(
	req: AuthRequest,
	res: Response,
	next: NextFunction,
) {
	const headers = { ...req.headers } as Record<string, string>;
	delete headers.cookie;
	delete headers["cookie"];
	const session = await auth.api.getSession({
		headers,
	});

	if (!session || !session.user) {
		return res.status(401).json({ error: "Unauthorized" });
	}

	req.user = {
		id: session.user.id,
		email: session.user.email,
		role: ((session.user as Record<string, unknown>).role as string) || "user",
	};
	next();
}
