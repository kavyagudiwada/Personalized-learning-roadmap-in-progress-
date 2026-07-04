import { useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Code2, GitBranch, Star, GitFork, Users, BarChart3, ChevronRight, TrendingUp, Award } from "lucide-react";

function GitHubLogo({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 98 96" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" />
    </svg>
  );
}

const benefits = [
  { icon: <Star size={22} />, title: "Repo Star Analysis", desc: "See which repos shine and what coding patterns drive engagement across your projects." },
  { icon: <GitBranch size={22} />, title: "Language Diversity", desc: "Breakdown of your tech stack — languages, frameworks, and how they evolve over time." },
  { icon: <Code2 size={22} />, title: "Code Quality Signals", desc: "Commit frequency, PR patterns, and contribution consistency that recruiters look for." },
  { icon: <Users size={22} />, title: "Collaboration Score", desc: "How well you work in teams — forks, contributors, and community engagement metrics." },
  { icon: <TrendingUp size={22} />, title: "Growth Trends", desc: "Track your open-source momentum month over month with visual timelines." },
  { icon: <Award size={22} />, title: "Dev Score", desc: "A single number that sums up your GitHub presence — ranked against peers." },
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

function GithubCartoonScene() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <svg
        viewBox="0 0 1200 800"
        className="w-full h-full opacity-60"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Grid pattern - subtle dev background */}
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#171C4A" strokeWidth="0.5" opacity="0.04" />
          </pattern>
          <linearGradient id="codeGlow" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#171C4A" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#F2DD85" stopOpacity="0.08" />
          </linearGradient>
        </defs>

        <rect width="1200" height="800" fill="url(#grid)" />

        {/* Background glow orbs */}
        <circle cx="200" cy="200" r="250" fill="url(#codeGlow)" />
        <circle cx="1000" cy="600" r="300" fill="url(#codeGlow)" />

        {/* Floating code lines */}
        {[
          { x: 100, y: 120, w: 90, delay: 0 },
          { x: 900, y: 100, w: 120, delay: 0.5 },
          { x: 80, y: 680, w: 100, delay: 1 },
          { x: 1020, y: 700, w: 80, delay: 1.5 },
        ].map((line, i) => (
          <motion.g
            key={i}
            opacity={0.08}
            animate={{ x: [line.x, line.x + 10, line.x] }}
            transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut", delay: line.delay }}
          >
            <rect x={line.x} y={line.y} width={line.w} height="4" rx="2" fill="#171C4A" />
            <rect x={line.x} y={line.y + 10} width={line.w * 0.7} height="4" rx="2" fill="#F2DD85" />
            <rect x={line.x} y={line.y + 20} width={line.w * 0.5} height="4" rx="2" fill="#171C4A" />
          </motion.g>
        ))}

        {/* Contribution grid heatmap */}
        <g transform="translate(50, 350)">
          <motion.g
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            {Array.from({ length: 7 }).map((_, row) =>
              Array.from({ length: 12 }).map((_, col) => {
                const intensity = ((row * 7 + col * 3) % 5) / 10;
                return (
                  <rect
                    key={`${row}-${col}`}
                    x={col * 14}
                    y={row * 14}
                    width="10"
                    height="10"
                    rx="2"
                    fill={row % 2 === 0 ? "#171C4A" : "#F2DD85"}
                    opacity={0.04 + intensity}
                  />
                );
              })
            )}
          </motion.g>
        </g>

        {/* Cute Octocat-like character - left */}
        <g transform="translate(250, 420)">
          <motion.g
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Body */}
            <ellipse cx="0" cy="30" rx="35" ry="40" fill="#171C4A" opacity="0.08" />
            {/* Head - bigger */}
            <circle cx="0" cy="-10" r="32" fill="#171C4A" opacity="0.1" />
            {/* Ears */}
            <ellipse cx="-28" cy="-25" rx="10" ry="12" fill="#171C4A" opacity="0.08" />
            <ellipse cx="28" cy="-25" rx="10" ry="12" fill="#171C4A" opacity="0.08" />
            {/* Inner ears */}
            <ellipse cx="-28" cy="-25" rx="6" ry="8" fill="#171C4A" opacity="0.04" />
            <ellipse cx="28" cy="-25" rx="6" ry="8" fill="#171C4A" opacity="0.04" />
            {/* Eyes */}
            <circle cx="-10" cy="-14" r="5" fill="#171C4A" opacity="0.2" />
            <circle cx="10" cy="-14" r="5" fill="#171C4A" opacity="0.2" />
            <circle cx="-10" cy="-14" r="2" fill="#fff" opacity="0.5" />
            <circle cx="10" cy="-14" r="2" fill="#fff" opacity="0.5" />
            {/* Nose */}
            <ellipse cx="0" cy="-6" rx="4" ry="3" fill="#171C4A" opacity="0.12" />
            {/* Smile */}
            <path d="M-8,2 Q0,10 8,2" fill="none" stroke="#171C4A" strokeWidth="2" strokeLinecap="round" opacity="0.15" />
            {/* Tentacles / arms */}
            <path d="M-35,20 Q-55,10 -50,25 Q-45,35 -55,40" fill="none" stroke="#171C4A" strokeWidth="4" strokeLinecap="round" opacity="0.08" />
            <path d="M35,20 Q55,5 60,20 Q55,30 65,35" fill="none" stroke="#171C4A" strokeWidth="4" strokeLinecap="round" opacity="0.08" />
            {/* Legs */}
            <ellipse cx="-18" cy="68" rx="12" ry="6" fill="#171C4A" opacity="0.08" />
            <ellipse cx="18" cy="68" rx="12" ry="6" fill="#171C4A" opacity="0.08" />
          </motion.g>
        </g>

        {/* Speech bubble from octocat */}
        <g transform="translate(160, 300)">
          <motion.g
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <rect x="-40" y="-20" width="110" height="40" rx="12" fill="#fff" stroke="#171C4A" strokeWidth="2" opacity="0.12" />
            <polygon points="30,20 25,35 40,20" fill="#fff" stroke="#171C4A" strokeWidth="2" opacity="0.12" />
            <text x="15" y="2" fontSize="11" fill="#171C4A" opacity="0.2" textAnchor="middle" fontFamily="monospace">let&apos;s go!</text>
          </motion.g>
        </g>

        {/* Coder character - right side */}
        <g transform="translate(920, 430)">
          <motion.g
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Body */}
            <rect x="-22" y="10" width="44" height="50" rx="10" fill="#F2DD85" opacity="0.08" />
            {/* Head */}
            <circle cx="0" cy="-5" r="24" fill="#F2DD85" opacity="0.07" />
            {/* Glasses */}
            <circle cx="-10" cy="-8" r="9" fill="none" stroke="#171C4A" strokeWidth="2" opacity="0.1" />
            <circle cx="10" cy="-8" r="9" fill="none" stroke="#171C4A" strokeWidth="2" opacity="0.1" />
            <line x1="-1" y1="-8" x2="1" y2="-8" stroke="#171C4A" strokeWidth="2" opacity="0.1" />
            {/* Eyes behind glasses */}
            <circle cx="-10" cy="-8" r="2.5" fill="#171C4A" opacity="0.15" />
            <circle cx="10" cy="-8" r="2.5" fill="#171C4A" opacity="0.15" />
            {/* Smile */}
            <path d="M-4,5 Q0,10 4,5" fill="none" stroke="#171C4A" strokeWidth="2" strokeLinecap="round" opacity="0.12" />
            {/* Hair */}
            <path d="M-20,-18 Q-10,-40 10,-38 Q25,-36 22,-20" fill="none" stroke="#171C4A" strokeWidth="3" opacity="0.1" />
            {/* Arm typing */}
            <path d="M22,20 Q45,15 55,25" fill="none" stroke="#171C4A" strokeWidth="3" strokeLinecap="round" opacity="0.08" />
            {/* Legs */}
            <rect x="-16" y="60" width="10" height="22" rx="3" fill="#F2DD85" opacity="0.08" />
            <rect x="6" y="60" width="10" height="22" rx="3" fill="#F2DD85" opacity="0.08" />
          </motion.g>
        </g>

        {/* Laptop screen near coder */}
        <g transform="translate(980, 400)">
          <motion.g
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <rect x="-25" y="-20" width="50" height="35" rx="4" fill="#fff" stroke="#171C4A" strokeWidth="1.5" opacity="0.1" />
            <rect x="-20" y="-15" width="40" height="22" rx="2" fill="#171C4A" opacity="0.04" />
            {/* Code lines on screen */}
            <rect x="-16" y="-11" width="30" height="2" rx="1" fill="#F2DD85" opacity="0.12" />
            <rect x="-16" y="-6" width="22" height="2" rx="1" fill="#171C4A" opacity="0.06" />
            <rect x="-16" y="-1" width="26" height="2" rx="1" fill="#171C4A" opacity="0.06" />
            <rect x="-16" y="4" width="15" height="2" rx="1" fill="#F2DD85" opacity="0.08" />
            {/* Base */}
            <rect x="-30" y="15" width="60" height="4" rx="2" fill="#171C4A" opacity="0.06" />
          </motion.g>
        </g>

        {/* Floating GitHub-style contribution stats */}
        <g transform="translate(700, 250)">
          <motion.g
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <rect x="-45" y="-25" width="90" height="55" rx="10" fill="#fff" stroke="#171C4A" strokeWidth="1.5" opacity="0.1" />
            <text x="0" y="-5" fontSize="18" fontWeight="bold" fill="#171C4A" opacity="0.15" textAnchor="middle" fontFamily="monospace">2,847</text>
            <text x="0" y="10" fontSize="8" fill="#171C4A" opacity="0.1" textAnchor="middle" fontFamily="sans-serif">contributions</text>
            <rect x="-30" y="18" width="20" height="4" rx="2" fill="#171C4A" opacity="0.06" />
            <rect x="-5" y="18" width="20" height="4" rx="2" fill="#F2DD85" opacity="0.08" />
          </motion.g>
        </g>

        {/* Floating PR/git icons */}
        <g transform="translate(550, 150)">
          <motion.g
            animate={{ rotate: [0, 5, -5, 0], y: [0, -4, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <circle cx="0" cy="0" r="20" fill="#fff" stroke="#171C4A" strokeWidth="2" opacity="0.1" />
            <path d="M-8,-5 L0,-12 L8,-5" fill="none" stroke="#171C4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.12" />
            <path d="M0,-12 L0,8" fill="none" stroke="#171C4A" strokeWidth="2" opacity="0.12" />
            <circle cx="0" cy="8" r="3" fill="#171C4A" opacity="0.1" />
          </motion.g>
        </g>

        {/* Floating git merge icon */}
        <g transform="translate(680, 550)">
          <motion.g
            animate={{ rotate: [0, -3, 3, 0], y: [0, -3, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <circle cx="0" cy="0" r="18" fill="#fff" stroke="#171C4A" strokeWidth="2" opacity="0.08" />
            <circle cx="-6" cy="-5" r="3" fill="#171C4A" opacity="0.1" />
            <circle cx="6" cy="-5" r="3" fill="#171C4A" opacity="0.1" />
            <path d="M-6,-5 L0,5 L6,-5" fill="none" stroke="#171C4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.1" />
          </motion.g>
        </g>

        {/* Star burst */}
        {[
          { x: 400, y: 180, s: 0.8 },
          { x: 800, y: 160, s: 1 },
          { x: 500, y: 700, s: 0.6 },
          { x: 150, y: 600, s: 0.9 },
          { x: 1050, y: 200, s: 0.7 },
        ].map((st, i) => (
          <motion.g
            key={i}
            transform={`translate(${st.x}, ${st.y}) scale(${st.s})`}
            animate={{ scale: [st.s, st.s * 1.4, st.s], rotate: [0, 15, 0] }}
            transition={{ duration: 2.5 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <polygon points="0,-12 3,-4 12,-4 5,1 7,10 0,6 -7,10 -5,1 -12,-4 -3,-4" fill="#F2DD85" opacity="0.2" />
          </motion.g>
        ))}

        {/* Confetti squares */}
        {[
          { x: 300, y: 650, color: "#171C4A" },
          { x: 600, y: 600, color: "#F2DD85" },
          { x: 850, y: 680, color: "#171C4A" },
          { x: 450, y: 720, color: "#F2DD85" },
          { x: 750, y: 630, color: "#171C4A" },
        ].map((p, i) => (
          <motion.rect
            key={i}
            x={p.x}
            y={p.y}
            width="8"
            height="8"
            rx="2"
            fill={p.color}
            opacity={0.1}
            animate={{ y: [p.y, p.y - 25, p.y], rotate: [0, 50, 0] }}
            transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </svg>
    </div>
  );
}

export default function GithubCover() {
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

      {/* Floating icons */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-20">
        <FloatIcon className="top-[15%] left-[8%] text-[#171C4A]/10" delay={0}>
          <GitHubLogo size={48} />
        </FloatIcon>
        <FloatIcon className="top-[22%] right-[10%] text-[#171C4A]/10" delay={0.3}>
          <GitBranch size={44} />
        </FloatIcon>
        <FloatIcon className="bottom-[28%] left-[12%] text-[#171C4A]/10" delay={0.6}>
          <Star size={40} />
        </FloatIcon>
        <FloatIcon className="bottom-[32%] right-[8%] text-[#F2DD85]/25" delay={0.9}>
          <GitFork size={46} />
        </FloatIcon>
        <FloatIcon className="top-[48%] left-[4%] text-[#171C4A]/10" delay={1.2}>
          <BarChart3 size={36} />
        </FloatIcon>
        <FloatIcon className="top-[52%] right-[5%] text-[#F2DD85]/25" delay={1.5}>
          <Award size={38} />
        </FloatIcon>

        <Sparkle className="top-[18%] left-[22%]" delay={0} />
        <Sparkle className="top-[10%] right-[28%]" delay={0.8} />
        <Sparkle className="bottom-[18%] left-[30%]" delay={1.6} />
        <Sparkle className="bottom-[12%] right-[22%]" delay={2.4} />
        <Sparkle className="top-[55%] left-[48%]" delay={3.2} />
      </div>

      {/* Cartoon scene background */}
      <GithubCartoonScene />

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
            <GitHubLogo size={16} />
            GitHub Profile Analysis
          </div>
          <h1 className="text-4xl lg:text-6xl font-black text-[#171C4A] leading-tight">
            Your GitHub Profile
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#171C4A] to-[#F2DD85]">Under the Microscope</span>
          </h1>
          <p className="text-gray-400 text-lg mt-5 max-w-2xl mx-auto leading-relaxed">
            Connect your GitHub and get an AI-powered breakdown of your coding persona.
            See your strengths, spot growth areas, and unlock your dev potential.
          </p>

          {/* Step indicator */}
          <motion.div variants={item} className="flex items-center justify-center gap-6 mt-8">
            {[
              { icon: <GitHubLogo size={20} />, label: "Connect" },
              { icon: <GitBranch size={20} />, label: "Fetch Repos" },
              { icon: <BarChart3 size={20} />, label: "Analyze" },
              { icon: <Award size={20} />, label: "Get Score" },
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
            onClick={() => navigate({ to: "/github/analysis" })}
            className="inline-flex items-center gap-3 px-10 py-4 bg-[#171C4A] text-white rounded-2xl font-bold text-lg shadow-xl shadow-[#171C4A]/20 hover:bg-[#171C4A]/90 transition-all"
          >
            Analyze My GitHub
            <ArrowRight size={20} />
          </motion.button>
          <p className="text-gray-400 text-sm mt-4">Free &bull; Takes 30 seconds &bull; No sign-up required</p>
        </motion.div>

        {/* Stats bar */}
        <motion.div variants={item} className="mt-16 bg-white rounded-[20px] p-6 shadow-sm border border-gray-100 max-w-3xl mx-auto">
          <div className="grid grid-cols-3 gap-6 text-center">
            {[
              { value: "5M+", label: "Repos Analyzed" },
              { value: "94%", label: "Dev Satisfaction" },
              { value: "2.5x", label: "Profile Views" },
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
