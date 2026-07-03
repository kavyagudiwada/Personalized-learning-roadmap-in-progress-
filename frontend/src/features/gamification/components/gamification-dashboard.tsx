import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "@tanstack/react-router";
import DashboardNavbar from "@/features/dashboard/components/dashboard-navbar";
import { useAuth } from "@/features/authentication/hooks/use-auth";
import CodingHeatmap from "./coding-heatmap";

interface Quest {
  id: number;
  title: string;
  desc: string;
  xp: number;
  icon: string;
  total: number;
  progress: number;
  completed: boolean;
  link: string;
  actionLabel: string;
}

interface WeeklyQuest {
  id: number;
  title: string;
  desc: string;
  xp: number;
  icon: string;
  total: number;
  progress: number;
  completed: boolean;
}

interface LevelInfo {
  level: number;
  title: string;
  minXp: number;
  maxXp: number;
  icon: string;
  color: string;
  perk: string;
}

interface TopicBadge {
  topic: string;
  icon: string;
  level: string;
  xp: number;
  color: string;
  mastery: number;
  modules: { name: string; completed: boolean; desc: string }[];
  relatedSkills: string[];
}

interface BadgeDef {
  id: number; name: string; icon: string; color: string; desc: string; xp: number;
  condition: (level: number, streak: number, coachVisits: number, resourceVisits: number, dailyCompletions: number) => boolean;
}
const badgeDefs: BadgeDef[] = [
  { id: 1, name: "Resume Pro", icon: "🏅", color: "from-yellow-300 to-amber-500", desc: "Uploaded & analyzed resume", xp: 100, condition: () => true },
  { id: 2, name: "Skill Seeker", icon: "🔍", color: "from-blue-300 to-blue-500", desc: "Completed skill gap analysis", xp: 150, condition: () => true },
  { id: 3, name: "Git Guru", icon: "🐙", color: "from-gray-300 to-gray-600", desc: "Connected GitHub profile", xp: 120, condition: () => true },
  { id: 4, name: "Coach Call", icon: "🎙️", color: "from-green-300 to-emerald-500", desc: "5 chats with AI coach", xp: 200, condition: (_l, _s, coach) => coach >= 5 },
  { id: 5, name: "Resource Raider", icon: "📚", color: "from-purple-300 to-purple-600", desc: "Completed 10 resources", xp: 250, condition: (_l, _s, _c, res) => res >= 10 },
  { id: 6, name: "Quiz Master", icon: "🧠", color: "from-red-300 to-rose-500", desc: "Passed 3 assessments", xp: 180, condition: (l) => l >= 3 },
  { id: 7, name: "Roadmapper", icon: "🗺️", color: "from-teal-300 to-teal-500", desc: "Generated a learning roadmap", xp: 220, condition: (_l, _s, _c, _r, daily) => daily >= 4 },
  { id: 8, name: "Streak Star", icon: "🔥", color: "from-orange-300 to-red-500", desc: "7-day learning streak", xp: 300, condition: (_l, s) => s >= 7 },
  { id: 9, name: "Code Commander", icon: "⚡", color: "from-cyan-300 to-blue-600", desc: "50 GitHub contributions", xp: 350, condition: (l) => l >= 5 },
  { id: 10, name: "Interview Ace", icon: "🎯", color: "from-pink-300 to-fuchsia-500", desc: "80%+ on mock interview", xp: 280, condition: (l) => l >= 6 },
  { id: 11, name: "Topic Titan", icon: "💎", color: "from-indigo-300 to-indigo-600", desc: "Mastered 5 skill topics", xp: 400, condition: (l) => l >= 8 },
  { id: 12, name: "Legend Learner", icon: "👑", color: "from-yellow-400 to-orange-500", desc: "Reached Level 10", xp: 500, condition: (l) => l >= 10 },
];

const leaderboardData = [
  { rank: 1, name: "Alex Rivera", xp: 4850, avatar: "🚀", level: 12, badge: "Legend" },
  { rank: 2, name: "Sam Chen", xp: 4200, avatar: "🌟", level: 10, badge: "Champion" },
  { rank: 3, name: "Jordan Lee", xp: 3890, avatar: "💫", level: 9, badge: "Star" },
  { rank: 4, name: "Taylor Kim", xp: 3450, avatar: "✨", level: 8, badge: "Rising" },
  { rank: 5, name: "Morgan Wu", xp: 3100, avatar: "⭐", level: 7, badge: "Rising" },
  { rank: 6, name: "Casey Park", xp: 2800, avatar: "🌈", level: 6, badge: "Learner" },
  { rank: 7, name: "Riley Singh", xp: 2400, avatar: "🎯", level: 5, badge: "Learner" },
  { rank: 8, name: "Avery Jones", xp: 2000, avatar: "🔥", level: 4, badge: "Beginner" },
];

const quoteRotation = [
  "Small steps lead to big achievements! 🚀",
  "Every badge tells your learning story! 📖",
  "Level up your skills, level up your life! 💪",
  "Consistency beats intensity! 🔥",
  "The expert in anything was once a beginner! 🌱",
];

const levelDefinitions: LevelInfo[] = [
  { level: 1, title: "Novice", minXp: 0, maxXp: 500, icon: "🌱", color: "from-gray-400 to-gray-500", perk: "Unlock daily quests" },
  { level: 2, title: "Apprentice", minXp: 500, maxXp: 1200, icon: "📚", color: "from-green-400 to-green-600", perk: "Resource access expanded" },
  { level: 3, title: "Scholar", minXp: 1200, maxXp: 2200, icon: "📖", color: "from-teal-400 to-teal-600", perk: "AI Coach priority" },
  { level: 4, title: "Practitioner", minXp: 2200, maxXp: 3500, icon: "🔧", color: "from-blue-400 to-blue-600", perk: "Skill gap insights" },
  { level: 5, title: "Enthusiast", minXp: 3500, maxXp: 5100, icon: "🌟", color: "from-indigo-400 to-indigo-600", perk: "Weekly challenges unlocked" },
  { level: 6, title: "Strategist", minXp: 5100, maxXp: 7000, icon: "🧠", color: "from-purple-400 to-purple-600", perk: "Learning path customization" },
  { level: 7, title: "Specialist", minXp: 7000, maxXp: 9200, icon: "🎯", color: "from-pink-400 to-pink-600", perk: "Advanced resource filters" },
  { level: 8, title: "Expert", minXp: 9200, maxXp: 11700, icon: "💡", color: "from-rose-400 to-rose-600", perk: "Mentor matching" },
  { level: 9, title: "Master", minXp: 11700, maxXp: 14500, icon: "👑", color: "from-amber-400 to-amber-600", perk: "Priority support" },
  { level: 10, title: "Grandmaster", minXp: 14500, maxXp: 18000, icon: "🏆", color: "from-yellow-400 to-orange-500", perk: "Beta features access" },
  { level: 11, title: "Sage", minXp: 18000, maxXp: 22000, icon: "🔮", color: "from-violet-400 to-violet-600", perk: "Custom challenges" },
  { level: 12, title: "Legend", minXp: 22000, maxXp: 27000, icon: "💎", color: "from-cyan-400 to-cyan-600", perk: "All features unlocked" },
  { level: 13, title: "Titan", minXp: 27000, maxXp: 33000, icon: "⚡", color: "from-blue-500 to-indigo-700", perk: "Exclusive content" },
  { level: 14, title: "Immortal", minXp: 33000, maxXp: 40000, icon: "🌌", color: "from-fuchsia-500 to-purple-700", perk: "Hall of Fame" },
  { level: 15, title: "Godlike", minXp: 40000, maxXp: Infinity, icon: "✨", color: "from-yellow-300 to-red-600", perk: "Ultimate mastery" },
];

function getLevelInfo(xp: number): LevelInfo {
  for (let i = levelDefinitions.length - 1; i >= 0; i--) {
    if (xp >= levelDefinitions[i].minXp) return levelDefinitions[i];
  }
  return levelDefinitions[0];
}

function getLevelProgress(xp: number): { current: number; max: number; percent: number } {
  const info = getLevelInfo(xp);
  if (info.maxXp === Infinity) return { current: xp, max: xp, percent: 100 };
  const current = xp - info.minXp;
  const max = info.maxXp - info.minXp;
  return { current, max, percent: Math.min((current / max) * 100, 100) };
}

function getNextLevelInfo(xp: number): LevelInfo | null {
  const current = getLevelInfo(xp);
  const idx = levelDefinitions.findIndex((l) => l.level === current.level);
  return idx < levelDefinitions.length - 1 ? levelDefinitions[idx + 1] : null;
}

function getWeekId(): string {
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 1);
  const diff = now.getTime() - startOfYear.getTime();
  const week = Math.ceil((diff / 86400000 + startOfYear.getDay() + 1) / 7);
  return `${now.getFullYear()}-W${String(week).padStart(2, "0")}`;
}

function userKey(userId: string, suffix: string) {
  return `gamification_${userId}_${suffix}`;
}

function loadQuestProgress(userId: string): Quest[] {
  try {
    const saved = localStorage.getItem(userKey(userId, "quests"));
    if (saved) {
      const parsed = JSON.parse(saved);
      const today = new Date().toDateString();
      if (parsed.date === today) return parsed.quests;
    }
  } catch {}
  return [
    { id: 1, title: "Review a Resource", desc: "Read one learning resource", xp: 50, icon: "📖", total: 1, progress: 0, completed: false, link: "/resources", actionLabel: "Go to Resources" },
    { id: 2, title: "Chat with AI Coach", desc: "Ask 3 career questions", xp: 75, icon: "💬", total: 3, progress: 0, completed: false, link: "/chatbot", actionLabel: "Open AI Coach" },
    { id: 3, title: "Skill Practice", desc: "Practice 2 weak skills", xp: 100, icon: "🎯", total: 2, progress: 0, completed: false, link: "/skill-gap", actionLabel: "View Skill Gaps" },
    { id: 4, title: "Streak Saver", desc: "Log in and complete 1 task", xp: 30, icon: "🔥", total: 1, progress: 0, completed: false, link: "/dashboard", actionLabel: "Visit Dashboard" },
  ];
}

function saveQuestProgress(quests: Quest[], userId: string) {
  localStorage.setItem(userKey(userId, "quests"), JSON.stringify({ date: new Date().toDateString(), quests }));
}

function loadWeeklyQuests(userId: string): WeeklyQuest[] {
  try {
    const saved = localStorage.getItem(userKey(userId, "weekly"));
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.week === getWeekId()) return parsed.quests;
    }
  } catch {}
  return [
    { id: 1, title: "Weekly Resource Binge", desc: "Complete 10 resources this week", xp: 300, icon: "📚", total: 10, progress: 0, completed: false },
    { id: 2, title: "Skill Builder", desc: "Visit 3 different feature pages", xp: 250, icon: "🏗️", total: 3, progress: 0, completed: false },
    { id: 3, title: "AI Coach Pro", desc: "Chat with AI Coach 5 times", xp: 350, icon: "🤖", total: 5, progress: 0, completed: false },
    { id: 4, title: "Perfect Week", desc: "Complete all daily quests 4 days this week", xp: 500, icon: "💎", total: 4, progress: 0, completed: false },
    { id: 5, title: "Exploration", desc: "Visit the gamification hub every day this week", xp: 200, icon: "🗺️", total: 7, progress: 0, completed: false },
  ];
}

function saveWeeklyQuests(quests: WeeklyQuest[], userId: string) {
  localStorage.setItem(userKey(userId, "weekly"), JSON.stringify({ week: getWeekId(), quests }));
}

function getRankEmoji(rank: number) {
  if (rank === 1) return "🥇";
  if (rank === 2) return "🥈";
  if (rank === 3) return "🥉";
  return `#${rank}`;
}

function TopicLogo({ topic, size = 40 }: { topic: string; size?: number }) {
  const s = size;
  switch (topic) {
    case "React":
      return (
        <svg width={s} height={s} viewBox="-11.5 -10.232 23 20.463" fill="#61DAFB">
          <circle r="2.05" /><ellipse rx="11" ry="4.2" /><ellipse rx="11" ry="4.2" transform="rotate(60)" /><ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </svg>
      );
    case "TypeScript":
      return (
        <svg width={s} height={s} viewBox="0 0 400 400" fill="none">
          <rect width="400" height="400" rx="40" fill="#3178C6" />
          <path d="M330 209.5v-29H179v29h55.5v121h30v-121H330zM107 180.5v29h47.5v121h30v-121H233v-29H107z" fill="#fff" />
        </svg>
      );
    case "Node.js":
      return (
        <svg width={s} height={s} viewBox="0 0 128 128" fill="#83CD29">
          <path d="M64.1 2.7a8.4 8.4 0 0 0-4.2 1.2L13 30.7a8.3 8.3 0 0 0-4.2 7.2v52.3c0 3 1.5 5.6 4.2 7.2l46.9 26.8a8.3 8.3 0 0 0 8.4 0l46.9-26.8a8.3 8.3 0 0 0 4.2-7.2V37.9a8.3 8.3 0 0 0-4.2-7.2L68.3 3.9a8.4 8.4 0 0 0-4.2-1.2z" />
          <path d="M82.1 80.5c-2.5 0-4-.6-6-1.5l-1.4-.8c-.9-.5-1.6-.2-1.6 1v2.8c0 1.2-.4 2-1.8 3-2.6 1.6-5.8 2.5-9.2 2.5a18.2 18.2 0 0 1 0-36.4 18 18 0 0 1 9.3 2.6c1.4.9 1.7 1.6 1.7 3v24c0 .4.3.7.7.5l.3-.2c1.6-1 2.4-2.3 2.4-4.4v-12c0-1.6.8-2.2 2-2.2h4c1.3 0 2 .6 2 2.2v12c0 4.4-2.3 8.4-6 10.6l-.3.2-1.1.6c-1.5.9-2.9 1.3-4.4 1.3z" fill="#fff" />
        </svg>
      );
    case "Python":
      return (
        <svg width={s} height={s} viewBox="0 0 128 128" fill="none">
          <path d="M63.4 2c-16.5 0-28 3.6-28 12v8.9h28v2.7H24.6C15.6 25.6 7 33 7 50.6c0 16.6 6 20 15.6 20h10.2v-9.6c0-10 8.6-18.9 18.6-18.9h27.7c8.3 0 14.9-6.8 14.9-15V14c0-8.6-6.9-12-30.6-12zM49.5 9.4c1.6 0 3.1 1.4 3.1 3.1s-1.5 3.1-3.1 3.1a3.1 3.1 0 0 1-3.1-3.1c0-1.7 1.4-3.1 3.1-3.1z" fill="#366A9F" />
          <path d="M94.2 29.2v9.1c0 10.4-8.8 19.4-18.8 19.4H47.7c-8.2 0-14.9 7-14.9 15.2V84c0 8.6 6.6 13.1 20.8 15.4 17 2.8 27.8.7 27.8-10.8v-8.9H63.4v-2.7h37.6c9 0 16-5.7 16-20.2 0-16.5-2.3-27.6-15-27.6zM80.5 99.2c1.6 0 3.1 1.5 3.1 3.1 0 1.7-1.5 3.1-3.1 3.1a3.1 3.1 0 0 1-3.1-3.1c0-1.6 1.4-3.1 3.1-3.1z" fill="#FFD43B" />
        </svg>
      );
    case "CSS":
      return (
        <svg width={s} height={s} viewBox="0 0 128 128" fill="none">
          <path d="M19.7 4.6L26 109.3 64 124l38-14.8 6.3-104.6H19.7z" fill="#1572B6" />
          <path d="M108 18.8H64v92.9l30.5-11.9L101 18.8z" fill="#33A9DC" />
          <path d="M82.5 49.4l1.2 15-1.2 12.5-13 3.5-13-3.5-.7-9.5h12.9l.3 3.8 5.2 1.5 5.2-1.5.5-6.5H54.8l-1.1-11.5 16.8-4.8 5.2-1.5H54.8l-1.1-11h36.4l-1.1 11.5-14.4 4.1z" fill="#fff" />
        </svg>
      );
    case "SQL":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="#336791" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5v4c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          <path d="M3 9v4c0 1.66 4 3 9 3s9-1.34 9-3V9" /><path d="M3 13v4c0 1.66 4 3 9 3s9-1.34 9-3v-4" />
        </svg>
      );
    case "Git":
      return (
        <svg width={s} height={s} viewBox="0 0 128 128" fill="#F34F29">
          <path d="M124.7 58.7L69.3 3.3c-4-4-10.4-4-14.3 0L41.4 17l18 18c4.2-1.4 9-.5 12.3 2.8 3.4 3.4 4.3 8.3 2.8 12.5l17.4 17.4c4.2-1.4 9-.5 12.4 2.8 4.7 4.7 4.7 12.3 0 17s-12.3 4.7-17 0c-3.4-3.4-4.3-8.3-2.8-12.5l-17.4-17.4v45.8c1.1.6 2.1 1.3 3 2.2 4.7 4.7 4.7 12.3 0 17s-12.3 4.7-17 0-4.7-12.3 0-17c1.3-1.3 2.8-2.2 4.5-2.8V48.1c-1.7-.6-3.2-1.5-4.5-2.8-3.4-3.4-4.3-8.3-2.8-12.5L44.5 14.3 3.3 55.5c-4 4-4 10.5 0 14.5l55.4 55.4c4 4 10.4 4 14.3 0l51.7-51.7c4-4 4-10.5 0-14.5z" />
        </svg>
      );
    case "Docker":
      return (
        <svg width={s} height={s} viewBox="0 0 128 128" fill="#099CEC">
          <path d="M115.9 58.6c-2.5-1.9-8.9-2.8-13.5-1.4-1-6.6-4.8-11.3-8.3-15.4l-3.4-3.1-3.6 3.5c-3.7 3.6-6.8 9.8-7.7 15.6-.4 2.6-.3 5.6.5 8.5-.4.1-.8.3-1.2.5l-2.4.9c-3.2 1.2-5.8 2.7-8.1 4.6H19.7c-1.3 0-2.4 1-2.5 2.3-.2 2.8-.2 8.2.6 12 .6 2.8 1.5 5.7 2.8 8.5 0 .1 0 .2.1.3 2.5 5.5 6.7 10.5 11.6 14 5.8 4.1 13.1 6.6 21.2 7.4 2.2.2 4.4.3 6.7.3 4.2 0 8.5-.3 12.7-1.3 2.5-.6 5.1-1.4 7.6-2.5 4.4-2 8.3-4.9 11.5-8.7 1.3-1.6 2.5-3.4 3.5-5.4h1c5.4 0 10.2-1.5 13.9-4.4 3.5-2.7 5.5-6.4 6.2-10.6.6-3.1 0-5.8-1.9-8.1zm-17.2 6.3c-1.5 1.8-3.1 2.9-4.9 3.6-2.9-3.8-6.8-6.4-11.4-8l-.8-.3c.7-2.1.8-4.3.5-6.5.8-4.5 3.1-9.5 5.8-12.5 2.7 2.9 4.9 6.4 5.9 10.5.4 1.7.6 3.3.4 4.7.9-1.2 2-2.2 3.4-2.7 1.2-.5 2.5-.7 3.5-.5 1.4.2 2.7 1 3.5 2.2.1.1.2.2.2.4.5.9 1 1.8 1.6 2.6-1.4 1.5-3.1 3.2-4.7 5.2-.2.3-.4.6-.5.8z" />
        </svg>
      );
    case "MongoDB":
      return (
        <svg width={s} height={s} viewBox="0 0 128 128" fill="#47A248">
          <path d="M86.4 64.2C83.4 40.2 69 22.7 62.5 13.3 59.6 9 56.2 3 55.5.8c-.2-.5-.4-.8-.7-.8s-.5.3-.7.8c-.7 2.2-4.1 8.2-7 12.5-6.5 9.4-20.9 26.9-23.9 50.9-2.9 23.1 6.9 43.4 12.9 52.6l.4.6c1.5 2 3.2 3.7 5 5.1l.1.1c3.3 2.7 6.7 4.3 8.7 5.1.5.2.9.4 1.2.4s.7-.2 1.2-.4c2-.8 5.4-2.4 8.7-5.1l.1-.1c1.8-1.4 3.5-3.1 5-5.1l.4-.6c6-9.2 15.8-29.5 12.9-52.6z" />
        </svg>
      );
    case "Next.js":
      return (
        <svg width={s} height={s} viewBox="0 0 128 128" fill="none">
          <circle cx="64" cy="64" r="64" fill="black" />
          <path d="M83.3 99H71.9L44.7 52.5V99H33.8V29h11.4l27.4 46.9V29H83.3v70zM106 99h-9.2V29H106v70z" fill="white" fillOpacity=".8" />
        </svg>
      );
    case "Tailwind CSS":
      return (
        <svg width={s} height={s} viewBox="0 0 128 128" fill="none">
          <path d="M64.5 22C44.8 22 33.5 31.5 30 50.5c5.3-9.5 11.5-13 18.5-10.5 4 1.4 6.9 5.5 10 8.7 5.2 5.2 11.1 11.2 24.1 11.2 19.7 0 31-9.5 34.5-28.5-5.3 9.5-11.5 13-18.5 10.5-4-1.4-6.9-5.5-10-8.7C78.4 27 72.5 22 64.5 22zM30 62C10.3 62-1 71.5-4.5 90.5c5.3-9.5 11.5-13 18.5-10.5 4 1.4 6.9 5.5 10 8.7 5.2 5.2 11.1 11.2 24.1 11.2 19.7 0 31-9.5 34.5-28.5-5.3 9.5-11.5 13-18.5 10.5-4-1.4-6.9-5.5-10-8.7C44.4 67 38.5 62 30 62z" fill="#38BDF8" />
        </svg>
      );
    case "Angular":
      return (
        <svg width={s} height={s} viewBox="0 0 128 128" fill="#DD0031">
          <path d="M64 4L3.7 22.5l9.1 79.5L64 124l51.2-22 9.1-79.5L64 4zM94 101l-15.4-5.3-7.6-18.8h-14l-7.6 18.8L34 101l30-84.5L94 101zM72 64.3L64 44.3l-8 20h16z" />
        </svg>
      );
    default:
      return <span className="text-2xl">📚</span>;
  }
}

const topicBadges: TopicBadge[] = [
  {
    topic: "React", icon: "⚛️", level: "Advanced", xp: 750, color: "from-sky-300 to-blue-500", mastery: 90,
    modules: [
      { name: "JSX & Components", completed: true, desc: "Functional & class components, JSX syntax" },
      { name: "State & Lifecycle", completed: true, desc: "useState, useEffect, lifecycle methods" },
      { name: "React Hooks", completed: true, desc: "Custom hooks, useReducer, useContext" },
      { name: "React Router", completed: true, desc: "Client-side routing, nested routes" },
      { name: "State Management", completed: true, desc: "Context API, Redux, Zustand" },
      { name: "Performance Optimization", completed: true, desc: "Memoization, lazy loading, code splitting" },
      { name: "Testing", completed: false, desc: "React Testing Library, Jest, Vitest" },
      { name: "Server Components", completed: false, desc: "RSC, server actions, streaming SSR" },
    ],
    relatedSkills: ["TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    topic: "TypeScript", icon: "📘", level: "Intermediate", xp: 500, color: "from-blue-300 to-indigo-500", mastery: 60,
    modules: [
      { name: "Basic Types", completed: true, desc: "Primitives, arrays, tuples, unions" },
      { name: "Interfaces & Types", completed: true, desc: "Type aliases, interface extension" },
      { name: "Generics", completed: true, desc: "Generic functions, constraints, mapped types" },
      { name: "Enums & Unions", completed: false, desc: "Discriminated unions, literal types" },
      { name: "Utility Types", completed: true, desc: "Partial, Pick, Omit, Record, ReturnType" },
      { name: "Type Guards", completed: false, desc: "typeof, instanceof, custom type predicates" },
      { name: "Module Resolution", completed: false, desc: "Paths, aliases, declaration files" },
    ],
    relatedSkills: ["React", "Node.js", "Angular"],
  },
  {
    topic: "Node.js", icon: "🟢", level: "Intermediate", xp: 520, color: "from-green-300 to-emerald-500", mastery: 55,
    modules: [
      { name: "Express.js", completed: true, desc: "Routing, middleware, request handling" },
      { name: "REST APIs", completed: true, desc: "CRUD endpoints, status codes, versioning" },
      { name: "Middleware", completed: true, desc: "Auth, logging, error handling" },
      { name: "Database Integration", completed: false, desc: "Prisma, Mongoose, SQL, Redis" },
      { name: "Authentication", completed: false, desc: "JWT, OAuth, sessions, Passport" },
      { name: "WebSockets", completed: true, desc: "Socket.io, real-time communication" },
      { name: "File System & Streams", completed: false, desc: "fs module, readable/writable streams" },
      { name: "Testing & Debugging", completed: false, desc: "Mocha, Jest, debugging with inspector" },
    ],
    relatedSkills: ["TypeScript", "Express", "MongoDB"],
  },
  {
    topic: "Python", icon: "🐍", level: "Beginner", xp: 200, color: "from-yellow-300 to-amber-500", mastery: 30,
    modules: [
      { name: "Syntax & Basics", completed: true, desc: "Variables, conditionals, loops" },
      { name: "Data Structures", completed: true, desc: "Lists, dicts, sets, tuples" },
      { name: "Functions & Modules", completed: false, desc: "Function definitions, imports, packages" },
      { name: "File I/O", completed: false, desc: "Read/write files, context managers" },
      { name: "OOP", completed: false, desc: "Classes, inheritance, dunder methods" },
      { name: "Error Handling", completed: false, desc: "Try/except, custom exceptions" },
      { name: "Libraries", completed: false, desc: "NumPy, Pandas, Requests, BeautifulSoup" },
    ],
    relatedSkills: ["Django", "Flask", "Data Science"],
  },
  {
    topic: "CSS", icon: "🎨", level: "Advanced", xp: 680, color: "from-pink-300 to-purple-500", mastery: 85,
    modules: [
      { name: "Flexbox & Grid", completed: true, desc: "Layout systems, responsive design" },
      { name: "Animations", completed: true, desc: "Transitions, keyframes, transforms" },
      { name: "Responsive Design", completed: true, desc: "Media queries, mobile-first, containers" },
      { name: "Preprocessors", completed: true, desc: "SASS/SCSS, variables, mixins, nesting" },
      { name: "CSS-in-JS", completed: false, desc: "Styled-components, Emotion, Tailwind" },
      { name: "Design Systems", completed: true, desc: "Design tokens, component libraries" },
      { name: "Modern CSS", completed: false, desc: "Container queries, layers, subgrid" },
    ],
    relatedSkills: ["React", "SASS", "Tailwind"],
  },
  {
    topic: "SQL", icon: "🗄️", level: "Beginner", xp: 150, color: "from-orange-300 to-red-400", mastery: 25,
    modules: [
      { name: "SELECT Queries", completed: true, desc: "WHERE, ORDER BY, LIMIT, DISTINCT" },
      { name: "JOINs", completed: false, desc: "INNER, LEFT, RIGHT, FULL, self-joins" },
      { name: "Aggregations", completed: false, desc: "GROUP BY, HAVING, COUNT, SUM, AVG" },
      { name: "Subqueries", completed: false, desc: "Nested queries, EXISTS, correlated subqueries" },
      { name: "Indexing", completed: false, desc: "Performance optimization, B-tree, covering" },
      { name: "CTEs & Window Functions", completed: false, desc: "WITH, ROW_NUMBER, RANK, OVER" },
      { name: "Transactions & Normalization", completed: false, desc: "ACID, 1NF-3NF, isolation levels" },
    ],
    relatedSkills: ["PostgreSQL", "MySQL", "Prisma"],
  },
  {
    topic: "Git", icon: "", level: "Advanced", xp: 600, color: "from-orange-400 to-red-500", mastery: 80,
    modules: [
      { name: "Basic Workflow", completed: true, desc: "init, add, commit, status, log" },
      { name: "Branching & Merging", completed: true, desc: "branches, merge, conflicts, rebase" },
      { name: "Remote Repositories", completed: true, desc: "push, pull, fetch, remote, origin" },
      { name: "Collaboration", completed: true, desc: "pull requests, code review, forks" },
      { name: "Stashing & Cherry-picking", completed: false, desc: "stash, cherry-pick, revert" },
      { name: "Advanced Git", completed: false, desc: "bisect, hooks, submodules, reflog" },
    ],
    relatedSkills: ["GitHub", "GitLab", "CI/CD"],
  },
  {
    topic: "Docker", icon: "", level: "Intermediate", xp: 450, color: "from-cyan-400 to-blue-600", mastery: 50,
    modules: [
      { name: "Images & Containers", completed: true, desc: "docker run, pull, ps, exec" },
      { name: "Dockerfiles", completed: true, desc: "FROM, RUN, COPY, CMD, layers" },
      { name: "Docker Compose", completed: true, desc: "services, networks, volumes" },
      { name: "Networking & Volumes", completed: false, desc: "bridge, host, bind mounts, volumes" },
      { name: "Multi-stage Builds", completed: false, desc: "Build optimization, image size" },
      { name: "Orchestration Basics", completed: false, desc: "Swarm, Kubernetes intro" },
    ],
    relatedSkills: ["Kubernetes", "CI/CD", "DevOps"],
  },
  {
    topic: "MongoDB", icon: "", level: "Beginner", xp: 300, color: "from-green-400 to-teal-600", mastery: 35,
    modules: [
      { name: "Documents & Collections", completed: true, desc: "BSON, _id, collection operations" },
      { name: "CRUD Operations", completed: true, desc: "insert, find, update, delete" },
      { name: "Query Operators", completed: false, desc: "$gt, $in, $regex, $elemMatch" },
      { name: "Aggregation Pipeline", completed: false, desc: "$match, $group, $lookup, $project" },
      { name: "Indexing", completed: false, desc: "Single, compound, text indexes" },
      { name: "Mongoose ODM", completed: false, desc: "Schemas, models, validation, populate" },
    ],
    relatedSkills: ["Node.js", "Express", "Mongoose"],
  },
  {
    topic: "Next.js", icon: "", level: "Intermediate", xp: 580, color: "from-gray-800 to-gray-950", mastery: 45,
    modules: [
      { name: "Pages & Routing", completed: true, desc: "File-based routing, dynamic routes" },
      { name: "Data Fetching", completed: true, desc: "getStaticProps, getServerSideProps" },
      { name: "App Router", completed: true, desc: "layout.tsx, loading.tsx, error.tsx" },
      { name: "Server Components", completed: false, desc: "React Server Components, server actions" },
      { name: "API Routes", completed: false, desc: "Route handlers, middleware" },
      { name: "Deployment", completed: false, desc: "Vercel, static export, ISR" },
    ],
    relatedSkills: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    topic: "Tailwind CSS", icon: "", level: "Intermediate", xp: 400, color: "from-cyan-300 to-blue-500", mastery: 70,
    modules: [
      { name: "Utility Basics", completed: true, desc: "flex, grid, spacing, colors, typography" },
      { name: "Responsive Design", completed: true, desc: "sm/md/lg, breakpoints, containers" },
      { name: "Customization", completed: true, desc: "tailwind.config, theme, custom classes" },
      { name: "Components", completed: false, desc: "Reusable component patterns, @apply" },
      { name: "Plugins", completed: false, desc: "Official & community plugins" },
      { name: "Dark Mode & Theming", completed: false, desc: "class-based dark mode, CSS variables" },
    ],
    relatedSkills: ["React", "Next.js", "CSS"],
  },
  {
    topic: "Angular", icon: "", level: "Beginner", xp: 250, color: "from-red-400 to-red-600", mastery: 20,
    modules: [
      { name: "Components & Templates", completed: true, desc: "Selectors, templates, interpolation" },
      { name: "Directives & Pipes", completed: true, desc: "ngIf, ngFor, custom pipes" },
      { name: "Services & DI", completed: false, desc: "Dependency injection, services" },
      { name: "Routing", completed: false, desc: "RouterModule, guards, lazy loading" },
      { name: "Forms", completed: false, desc: "Template-driven & reactive forms" },
      { name: "RxJS & Observables", completed: false, desc: "Subjects, operators, subscriptions" },
    ],
    relatedSkills: ["TypeScript", "RxJS", "Node.js"],
  },
];

export default function GamificationDashboard() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const userId = user?.username || user?.email || "anonymous";
  const uid = userId;

  const [quests, setQuests] = useState<Quest[]>(() => loadQuestProgress(uid));
  const [weeklyQuests, setWeeklyQuests] = useState<WeeklyQuest[]>(() => loadWeeklyQuests(uid));
  const [totalXp, setTotalXp] = useState(() => {
    const saved = localStorage.getItem(userKey(uid, "xp"));
    return saved ? parseInt(saved, 10) : 0;
  });
  const [streak, setStreak] = useState(() => {
    const saved = localStorage.getItem(userKey(uid, "streak"));
    return saved ? parseInt(saved, 10) : 0;
  });
  const [showXpPopup, setShowXpPopup] = useState<{ xp: number; title: string } | null>(null);
  const [showLevelUp, setShowLevelUp] = useState<LevelInfo | null>(null);
  const [activeTab, setActiveTab] = useState<"badges" | "topics" | "leaderboard">("badges");
  const [expandedTopic, setExpandedTopic] = useState<string | null>(null);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  const [unlockedBadgeIds, setUnlockedBadgeIds] = useState<Set<number>>(() => {
    try {
      const saved = localStorage.getItem(userKey(uid, "badges"));
      return saved ? new Set(JSON.parse(saved)) : new Set<number>();
    } catch { return new Set<number>(); }
  });
  const coachVisitsRef = useRef(0);
  const resourceVisitsRef = useRef(0);

  const levelInfo = getLevelInfo(totalXp);
  const level = levelInfo.level;
  const xpProgress = getLevelProgress(totalXp);
  const nextLevelInfo = getNextLevelInfo(totalXp);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quoteRotation.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    localStorage.setItem(userKey(uid, "xp"), String(totalXp));
    localStorage.setItem(userKey(uid, "streak"), String(streak));
  }, [totalXp, streak, uid]);

  const prevLevelRef = useRef(level);
  useEffect(() => {
    if (level > prevLevelRef.current) {
      setShowLevelUp(levelInfo);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 5000);
      setTimeout(() => setShowLevelUp(null), 3500);
    }
    prevLevelRef.current = level;
  }, [level, levelInfo]);

  useEffect(() => {
    checkBadges(streak, level);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [streak, level]);

  const awardXp = useCallback((amount: number, title: string) => {
    setTotalXp((prev) => prev + amount);
    setShowXpPopup({ xp: amount, title });
    setTimeout(() => setShowXpPopup(null), 2500);
  }, []);

  const advancedWeeklyRef = useRef<Set<number>>(new Set());
  const visitedPagesRef = useRef<Set<string>>(new Set());

  function advanceWeeklyQuest(id: number) {
    setWeeklyQuests((prev) => {
      const quest = prev.find((q) => q.id === id);
      if (!quest || quest.completed) return prev;
      const newProgress = Math.min(quest.progress + 1, quest.total);
      const newlyCompleted = newProgress >= quest.total && !quest.completed;
      const updated = prev.map((q) => q.id === id ? { ...q, progress: newProgress, completed: newlyCompleted } : q);
      saveWeeklyQuests(updated, uid);
      if (newlyCompleted) {
        setTimeout(() => awardXp(quest.xp, quest.title), 200);
      }
      return updated;
    });
  }

  function saveBadges(ids: Set<number>) {
    localStorage.setItem(userKey(uid, "badges"), JSON.stringify([...ids]));
  }

  function checkBadges(streakVal: number, levelVal: number) {
    const dailyCompletions = quests.filter((q) => q.completed).length;
    setUnlockedBadgeIds((prev) => {
      const updated = new Set(prev);
      let newUnlock = false;
      for (const def of badgeDefs) {
        if (updated.has(def.id)) continue;
        if (def.condition(levelVal, streakVal, coachVisitsRef.current, resourceVisitsRef.current, dailyCompletions)) {
          updated.add(def.id);
          newUnlock = true;
          setTimeout(() => {
            setShowXpPopup({ xp: def.xp, title: `${def.name} Badge!` });
            setTotalXp((x) => x + def.xp);
          }, 300);
        }
      }
      if (newUnlock) saveBadges(updated);
      return updated;
    });
  }

  function trackResourceVisit() {
    resourceVisitsRef.current += 1;
    advanceWeeklyQuest(1);
    setTimeout(() => checkBadges(streak, level), 50);
  }

  function trackPageNavigation(link: string) {
    if (link === "/resources") {
      trackResourceVisit();
    }
    if (link === "/chatbot") {
      coachVisitsRef.current += 1;
      setTimeout(() => checkBadges(streak, level), 50);
    }
    if (!visitedPagesRef.current.has(link)) {
      visitedPagesRef.current.add(link);
      if (visitedPagesRef.current.size >= 3) {
        advanceWeeklyQuest(2);
      }
    }
  }

  const handleQuestClick = useCallback((questId: number) => {
    let completedQuest: Quest | null = null;
    setQuests((prev) => {
      const updated = prev.map((q) => {
        if (q.id !== questId || q.completed) return q;
        const newProgress = Math.min(q.progress + 1, q.total);
        const newlyCompleted = newProgress >= q.total && !q.completed;
        if (newlyCompleted) completedQuest = q;
        return { ...q, progress: newProgress, completed: newlyCompleted };
      });
      saveQuestProgress(updated, uid);

      if (completedQuest) {
        const xp = completedQuest.xp;
        const title = completedQuest.title;
        setTimeout(() => awardXp(xp, title), 100);

        setStreak((prevStreak) => {
          const lastDate = localStorage.getItem(userKey(uid, "last_streak_date"));
          const today = new Date().toDateString();
          if (lastDate === today) return prevStreak;
          const yesterday = new Date(Date.now() - 86400000).toDateString();
          const newStreak = lastDate === yesterday ? prevStreak + 1 : 1;
          localStorage.setItem(userKey(uid, "last_streak_date"), today);
          return newStreak;
        });

        if (questId === 2) {
          advanceWeeklyQuest(3);
        }
        if (questId >= 1 && questId <= 4 && !advancedWeeklyRef.current.has(questId)) {
          advancedWeeklyRef.current.add(questId);
          if (advancedWeeklyRef.current.size >= 4) {
            advanceWeeklyQuest(4);
          }
        }
        advanceWeeklyQuest(5);
      }
      return updated;
    });
  }, [awardXp]);

  const handleQuestNavigate = useCallback((quest: Quest) => {
    handleQuestClick(quest.id);
    trackPageNavigation(quest.link);
    navigate({ to: quest.link });
  }, [handleQuestClick, navigate]);

  const handleTopicClick = useCallback((topic: TopicBadge) => {
    if (topic.level === "Advanced") {
      setExpandedTopic(expandedTopic === topic.topic ? null : topic.topic);
    } else {
      trackResourceVisit();
      navigate({ to: "/resources", search: { skill: topic.topic } });
    }
  }, [navigate, expandedTopic]);

  const unlockedBadges = unlockedBadgeIds.size;
  const totalBadges = badgeDefs.length;
  const questsCompleted = quests.filter((q) => q.completed).length;
  const displayName = user?.fullName || user?.username || "Learner";

  return (
    <div className="min-h-screen bg-[#F1EFFB]">
      <DashboardNavbar />
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Top greeting + level/streak/xp row */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-5 items-stretch mb-6">
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-[28px] px-7 py-6 shadow-sm flex items-center justify-between gap-6 flex-wrap"
          >
            <div className="flex items-center gap-4">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                className="w-14 h-14 rounded-2xl bg-[#EFE9FF] flex items-center justify-center text-3xl"
              >
                🎮
              </motion.div>
              <div>
                <h1 className="text-2xl font-black text-[#22254B]">Gamification Hub</h1>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={quoteIndex}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="text-gray-400 text-sm mt-0.5"
                  >
                    {quoteRotation[quoteIndex]} — <span className="text-[#22254B] font-semibold">{displayName}</span>
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>

            <div className="flex-1 min-w-[160px] sm:min-w-[220px] max-w-md">
              <div className="flex items-center justify-between text-xs font-semibold text-gray-400 mb-1.5">
                <span className="flex items-center gap-1.5 text-[#22254B]">
                  <span>{levelInfo.icon}</span> Level {level} · {levelInfo.title}
                </span>
                <span>{Math.round(xpProgress.percent)}%</span>
              </div>
              <div className="h-2.5 bg-[#EFEDFB] rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${xpProgress.percent}%` }}
                  transition={{ duration: 1.4, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-[#8B7CF6] to-[#5C4EE5]"
                />
              </div>
              {nextLevelInfo && (
                <div className="flex justify-between text-[10px] text-gray-400 mt-1">
                  <span>{xpProgress.current.toLocaleString()} / {xpProgress.max.toLocaleString()} XP</span>
                  <span>Next: {nextLevelInfo.icon} {nextLevelInfo.title}</span>
                </div>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-3"
          >
            <div className="bg-[#22254B] rounded-2xl px-5 py-3 text-white flex flex-col justify-center min-w-[104px]">
              <span className="text-[10px] text-white/50 font-bold tracking-wide">STREAK</span>
              <div className="flex items-center gap-1.5 mt-0.5">
                <motion.span
                  animate={{ scale: [1, 1.25, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-lg"
                >
                  🔥
                </motion.span>
                <span className="font-black text-xl">{streak}d</span>
              </div>
            </div>
            <div className="bg-white rounded-2xl px-5 py-3 shadow-sm flex flex-col justify-center min-w-[120px]">
              <span className="text-[10px] text-gray-400 font-bold tracking-wide">TOTAL XP</span>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="text-lg">💎</span>
                <span className="font-black text-xl text-[#22254B]">{totalXp.toLocaleString()}</span>
              </div>
            </div>
            <button
              onClick={() => navigate({ to: "/gamification/challenges" })}
              className="bg-gradient-to-br from-[#8B7CF6] to-[#5C4EE5] rounded-2xl px-5 py-3 text-white flex flex-col justify-center min-w-[120px] hover:opacity-90 transition shadow-md cursor-pointer"
            >
              <span className="text-[10px] text-white/70 font-bold tracking-wide">CHALLENGES</span>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="text-lg">💻</span>
                <span className="font-black text-xl">Code</span>
              </div>
            </button>
          </motion.div>
        </div>

        {/* Pastel stat cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-6">
          {[
            {
              bg: "bg-[#E4F6EC]", ring: "bg-[#BEEBD1]", icon: "🏅",
              label: "Badges Earned", value: `${unlockedBadges}`, sub: `of ${totalBadges}`,
              foot: `${totalBadges - unlockedBadges} more to discover`,
              percent: (unlockedBadges / totalBadges) * 100, bar: "bg-[#3FAE71]",
            },
            {
              bg: "bg-[#FDECD9]", ring: "bg-[#FBD9AE]", icon: "📊",
              label: "Topics Mastered", value: `${topicBadges.filter((t) => t.level === "Advanced").length}`, sub: `of ${topicBadges.length}`,
              foot: "Advanced topics in your skillset",
              percent: (topicBadges.filter((t) => t.level === "Advanced").length / topicBadges.length) * 100, bar: "bg-[#E08A3C]",
            },
            {
              bg: "bg-[#EFE7FD]", ring: "bg-[#DBCBFB]", icon: "⚡",
              label: "Daily XP Bonus", value: `+${quests.filter((q) => q.completed).reduce((sum, q) => sum + q.xp, 0)}`, sub: "",
              foot: `${questsCompleted}/${quests.length} quests done today`,
              percent: (questsCompleted / quests.length) * 100, bar: "bg-[#7C5CFC]",
            },
          ].map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
              className={`${card.bg} rounded-[26px] p-6 relative overflow-hidden`}
            >
              <div className={`w-12 h-12 rounded-2xl ${card.ring} flex items-center justify-center text-2xl mb-4`}>
                {card.icon}
              </div>
              <p className="text-sm font-semibold text-[#22254B]/70">{card.label}</p>
              <div className="flex items-baseline gap-1.5 mt-1">
                <span className="text-3xl font-black text-[#22254B]">{card.value}</span>
                {card.sub && <span className="text-gray-500 text-sm">{card.sub}</span>}
              </div>
              <div className="mt-4 h-2 bg-white/60 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${card.percent}%` }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className={`h-full rounded-full ${card.bar}`}
                />
              </div>
              <p className="text-xs text-[#22254B]/60 mt-2.5">{card.foot}</p>
            </motion.div>
          ))}
        </div>

        {/* Heatmap */}
        <CodingHeatmap userId={uid} />

        {/* Tabs */}
        <div className="flex gap-2 mb-5 flex-wrap mt-6">
          {[
            { key: "badges" as const, label: "🏅 Achievement Badges" },
            { key: "topics" as const, label: "📚 Topic Mastery" },
            { key: "leaderboard" as const, label: "🏆 Leaderboard" },
          ].map((tab) => (
            <motion.button
              key={tab.key}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => { setActiveTab(tab.key); setExpandedTopic(null); }}
              className={`px-5 py-2.5 rounded-full font-bold text-sm transition-all ${
                activeTab === tab.key
                  ? "bg-[#22254B] text-white shadow-md"
                  : "bg-white text-gray-500 hover:text-[#22254B]"
              }`}
            >
              {tab.label}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {activeTab === "badges" && (
            <motion.div
              key="badges"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
            >
              {badgeDefs.map((badge, index) => {
                const isUnlocked = unlockedBadgeIds.has(badge.id);
                return (
                  <motion.div
                    key={badge.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.25, delay: index * 0.04 }}
                    whileHover={{ y: -4 }}
                    className={`rounded-[22px] p-5 ${
                      isUnlocked ? "bg-white shadow-sm" : "bg-white/60"
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className={`text-3xl w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br ${badge.color} ${!isUnlocked && "grayscale opacity-50"}`}>
                        {badge.icon}
                      </div>
                      {isUnlocked ? (
                        <span className="bg-[#E4F6EC] text-[#3FAE71] text-[11px] font-bold px-2.5 py-1 rounded-full">
                          ✓ Earned
                        </span>
                      ) : (
                        <span className="bg-gray-100 text-gray-400 text-[11px] font-bold px-2.5 py-1 rounded-full">
                          🔒 Locked
                        </span>
                      )}
                    </div>
                    <h4 className="font-bold text-[#22254B] mt-3.5 text-[15px]">{badge.name}</h4>
                    <p className="text-gray-400 text-xs mt-1 leading-relaxed">{badge.desc}</p>
                    <span className="inline-block mt-3 text-xs font-bold text-[#E08A3C] bg-[#FDECD9] px-2.5 py-1 rounded-full">
                      ⚡ {badge.xp} XP
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          )}

          {activeTab === "topics" && (
            <motion.div
              key="topics"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {topicBadges.map((topic, index) => (
                <div key={topic.topic}>
                  <motion.div
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25, delay: index * 0.06 }}
                    onClick={() => handleTopicClick(topic)}
                    className={`bg-white rounded-[22px] p-5 shadow-sm cursor-pointer ${
                      expandedTopic === topic.topic ? "ring-2 ring-[#7C5CFC]" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br ${topic.color}`}>
                        <TopicLogo topic={topic.topic} size={26} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-[#22254B] text-[15px]">{topic.topic}</h4>
                        <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full inline-block mt-1 ${
                          topic.level === "Advanced" ? "bg-[#E4F6EC] text-[#3FAE71]" :
                          topic.level === "Intermediate" ? "bg-[#E4EEFD] text-[#3E7BD6]" :
                          "bg-[#FDF3D9] text-[#C99B22]"
                        }`}>
                          {topic.level}
                        </span>
                      </div>
                      <motion.span
                        animate={{ rotate: expandedTopic === topic.topic ? 180 : 0 }}
                        className="text-gray-300 text-xs w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center"
                      >
                        ▼
                      </motion.span>
                    </div>
                    <div className="mt-4">
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-400">Mastery</span>
                        <span className="font-bold text-[#22254B]">{topic.xp} XP</span>
                      </div>
                      <div className="h-2 bg-[#F1EFFB] rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${topic.mastery}%` }}
                          transition={{ duration: 1, delay: index * 0.08 }}
                          className={`h-full rounded-full bg-gradient-to-r ${topic.color}`}
                        />
                      </div>
                    </div>
                    <p className={`mt-3 text-xs text-center font-medium ${topic.level === "Advanced" ? "text-[#3FAE71]" : "text-gray-400"}`}>
                      {topic.level === "Advanced" ? "Click to view modules learned" : "Click to find resources"}
                    </p>
                  </motion.div>

                  <AnimatePresence>
                    {expandedTopic === topic.topic && topic.level === "Advanced" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="bg-white rounded-[22px] p-5 mt-2 shadow-sm">
                          <div className="flex items-center gap-2.5 mb-4">
                            <span className="text-2xl">🏆</span>
                            <div>
                              <h4 className="font-black text-[#22254B] text-[15px]">{topic.topic} — Modules Completed</h4>
                              <p className="text-xs text-gray-400">
                                {topic.modules.filter((m) => m.completed).length}/{topic.modules.length} modules mastered
                              </p>
                            </div>
                          </div>
                          <div className="space-y-2">
                            {topic.modules.map((mod) => (
                              <div
                                key={mod.name}
                                onClick={() => navigate({ to: "/resources", search: { skill: topic.topic } })}
                                className={`flex items-start gap-3 p-3.5 rounded-2xl cursor-pointer ${
                                  mod.completed ? "bg-[#E4F6EC]" : "bg-[#F7F6FB]"
                                }`}
                              >
                                <div className={`mt-0.5 text-base ${mod.completed ? "text-[#3FAE71]" : "text-gray-300"}`}>
                                  {mod.completed ? "✅" : "⭕"}
                                </div>
                                <div className="flex-1">
                                  <div className="flex items-center gap-2">
                                    <span className={`font-bold text-sm ${mod.completed ? "text-[#2C7A50]" : "text-gray-500"}`}>
                                      {mod.name}
                                    </span>
                                    <span className="text-[10px] text-gray-400 ml-auto">Find resources →</span>
                                  </div>
                                  <p className="text-xs text-gray-400 mt-0.5">{mod.desc}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="mt-4 pt-4 border-t border-[#F1EFFB]">
                            <p className="text-xs font-bold text-[#22254B] mb-2.5">Related Skills to Explore</p>
                            <div className="flex flex-wrap gap-2">
                              {topic.relatedSkills.map((skill) => (
                                <button
                                  key={skill}
                                  onClick={() => navigate({ to: "/resources", search: { skill } })}
                                  className="px-3.5 py-1.5 bg-[#F1EFFB] text-[#22254B] font-bold text-xs rounded-full hover:bg-[#22254B] hover:text-white transition-colors"
                                >
                                  {skill} →
                                </button>
                              ))}
                            </div>
                          </div>
                          <button
                            onClick={() => navigate({ to: "/resources", search: { skill: topic.topic } })}
                            className="w-full mt-4 py-3 bg-[#22254B] text-white font-bold text-sm rounded-2xl"
                          >
                            📚 Find Resources for {topic.topic}
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === "leaderboard" && (
            <motion.div
              key="leaderboard"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-[28px] shadow-sm overflow-hidden"
            >
              <div className="p-6 pb-2 flex items-center gap-3">
                <span className="text-2xl">🏆</span>
                <div>
                  <h3 className="text-lg font-black text-[#22254B]">Leaderboard</h3>
                  <p className="text-gray-400 text-xs">Top learners this month</p>
                </div>
              </div>

              {/* Podium for top 3 */}
              <div className="grid grid-cols-3 gap-3 px-6 pt-4">
                {leaderboardData.slice(0, 3).map((entry) => {
                  const podiumStyle =
                    entry.rank === 1 ? { h: "h-28", bg: "bg-[#E4F6EC]", order: "order-2" } :
                    entry.rank === 2 ? { h: "h-20", bg: "bg-[#EFE7FD]", order: "order-1" } :
                    { h: "h-16", bg: "bg-[#FDE4EE]", order: "order-3" };
                  return (
                    <div key={entry.rank} className={`flex flex-col items-center ${podiumStyle.order}`}>
                      <div className="text-3xl mb-1">{entry.avatar}</div>
                      <p className="text-xs font-bold text-[#22254B] text-center leading-tight">{entry.name}</p>
                      <p className="text-[10px] text-gray-400 mb-2">⚡ {entry.xp.toLocaleString()}</p>
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        transition={{ duration: 0.6 }}
                        className={`${podiumStyle.h} ${podiumStyle.bg} w-full rounded-t-2xl flex items-start justify-center pt-2`}
                      >
                        <span className="text-lg font-black text-[#22254B]">{getRankEmoji(entry.rank)}</span>
                      </motion.div>
                    </div>
                  );
                })}
              </div>

              <div className="p-6 pt-5 space-y-1.5">
                {leaderboardData.slice(3).map((entry, index) => (
                  <motion.div
                    key={entry.rank}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25, delay: index * 0.05 }}
                    className="flex items-center gap-3.5 p-3 rounded-2xl hover:bg-[#F7F6FB]"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#F1EFFB] text-[#22254B] flex items-center justify-center font-bold text-sm">
                      {entry.rank}
                    </div>
                    <div className="text-2xl">{entry.avatar}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-[#22254B] text-sm">{entry.name}</span>
                        <span className="text-[10px] bg-[#FDF3D9] text-[#C99B22] font-bold px-2 py-0.5 rounded-full">
                          {entry.badge}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-gray-400">
                        <span>Level {entry.level}</span>
                        <span>⚡ {entry.xp.toLocaleString()} XP</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Daily quests */}
        <div className="bg-white rounded-[28px] p-7 shadow-sm mt-6">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-2xl">📋</span>
            <div>
              <h2 className="text-lg font-black text-[#22254B]">Daily Quests</h2>
              <p className="text-gray-400 text-xs">Complete quests to earn bonus XP and maintain your streak!</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quests.map((challenge, index) => (
              <motion.div
                key={challenge.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: index * 0.06 }}
                whileHover={{ y: -3 }}
                onClick={() => handleQuestNavigate(challenge)}
                className={`rounded-[20px] p-5 cursor-pointer ${
                  challenge.completed ? "bg-[#E4F6EC]" : "bg-[#F7F6FB] hover:bg-[#F1EFFB]"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="text-2xl w-11 h-11 rounded-2xl bg-white flex items-center justify-center">
                    {challenge.icon}
                  </div>
                  {challenge.completed ? (
                    <span className="text-[#3FAE71] text-lg">✅</span>
                  ) : (
                    <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-[#22254B] text-white">
                      {challenge.actionLabel}
                    </span>
                  )}
                </div>
                <h4 className="font-bold text-[#22254B] text-sm mt-3">{challenge.title}</h4>
                <p className="text-gray-400 text-xs mt-1">{challenge.desc}</p>
                <div className="mt-3">
                  <div className="flex justify-between text-[11px] text-gray-400 mb-1">
                    <span>{challenge.progress}/{challenge.total}</span>
                    <span className="font-bold text-[#E08A3C]">+{challenge.xp} XP</span>
                  </div>
                  <div className="h-1.5 bg-white rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(challenge.progress / challenge.total) * 100}%` }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.08 }}
                      className={`h-full rounded-full ${challenge.completed ? "bg-[#3FAE71]" : "bg-gradient-to-r from-[#E08A3C] to-[#F2B25C]"}`}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Weekly challenges */}
        <div className="bg-white rounded-[28px] p-7 shadow-sm mt-6">
          <div className="flex items-center gap-3 mb-5 flex-wrap">
            <span className="text-2xl">🏆</span>
            <div>
              <h2 className="text-lg font-black text-[#22254B]">Weekly Challenges</h2>
              <p className="text-gray-400 text-xs">Week of {getWeekId()} — bigger goals, bigger rewards!</p>
            </div>
            <div className="ml-auto flex items-center gap-2 bg-[#F1EFFB] px-4 py-2 rounded-2xl">
              <span className="text-sm">📊</span>
              <span className="font-bold text-[#22254B] text-sm">
                {weeklyQuests.filter((w) => w.completed).length}/{weeklyQuests.length}
              </span>
              <span className="text-gray-400 text-xs">done</span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {weeklyQuests.map((challenge, index) => (
              <motion.div
                key={challenge.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: index * 0.06 }}
                whileHover={{ y: -3 }}
                className={`rounded-[20px] p-4 ${challenge.completed ? "bg-[#EFE7FD]" : "bg-[#F7F6FB]"}`}
              >
                <div className="flex items-start justify-between">
                  <div className="text-xl w-10 h-10 rounded-2xl bg-white flex items-center justify-center">
                    {challenge.icon}
                  </div>
                  {challenge.completed && <span className="text-[#7C5CFC] text-lg">✅</span>}
                </div>
                <h4 className="font-bold text-[#22254B] text-sm mt-3">{challenge.title}</h4>
                <p className="text-gray-400 text-xs mt-1">{challenge.desc}</p>
                <div className="mt-3">
                  <div className="flex justify-between text-[11px] text-gray-400 mb-1">
                    <span>{challenge.progress}/{challenge.total}</span>
                    <span className="font-bold text-[#7C5CFC]">+{challenge.xp} XP</span>
                  </div>
                  <div className="h-1.5 bg-white rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(challenge.progress / challenge.total) * 100}%` }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.08 }}
                      className={`h-full rounded-full ${challenge.completed ? "bg-[#7C5CFC]" : "bg-gradient-to-r from-[#B7A6FB] to-[#7C5CFC]"}`}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center pb-4">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => navigate({ to: "/dashboard" })}
            className="px-7 py-3.5 bg-[#22254B] text-white font-bold rounded-2xl shadow-sm inline-flex items-center gap-2.5"
          >
            🏠 Back to Dashboard
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {showXpPopup && (
          <motion.div
            key={showXpPopup.title}
            initial={{ opacity: 0, y: 40, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -40, scale: 0.85 }}
            className="fixed top-24 right-4 sm:right-8 z-50 bg-white rounded-3xl p-5 shadow-xl border border-[#F1EFFB]"
          >
            <div className="flex items-center gap-3">
              <motion.div
                animate={{ rotate: [0, -15, 15, 0] }}
                transition={{ duration: 0.5 }}
                className="w-12 h-12 rounded-2xl bg-[#FDECD9] flex items-center justify-center text-2xl"
              >
                ⚡
              </motion.div>
              <div>
                <p className="text-[10px] text-gray-400 font-bold uppercase">Quest Complete!</p>
                <p className="text-lg font-black text-[#22254B]">+{showXpPopup.xp} XP</p>
                <p className="text-xs text-gray-400">{showXpPopup.title}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showLevelUp && (
          <motion.div
            key="levelup"
            initial={{ opacity: 0, scale: 0.5, y: -40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: -40 }}
            className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
          >
            <div className={`bg-gradient-to-br ${showLevelUp.color} rounded-[36px] p-8 shadow-2xl text-center`}>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-6xl mb-3"
              >
                {showLevelUp.icon}
              </motion.div>
              <div className="text-white text-xs font-bold uppercase tracking-wider">Level Up!</div>
              <div className="text-white text-4xl font-black mt-1">Level {showLevelUp.level}</div>
              <div className="text-white/80 text-xl font-bold mt-1">{showLevelUp.title}</div>
              <div className="mt-3 inline-block bg-white/20 backdrop-blur px-5 py-2 rounded-full text-white text-sm font-bold">
                {showLevelUp.perk}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showConfetti && (
          <motion.div
            className="fixed inset-0 pointer-events-none z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {["🎉", "⭐", "✨", "🌟", "💫", "🏆", "🔥"].map((emoji, i) => (
              <motion.div
                key={i}
                className="absolute text-2xl"
                initial={{
                  top: -20,
                  left: `${10 + Math.random() * 80}%`,
                  opacity: 1,
                }}
                animate={{
                  top: "100%",
                  left: `${5 + Math.random() * 90}%`,
                  rotate: 360 * (Math.random() > 0.5 ? 1 : -1),
                  opacity: 0,
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  delay: Math.random() * 1.5,
                  repeat: Infinity,
                  repeatDelay: Math.random() * 3,
                }}
              >
                {emoji}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

