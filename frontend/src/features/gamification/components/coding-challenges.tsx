import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "@tanstack/react-router";
import { useAuth } from "@/features/authentication/hooks/use-auth";
import { ArrowLeft, Play, RotateCcw, CheckCircle2, XCircle, Lightbulb, Zap, ChevronDown, Sparkles } from "lucide-react";
import { getCodingSolution } from "@/services/api";

type Language = "javascript" | "python" | "typescript" | "java" | "cpp";

const LANGUAGES: { id: Language; label: string; icon: string }[] = [
  { id: "javascript", label: "JavaScript", icon: "🟨" },
  { id: "typescript", label: "TypeScript", icon: "🔷" },
  { id: "python", label: "Python", icon: "🐍" },
  { id: "java", label: "Java", icon: "☕" },
  { id: "cpp", label: "C++", icon: "⚙️" },
];

interface TestCase {
  id: number;
  input: string;
  expected: string;
  description: string;
}

interface StarterCodeMap {
  javascript: string;
  python: string;
  typescript: string;
  java: string;
  cpp: string;
}

interface Challenge {
  id: number;
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
  description: string;
  funcName: string;
  starterCode: StarterCodeMap;
  hint: string;
  testCases: TestCase[];
  xp: number;
  category: string;
}

interface TestResult {
  id: number;
  passed: boolean;
  description: string;
  input: string;
  expected: string;
  actual: string;
  error?: string;
}

const challenges: Challenge[] = [
  {
    id: 1, title: "Two Sum", difficulty: "Easy",
    description: `Write a function that takes an array of numbers and a target sum.
Return the indices of the two numbers that add up to the target.
Assume exactly one solution exists.`,
    funcName: "twoSum",
    starterCode: {
      javascript: `function twoSum(nums, target) {
  // Your code here
}`,
      typescript: `function twoSum(nums: number[], target: number): number[] {
  // Your code here
}`,
      python: `def two_sum(nums, target):
    # Your code here
    pass`,
      java: `public static int[] twoSum(int[] nums, int target) {
    // Your code here
    return new int[]{};
}`,
      cpp: `vector<int> twoSum(vector<int>& nums, int target) {
    // Your code here
    return {};
}`,
    },
    hint: "Try using a hash map to store seen values for O(n) lookup.",
    category: "Algorithms",
    xp: 50,
    testCases: [
      { id: 1, input: "([2,7,11,15], 9)", expected: "[0,1]", description: "Basic case" },
      { id: 2, input: "([3,2,4], 6)", expected: "[1,2]", description: "Unsorted array" },
      { id: 3, input: "([3,3], 6)", expected: "[0,1]", description: "Duplicate values" },
    ],
  },
  {
    id: 2, title: "FizzBuzz", difficulty: "Easy",
    description: `Write a function that returns an array of strings from 1 to n.
For multiples of 3 use "Fizz", for 5 use "Buzz",
for both use "FizzBuzz", otherwise the number as a string.`,
    funcName: "fizzBuzz",
    starterCode: {
      javascript: `function fizzBuzz(n) {
  // Your code here
}`,
      typescript: `function fizzBuzz(n: number): string[] {
  // Your code here
}`,
      python: `def fizz_buzz(n):
    # Your code here
    pass`,
      java: `public static String[] fizzBuzz(int n) {
    // Your code here
    return new String[]{};
}`,
      cpp: `vector<string> fizzBuzz(int n) {
    // Your code here
    return {};
}`,
    },
    hint: "Use modulo (%) to check divisibility. Check 15 (3*5) first!",
    category: "Logic",
    xp: 30,
    testCases: [
      { id: 1, input: "(5)", expected: '["1","2","Fizz","4","Buzz"]', description: "n = 5" },
      { id: 2, input: "(15)", expected: '["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]', description: "n = 15" },
      { id: 3, input: "(1)", expected: '["1"]', description: "n = 1" },
    ],
  },
  {
    id: 3, title: "Valid Parentheses", difficulty: "Medium",
    description: `Write a function that checks if a string of brackets
'(', ')', '{', '}', '[', ']' is valid.
A string is valid if brackets close in the correct order.`,
    funcName: "isValid",
    starterCode: {
      javascript: `function isValid(s) {
  // Your code here
}`,
      typescript: `function isValid(s: string): boolean {
  // Your code here
}`,
      python: `def is_valid(s):
    # Your code here
    pass`,
      java: `public static boolean isValid(String s) {
    // Your code here
    return false;
}`,
      cpp: `bool isValid(string s) {
    // Your code here
    return false;
}`,
    },
    hint: "Use a stack. Push opening brackets, pop and match on closing.",
    category: "Data Structures",
    xp: 75,
    testCases: [
      { id: 1, input: '"()"', expected: "true", description: "Simple parentheses" },
      { id: 2, input: '"()[]{}"', expected: "true", description: "All bracket types" },
      { id: 3, input: '"(]"', expected: "false", description: "Mismatched" },
      { id: 4, input: '"([)]"', expected: "false", description: "Wrong order" },
    ],
  },
  {
    id: 4, title: "Palindrome Check", difficulty: "Easy",
    description: `Write a function that returns true if a string is a palindrome
(reads the same forwards and backwards), ignoring case and non-alphanumeric characters.`,
    funcName: "isPalindrome",
    starterCode: {
      javascript: `function isPalindrome(s) {
  // Your code here
}`,
      typescript: `function isPalindrome(s: string): boolean {
  // Your code here
}`,
      python: `def is_palindrome(s):
    # Your code here
    pass`,
      java: `public static boolean isPalindrome(String s) {
    // Your code here
    return false;
}`,
      cpp: `bool isPalindrome(string s) {
    // Your code here
    return false;
}`,
    },
    hint: 'Clean the string with .toLowerCase() and replace non-alphanumeric, then compare with reverse.',
    category: "Strings",
    xp: 40,
    testCases: [
      { id: 1, input: '"racecar"', expected: "true", description: "Simple palindrome" },
      { id: 2, input: '"A man, a plan, a canal: Panama"', expected: "true", description: "With punctuation" },
      { id: 3, input: '"hello"', expected: "false", description: "Not a palindrome" },
    ],
  },
  {
    id: 5, title: "Array Chunk", difficulty: "Easy",
    description: `Write a function that splits an array into chunks of a given size.
Return an array of chunks.`,
    funcName: "chunkArray",
    starterCode: {
      javascript: `function chunkArray(arr, size) {
  // Your code here
}`,
      typescript: `function chunkArray<T>(arr: T[], size: number): T[][] {
  // Your code here
}`,
      python: `def chunk_array(arr, size):
    # Your code here
    pass`,
      java: `public static int[][] chunkArray(int[] arr, int size) {
    // Your code here
    return new int[][]{};
}`,
      cpp: `vector<vector<int>> chunkArray(vector<int>& arr, int size) {
    // Your code here
    return {};
}`,
    },
    hint: "Use a while loop with .slice() to extract chunks.",
    category: "Arrays",
    xp: 35,
    testCases: [
      { id: 1, input: "([1,2,3,4,5], 2)", expected: "[[1,2],[3,4],[5]]", description: "Uneven split" },
      { id: 2, input: "([1,2,3,4], 2)", expected: "[[1,2],[3,4]]", description: "Even split" },
      { id: 3, input: "([1,2,3], 1)", expected: "[[1],[2],[3]]", description: "Size 1" },
    ],
  },
  {
    id: 6, title: "Missing Number", difficulty: "Medium",
    description: `Given an array of n distinct numbers taken from 0..n,
find the one that is missing from the array.`,
    funcName: "missingNumber",
    starterCode: {
      javascript: `function missingNumber(nums) {
  // Your code here
}`,
      typescript: `function missingNumber(nums: number[]): number {
  // Your code here
}`,
      python: `def missing_number(nums):
    # Your code here
    pass`,
      java: `public static int missingNumber(int[] nums) {
    // Your code here
    return -1;
}`,
      cpp: `int missingNumber(vector<int>& nums) {
    // Your code here
    return -1;
}`,
    },
    hint: "Sum of 0..n is n*(n+1)/2. Subtract actual sum to find missing.",
    category: "Math",
    xp: 60,
    testCases: [
      { id: 1, input: "([3,0,1])", expected: "2", description: "Missing 2" },
      { id: 2, input: "([0,1])", expected: "2", description: "Missing at end" },
      { id: 3, input: "([9,6,4,2,3,5,7,0,1])", expected: "8", description: "Larger array" },
    ],
  },
  {
    id: 7, title: "Debounce", difficulty: "Hard",
    description: `Write a debounce function that takes a callback and a delay (ms).
Return a function that only calls the callback after 'delay' ms
since the last invocation.`,
    funcName: "debounce",
    starterCode: {
      javascript: `function debounce(fn, delay) {
  // Your code here
}`,
      typescript: `function debounce(fn: (...args: any[]) => void, delay: number): (...args: any[]) => void {
  // Your code here
}`,
      python: `def debounce(fn, delay):
    # Your code here
    pass`,
      java: `public static Runnable debounce(Runnable fn, int delay) {
    // Your code here
    return null;
}`,
      cpp: `// Debounce requires async - conceptual only
function<void()> debounce(function<void()> fn, int delay) {
    // Your code here
    return nullptr;
}`,
    },
    hint: "Use setTimeout and clearTimeout. Store the timer ID in a closure.",
    category: "JavaScript",
    xp: 100,
    testCases: [
      { id: 1, input: "('quick', 100)", expected: "called once", description: "Multiple quick calls collapse" },
      { id: 2, input: "('slow', 50)", expected: "called once", description: "Single call after delay" },
    ],
  },
  {
    id: 8, title: "Deep Flatten", difficulty: "Hard",
    description: `Write a function that recursively flattens a nested array
to a single level.`,
    funcName: "flatten",
    starterCode: {
      javascript: `function flatten(arr) {
  // Your code here
}`,
      typescript: `function flatten<T>(arr: (T | T[])[]): T[] {
  // Your code here
}`,
      python: `def flatten(arr):
    # Your code here
    pass`,
      java: `public static int[] flatten(int[][] arr) {
    // Your code here
    return new int[]{};
}`,
      cpp: `vector<int> flatten(vector<vector<int>>& arr) {
    // Your code here
    return {};
}`,
    },
    hint: "Use recursion with reduce(). Check if element is an array, then recurse.",
    category: "Recursion",
    xp: 90,
    testCases: [
      { id: 1, input: "([1,[2,[3,4]],5])", expected: "[1,2,3,4,5]", description: "Nested 3 levels" },
      { id: 2, input: "([1,[],2])", expected: "[1,2]", description: "Empty inner array" },
      { id: 3, input: "([1,2,3])", expected: "[1,2,3]", description: "Already flat" },
    ],
  },
];

const difficultyColors: Record<string, string> = {
  Easy: "bg-green-100 text-green-700",
  Medium: "bg-yellow-100 text-yellow-700",
  Hard: "bg-red-100 text-red-700",
};

function getApiBase(): string {
  const raw = import.meta.env.VITE_API_URL || import.meta.env.VITE_API_BASE_URL;
  if (raw && raw !== "") return raw;
  const isLocal = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
  return isLocal ? "http://localhost:5001" : "https://personalized-learning-roadmap-backend.onrender.com";
}

async function runCodeOnBackend(
  code: string, language: Language, fnName: string, testCases: TestCase[],
): Promise<TestResult[]> {
  const token = localStorage.getItem("auth_token");
  const res = await fetch(`${getApiBase()}/api/code/run`, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...(token ? { Authorization: `Bearer ${token}` } : {}) },
    body: JSON.stringify({ code, language, fnName, testCases }),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error || "Code execution failed");
  }
  const data = await res.json();
  return data.results;
}

function runTestsJs(code: string, fnName: string, testCases: TestCase[]): TestResult[] {
  return testCases.map((tc) => {
    try {
      const wrapped = code + `\n;return ${fnName}${tc.input};`;
      const fn = new Function(wrapped);
      const actual = fn();

      let actualStr: string;
      if (actual === undefined) actualStr = "undefined";
      else if (actual === null) actualStr = "null";
      else if (Array.isArray(actual)) actualStr = JSON.stringify(actual);
      else if (typeof actual === "object") actualStr = JSON.stringify(actual);
      else actualStr = String(actual);

      const passed = actualStr === tc.expected;
      return { id: tc.id, passed, description: tc.description, input: tc.input, expected: tc.expected, actual: actualStr };
    } catch (err: unknown) {
      return { id: tc.id, passed: false, description: tc.description, input: tc.input, expected: tc.expected, actual: "Error", error: err instanceof Error ? err.message : String(err) };
    }
  });
}

function getGamificationKey(userId: string, suffix: string) {
  return `gamification_${userId}_${suffix}`;
}

function loadCompleted(uid: string): number[] {
  try {
    const raw = localStorage.getItem(getGamificationKey(uid, "challenges_completed"));
    return raw ? JSON.parse(raw) : [];
  } catch { return []; }
}

function saveCompleted(uid: string, ids: number[]) {
  localStorage.setItem(getGamificationKey(uid, "challenges_completed"), JSON.stringify(ids));
}

function loadXp(uid: string): number {
  try {
    const raw = localStorage.getItem(getGamificationKey(uid, "xp"));
    return raw ? Number.parseInt(raw, 10) || 0 : 0;
  } catch { return 0; }
}

function saveXp(uid: string, xp: number) {
  localStorage.setItem(getGamificationKey(uid, "xp"), String(xp));
}

function recordActivity(uid: string) {
  const key = `gamification_${uid}_activity`;
  const today = new Date();
  const dateKey = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
  try {
    const raw = localStorage.getItem(key);
    const data = raw ? JSON.parse(raw) : {};
    data[dateKey] = (data[dateKey] || 0) + 1;
    localStorage.setItem(key, JSON.stringify(data));
  } catch {}
}

export default function CodingChallenges() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const userId = user?.username || user?.email || "anonymous";
  const [selected, setSelected] = useState<Challenge>(challenges[0]);
  const [language, setLanguage] = useState<Language>("javascript");
  const [code, setCode] = useState(challenges[0].starterCode.javascript);
  const [results, setResults] = useState<TestResult[] | null>(null);
  const [running, setRunning] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [completedIds, setCompletedIds] = useState<number[]>(() => loadCompleted(userId));
  const [xp, setXp] = useState(() => loadXp(userId));
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);
  const [langOpen, setLangOpen] = useState(false);
  const [solution, setSolution] = useState<{ solution: string; explanation: string; timeComplexity?: string; spaceComplexity?: string } | null>(null);
  const [solutionLoading, setSolutionLoading] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const editorRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    setCompletedIds(loadCompleted(userId));
    setXp(loadXp(userId));
  }, [userId]);

  const handleSelect = useCallback((ch: Challenge) => {
    setSelected(ch);
    setCode(ch.starterCode[language] || ch.starterCode.javascript);
    setResults(null);
    setShowHint(false);
    setShowSolution(false);
    setSolution(null);
    if (editorRef.current) editorRef.current.focus();
  }, [language]);

  const handleLanguageChange = useCallback((lang: Language) => {
    setLanguage(lang);
    setCode(selected.starterCode[lang] || selected.starterCode.javascript);
    setResults(null);
    setSolution(null);
    setShowSolution(false);
    setLangOpen(false);
  }, [selected]);

  const handleRun = useCallback(async () => {
    setRunning(true);
    setResults(null);

    try {
      let res: TestResult[];
      if (language === "javascript" || language === "typescript") {
        res = runTestsJs(code, selected.funcName, selected.testCases);
      } else {
        res = await runCodeOnBackend(code, language, selected.funcName, selected.testCases);
      }

      setResults(res);

      const allPassed = res.every((r) => r.passed);
      if (allPassed && !completedIds.includes(selected.id)) {
        const newCompleted = [...completedIds, selected.id];
        const newXp = xp + selected.xp;
        setCompletedIds(newCompleted);
        setXp(newXp);
        saveCompleted(userId, newCompleted);
        saveXp(userId, newXp);
        recordActivity(userId);
        setToast({ message: `Challenge complete! +${selected.xp} XP 🎉`, type: "success" });
        setTimeout(() => setToast(null), 3000);
      } else if (allPassed) {
        setToast({ message: "All tests pass! Already completed ✅", type: "success" });
        setTimeout(() => setToast(null), 2500);
      }
    } catch (err: unknown) {
      setToast({ message: err instanceof Error ? err.message : "Execution failed", type: "error" });
      setTimeout(() => setToast(null), 4000);
    } finally {
      setRunning(false);
    }
  }, [code, language, selected, completedIds, xp, userId]);

  const handleReset = useCallback(() => {
    setCode(selected.starterCode[language] || selected.starterCode.javascript);
    setResults(null);
    setShowHint(false);
    setShowSolution(false);
  }, [selected, language]);

  const handleGetSolution = useCallback(async () => {
    setSolutionLoading(true);
    setSolution(null);
    setShowSolution(true);
    try {
      const langLabel = LANGUAGES.find((l) => l.id === language)?.label ?? language;
      const data = await getCodingSolution(
        selected.title,
        selected.description,
        langLabel,
        code || undefined,
      );
      setSolution(data);
      setCode(data.solution);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Failed to generate solution";
      setToast({ message: msg, type: "error" });
      setTimeout(() => setToast(null), 4000);
    } finally {
      setSolutionLoading(false);
    }
  }, [selected, code, language]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const start = e.currentTarget.selectionStart;
      const end = e.currentTarget.selectionEnd;
      const newVal = code.slice(0, start) + "  " + code.slice(end);
      setCode(newVal);
      requestAnimationFrame(() => {
        if (editorRef.current) editorRef.current.selectionStart = editorRef.current.selectionEnd = start + 2;
      });
    }
    if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      handleRun();
    }
  }, [code, handleRun]);

  const passedCount = results?.filter((r) => r.passed).length ?? 0;
  const totalCount = results?.length ?? 0;
  const currentLang = LANGUAGES.find((l) => l.id === language)!;

  return (
    <div className="min-h-screen bg-[#F8F6E8]">
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <button
            onClick={() => navigate({ to: "/gamification" })}
            className="p-2 bg-white rounded-xl shadow hover:bg-gray-50 transition shrink-0"
          >
            <ArrowLeft size={20} className="text-[#171C4A]" />
          </button>
          <div className="min-w-0 flex-1">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-[#171C4A]">Coding Challenges</h1>
            <p className="text-gray-500 text-sm mt-1">Solve challenges, earn XP, sharpen your skills</p>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
            <div className="bg-white px-3 sm:px-4 py-2 rounded-2xl shadow text-xs sm:text-sm font-bold text-[#171C4A] whitespace-nowrap">
              XP: {xp}
            </div>
            <div className="bg-[#171C4A] text-white px-3 sm:px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap">
              {completedIds.length}/{challenges.length} solved
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6">
          <div className="space-y-2">
            {["Easy", "Medium", "Hard"].map((diff) => (
              <div key={diff}>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 px-2">{diff}</p>
                {challenges.filter((c) => c.difficulty === diff).map((ch) => {
                  const done = completedIds.includes(ch.id);
                  return (
                    <button
                      key={ch.id}
                      onClick={() => handleSelect(ch)}
                      className={`w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium transition ${
                        selected.id === ch.id ? "bg-[#171C4A] text-white shadow" : "bg-white text-gray-700 hover:bg-gray-100 shadow-sm"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="truncate">{ch.title}</span>
                        {done && <CheckCircle2 size={14} className="text-green-500 shrink-0" />}
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`text-[10px] px-1.5 py-0.5 rounded font-bold ${difficultyColors[ch.difficulty]}`}>
                          {ch.difficulty}
                        </span>
                        <span className="text-[10px] text-gray-400">+{ch.xp} XP</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <motion.div
              key={selected.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-[24px] p-6 shadow-xl"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h2 className="text-2xl font-bold text-[#171C4A]">{selected.title}</h2>
                  <div className="flex items-center gap-2 mt-1">
                    <span className={`text-xs px-2 py-0.5 rounded font-bold ${difficultyColors[selected.difficulty]}`}>
                      {selected.difficulty}
                    </span>
                    <span className="text-xs text-gray-400">{selected.category}</span>
                    <span className="text-xs text-gray-400">·</span>
                    <span className="text-xs text-yellow-600 font-bold">+{selected.xp} XP</span>
                  </div>
                </div>
                <button
                  onClick={() => setShowHint(!showHint)}
                  className="p-2 rounded-xl hover:bg-gray-100 transition text-gray-400 hover:text-yellow-600"
                  title="Show hint"
                >
                  <Lightbulb size={18} />
                </button>
              </div>

              <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">{selected.description}</p>

              <AnimatePresence>
                {showHint && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-3 bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-3 text-sm text-yellow-800 overflow-hidden"
                  >
                    <strong>💡 Hint:</strong> {selected.hint}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            <div className="bg-[#1e1e2e] rounded-[24px] overflow-hidden shadow-xl">
              <div className="flex items-center justify-between px-5 py-3 bg-[#181825]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-3 text-sm text-gray-400 font-mono">{selected.funcName}(...)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-gray-500 hidden sm:block">Ctrl+Enter to run</span>
                  <button
                    onClick={handleReset}
                    className="p-1.5 rounded-lg hover:bg-white/10 transition text-gray-400 hover:text-white"
                    title="Reset code"
                  >
                    <RotateCcw size={14} />
                  </button>
                </div>
              </div>
              <textarea
                ref={editorRef}
                value={code}
                onChange={(e) => setCode(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full bg-[#1e1e2e] text-[#cdd6f4] font-mono text-sm p-5 outline-none resize-none border-none"
                style={{ minHeight: "220px", lineHeight: "1.6", tabSize: 2 }}
                spellCheck={false}
              />
                <div className="flex items-center justify-between px-5 py-3 bg-[#181825]">
                  <button
                    onClick={handleGetSolution}
                    disabled={solutionLoading}
                    className="flex items-center gap-2 px-5 py-2 bg-[#f5c2e7] text-[#1e1e2e] rounded-xl font-bold text-sm hover:bg-[#f0b6dc] transition disabled:opacity-50"
                  >
                    <Sparkles size={14} />
                    {solutionLoading ? "Generating..." : "Show Solution"}
                  </button>
                <div className="relative">
                  <button
                    onClick={() => setLangOpen(!langOpen)}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#313244] text-gray-300 text-xs font-semibold hover:bg-[#45475a] transition"
                  >
                    <span>{currentLang.icon}</span>
                    <span>{currentLang.label}</span>
                    <ChevronDown size={12} />
                  </button>
                  {langOpen && (
                    <>
                      <div className="fixed inset-0 z-10" onClick={() => setLangOpen(false)} />
                      <div className="absolute bottom-full mb-2 left-0 z-20 bg-[#313244] rounded-xl overflow-hidden shadow-2xl min-w-[160px]">
                        {LANGUAGES.map((l) => (
                          <button
                            key={l.id}
                            onClick={() => handleLanguageChange(l.id)}
                            className={`w-full flex items-center gap-2 px-4 py-2.5 text-xs font-medium transition ${
                              language === l.id ? "bg-[#45475a] text-white" : "text-gray-300 hover:bg-[#45475a] hover:text-white"
                            }`}
                          >
                            <span>{l.icon}</span>
                            <span>{l.label}</span>
                          </button>
                        ))}
                      </div>
                    </>
                  )}
                </div>
                <button
                  onClick={handleRun}
                  disabled={running}
                  className="flex items-center gap-2 px-5 py-2 bg-[#89b4fa] text-[#1e1e2e] rounded-xl font-bold text-sm hover:bg-[#74c7ec] transition disabled:opacity-50"
                >
                  <Play size={14} fill="currentColor" />
                  {running ? "Running..." : "Run Tests"}
                </button>
              </div>
            </div>

            {results && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-[24px] p-6 shadow-xl"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-[#171C4A]">Test Results</h3>
                  <div className="flex items-center gap-2">
                    {passedCount === totalCount ? (
                      <span className="flex items-center gap-1 text-green-600 font-bold text-sm">
                        <Zap size={16} />
                        All {totalCount}/{totalCount} passed
                      </span>
                    ) : (
                      <span className="text-sm text-gray-500">{passedCount}/{totalCount} passed</span>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  {results.map((r) => (
                    <div
                      key={r.id}
                      className={`rounded-xl p-3 text-sm ${r.passed ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"}`}
                    >
                      <div className="flex items-center gap-2">
                        {r.passed ? <CheckCircle2 size={16} className="text-green-600 shrink-0" /> : <XCircle size={16} className="text-red-600 shrink-0" />}
                        <span className={r.passed ? "text-green-800" : "text-red-800"}>{r.description}</span>
                      </div>
                      {!r.passed && (
                        <div className="mt-2 ml-6 space-y-1 font-mono text-xs">
                          <div className="text-gray-500">Input: <span className="text-gray-700">{r.input}</span></div>
                          <div className="text-gray-500">Expected: <span className="text-green-700">{r.expected}</span></div>
                          <div className="text-gray-500">Got: <span className="text-red-700">{r.actual}</span></div>
                          {r.error && <div className="text-red-600 mt-1">Error: {r.error}</div>}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {showSolution && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-[24px] p-6 shadow-xl"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-[#171C4A] text-lg">AI Solution</h3>
                  <button onClick={() => setShowSolution(false)} className="text-sm text-gray-400 hover:text-gray-600">
                    Hide
                  </button>
                </div>

                {solutionLoading ? (
                  <div className="flex items-center justify-center py-8">
                    <div className="flex items-center gap-2 text-gray-400">
                      <Sparkles size={18} className="animate-pulse" />
                      <span>Generating solution...</span>
                    </div>
                  </div>
                ) : solution ? (
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-gray-500 mb-2">Solution Code</p>
                      <pre className="p-4 bg-[#1e1e2e] text-[#cdd6f4] font-mono text-sm rounded-2xl overflow-x-auto whitespace-pre-wrap">
                        {solution.solution}
                      </pre>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-500 mb-2">Explanation</p>
                      <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">{solution.explanation}</p>
                    </div>
                    {(solution.timeComplexity || solution.spaceComplexity) && (
                      <div className="grid grid-cols-2 gap-4">
                        {solution.timeComplexity && (
                          <div className="bg-gray-50 rounded-2xl p-4">
                            <span className="text-xs font-semibold text-gray-500">Time Complexity</span>
                            <p className="text-lg font-bold text-[#171C4A] mt-1">{solution.timeComplexity}</p>
                          </div>
                        )}
                        {solution.spaceComplexity && (
                          <div className="bg-gray-50 rounded-2xl p-4">
                            <span className="text-xs font-semibold text-gray-500">Space Complexity</span>
                            <p className="text-lg font-bold text-[#171C4A] mt-1">{solution.spaceComplexity}</p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ) : null}
              </motion.div>
            )}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
          >
            <div className={`px-6 py-3 rounded-2xl shadow-2xl font-bold text-sm ${toast.type === "success" ? "bg-green-600 text-white" : "bg-red-600 text-white"}`}>
              {toast.message}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
