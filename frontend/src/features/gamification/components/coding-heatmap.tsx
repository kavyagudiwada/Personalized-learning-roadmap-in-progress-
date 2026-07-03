import { useMemo } from "react";
import { motion } from "framer-motion";

interface HeatmapProps {
  userId: string;
}

function activityKey(uid: string) {
  return `gamification_${uid}_activity`;
}

function loadActivity(uid: string): Record<string, number> {
  try {
    const raw = localStorage.getItem(activityKey(uid));
    return raw ? JSON.parse(raw) : {};
  } catch { return {}; }
}

function getLevel(count: number): 0 | 1 | 2 | 3 | 4 {
  if (count <= 0) return 0;
  if (count === 1) return 1;
  if (count <= 3) return 2;
  if (count <= 6) return 3;
  return 4;
}

const LEVEL_COLORS = [
  "bg-[#ebedf0]",
  "bg-[#9be9a8]",
  "bg-[#40c463]",
  "bg-[#30a14e]",
  "bg-[#216e39]",
];

const LEVEL_LEGEND = ["No activity", "1 activity", "2-3", "4-6", "7+"];
const DAY_LABELS = ["", "Mon", "", "Wed", "", "Fri", ""];
const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

const CELL = 13;
const GAP = 3;
const COL_W = CELL + GAP;

function getMonday(d: Date): Date {
  const date = new Date(d);
  const day = date.getDay();
  date.setDate(date.getDate() - (day === 0 ? 6 : day - 1));
  date.setHours(0, 0, 0, 0);
  return date;
}

function fmt(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

export default function CodingHeatmap({ userId }: HeatmapProps) {
  const { weeks, total, longestStreak, currentStreak, monthLabels } = useMemo(() => {
    const activity = loadActivity(userId);

    const today = new Date();
    today.setHours(23, 59, 59, 999);
    const endMonday = getMonday(today);
    endMonday.setDate(endMonday.getDate() + 6);

    const startMonday = new Date(endMonday);
    startMonday.setDate(startMonday.getDate() - 363);

    const weeks: { date: Date; count: number; level: 0 | 1 | 2 | 3 | 4; label: string }[][] = [];
    const cursor = new Date(startMonday);
    let total = 0;

    while (cursor <= endMonday) {
      const week: typeof weeks[number] = [];
      for (let d = 0; d < 7; d++) {
        const date = new Date(cursor);
        const key = fmt(date);
        const count = activity[key] || 0;
        total += count;
        week.push({ date, count, level: getLevel(count), label: key });
        cursor.setDate(cursor.getDate() + 1);
      }
      weeks.push(week);
    }

    const monthLabels: { label: string; left: number }[] = [];
    let lastMonth = -1;
    for (let c = 0; c < weeks.length; c++) {
      const m = weeks[c][0].date.getMonth();
      if (m !== lastMonth) {
        if (c > 0) {
          const prevW = weeks[c - 1];
          monthLabels.push({ label: MONTHS[prevW[0].date.getMonth()], left: c * COL_W });
        }
        lastMonth = m;
      }
    }
    const lastW = weeks[weeks.length - 1];
    monthLabels.push({ label: MONTHS[lastW[0].date.getMonth()], left: weeks.length * COL_W });

    const sortedDays = Object.entries(activity)
      .filter(([, c]) => c > 0)
      .sort(([a], [b]) => a.localeCompare(b));

    let longestStreak = 0;
    let currentStreakVal = 0;
    let tempStreak = 0;

    for (let i = 0; i < sortedDays.length; i++) {
      if (i === 0) { tempStreak = 1; }
      else {
        const prev = new Date(sortedDays[i - 1][0]);
        const curr = new Date(sortedDays[i][0]);
        const diff = (curr.getTime() - prev.getTime()) / (1000 * 60 * 60 * 24);
        tempStreak = diff === 1 ? tempStreak + 1 : 1;
      }
      longestStreak = Math.max(longestStreak, tempStreak);
    }

    const todayKey = fmt(today);
    currentStreakVal = activity[todayKey] ? 1 : 0;
    if (currentStreakVal) {
      for (let i = sortedDays.length - 2; i >= 0; i--) {
        const curr = new Date(sortedDays[i][0]);
        const next = new Date(sortedDays[i + 1][0]);
        const diff = (next.getTime() - curr.getTime()) / (1000 * 60 * 60 * 24);
        if (diff === 1) currentStreakVal++;
        else break;
      }
    }

    return { weeks, total, longestStreak, currentStreak: currentStreakVal, monthLabels };
  }, [userId]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-white rounded-[26px] p-6 shadow-sm"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="text-xl">📊</span>
          <h2 className="text-lg font-black text-[#22254B]">Coding Activity</h2>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <span className="text-gray-500">
            <strong className="text-[#22254B]">{total}</strong> total actions
          </span>
          <span className="text-gray-500">
            🔥 <strong className="text-[#22254B]">{currentStreak}</strong> day streak
          </span>
          <span className="text-gray-500">
            🏆 <strong className="text-[#22254B]">{longestStreak}</strong> best
          </span>
        </div>
      </div>

      <div className="overflow-x-auto pb-1">
        <div className="relative" style={{ paddingLeft: 30 }}>
          {/* Month labels */}
          <div className="flex" style={{ height: 16, marginBottom: 2, marginLeft: -4 }}>
            {monthLabels.map((m, i) => (
              <div
                key={m.label + i}
                className="text-[10px] font-semibold text-gray-400 leading-none pt-0.5 shrink-0"
                style={{ width: m.left - (i > 0 ? monthLabels[i - 1].left : 0), minWidth: 0 }}
              >
                {m.label}
              </div>
            ))}
          </div>

          <div className="flex">
            {/* Day-of-week labels */}
            <div className="flex flex-col shrink-0" style={{ width: 24, gap: GAP }}>
              {DAY_LABELS.map((label, i) => (
                <div
                  key={i}
                  className="text-[9px] text-gray-400 leading-none flex items-center justify-end pr-1"
                  style={{ height: CELL }}
                >
                  {label}
                </div>
              ))}
            </div>

            {/* Week columns */}
            <div className="flex" style={{ gap: GAP }}>
              {weeks.map((week, wi) => (
                <div key={wi} className="flex flex-col" style={{ gap: GAP }}>
                  {week.map((day) => (
                    <div
                      key={day.label}
                      title={`${day.label}: ${day.count} activities`}
                      className={`rounded-[3px] ${LEVEL_COLORS[day.level]} transition-colors`}
                      style={{ width: CELL, height: CELL }}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-3 pl-[30px]">
        <div className="flex items-center gap-1.5 text-[10px] text-gray-400">
          <span>Less</span>
          {LEVEL_COLORS.map((color, i) => (
            <div key={i} className={`rounded ${color}`} style={{ width: 11, height: 11 }} title={LEVEL_LEGEND[i]} />
          ))}
          <span>More</span>
        </div>
        <div className="text-[10px] text-gray-400">Past 364 days</div>
      </div>
    </motion.div>
  );
}
