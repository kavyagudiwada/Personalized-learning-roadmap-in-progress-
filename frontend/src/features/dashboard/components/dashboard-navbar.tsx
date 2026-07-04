import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { useAuth } from "@/features/authentication/hooks/use-auth";
import { motion, AnimatePresence } from "framer-motion";

export default function DashboardNavbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [showDashboardMenu, setShowDashboardMenu] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [avatarError, setAvatarError] = useState(false);
  const [showRoadmapMenu, setShowRoadmapMenu] = useState(false);
  const [showAiCoachMenu, setShowAiCoachMenu] = useState(false);

  const handleLogout = () => {
    logout();
    navigate({ to: "/" });
  };

  const displayName = user?.fullName || user?.username || "Learner";

  const navLinkClass = "text-sm font-semibold text-gray-500 hover:text-[#171C4A] transition px-3 py-1.5 rounded-xl hover:bg-[#171C4A]/5";
  const dropdownClass = "absolute top-full mt-1.5 bg-white backdrop-blur-xl rounded-2xl shadow-xl shadow-black/10 border border-gray-200/60 overflow-hidden min-w-[200px]";

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200/80 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <button onClick={() => navigate({ to: "/" })} className="text-2xl font-black text-[#171C4A] hover:opacity-80 tracking-tight">
          CareerIntel.
        </button>

        <nav className="hidden lg:flex items-center gap-1">
          <div className="relative">
            <button onClick={() => setShowDashboardMenu(!showDashboardMenu)} className={`${navLinkClass} flex items-center gap-1`}>
              Dashboard
              <motion.span animate={{ rotate: showDashboardMenu ? 180 : 0 }} transition={{ duration: 0.2 }} className="text-[10px]">▼</motion.span>
            </button>
            <AnimatePresence>
              {showDashboardMenu && (
                <motion.div initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} transition={{ duration: 0.15 }} className={dropdownClass}>
                  <button onClick={() => { navigate({ to: "/skill-gap" }); setShowDashboardMenu(false); }} className="w-full text-left px-4 py-2.5 hover:bg-gray-50 text-gray-600 font-medium text-sm transition">Skill Gap Dashboard</button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button onClick={() => navigate({ to: "/resume" })} className={navLinkClass}>Resume</button>
          <button onClick={() => navigate({ to: "/github" })} className={navLinkClass}>GitHub</button>
          <button onClick={() => navigate({ to: "/resources" })} className={navLinkClass}>Resources</button>
          <button onClick={() => navigate({ to: "/gamification" })} className={navLinkClass}>Gamification</button>

          <div className="relative">
            <button onClick={() => setShowAiCoachMenu(!showAiCoachMenu)} className={`${navLinkClass} flex items-center gap-1`}>
              AI Coach
              <motion.span animate={{ rotate: showAiCoachMenu ? 180 : 0 }} transition={{ duration: 0.2 }} className="text-[10px]">▼</motion.span>
            </button>
            <AnimatePresence>
              {showAiCoachMenu && (
                <motion.div initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} transition={{ duration: 0.15 }} className={dropdownClass}>
                  <button onClick={() => { navigate({ to: "/chatbot" }); setShowAiCoachMenu(false); }} className="w-full text-left px-4 py-2.5 hover:bg-gray-50 text-gray-600 font-medium text-sm transition">AI Coach</button>
                  <button onClick={() => { navigate({ to: "/interview-prep" }); setShowAiCoachMenu(false); }} className="w-full text-left px-4 py-2.5 hover:bg-gray-50 text-gray-600 font-medium text-sm transition">Interview Prep</button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="relative">
            <button onClick={() => setShowRoadmapMenu(!showRoadmapMenu)} className={`${navLinkClass} flex items-center gap-1`}>
              Roadmap
              <motion.span animate={{ rotate: showRoadmapMenu ? 180 : 0 }} transition={{ duration: 0.2 }} className="text-[10px]">▼</motion.span>
            </button>
            <AnimatePresence>
              {showRoadmapMenu && (
                <motion.div initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} transition={{ duration: 0.15 }} className={dropdownClass}>
                  <button onClick={() => { navigate({ to: "/roadmap" }); setShowRoadmapMenu(false); }} className="w-full text-left px-4 py-2.5 hover:bg-gray-50 text-gray-600 font-medium text-sm transition">Roadmap Generator</button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        <div className="relative">
          <button onClick={() => setShowProfileMenu(!showProfileMenu)} className="flex items-center gap-2 bg-gray-50/80 px-3 py-1.5 rounded-full hover:bg-gray-100 border border-gray-200/60 transition shadow-sm">
            <img src={avatarError || !user?.avatarUrl ? "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" : user.avatarUrl} alt="Profile" className="w-8 h-8 rounded-full object-cover" onError={() => setAvatarError(true)} />
            <div className="text-left hidden sm:block">
              <p className="font-bold text-sm text-[#171C4A]">{displayName}</p>
            </div>
          </button>
          <AnimatePresence>
            {showProfileMenu && (
              <motion.div initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} transition={{ duration: 0.15 }} className="absolute right-0 top-full mt-1.5 bg-white rounded-2xl shadow-xl shadow-black/10 border border-gray-200/60 overflow-hidden min-w-[170px]">
                <button onClick={() => { navigate({ to: "/dashboard" }); setShowProfileMenu(false); }} className="w-full text-left px-4 py-2.5 hover:bg-gray-50 text-gray-600 font-medium text-sm transition">My Dashboard</button>
                <button onClick={handleLogout} className="w-full text-left px-4 py-2.5 hover:bg-red-50 text-red-500 font-medium text-sm transition">Log Out</button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
