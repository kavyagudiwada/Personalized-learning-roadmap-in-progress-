import { useState } from "react";
import { BookOpen, CheckCircle, Circle, ExternalLink, Sparkles, Loader2, ChevronDown, Search, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useResourceRecommendations, useMarkResourceComplete, useTriggerFullAnalysis, useUserProfile, useSkillGapLatest, useBookmarkResource } from "@/hooks/use-queries";
import type { ResourceItem } from "@/services/api";

const container = { hidden: {}, show: { transition: { staggerChildren: 0.04 } } };
const item = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] } } };

const DIFFICULTY_STYLES: Record<string, { label: string; dot: string }> = {
  beginner: { label: "Beginner", dot: "bg-green-500" },
  intermediate: { label: "Intermediate", dot: "bg-yellow-500" },
  advanced: { label: "Advanced", dot: "bg-red-500" },
};

const TYPE_ICONS: Record<string, string> = {
  course: "🎓", tutorial: "📝", video: "🎬", book: "📖",
  documentation: "📄", article: "✍️", guide: "🗺️", project: "🛠️",
};

const TYPE_OPTIONS = [
  { value: "all", label: "All" },
  { value: "course", label: "Courses" },
  { value: "tutorial", label: "Tutorials" },
  { value: "video", label: "Videos" },
  { value: "project", label: "Projects" },
  { value: "book", label: "Books" },
  { value: "documentation", label: "Docs" },
];

const STATUS_CONFIG: Record<number, { label: string; cls: string; sectionCls: string; icon: string }> = {
  0: { label: "Building", cls: "bg-yellow-100 text-yellow-700", sectionCls: "border-l-4 border-yellow-400 bg-yellow-50/30", icon: "🟡" },
  1: { label: "Learn Now", cls: "bg-red-100 text-red-700", sectionCls: "border-l-4 border-red-400 bg-red-50/30", icon: "🔴" },
  2: { label: "Learn Later", cls: "bg-gray-100 text-gray-500", sectionCls: "border-l-4 border-gray-300 bg-gray-50/30", icon: "⚪" },
};

export default function ResourceList({ initialSkill }: { initialSkill?: string }) {
  const { data: profile } = useUserProfile();
  const currentGoal = profile?.careerGoal || "";
  const { data, isLoading, error } = useResourceRecommendations(currentGoal);
  const markComplete = useMarkResourceComplete();
  const bookmark = useBookmarkResource();
  const triggerAnalysis = useTriggerFullAnalysis();
  const { data: sgData } = useSkillGapLatest();
  const [filterType, setFilterType] = useState("all");
  const [searchQuery, setSearchQuery] = useState(initialSkill || "");
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({});

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

  if (error || !data) {
    return (
      <div className="min-h-screen bg-[#F8F6E8] flex items-center justify-center px-6">
        <div className="bg-white/70 backdrop-blur-xl rounded-[32px] p-10 shadow-lg border border-white/60 text-center max-w-md">
          <BookOpen size={48} className="mx-auto text-gray-300 mb-4" />
          <p className="text-gray-500">{error instanceof Error ? error.message : "Could not load resources."}</p>
        </div>
      </div>
    );
  }

  const diffRank: Record<string, number> = { beginner: 0, intermediate: 1, advanced: 2 };
  const typeRank: Record<string, number> = { course: 0, tutorial: 1, documentation: 2, book: 3, video: 4, project: 5, guide: 6, article: 7 };

  const allResources = data.recommendations || [];
  const filtered = allResources.filter((r) => {
    if (filterType !== "all" && r.type !== filterType) return false;
    if (searchQuery && !r.title.toLowerCase().includes(searchQuery.toLowerCase()) && !r.skill.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  const grouped: Record<string, ResourceItem[]> = {};
  for (const r of filtered) {
    if (!grouped[r.skill]) grouped[r.skill] = [];
    grouped[r.skill].push(r);
  }
  for (const key of Object.keys(grouped)) {
    grouped[key].sort((a, b) => {
      const ad = diffRank[a.difficulty] ?? 1, bd = diffRank[b.difficulty] ?? 1;
      if (ad !== bd) return ad - bd;
      return (typeRank[a.type] ?? 99) - (typeRank[b.type] ?? 99);
    });
  }

  const sg = (sgData as any)?.skillGap || null;
  const gp = sg?.details?.gapPriority || {};
  const gpLower: Record<string, string> = {};
  for (const [k, v] of Object.entries(gp)) gpLower[k.toLowerCase()] = String(v);
  const improving = new Set((sg?.improving || []).map((s: string) => s.toLowerCase()));
  const weak = new Set((sg?.weak || []).map((s: string) => s.toLowerCase()));
  const skillRank: Record<string, number> = {};
  for (const key of Object.keys(grouped)) {
    const kl = key.toLowerCase();
    if (improving.has(kl)) skillRank[key] = 0;
    else if (weak.has(kl) && gpLower[kl] === "now") skillRank[key] = 1;
    else if (weak.has(kl)) skillRank[key] = 2;
    else skillRank[key] = 999;
  }
  const sortedEntries = Object.entries(grouped).sort(([a], [b]) => {
    const ra = skillRank[a] ?? 999, rb = skillRank[b] ?? 999;
    if (ra !== rb) return ra - rb;
    return a.localeCompare(b);
  });

  const sections: { rank: number; title: string; entries: typeof sortedEntries }[] = [];
  for (const rank of [0, 1, 2]) {
    const entries = sortedEntries.filter(([s]) => (skillRank[s] ?? 999) === rank);
    if (entries.length > 0) sections.push({ rank, title: STATUS_CONFIG[rank].label, entries });
  }
  const other = sortedEntries.filter(([s]) => (skillRank[s] ?? 999) >= 999);
  if (other.length > 0) sections.push({ rank: 999, title: "Other Skills", entries: other });

  return (
    <div className="min-h-screen bg-[#F8F6E8] pb-24 relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div animate={{ x: [0, 40, -30, 0], y: [0, -30, 20, 0] }} transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }} className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#F2DD85]/15 to-transparent blur-[120px]" />
        <motion.div animate={{ x: [0, -40, 50, 0], y: [0, 40, -30, 0] }} transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }} className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-[#171C4A]/8 to-transparent blur-[120px]" />
      </div>

      <motion.div variants={container} initial="hidden" animate="show" className="relative z-10 max-w-6xl mx-auto px-6 py-6 space-y-6">

        {/* Banner */}
        <motion.div variants={item} className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#0f1340] via-[#171C4A] to-[#1e2357] min-h-[160px]">
          <div className="absolute -top-16 -right-16 w-60 h-60 bg-gradient-to-bl from-[#F2DD85]/15 to-transparent rounded-full blur-[80px]" />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-gradient-to-tr from-white/[0.06] to-transparent rounded-full blur-[80px]" />
          <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-[#F2DD85]/25 to-transparent" />
          <div className="relative flex items-center justify-between px-6 py-5">
            <div>
              <p className="text-white/40 text-xs font-semibold uppercase tracking-[0.15em]">Resources</p>
              <h1 className="text-2xl sm:text-3xl font-black text-white mt-1 leading-tight">
                Learning<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F2DD85] to-amber-300"> Resources</span>
              </h1>
              <p className="text-white/50 text-xs mt-1">Personalized recommendations for your skill gaps</p>
            </div>
            <div className="hidden md:flex items-center gap-1">
              <motion.svg viewBox="0 0 200 200" className="w-20 h-20 drop-shadow-xl" animate={{ y: [0, -5, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
                <defs>
                  <linearGradient id="rSkin1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#FFDAB9" /><stop offset="100%" stopColor="#F5C59E" /></linearGradient>
                  <linearGradient id="rHair1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4A3728" /><stop offset="100%" stopColor="#2D1F14" /></linearGradient>
                  <linearGradient id="rShirt1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#171C4A" /><stop offset="100%" stopColor="#0f1340" /></linearGradient>
                </defs>
                <ellipse cx="100" cy="55" rx="38" ry="36" fill="url(#rHair1)" />
                <path d="M64 55 Q64 22 100 18 Q136 22 136 55" fill="url(#rHair1)" />
                <circle cx="100" cy="68" r="30" fill="url(#rSkin1)" />
                <ellipse cx="87" cy="64" rx="3.5" ry="5" fill="#171C4A"><animate attributeName="ry" values="5;1;5" dur="4s" repeatCount="indefinite" /></ellipse>
                <ellipse cx="113" cy="64" rx="3.5" ry="5" fill="#171C4A"><animate attributeName="ry" values="5;1;5" dur="4s" repeatCount="indefinite" /></ellipse>
                <path d="M89 76 Q100 85 111 76" fill="none" stroke="#D4836A" strokeWidth="2" strokeLinecap="round" />
                <path d="M77 98 L123 98 L127 150 L73 150 Z" fill="url(#rShirt1)" />
                <path d="M77 105 L60 126 L64 130" fill="none" stroke="url(#rShirt1)" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M123 105 L140 126 L136 130" fill="none" stroke="url(#rShirt1)" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="64" cy="130" r="5" fill="url(#rSkin1)" />
                <circle cx="136" cy="130" r="5" fill="url(#rSkin1)" />
                <circle cx="100" cy="120" r="5" fill="#F2DD85" opacity="0.5" />
                <circle cx="100" cy="120" r="2.5" fill="#F2DD85" opacity="0.9" />
              </motion.svg>
              <motion.svg viewBox="0 0 200 200" className="w-20 h-20 drop-shadow-xl" animate={{ y: [0, 4, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}>
                <defs>
                  <linearGradient id="rSkin2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#FDEBD0" /><stop offset="100%" stopColor="#F5CBA7" /></linearGradient>
                  <linearGradient id="rHair2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#171C4A" /><stop offset="100%" stopColor="#2a2f6a" /></linearGradient>
                  <linearGradient id="rShirt2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#F2DD85" /><stop offset="100%" stopColor="#e8c95a" /></linearGradient>
                </defs>
                <ellipse cx="100" cy="55" rx="40" ry="38" fill="url(#rHair2)" />
                <path d="M60 55 Q60 18 100 14 Q140 18 140 55" fill="url(#rHair2)" />
                <circle cx="100" cy="68" r="32" fill="url(#rSkin2)" />
                <ellipse cx="86" cy="63" rx="4" ry="4.5" fill="#171C4A"><animate attributeName="ry" values="4.5;1;4.5" dur="5s" repeatCount="indefinite" begin="1s" /></ellipse>
                <ellipse cx="114" cy="63" rx="4" ry="4.5" fill="#171C4A"><animate attributeName="ry" values="4.5;1;4.5" dur="5s" repeatCount="indefinite" begin="1s" /></ellipse>
                <path d="M87 74 Q100 86 113 74" fill="none" stroke="#D4836A" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M74 98 L126 98 L132 155 L68 155 Z" fill="url(#rShirt2)" />
                <path d="M74 105 L50 90 L46 94" fill="none" stroke="url(#rShirt2)" strokeWidth="11" strokeLinecap="round" strokeLinejoin="round"
                  animate={{ rotate: [-5, 8, -5] }} style={{ transformOrigin: "74px 105px" }} />
                <path d="M126 105 L145 125 L140 130" fill="none" stroke="url(#rShirt2)" strokeWidth="11" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="46" cy="94" r="5" fill="url(#rSkin2)" />
                <circle cx="140" cy="130" r="5" fill="url(#rSkin2)" />
                <motion.circle cx="38" cy="75" r="2.5" fill="#F2DD85" animate={{ opacity: [0, 1, 0], scale: [0, 1.3, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }} />
              </motion.svg>
            </div>
          </div>
        </motion.div>

        {/* Search + Filters */}
        <motion.div variants={item} className="bg-white/70 backdrop-blur-xl rounded-2xl p-4 shadow-lg shadow-black/[0.03] border border-white/60 space-y-3">
          <div className="flex items-center gap-3">
            <Search size={16} className="text-gray-400 shrink-0" />
            <input value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="Search resources..." className="flex-1 bg-transparent text-sm outline-none text-gray-600 placeholder:text-gray-400" />
            {searchQuery && <button onClick={() => setSearchQuery("")} className="text-xs text-gray-400 hover:text-gray-600 cursor-pointer font-medium shrink-0">Clear</button>}
          </div>
          <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-gray-100/50">
            {TYPE_OPTIONS.map(opt => (
              <button key={opt.value} onClick={() => setFilterType(opt.value)} className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${filterType === opt.value ? "bg-[#171C4A] text-white shadow-md" : "text-gray-500 hover:text-[#171C4A] bg-white/60 border border-gray-200/60"}`}>
                {opt.label}
              </button>
            ))}
          </div>
        </motion.div>

        {allResources.length === 0 && (
          <motion.div variants={item} className="bg-white/70 backdrop-blur-xl rounded-[32px] p-12 shadow-lg border border-white/60 text-center">
            <BookOpen size={48} className="mx-auto text-gray-300 mb-4" />
            <p className="text-gray-500 font-medium mb-2">No resources generated yet.</p>
            <p className="text-gray-400 text-sm mb-6">Run the full analysis to get personalized learning recommendations for your goal: <strong className="text-[#171C4A]">{currentGoal}</strong></p>
            <button
              onClick={() => triggerAnalysis.mutate({ careerGoal: currentGoal })}
              disabled={triggerAnalysis.isPending}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#171C4A] text-white rounded-2xl font-bold hover:opacity-90 disabled:opacity-50 cursor-pointer transition shadow-lg shadow-[#171C4A]/20"
            >
              {triggerAnalysis.isPending ? <Loader2 size={20} className="animate-spin" /> : <Sparkles size={20} />}
              {triggerAnalysis.isPending ? "Generating..." : "Generate Resources"}
            </button>
          </motion.div>
        )}

        {allResources.length > 0 && filtered.length === 0 && (
          <motion.div variants={item} className="bg-white/70 backdrop-blur-xl rounded-[32px] p-12 shadow-lg border border-white/60 text-center">
            <BookOpen size={48} className="mx-auto text-gray-300 mb-4" />
            <p className="text-gray-500 font-medium">No resources match the selected filters.</p>
          </motion.div>
        )}

        <motion.div variants={item} className="space-y-6">
          {sections.map(section => (
            <div key={section.rank}>
              <div className={`flex items-center gap-2 mb-3 px-5 py-3 rounded-2xl ${STATUS_CONFIG[section.rank]?.sectionCls || "bg-gray-50/50 border-l-4 border-gray-300"}`}>
                <span className="text-lg">{STATUS_CONFIG[section.rank]?.icon || "📚"}</span>
                <h2 className="text-lg font-black text-[#171C4A]">{section.title}</h2>
                <span className="text-xs font-bold text-gray-500 bg-white/60 px-2.5 py-1 rounded-full">{section.entries.reduce((sum, [, items]) => sum + items.length, 0)} resources</span>
              </div>
              <div className="space-y-3">
                {section.entries.map(([skill, resources], si) => {
                  const status = STATUS_LABEL[skillRank[skill] ?? 999];
                  const done = resources.filter(r => r.completed).length;
                  const total = resources.length;
                  const isOpen = openGroups[skill] ?? (skillRank[skill] === 0);
                  return (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: si * 0.03 }}
                      className="bg-white/70 backdrop-blur-xl rounded-[24px] shadow-lg shadow-black/[0.03] border border-white/60 overflow-hidden transition hover:shadow-xl"
                    >
                      <button
                        onClick={() => setOpenGroups(prev => ({ ...prev, [skill]: !prev[skill] }))}
                        className="w-full flex items-center justify-between px-6 py-4 cursor-pointer transition hover:bg-gray-50/50"
                      >
                        <div className="flex items-center gap-3">
                          <h3 className="text-lg font-bold text-[#171C4A]">{skill}</h3>
                          {status && <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${status.cls}`}>{status.label}</span>}
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2 text-sm text-gray-400 font-medium">
                            <div className="w-20 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                              <div className="h-full rounded-full bg-[#171C4A] transition-all duration-300" style={{ width: `${(done / total) * 100}%` }} />
                            </div>
                            <span>{done}/{total}</span>
                          </div>
                          <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                            <ChevronDown size={20} className="text-gray-400" />
                          </motion.div>
                        </div>
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-5 grid grid-cols-1 md:grid-cols-2 gap-3">
                              {resources.map(resource => {
                                const diff = DIFFICULTY_STYLES[resource.difficulty] || DIFFICULTY_STYLES.beginner;
                                return (
                                  <div
                                    key={resource.id}
                                    className={`p-4 rounded-2xl border transition ${
                                      resource.completed
                                        ? "bg-green-50/50 border-green-200"
                                        : "bg-gray-50 border-gray-100 hover:border-gray-200 hover:shadow-sm"
                                    }`}
                                  >
                                    <div className="flex items-start gap-3">
                                      <button
                                        onClick={() => markComplete.mutate({ id: resource.id, completed: !resource.completed })}
                                        className="mt-px shrink-0 cursor-pointer"
                                      >
                                        {resource.completed ? (
                                          <CheckCircle size={20} className="text-green-500" />
                                        ) : (
                                          <Circle size={20} className="text-gray-300 hover:text-gray-400" />
                                        )}
                                      </button>
                                      <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2">
                                          <span className="text-base shrink-0">{TYPE_ICONS[resource.type] || "📄"}</span>
                                          <a href={resource.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-sm text-[#171C4A] truncate hover:underline">{resource.title}</a>
                                          <ExternalLink size={12} className="text-gray-400 shrink-0" />
                                          <button onClick={() => bookmark.mutate({ id: resource.id, bookmarked: !resource.bookmarked })} className="ml-auto shrink-0 cursor-pointer">
                                            <Star size={14} className={resource.bookmarked ? "fill-yellow-400 text-yellow-400" : "text-gray-300 hover:text-yellow-400"} />
                                          </button>
                                        </div>
                                        <p className="text-xs text-gray-500 mt-1 line-clamp-2">{resource.reason}</p>
                                        <div className="flex items-center gap-3 mt-2">
                                          <span className="flex items-center gap-1.5 text-xs text-gray-400">
                                            <span className={`w-2 h-2 rounded-full ${diff.dot}`} />{diff.label}
                                          </span>
                                          <span className="text-xs text-gray-400">{resource.platform}</span>
                                          {resource.duration && <span className="text-xs text-gray-400">⏱ {resource.duration}</span>}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

const STATUS_LABEL: Record<number, { label: string; cls: string }> = {
  0: { label: "Building", cls: "bg-yellow-100 text-yellow-700" },
  1: { label: "Learn Now", cls: "bg-red-100 text-red-700" },
  2: { label: "Learn Later", cls: "bg-gray-100 text-gray-500" },
};
