import { Router } from "express";
import { authenticateToken } from "@/middleware/authenticate";
import { runCodeController } from "../controllers/code-controller";

const router = Router();

router.post("/run", authenticateToken, runCodeController);

export default router;
