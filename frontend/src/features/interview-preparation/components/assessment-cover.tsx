import { useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Brain, Target, BarChart3, Trophy, Zap, BookOpen, ChevronRight, CheckCircle, Sparkles } from "lucide-react";
import { getQuestions } from "./assessment-questions";

const benefits = [
  { icon: <Brain size={22} />, title: "AI-Powered Questions", desc: "Curated questions tailored to your skill level and career goal — not random guesses." },
  { icon: <Target size={22} />, title: "Role-Specific Topics", desc: "Frontend, Backend, DevOps, DSA, UI/UX, Data — pick what matters for your dream role." },
  { icon: <BarChart3 size={22} />, title: "Detailed Score", desc: "Get a precise score out of 100 with a breakdown of strengths and areas to improve." },
  { icon: <Trophy size={22} />, title: "Track Progress", desc: "Revisit past results and watch your improvement over time as you level up." },
  { icon: <Zap size={22} />, title: "Fast & Focused", desc: "Each assessment takes ~5 minutes. Short, sharp, and designed to fit your schedule." },
  { icon: <BookOpen size={22} />, title: "Smart Explanations", desc: "Every answer comes with an explanation so you learn while you test." },
];

const topicCards = [
  { emoji: "💻", title: "Frontend", desc: "React, CSS, JavaScript, TypeScript", color: "from-blue-400 to-blue-600" },
  { emoji: "⚙️", title: "Backend", desc: "Node.js, APIs, Databases, Auth", color: "from-emerald-400 to-emerald-600" },
  { emoji: "🧠", title: "DSA", desc: "Algorithms, Data Structures", color: "from-purple-400 to-purple-600" },
  { emoji: "☁️", title: "DevOps", desc: "Docker, CI/CD, Cloud", color: "from-amber-400 to-amber-600" },
  { emoji: "🎨", title: "UI/UX", desc: "Design Systems, Figma", color: "from-pink-400 to-pink-600" },
  { emoji: "📊", title: "Data", desc: "SQL, Python, Analytics", color: "from-cyan-400 to-cyan-600" },
  { emoji: "📱", title: "Mobile", desc: "React Native, Flutter, iOS, Android", color: "from-green-400 to-green-600" },
  { emoji: "🔒", title: "Cybersecurity", desc: "Network Security, Cryptography, Threats", color: "from-red-400 to-red-600" },
  { emoji: "🤖", title: "AI & ML", desc: "Neural Networks, NLP, Computer Vision", color: "from-indigo-400 to-indigo-600" },
  { emoji: "🏗️", title: "System Design", desc: "Architecture, Scalability, Microservices", color: "from-teal-400 to-teal-600" },
  { emoji: "☁️", title: "Cloud", desc: "AWS, Azure, GCP, Serverless", color: "from-orange-400 to-orange-600" },
  { emoji: "🧪", title: "Testing", desc: "Unit, Integration, E2E, TDD", color: "from-rose-400 to-rose-600" },
  { emoji: "🟨", title: "JavaScript", desc: "Closures, Async, ES6+, TypeScript", color: "from-yellow-400 to-yellow-600" },
  { emoji: "🐍", title: "Python", desc: "Syntax, Django, Flask, Pandas", color: "from-blue-500 to-blue-700" },
  { emoji: "☕", title: "Java", desc: "JVM, Spring Boot, Hibernate", color: "from-red-500 to-red-700" },
  { emoji: "🔀", title: "Git", desc: "Version Control, Branching, Workflows", color: "from-orange-500 to-orange-700" },
  { emoji: "🐧", title: "Linux", desc: "Commands, Shell, Processes, OS", color: "from-gray-600 to-gray-800" },
  { emoji: "🌐", title: "Networking", desc: "HTTP, TCP/IP, DNS, REST", color: "from-sky-400 to-sky-600" },
  { emoji: "🗄️", title: "Databases", desc: "Indexing, Transactions, SQL vs NoSQL", color: "from-violet-400 to-violet-600" },
  { emoji: "📐", title: "Design Patterns", desc: "Singleton, Factory, Observer, SOLID", color: "from-fuchsia-400 to-fuchsia-600" },
  { emoji: "🛡️", title: "App Security", desc: "OWASP, XSS, CSRF, Secure Coding", color: "from-lime-500 to-lime-700" },
  { emoji: "⛓️", title: "Blockchain", desc: "Web3, Smart Contracts, Solidity", color: "from-stone-500 to-stone-700" },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };
const item = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } };

const goalToTopic: Record<string, string> = {
  "frontend": "Frontend",
  "front-end": "Frontend",
  "react": "Frontend",
  "backend": "Backend",
  "back-end": "Backend",
  "node": "Backend",
  "full-stack": "Frontend",
  "fullstack": "Frontend",
  "full stack": "Frontend",
  "dsa": "DSA",
  "algorithms": "DSA",
  "data structures": "DSA",
  "devops": "DevOps",
  "dev-ops": "DevOps",
  "ui/ux": "UI/UX",
  "ui": "UI/UX",
  "ux": "UI/UX",
  "design": "UI/UX",
  "data": "Data",
  "data science": "Data",
  "analytics": "Data",
  "data analysis": "Data",
  "mobile": "Mobile",
  "react native": "Mobile",
  "flutter": "Mobile",
  "android": "Mobile",
  "ios": "Mobile",
  "security": "Cybersecurity",
  "cybersecurity": "Cybersecurity",
  "cyber": "Cybersecurity",
  "ai": "AI & ML",
  "artificial intelligence": "AI & ML",
  "machine learning": "AI & ML",
  "deep learning": "AI & ML",
  "system design": "System Design",
  "architecture": "System Design",
  "microservices": "System Design",
  "cloud": "Cloud",
  "aws": "Cloud",
  "azure": "Cloud",
  "gcp": "Cloud",
  "testing": "Testing",
  "qa": "Testing",
  "quality assurance": "Testing",
  "tdd": "Testing",
  "javascript": "JavaScript",
  "js": "JavaScript",
  "typescript": "JavaScript",
  "python": "Python",
  "django": "Python",
  "flask": "Python",
  "java": "Java",
  "spring": "Java",
  "spring boot": "Java",
  "git": "Git",
  "version control": "Git",
  "linux": "Linux",
  "bash": "Linux",
  "shell": "Linux",
  "networking": "Networking",
  "network": "Networking",
  "http": "Networking",
  "tcp": "Networking",
  "databases": "Databases",
  "database": "Databases",
  "sql": "Databases",
  "nosql": "Databases",
  "design patterns": "Design Patterns",
  "patterns": "Design Patterns",
  "solid": "Design Patterns",
  "app security": "App Security",
  "application security": "App Security",
  "owasp": "App Security",
  "blockchain": "Blockchain",
  "web3": "Blockchain",
  "solidity": "Blockchain",
  "ethereum": "Blockchain",
};

function getTopicForGoal(goal: string): string | null {
  const lower = goal.toLowerCase().trim();
  for (const [key, topic] of Object.entries(goalToTopic)) {
    if (lower.includes(key)) return topic;
  }
  return null;
}

function FloatIcon({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
    >
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: delay * 0.3 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

function SparkleIcon({ className, delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: [0, 1, 0], scale: [0, 1.2, 0] }}
      transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1, delay }}
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 0C10 0 10.5 4 13 6.5C15.5 9 19.5 9.5 19.5 9.5C19.5 9.5 15.5 10 13 12.5C10.5 15 10 19 10 19C10 19 9.5 15 7 12.5C4.5 10 0.5 9.5 0.5 9.5C0.5 9.5 4.5 9 7 6.5C9.5 4 10 0 10 0Z" fill="#F2DD85" />
      </svg>
    </motion.div>
  );
}

export default function AssessmentCover() {
  const navigate = useNavigate();

  const startQuiz = (topic: string) => {
    const questions = getQuestions(topic, 1);
    const assessmentData = {
      assessmentId: `local-${Date.now()}`,
      questions,
      careerGoal: topic,
      currentLevel: 1,
      totalLevels: 10,
      allAnswers: {},
      levelScores: [],
    };
    localStorage.setItem("assessment_data", JSON.stringify(assessmentData));
    navigate({ to: "/quiz" });
  };

  const handleStart = () => {
    const existing = localStorage.getItem("assessment_data");
    if (existing) {
      navigate({ to: "/quiz" });
      return;
    }
    const careerGoal = localStorage.getItem("learnflow_career_goal") || "";
    const topic = getTopicForGoal(careerGoal) || "Frontend";
    startQuiz(topic);
  };

  return (
    <div className="min-h-screen bg-[#F8F6E8] relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ x: [0, 50, -30, 0], y: [0, -40, 20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#171C4A]/5 to-transparent blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -40, 50, 0], y: [0, 50, -30, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-40 -left-40 w-[450px] h-[450px] rounded-full bg-gradient-to-br from-[#F2DD85]/20 to-transparent blur-[120px]"
        />
      </div>

      <div className="fixed inset-0 pointer-events-none overflow-hidden z-20">
        <FloatIcon className="top-[15%] left-[8%] text-[#171C4A]/10" delay={0}>
          <Brain size={56} />
        </FloatIcon>
        <FloatIcon className="top-[20%] right-[10%] text-[#171C4A]/10" delay={0.3}>
          <Target size={48} />
        </FloatIcon>
        <FloatIcon className="bottom-[25%] left-[12%] text-[#171C4A]/10" delay={0.6}>
          <CheckCircle size={44} />
        </FloatIcon>
        <FloatIcon className="bottom-[30%] right-[8%] text-[#F2DD85]/30" delay={0.9}>
          <BarChart3 size={50} />
        </FloatIcon>
        <FloatIcon className="top-[50%] left-[4%] text-[#171C4A]/10" delay={1.2}>
          <Zap size={36} />
        </FloatIcon>
        <FloatIcon className="top-[45%] right-[5%] text-[#F2DD85]/25" delay={1.5}>
          <Trophy size={40} />
        </FloatIcon>

        <SparkleIcon className="top-[18%] left-[20%]" delay={0} />
        <SparkleIcon className="top-[12%] right-[25%]" delay={0.8} />
        <SparkleIcon className="bottom-[20%] left-[28%]" delay={1.6} />
        <SparkleIcon className="bottom-[15%] right-[20%]" delay={2.4} />
        <SparkleIcon className="top-[55%] left-[50%]" delay={3.2} />
      </div>

      <motion.div variants={container} initial="hidden" animate="show" className="relative z-10 max-w-5xl mx-auto px-6 py-12">
        <motion.button
          variants={item}
          onClick={() => navigate({ to: "/dashboard" })}
          className="flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-[#171C4A] transition mb-10"
        >
          <ChevronRight size={16} className="rotate-180" />
          Back to Dashboard
        </motion.button>

        <motion.div variants={item} className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#171C4A]/5 rounded-full px-5 py-2 text-sm font-semibold text-[#171C4A]/60 mb-6">
            <Sparkles size={16} />
            Skill Assessments
          </div>
          <h1 className="text-4xl lg:text-6xl font-black text-[#171C4A] leading-tight">
            Test Your Skills,
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#171C4A] to-[#F2DD85]">Accelerate Your Career</span>
          </h1>
          <p className="text-gray-400 text-lg mt-5 max-w-2xl mx-auto leading-relaxed">
            Challenge yourself with AI-powered assessments tailored to your career goal.
            Each quiz takes ~5 minutes and gives you a detailed score with explanations.
          </p>

          <motion.div variants={item} className="flex items-center justify-center gap-6 mt-8">
            {[
              { icon: <Brain size={20} />, label: "Pick Topic" },
              { icon: <CheckCircle size={20} />, label: "Answer Questions" },
              { icon: <BarChart3 size={20} />, label: "AI Grades" },
              { icon: <Trophy size={20} />, label: "Get Score" },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.12 }}
                className="flex flex-col items-center gap-1.5"
              >
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }}
                  className="w-10 h-10 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center text-[#171C4A]/60"
                >
                  {step.icon}
                </motion.div>
                <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">{step.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div variants={item} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-14 max-w-5xl mx-auto">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ y: -3 }}
              className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#171C4A]/5 to-[#171C4A]/10 flex items-center justify-center text-[#171C4A] mb-3">
                {b.icon}
              </div>
              <h3 className="font-bold text-[#171C4A] text-sm">{b.title}</h3>
              <p className="text-gray-400 text-xs mt-1 leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={item} className="mt-14 max-w-5xl mx-auto">
          <h2 className="text-center text-sm font-semibold text-gray-400 uppercase tracking-wider mb-5">Or pick a topic to start</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {topicCards.map((t) => (
              <motion.button
                key={t.title}
                variants={item}
                whileHover={{ y: -4, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => startQuiz(t.title)}
                className="bg-white rounded-2xl p-5 shadow-sm border-2 border-gray-100 hover:border-[#171C4A]/20 transition-all text-left"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${t.color} bg-opacity-10 flex items-center justify-center text-2xl shadow-lg`}>
                  {t.emoji}
                </div>
                <h3 className="font-bold text-[#171C4A] text-sm mt-3">{t.title}</h3>
                <p className="text-gray-400 text-xs mt-1 leading-relaxed">{t.desc}</p>
                <div className="mt-3 flex items-center gap-1.5">
                  <span className="text-[10px] font-semibold text-[#171C4A]/40">100 questions • 10 levels</span>
                  <span className="w-1 h-1 rounded-full bg-gray-300" />
                  <span className="text-[10px] font-semibold text-emerald-500">~5 min</span>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div variants={item} className="text-center mt-10">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleStart}
            className="inline-flex items-center gap-3 px-10 py-4 bg-[#171C4A] text-white rounded-2xl font-bold text-lg shadow-xl shadow-[#171C4A]/20 hover:bg-[#171C4A]/90 transition-all"
          >
            Auto-Start for My Goal
            <ArrowRight size={20} />
          </motion.button>
          <p className="text-gray-400 text-sm mt-4">Takes about 5 minutes &bull; Free &bull; AI-powered scoring</p>
        </motion.div>

        <motion.div variants={item} className="mt-16 bg-white rounded-[20px] p-6 shadow-sm border border-gray-100 max-w-3xl mx-auto">
          <div className="grid grid-cols-3 gap-6 text-center">
            {[
              { value: "50+", label: "Assessments Taken" },
              { value: "85%", label: "Avg Score" },
              { value: "4.8", label: "User Rating" },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 150, delay: 1 + i * 0.15 }}
              >
                <p className="text-2xl font-black text-[#171C4A]">{s.value}</p>
                <p className="text-xs text-gray-400 mt-1">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
