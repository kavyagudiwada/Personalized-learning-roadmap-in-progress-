import { useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useAuth } from "@/features/authentication/hooks/use-auth";
import FloatingCard from "./floating-card";

export default function Hero() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const handleGetStarted = () => {
    navigate({ to: isAuthenticated ? "/dashboard" : "/login" });
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#F8F8F8]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff,#f3f4f6)] -z-10" />

      <div className="relative z-10">
        <FloatingCard
          badge="ROADMAP"
          title="AI Learning"
          subtitle="Personalized daily learning paths powered by AI."
          className="bg-blue-100 w-[260px] left-10 top-24"
        />

        <FloatingCard
          badge="ANALYSIS"
          title="Resume + GitHub"
          subtitle="Analyze your resume and GitHub profile to identify skill gaps."
          className="bg-orange-100 w-[260px] right-10 top-24"
        />

        <FloatingCard
          badge="GAMIFICATION"
          title="Progress Tracker"
          subtitle="Earn XP, badges, streaks, and track your learning journey."
          className="bg-green-100 w-[300px] left-16 bottom-12"
        />

        <FloatingCard
          badge="INTERVIEW PREP"
          title="AI Mock Interviews"
          subtitle="Practice technical interviews with AI-generated questions."
          className="bg-purple-100 w-[300px] right-16 bottom-10"
        />

        <div className="flex flex-col items-center justify-center min-h-[80vh] px-6 max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-5xl md:text-7xl font-extrabold tracking-tight leading-tight max-w-4xl"
          >
            Accelerate Your
            <br />
            Learning Journey
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-gray-500 text-center max-w-3xl"
          >
            Sign in, upload your resume, and get a personalized AI roadmap based
            on your skills, GitHub, and career goals.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <button
              onClick={handleGetStarted}
              className="mt-10 rounded-full px-12 py-4 bg-black text-white hover:bg-gray-800"
            >
              Get Started →
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
