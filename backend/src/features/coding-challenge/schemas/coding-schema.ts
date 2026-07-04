import { z } from "zod";

export const codingSolutionSchema = z.object({
	title: z.string().min(1, "Problem title is required").max(200),
	description: z.string().min(1, "Problem description is required").max(5000),
	language: z.string().min(1, "Programming language is required").max(50),
	userCode: z.string().max(10000).optional(),
});
