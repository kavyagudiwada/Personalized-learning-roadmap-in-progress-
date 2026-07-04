import { useNavigate } from "@tanstack/react-router";
import { CAREER_GOALS } from "@/services/api";
import { motion } from "framer-motion";
import DashboardNavbar from "@/features/dashboard/components/dashboard-navbar";

const GOAL_ICONS: Record<string, string> = {
  "AI / Machine Learning Engineer": "🤖",
  "Frontend Engineer": "🎨",
  "Backend Engineer": "⚙️",
  "Full-Stack Developer": "🔧",
  "Cloud Engineer (AWS / Azure / GCP)": "☁️",
  "DevOps / Platform Engineer": "🔄",
  "Data Analyst": "📊",
  "Data Engineer": "🗄️",
  "Mobile Developer": "📱",
  "Data Scientist": "🧪",
  "Site Reliability Engineer (SRE)": "🛡️",
  "UI/UX Designer": "🖌️",
  "Product Manager": "📋",
  "Forward Deployed Engineer": "🚀",
  "Cybersecurity Specialist": "🔒",
  "Software Engineer (Product-Based Companies)": "💻",
};

export default function SelectGoal() {
  const navigate = useNavigate();

  function handleSelect(goal: string) {
    localStorage.setItem("learnflow_career_goal", goal);
    navigate({ to: "/resume" });
  }

  return (
    <div className="min-h-screen bg-[#F8F6E8]">
      <DashboardNavbar />
      <div className="max-w-5xl mx-auto px-6 py-12">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
          <h1 className="text-4xl font-black text-[#171C4A]">Select Your Career Goal</h1>
          <p className="text-gray-500 mt-3 text-lg">Choose your target role to get a personalized skill assessment</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CAREER_GOALS.map((goal, i) => (
            <motion.button
              key={goal}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.03 }}
              onClick={() => handleSelect(goal)}
              className="bg-white rounded-2xl p-5 shadow-lg text-left hover:scale-[1.02] hover:shadow-xl transition border border-gray-100 flex items-center gap-4"
            >
              <span className="text-3xl">{GOAL_ICONS[goal] || "🎯"}</span>
              <span className="font-bold text-[#171C4A] text-sm leading-snug">{goal}</span>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}
