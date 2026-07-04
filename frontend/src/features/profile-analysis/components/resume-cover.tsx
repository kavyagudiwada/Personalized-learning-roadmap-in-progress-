import { useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, FileText, BarChart3, Sparkles, Target, Shield, ChevronRight, Search, CheckCircle, TrendingUp } from "lucide-react";

const benefits = [
  { icon: <FileText size={22} />, title: "AI Resume Scoring", desc: "Get a detailed score out of 100 based on content, structure, and relevance to your goal." },
  { icon: <Target size={22} />, title: "Career Fit Analysis", desc: "See how well your resume matches your target role and where to improve." },
  { icon: <BarChart3 size={22} />, title: "Skill Extraction", desc: "Automatically extract technical and soft skills with experience mapping." },
  { icon: <Sparkles size={22} />, title: "ATS Tips", desc: "Actionable advice to pass Applicant Tracking Systems and land more interviews." },
  { icon: <Shield size={22} />, title: "Strengths & Gaps", desc: "Know what stands out and what to add to make your resume competitive." },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };
const item = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } };

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

function Sparkle({ className, delay = 0 }: { className?: string; delay?: number }) {
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

function CartoonScene() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <svg
        viewBox="0 0 1200 800"
        className="w-full h-full opacity-60"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="docBg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#f5f0e0" />
          </linearGradient>
        </defs>

        {/* Clouds */}
        {[
          { x: 100, y: 80, s: 1 },
          { x: 400, y: 50, s: 0.7 },
          { x: 850, y: 90, s: 1.2 },
          { x: 1050, y: 40, s: 0.6 },
        ].map((c, i) => (
          <motion.g
            key={i}
            animate={{ x: [0, 15, 0] }}
            transition={{ duration: 8 + i * 2, repeat: Infinity, ease: "easeInOut" }}
            transform={`translate(${c.x}, ${c.y}) scale(${c.s})`}
          >
            <ellipse cx="0" cy="0" rx="60" ry="30" fill="#171C4A" opacity="0.06" />
            <ellipse cx="40" cy="-10" rx="40" ry="25" fill="#171C4A" opacity="0.05" />
            <ellipse cx="-30" cy="5" rx="35" ry="20" fill="#171C4A" opacity="0.04" />
          </motion.g>
        ))}

        {/* Mountains / hills in background */}
        <path d="M0 700 Q150 550 300 650 Q450 500 600 620 Q750 480 900 600 Q1050 520 1200 650 L1200 800 L0 800Z" fill="#171C4A" opacity="0.03" />
        <path d="M0 730 Q200 620 400 700 Q550 600 700 680 Q850 580 1000 660 Q1100 620 1200 680 L1200 800 L0 800Z" fill="#F2DD85" opacity="0.05" />

        {/* Ground */}
        <ellipse cx="600" cy="760" rx="700" ry="80" fill="#171C4A" opacity="0.04" />

        {/* Person character - left side */}
        <g transform="translate(220, 400)">
          <motion.g
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Body */}
            <rect x="-20" y="10" width="40" height="50" rx="10" fill="#171C4A" opacity="0.1" />
            {/* Head */}
            <circle cx="0" cy="-5" r="22" fill="#171C4A" opacity="0.08" />
            {/* Hair */}
            <path d="M-18,-15 Q0,-35 18,-15" fill="none" stroke="#171C4A" strokeWidth="3" opacity="0.12" />
            {/* Eyes */}
            <circle cx="-8" cy="-8" r="3" fill="#171C4A" opacity="0.15" />
            <circle cx="8" cy="-8" r="3" fill="#171C4A" opacity="0.15" />
            {/* Smile */}
            <path d="M-6,2 Q0,8 6,2" fill="none" stroke="#171C4A" strokeWidth="2" strokeLinecap="round" opacity="0.12" />
            {/* Arm holding resume up */}
            <path d="M20,20 Q45,10 55,-10" fill="none" stroke="#171C4A" strokeWidth="4" strokeLinecap="round" opacity="0.08" />
            <path d="M-20,20 Q-35,25 -40,35" fill="none" stroke="#171C4A" strokeWidth="4" strokeLinecap="round" opacity="0.08" />
            {/* Legs */}
            <rect x="-14" y="60" width="10" height="25" rx="4" fill="#171C4A" opacity="0.08" />
            <rect x="4" y="60" width="10" height="25" rx="4" fill="#171C4A" opacity="0.08" />
          </motion.g>
        </g>

        {/* Small resume in person's hand */}
        <g transform="translate(270, 380)">
          <motion.g
            animate={{ y: [0, -4, 0], rotate: [0, 3, -3, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <rect x="-25" y="-35" width="50" height="65" rx="5" fill="url(#docBg)" stroke="#171C4A" strokeWidth="2" opacity="0.15" />
            <line x1="-15" y1="-20" x2="15" y2="-20" stroke="#171C4A" strokeWidth="2" strokeLinecap="round" opacity="0.1" />
            <line x1="-15" y1="-10" x2="10" y2="-10" stroke="#171C4A" strokeWidth="2" strokeLinecap="round" opacity="0.08" />
            <line x1="-15" y1="0" x2="15" y2="0" stroke="#171C4A" strokeWidth="2" strokeLinecap="round" opacity="0.08" />
            <line x1="-15" y1="10" x2="8" y2="10" stroke="#171C4A" strokeWidth="2" strokeLinecap="round" opacity="0.08" />
            <rect x="-8" y="20" width="16" height="6" rx="3" fill="#F2DD85" opacity="0.3" />
          </motion.g>
        </g>

        {/* Person character - right side */}
        <g transform="translate(980, 420)">
          <motion.g
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Body */}
            <rect x="-18" y="10" width="36" height="45" rx="10" fill="#F2DD85" opacity="0.1" />
            {/* Head */}
            <circle cx="0" cy="-3" r="20" fill="#F2DD85" opacity="0.08" />
            {/* Hair */}
            <path d="M-16,-13 Q0,-30 16,-13" fill="#171C4A" opacity="0.1" />
            {/* Eyes */}
            <circle cx="-7" cy="-6" r="2.5" fill="#171C4A" opacity="0.15" />
            <circle cx="7" cy="-6" r="2.5" fill="#171C4A" opacity="0.15" />
            {/* Smile */}
            <path d="M-5,3 Q0,9 5,3" fill="none" stroke="#171C4A" strokeWidth="2" strokeLinecap="round" opacity="0.12" />
            {/* Arm with chart */}
            <path d="M18,18 Q35,5 45,10" fill="none" stroke="#171C4A" strokeWidth="3" strokeLinecap="round" opacity="0.08" />
            <rect x="-14" y="55" width="9" height="22" rx="3" fill="#F2DD85" opacity="0.08" />
            <rect x="5" y="55" width="9" height="22" rx="3" fill="#F2DD85" opacity="0.08" />
          </motion.g>
        </g>

        {/* Chart board held by right person */}
        <g transform="translate(1020, 400)">
          <motion.g
            animate={{ rotate: [0, 3, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <rect x="-30" y="-25" width="60" height="50" rx="6" fill="#fff" stroke="#171C4A" strokeWidth="2" opacity="0.12" />
            <rect x="-20" y="-15" width="8" height="25" rx="2" fill="#171C4A" opacity="0.08" />
            <rect x="-6" y="-8" width="8" height="18" rx="2" fill="#171C4A" opacity="0.1" />
            <rect x="8" y="-18" width="8" height="28" rx="2" fill="#F2DD85" opacity="0.2" />
          </motion.g>
        </g>

        {/* Trophy / award */}
        <g transform="translate(750, 250)">
          <motion.g
            animate={{ y: [0, -6, 0], rotate: [0, 2, -2, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <path d="M-15,-20 L-25,-35 Q-20,-40 -10,-35 L-5,-20Z" fill="#F2DD85" opacity="0.2" />
            <path d="M15,-20 L25,-35 Q20,-40 10,-35 L5,-20Z" fill="#F2DD85" opacity="0.2" />
            <rect x="-12" y="-20" width="24" height="30" rx="4" fill="#F2DD85" opacity="0.2" />
            <rect x="-8" y="10" width="16" height="4" rx="2" fill="#171C4A" opacity="0.08" />
            <rect x="-4" y="14" width="8" height="15" rx="3" fill="#171C4A" opacity="0.06" />
          </motion.g>
        </g>

        {/* Magnifying glass */}
        <g transform="translate(150, 280)">
          <motion.g
            animate={{ y: [0, -8, 0], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <circle cx="0" cy="0" r="35" fill="#fff" stroke="#171C4A" strokeWidth="4" opacity="0.12" />
            <line x1="25" y1="25" x2="50" y2="50" stroke="#171C4A" strokeWidth="5" strokeLinecap="round" opacity="0.12" />
          </motion.g>
        </g>

        {/* Stars */}
        {[
          { x: 350, y: 160, s: 1 },
          { x: 750, y: 120, s: 0.7 },
          { x: 550, y: 100, s: 1.3 },
          { x: 100, y: 150, s: 0.6 },
          { x: 950, y: 170, s: 0.8 },
        ].map((st, i) => (
          <motion.g
            key={i}
            transform={`translate(${st.x}, ${st.y}) scale(${st.s})`}
            animate={{ scale: [st.s, st.s * 1.3, st.s], rotate: [0, 20, 0] }}
            transition={{ duration: 2.5 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <polygon points="0,-12 3,-4 12,-4 5,1 7,10 0,6 -7,10 -5,1 -12,-4 -3,-4" fill="#F2DD85" opacity="0.25" />
          </motion.g>
        ))}

        {/* Sparkle dots */}
        {[
          { x: 450, y: 200, r: 5 },
          { x: 650, y: 150, r: 4 },
          { x: 300, y: 680, r: 6 },
          { x: 850, y: 700, r: 5 },
          { x: 1100, y: 300, r: 4 },
        ].map((d, i) => (
          <motion.circle
            key={i}
            cx={d.x}
            cy={d.y}
            r={d.r}
            fill="#F2DD85"
            opacity={0.2}
            animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.4, 1] }}
            transition={{ duration: 2 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}

        {/* Confetti pieces */}
        {[
          { x: 200, y: 600, r: 4, color: "#171C4A" },
          { x: 400, y: 650, r: 3, color: "#F2DD85" },
          { x: 600, y: 580, r: 5, color: "#171C4A" },
          { x: 800, y: 640, r: 3, color: "#F2DD85" },
          { x: 1000, y: 600, r: 4, color: "#171C4A" },
        ].map((p, i) => (
          <motion.rect
            key={i}
            x={p.x}
            y={p.y}
            width={p.r * 2}
            height={p.r * 2}
            rx={2}
            fill={p.color}
            opacity={0.12}
            animate={{ y: [p.y, p.y - 30, p.y], rotate: [0, 45, 0] }}
            transition={{ duration: 3 + i * 0.6, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </svg>
    </div>
  );
}

export default function ResumeCover() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F8F6E8] relative overflow-hidden">
      {/* Decorative blobs */}
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

      {/* Animated clipart icons */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-20">
        <FloatIcon className="top-[15%] left-[8%] text-[#171C4A]/10" delay={0}>
          <FileText size={56} />
        </FloatIcon>
        <FloatIcon className="top-[20%] right-[10%] text-[#171C4A]/10" delay={0.3}>
          <Search size={48} />
        </FloatIcon>
        <FloatIcon className="bottom-[25%] left-[12%] text-[#171C4A]/10" delay={0.6}>
          <CheckCircle size={44} />
        </FloatIcon>
        <FloatIcon className="bottom-[30%] right-[8%] text-[#F2DD85]/30" delay={0.9}>
          <TrendingUp size={50} />
        </FloatIcon>
        <FloatIcon className="top-[50%] left-[4%] text-[#171C4A]/10" delay={1.2}>
          <Target size={36} />
        </FloatIcon>
        <FloatIcon className="top-[45%] right-[5%] text-[#F2DD85]/25" delay={1.5}>
          <BarChart3 size={40} />
        </FloatIcon>

        <Sparkle className="top-[18%] left-[20%]" delay={0} />
        <Sparkle className="top-[12%] right-[25%]" delay={0.8} />
        <Sparkle className="bottom-[20%] left-[28%]" delay={1.6} />
        <Sparkle className="bottom-[15%] right-[20%]" delay={2.4} />
        <Sparkle className="top-[55%] left-[50%]" delay={3.2} />
      </div>

      {/* Cartoon SVG scene background */}
      <CartoonScene />

      <motion.div variants={container} initial="hidden" animate="show" className="relative z-10 max-w-5xl mx-auto px-6 py-12">

        {/* Back */}
        <motion.button
          variants={item}
          onClick={() => navigate({ to: "/dashboard" })}
          className="flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-[#171C4A] transition mb-10"
        >
          <ChevronRight size={16} className="rotate-180" />
          Back to Dashboard
        </motion.button>

        {/* Hero */}
        <motion.div variants={item} className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#171C4A]/5 rounded-full px-5 py-2 text-sm font-semibold text-[#171C4A]/60 mb-6">
            <FileText size={16} />
            Resume Analysis
          </div>
          <h1 className="text-4xl lg:text-6xl font-black text-[#171C4A] leading-tight">
            Turn Your Resume Into a
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#171C4A] to-[#F2DD85]">Career Opportunity</span>
          </h1>
          <p className="text-gray-400 text-lg mt-5 max-w-2xl mx-auto leading-relaxed">
            Upload your resume and let AI analyze it against your dream role.
            Get scored, find gaps, and receive personalized tips to stand out.
          </p>

          {/* Step indicator */}
          <motion.div variants={item} className="flex items-center justify-center gap-6 mt-8">
            {[
              { icon: <FileText size={20} />, label: "Upload PDF" },
              { icon: <Search size={20} />, label: "AI Scans" },
              { icon: <BarChart3 size={20} />, label: "Get Score" },
              { icon: <CheckCircle size={20} />, label: "Improve" },
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

        {/* Benefits */}
        <motion.div variants={item} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-14 max-w-4xl mx-auto">
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

        {/* CTA */}
        <motion.div variants={item} className="text-center mt-14">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate({ to: "/resume/analysis" })}
            className="inline-flex items-center gap-3 px-10 py-4 bg-[#171C4A] text-white rounded-2xl font-bold text-lg shadow-xl shadow-[#171C4A]/20 hover:bg-[#171C4A]/90 transition-all"
          >
            Start Resume Analysis
            <ArrowRight size={20} />
          </motion.button>
          <p className="text-gray-400 text-sm mt-4">Takes about 30 seconds &bull; Free &bull; No sign-up required for analysis</p>
        </motion.div>

        {/* Stats bar */}
        <motion.div variants={item} className="mt-16 bg-white rounded-[20px] p-6 shadow-sm border border-gray-100 max-w-3xl mx-auto">
          <div className="grid grid-cols-3 gap-6 text-center">
            {[
              { value: "10k+", label: "Resumes Analyzed" },
              { value: "92%", label: "User Satisfaction" },
              { value: "3x", label: "More Interview Calls" },
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
