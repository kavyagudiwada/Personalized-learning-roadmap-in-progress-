import { useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { useAuth } from "@/features/authentication/hooks/use-auth";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header className="relative px-6 md:px-12 py-5">
      <div className="flex justify-between items-center">
        <Link to="/" className="font-black text-2xl md:text-3xl text-[#171C4A]">
          CareerIntel.
        </Link>

        <nav className="hidden md:flex gap-12 text-gray-500 font-medium">
          <span>AI Learning</span>
          <span>Progress Tracker</span>
          <span>Resume + GitHub</span>
          <span>Roadmap</span>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate({ to: isAuthenticated ? "/dashboard" : "/login" })}
            className="bg-[#F2DD85] text-[#171C4A] px-4 md:px-6 py-2.5 md:py-3 rounded-full font-semibold hover:opacity-90 transition text-sm md:text-base"
          >
            {isAuthenticated ? "Dashboard" : "Sign In"}
          </button>

          <button onClick={() => setShowMobileMenu(!showMobileMenu)} className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-xl hover:bg-gray-100 transition">
            <motion.span animate={{ rotate: showMobileMenu ? 45 : 0, y: showMobileMenu ? 6 : 0 }} className="block w-5 h-0.5 bg-[#171C4A] rounded-full" />
            <motion.span animate={{ opacity: showMobileMenu ? 0 : 1 }} className="block w-5 h-0.5 bg-[#171C4A] rounded-full" />
            <motion.span animate={{ rotate: showMobileMenu ? -45 : 0, y: showMobileMenu ? -6 : 0 }} className="block w-5 h-0.5 bg-[#171C4A] rounded-full" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {showMobileMenu && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="md:hidden overflow-hidden mt-3 bg-white rounded-2xl shadow-xl border border-gray-100">
            <div className="py-2">
              <span className="block px-6 py-3 text-gray-500 font-medium text-sm">AI Learning</span>
              <span className="block px-6 py-3 text-gray-500 font-medium text-sm">Progress Tracker</span>
              <span className="block px-6 py-3 text-gray-500 font-medium text-sm">Resume + GitHub</span>
              <span className="block px-6 py-3 text-gray-500 font-medium text-sm">Roadmap</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
