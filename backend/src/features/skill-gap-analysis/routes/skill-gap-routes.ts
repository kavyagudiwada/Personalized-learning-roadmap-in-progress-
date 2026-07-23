import { Router } from "express";
import { authenticateToken } from "@/middleware/authenticate";
import {
	analyzeResumeController,
	analyzeSkillGapController,
	fullAnalyzeController,
	getCareerGoalsController,
	getJobMatchesController,
	getLatestSkillGapController,
	getProgressHistoryController,
} from "../controllers/skill-gap-controller";

const router = Router();

router.post("/resume/analyze", authenticateToken, analyzeResumeController);
router.post("/analyze", authenticateToken, analyzeSkillGapController);
router.post("/full-analyze", authenticateToken, fullAnalyzeController);
router.get("/latest", authenticateToken, getLatestSkillGapController);
router.get("/job-matches", authenticateToken, getJobMatchesController);
router.get("/progress", authenticateToken, getProgressHistoryController);
router.get("/career-goals", getCareerGoalsController);

export default router;
