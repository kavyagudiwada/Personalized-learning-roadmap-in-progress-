import type { NextFunction, Response } from "express";
import type { AuthRequest } from "@/middleware/authenticate";
import { AppError } from "@/utils/errors";
import { codingSolutionSchema } from "../schemas/coding-schema";
import { generateSolution } from "../services/coding-service";

export async function getSolutionController(
	req: AuthRequest,
	res: Response,
	next: NextFunction,
) {
	try {
		if (!req.user) throw new AppError("Unauthorized", 401);

		const parsed = codingSolutionSchema.safeParse(req.body);
		if (!parsed.success) {
			throw new AppError(
				"Invalid request body",
				400,
				parsed.error.flatten().fieldErrors,
			);
		}

		const { title, description, language, userCode } = parsed.data;
		const result = await generateSolution(title, description, language, userCode);
		return res.json(result);
	} catch (err) {
		next(err);
	}
}
