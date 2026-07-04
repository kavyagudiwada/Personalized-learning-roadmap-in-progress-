import { Router } from "express";
import { authenticateToken } from "@/middleware/authenticate";
import { getSolutionController } from "../controllers/coding-controller";

const router = Router();

router.post("/solution", authenticateToken, getSolutionController);

export default router;
