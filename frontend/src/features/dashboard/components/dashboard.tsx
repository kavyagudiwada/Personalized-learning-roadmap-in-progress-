import { useNavigate } from "@tanstack/react-router";
import { useAuth } from "@/features/authentication/hooks/use-auth";
import { useResourceRecommendations, useDashboard } from "@/hooks/use-queries";
import { motion } from "framer-motion";
import DashboardNavbar from "./dashboard-navbar";

interface DashboardData {
  user: { fullName?: string; username: string; careerGoal: string; skills: string[] };
  resume: { hasResume: boolean; score: number | null; skillCount: number };
  skillGap: { goal: string; matchScore: number; coach: string; weak: string[]; roadmap: { step: string; details: string; duration: string }[] } | null;
  assessment: { latestScore: number | null };
  github: { totalRepositories: number; totalStars: number; score: number };
  stats: { resumeScore: number; githubScore: number; matchScore: number; interviewReady: number };
  currentMission: { step: string; details: string; duration: string } | null;
  roadmapPreview: { step: string; details: string; duration: string }[];
}

const container = { hidden: {}, show: { transition: { staggerChildren: 0.05 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] } } };

function GlassCard({ children, className, onClick }: { children: React.ReactNode; className?: string; onClick?: () => void }) {
  return (
    <motion.div
      variants={item}
      whileHover={onClick ? { y: -2, scale: 1.01 } : undefined}
      onClick={onClick}
      className={`bg-white/70 backdrop-blur-xl rounded-3xl shadow-lg shadow-black/[0.03] border border-white/60 ${onClick ? "cursor-pointer" : ""} ${className}`}
    >
      {children}
    </motion.div>
  );
}

function StatCard({ icon, label, value, sub, color }: { icon: string; label: string; value: string | number; sub?: string; color?: string }) {
  return (
    <GlassCard className="p-6 flex items-center gap-4">
      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${color || "from-[#171C4A]/10 to-[#171C4A]/5"} flex items-center justify-center text-xl shrink-0`}>
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{label}</p>
        <p className="text-2xl font-black text-[#171C4A] mt-0.5">{value}</p>
        {sub && <p className="text-xs text-gray-400 mt-0.5 truncate">{sub}</p>}
      </div>
    </GlassCard>
  );
}

export default function Dashboard() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { data, isLoading, error } = useDashboard();
  const dashboardData = data as DashboardData | null;
  const { data: resources } = useResourceRecommendations(dashboardData?.user.careerGoal);
  const displayName = dashboardData?.user.fullName || user?.fullName || user?.username || "there";
  const careerGoal = dashboardData?.user.careerGoal || "your target role";
  const matchScore = dashboardData?.stats.matchScore ?? 0;
  const level = Math.max(1, Math.floor(matchScore / 15));
  const resourceCount = resources?.total ?? 0;
  const completedCount = resources?.completedCount ?? 0;
  const topWeakSkills = dashboardData?.skillGap?.weak?.slice(0, 4) || [];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#F8F6E8] flex items-center justify-center">
        <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.5 }} className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-[#171C4A]" />
          <div className="w-3 h-3 rounded-full bg-[#171C4A]/60" />
          <div className="w-3 h-3 rounded-full bg-[#171C4A]/30" />
        </motion.div>
      </div>
    );
  }

  if (error || !dashboardData) {
    return (
      <div className="min-h-screen bg-[#F8F6E8] flex items-center justify-center px-6">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-white/70 backdrop-blur-xl rounded-[32px] p-10 shadow-xl text-center max-w-md border border-white/60">
          <div className="text-5xl mb-4">🫠</div>
          <p className="text-gray-500 mb-6">{error instanceof Error ? error.message : error || "Could not load dashboard."}</p>
          <button onClick={() => window.location.reload()} className="px-8 py-3 bg-[#171C4A] text-white rounded-2xl font-bold hover:bg-[#171C4A]/90 transition">
            Retry
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F6E8] relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div animate={{ x: [0, 60, -40, 0], y: [0, -50, 30, 0] }} transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }} className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#F2DD85]/20 to-transparent blur-[150px]" />
        <motion.div animate={{ x: [0, -50, 60, 0], y: [0, 50, -40, 0] }} transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }} className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#171C4A]/10 to-transparent blur-[150px]" />
        <motion.div animate={{ x: [0, 40, -30, 0], y: [0, -30, 50, 0] }} transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-[#F2DD85]/10 to-transparent blur-[120px]" />
      </div>

      <DashboardNavbar />

      <motion.div variants={container} initial="hidden" animate="show" className="relative z-10 max-w-7xl mx-auto px-6 py-6 space-y-6">

        {/* Welcome Banner */}
        <GlassCard className="p-0 relative overflow-hidden min-h-[200px]">
          {/* Main gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f1340] via-[#171C4A] to-[#1e2357]" />

          {/* Subtle grid pattern overlay */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>

          {/* Diagonal accent lines */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="0" x2="100%" y2="100%" stroke="#F2DD85" strokeWidth="1" />
            <line x1="20%" y1="0" x2="100%" y2="80%" stroke="#F2DD85" strokeWidth="0.5" />
            <line x1="0" y1="20%" x2="80%" y2="100%" stroke="#F2DD85" strokeWidth="0.5" />
          </svg>

          {/* Decorative swoosh at bottom */}
          <svg className="absolute bottom-0 left-0 w-full h-auto opacity-[0.08]" viewBox="0 0 1200 60" preserveAspectRatio="none">
            <path d="M0 60 Q300 0 600 30 Q900 60 1200 10 L1200 60 L0 60 Z" fill="#F2DD85" />
          </svg>

          {/* Blur orbs */}
          <div className="absolute -top-20 -right-20 w-[300px] h-[300px] bg-gradient-to-bl from-[#F2DD85]/15 to-transparent rounded-full blur-[80px]" />
          <div className="absolute -bottom-20 -left-20 w-[250px] h-[250px] bg-gradient-to-tr from-white/[0.06] to-transparent rounded-full blur-[80px]" />
          <motion.div
            animate={{ x: [0, 20, -15, 0], y: [0, -15, 10, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/3 right-1/4 w-32 h-32 bg-[#F2DD85]/6 rounded-full blur-[60px]"
          />

          {/* Glow line at top */}
          <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-[#F2DD85]/25 to-transparent" />

          {/* Floating particles */}
          <motion.div animate={{ y: [0, -15, 0], opacity: [0, 0.4, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 0 }} className="absolute top-1/4 left-[15%] w-1 h-1 rounded-full bg-[#F2DD85]/40" />
          <motion.div animate={{ y: [0, -12, 0], opacity: [0, 0.3, 0] }} transition={{ duration: 3.5, repeat: Infinity, delay: 1 }} className="absolute top-1/3 right-[18%] w-1 h-1 rounded-full bg-white/30" />
          <motion.div animate={{ y: [0, -18, 0], opacity: [0, 0.5, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 2 }} className="absolute bottom-1/3 left-[20%] w-1.5 h-1.5 rounded-full bg-[#F2DD85]/30" />
          <motion.div animate={{ y: [0, -14, 0], opacity: [0, 0.2, 0] }} transition={{ duration: 4.5, repeat: Infinity, delay: 0.5 }} className="absolute top-[60%] right-[25%] w-1 h-1 rounded-full bg-white/25" />

          <div className="relative flex items-center justify-between px-6 py-5">
            <div className="max-w-lg">
              <h1 className="text-xl sm:text-2xl font-black text-white leading-tight">
                Welcome back<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F2DD85] to-amber-300">, {displayName}</span>
              </h1>
              <p className="text-white/50 mt-1 text-xs sm:text-sm">
                {dashboardData?.resume.hasResume ? `Progressing toward ${careerGoal}` : `Set up your profile to start your ${careerGoal} journey`}
              </p>
              <div className="flex items-center gap-3 mt-3">
                <div>
                  <p className="text-white/40 text-[10px] uppercase tracking-wider">Level</p>
                  <p className="text-lg font-black text-white">{level}</p>
                </div>
                <div className="w-px h-7 bg-white/10" />
                <div>
                  <p className="text-white/40 text-[10px] uppercase tracking-wider">Progress</p>
                  <p className="text-lg font-black text-[#F2DD85]">{matchScore}%</p>
                </div>
                <div className="w-px h-7 bg-white/10" />
                <div>
                  <p className="text-white/40 text-[10px] uppercase tracking-wider">Goal</p>
                  <p className="text-xs font-bold text-white/80 max-w-[120px] truncate">{careerGoal}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-3">
                <button onClick={() => navigate({ to: "/skill-gap" })} className="px-4 py-2 bg-white/15 backdrop-blur-sm text-white rounded-xl font-bold text-xs hover:bg-white/25 border border-white/10 transition">
                  Skill Gap
                </button>
                <button onClick={() => { localStorage.removeItem("assessment_data"); navigate({ to: "/assessment" }); }} className="px-4 py-2 bg-gradient-to-r from-[#F2DD85] to-amber-400 text-[#171C4A] rounded-xl font-bold text-xs shadow-lg shadow-black/20 hover:shadow-xl hover:scale-[1.02] transition">
                  Assessment
                </button>
              </div>
            </div>

            {/* Animated Human Illustrations */}
            <div className="hidden md:flex items-center justify-center gap-1 shrink-0">
              <motion.svg viewBox="0 0 200 200" className="w-28 h-28 drop-shadow-xl" animate={{ y: [0, -6, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
                <defs>
                  <linearGradient id="skinGrad1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#FFDAB9" /><stop offset="100%" stopColor="#F5C59E" /></linearGradient>
                  <linearGradient id="hairGrad1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4A3728" /><stop offset="100%" stopColor="#2D1F14" /></linearGradient>
                  <linearGradient id="shirtGrad1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#171C4A" /><stop offset="100%" stopColor="#0f1340" /></linearGradient>
                </defs>
                <ellipse cx="100" cy="55" rx="38" ry="36" fill="url(#hairGrad1)" />
                <path d="M64 55 Q64 22 100 18 Q136 22 136 55" fill="url(#hairGrad1)" />
                <circle cx="100" cy="68" r="30" fill="url(#skinGrad1)" />
                <ellipse cx="87" cy="64" rx="3.5" ry="5" fill="#171C4A"><animate attributeName="ry" values="5;1;5" dur="4s" repeatCount="indefinite" /></ellipse>
                <ellipse cx="113" cy="64" rx="3.5" ry="5" fill="#171C4A"><animate attributeName="ry" values="5;1;5" dur="4s" repeatCount="indefinite" /></ellipse>
                <path d="M89 76 Q100 85 111 76" fill="none" stroke="#D4836A" strokeWidth="2" strokeLinecap="round"
                  animate={{ d: ["M89 76 Q100 85 111 76", "M89 74 Q100 88 111 74", "M89 76 Q100 85 111 76"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
                <path d="M77 98 L123 98 L127 150 L73 150 Z" fill="url(#shirtGrad1)" />
                <path d="M77 105 L60 126 L64 130" fill="none" stroke="url(#shirtGrad1)" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"
                  animate={{ rotate: [0, -6, 0] }} style={{ transformOrigin: "77px 105px" }} />
                <path d="M123 105 L140 126 L136 130" fill="none" stroke="url(#shirtGrad1)" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="64" cy="130" r="5" fill="url(#skinGrad1)" />
                <circle cx="136" cy="130" r="5" fill="url(#skinGrad1)" />
                <circle cx="100" cy="120" r="6" fill="#F2DD85" opacity="0.6" />
                <circle cx="100" cy="120" r="3" fill="#F2DD85" opacity="0.9" />
              </motion.svg>

              <motion.svg viewBox="0 0 200 200" className="w-28 h-28 drop-shadow-xl" animate={{ y: [0, 5, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}>
                <defs>
                  <linearGradient id="skinGrad2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#FDEBD0" /><stop offset="100%" stopColor="#F5CBA7" /></linearGradient>
                  <linearGradient id="hairGrad2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#171C4A" /><stop offset="100%" stopColor="#2a2f6a" /></linearGradient>
                  <linearGradient id="shirtGrad2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#F2DD85" /><stop offset="100%" stopColor="#e8c95a" /></linearGradient>
                </defs>
                <ellipse cx="100" cy="55" rx="40" ry="38" fill="url(#hairGrad2)" />
                <path d="M60 55 Q60 18 100 14 Q140 18 140 55" fill="url(#hairGrad2)" />
                <circle cx="100" cy="68" r="32" fill="url(#skinGrad2)" />
                <ellipse cx="86" cy="63" rx="4" ry="4.5" fill="#171C4A"><animate attributeName="ry" values="4.5;1;4.5" dur="5s" repeatCount="indefinite" begin="1s" /></ellipse>
                <ellipse cx="114" cy="63" rx="4" ry="4.5" fill="#171C4A"><animate attributeName="ry" values="4.5;1;4.5" dur="5s" repeatCount="indefinite" begin="1s" /></ellipse>
                <path d="M87 74 Q100 86 113 74" fill="none" stroke="#D4836A" strokeWidth="2.5" strokeLinecap="round"
                  animate={{ d: ["M87 74 Q100 86 113 74", "M87 72 Q100 90 113 72", "M87 74 Q100 86 113 74"] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }} />
                <path d="M74 98 L126 98 L132 155 L68 155 Z" fill="url(#shirtGrad2)" />
                <path d="M74 105 L50 90 L46 94" fill="none" stroke="url(#shirtGrad2)" strokeWidth="11" strokeLinecap="round" strokeLinejoin="round"
                  animate={{ rotate: [-5, 8, -5] }} style={{ transformOrigin: "74px 105px" }} />
                <path d="M126 105 L145 125 L140 130" fill="none" stroke="url(#shirtGrad2)" strokeWidth="11" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="46" cy="94" r="5" fill="url(#skinGrad2)" />
                <circle cx="140" cy="130" r="5" fill="url(#skinGrad2)" />
                <motion.circle cx="38" cy="75" r="3" fill="#F2DD85" animate={{ opacity: [0, 1, 0], scale: [0, 1.3, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }} />
              </motion.svg>
            </div>
          </div>
        </GlassCard>

        {/* Quick Stats */}
        <motion.div variants={item} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard icon="📄" label="Resume Score" value={dashboardData.resume.score ? `${dashboardData.resume.score}%` : "—"} sub={dashboardData.resume.hasResume ? `${dashboardData.resume.skillCount} skills` : "Upload resume"} color="from-blue-400/20 to-blue-500/10" />
          <StatCard icon="🐙" label="GitHub Score" value={`${dashboardData.github.score}%`} sub={`${dashboardData.github.totalRepositories} repos · ${dashboardData.github.totalStars} stars`} color="from-gray-500/20 to-gray-600/10" />
          <StatCard icon="🎯" label="Skill Match" value={`${matchScore}%`} sub={dashboardData.skillGap ? `${dashboardData.skillGap.weak.length} gaps` : "Run analysis"} color="from-emerald-400/20 to-emerald-500/10" />
          <StatCard icon="📚" label="Resources" value={resourceCount || "—"} sub={resourceCount > 0 ? `${completedCount}/${resourceCount} done` : "Generate"} color="from-amber-400/20 to-amber-500/10" />
        </motion.div>

        {/* Coach + Weak Skills */}
        <div className="grid lg:grid-cols-2 gap-6">
          <GlassCard className="p-8 relative overflow-hidden">
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-bl from-[#F2DD85]/30 to-transparent rounded-full" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#F2DD85] to-amber-400 flex items-center justify-center text-lg shadow-lg">🤖</div>
                <h2 className="text-xl font-bold text-[#171C4A]">AI Career Coach</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {dashboardData.skillGap?.coach || (
                  dashboardData.resume.hasResume
                    ? "Run a skill gap analysis to get personalized coaching based on your profile."
                    : "Upload your resume and run analysis to receive AI coaching tailored to your goals."
                )}
              </p>
            </div>
          </GlassCard>

          <GlassCard className="p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-red-400/20 to-red-500/10 flex items-center justify-center text-lg">🎯</div>
              <h2 className="text-xl font-bold text-[#171C4A]">Skills to Improve</h2>
            </div>
            {topWeakSkills.length > 0 ? (
              <>
                <div className="flex flex-wrap gap-2">
                  {topWeakSkills.map((skill) => (
                    <button
                      key={skill}
                      onClick={() => navigate({ to: "/resources" })}
                      className="px-4 py-2 bg-red-50/80 backdrop-blur-sm text-red-600 rounded-xl font-semibold text-sm hover:bg-red-100/80 border border-red-200/50 transition"
                    >
                      {skill}
                    </button>
                  ))}
                </div>
                <p className="text-xs text-gray-400 mt-3">Click a skill to find courses and tutorials</p>
              </>
            ) : (
              <p className="text-gray-500 text-sm">No skill gaps identified yet. Run an analysis to see where to improve.</p>
            )}
          </GlassCard>
        </div>

        {/* Progress Milestones */}
        <GlassCard className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#171C4A]/10 to-[#171C4A]/5 flex items-center justify-center text-lg">🏅</div>
            <h2 className="text-xl font-bold text-[#171C4A]">Progress Milestones</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { icon: "📄", label: "Resume", done: dashboardData.resume.hasResume, meta: dashboardData.resume.hasResume ? "Analyzed" : "Pending" },
              { icon: "🧠", label: "Skill Gap", done: !!dashboardData.skillGap, meta: dashboardData.skillGap ? "Complete" : "Pending" },
              { icon: "🐙", label: "GitHub", done: dashboardData.github.totalRepositories > 0, meta: dashboardData.github.totalRepositories > 0 ? `${dashboardData.github.totalRepositories} repos` : "Connect" },
              { icon: "🎯", label: "Assessment", done: dashboardData.assessment.latestScore !== null, meta: dashboardData.assessment.latestScore !== null ? `${dashboardData.assessment.latestScore}%` : "Take test" },
              { icon: "📚", label: "Resources", done: resourceCount > 0, meta: resourceCount > 0 ? `${resourceCount} items` : "Generate" },
            ].map((m) => (
              <div key={m.label} className={`relative p-5 rounded-2xl border text-center transition ${m.done ? "bg-emerald-50/80 border-emerald-200/50" : "bg-white/50 border-gray-200/50"}`}>
                {m.done && <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-emerald-400 text-white text-xs flex items-center justify-center shadow-sm">✓</div>}
                <div className="text-3xl mb-2">{m.icon}</div>
                <p className="font-bold text-sm text-[#171C4A]">{m.label}</p>
                <p className={`text-xs mt-0.5 ${m.done ? "text-emerald-600" : "text-gray-400"}`}>{m.meta}</p>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Bottom CTA */}
        <motion.div variants={item} className="text-center pb-8">
          <p className="text-xs text-gray-400">
            Complete your profile to unlock personalized recommendations
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
