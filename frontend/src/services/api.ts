const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5001";

export function getAuthHeaders(): HeadersInit {
  const token = localStorage.getItem("auth_token");
  const headers: HeadersInit = { "Content-Type": "application/json" };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  return headers;
}

export function getAuthToken(): string | null {
  return localStorage.getItem("auth_token");
}

export async function analyzeResume(file: File, careerGoal: string) {
  const base64 = await fileToBase64(file);
  const response = await fetch(`${API_BASE_URL}/api/resume/analyze`, {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify({
      file: base64,
      fileName: file.name,
      mimeType: file.type || "application/pdf",
      careerGoal,
    }),
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.error || "Failed to analyze resume");
  }

  return response.json();
}

export async function analyzeSkillGap(
  skills: string[],
  careerGoal: string,
  experience?: { role: string; company: string; duration: string }[],
  education?: { degree: string; school: string; year: string }[],
  experienceLevel?: "fresher" | "mid" | "senior"
) {
  const body: Record<string, unknown> = { skills, careerGoal };
  if (experience) body.experience = experience;
  if (education) body.education = education;
  if (experienceLevel) body.experienceLevel = experienceLevel;

  const response = await fetch(`${API_BASE_URL}/api/skill-gap/analyze`, {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.error || "Failed to analyze skill gap");
  }

  return response.json();
}

export async function getLatestSkillGap() {
  const response = await fetch(`${API_BASE_URL}/api/skill-gap/latest`, {
    headers: getAuthHeaders(),
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.error || "Failed to fetch skill gap data");
  }

  return response.json();
}

export async function submitAssessment(assessmentId: string, answers: string[]) {
  const response = await fetch(`${API_BASE_URL}/api/assessment/submit`, {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify({ assessmentId, answers }),
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.error || "Failed to submit assessment");
  }

  return response.json();
}

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

// Must exactly match backend careerGoals.ts CAREER_GOALS array
export const CAREER_GOALS = [
  "AI / Machine Learning Engineer",
  "Frontend Engineer",
  "Backend Engineer",
  "Full-Stack Developer",
  "Cloud Engineer (AWS / Azure / GCP)",
  "DevOps / Platform Engineer",
  "Data Analyst",
  "Data Engineer",
  "Mobile Developer",
  "Data Scientist",
  "Site Reliability Engineer (SRE)",
  "UI/UX Designer",
  "Product Manager",
  "Forward Deployed Engineer",
  "Cybersecurity Specialist",
  "Software Engineer (Product-Based Companies)",
] as const;

export type CareerGoal = (typeof CAREER_GOALS)[number];

export async function getUserProfile() {
  const response = await fetch(`${API_BASE_URL}/api/user/profile`, {
    headers: getAuthHeaders(),
  });
  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.error || "Failed to fetch user profile");
  }
  return response.json();
}

export async function getDashboardData() {
  const response = await fetch(`${API_BASE_URL}/api/user/dashboard`, {
    headers: getAuthHeaders(),
  });
  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.error || "Failed to fetch dashboard data");
  }
  return response.json();
}

export async function getGithubAnalysis() {
  const response = await fetch(`${API_BASE_URL}/api/github/analyze`, {
    method: "POST",
    headers: getAuthHeaders(),
  });
  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.error || "Failed to fetch GitHub analysis");
  }
  return response.json();
}

export async function saveResumeData(resumeData: Record<string, unknown>, careerGoal: string) {
  const response = await fetch(`${API_BASE_URL}/api/user/resume`, {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify({ resumeData, careerGoal }),
  });
  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.error || "Failed to save resume data");
  }
  return response.json();
}

export async function syncGithubUsername(githubUsername: string) {
  const response = await fetch(`${API_BASE_URL}/api/github/sync`, {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify({ githubUsername }),
  });
  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.error || "Failed to sync GitHub username");
  }
  return response.json();
}

export async function updateCareerGoal(careerGoal: string) {
  const response = await fetch(`${API_BASE_URL}/api/user/career-goal`, {
    method: "PATCH",
    headers: getAuthHeaders(),
    body: JSON.stringify({ careerGoal }),
  });
  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.error || "Failed to update career goal");
  }
  return response.json();
}

export interface ResourceItem {
  id: string;
  skill: string;
  title: string;
  url: string;
  platform: string;
  type: string;
  difficulty: string;
  duration: string | null;
  reason: string;
  completed: boolean;
  bookmarked: boolean;
  createdAt: string;
}

export interface ResourceResponse {
  recommendations: ResourceItem[];
  groupedBySkill: Record<string, ResourceItem[]>;
  total: number;
  completedCount: number;
}

export async function getResourceRecommendations(goal?: string) {
  const params = goal ? `?goal=${encodeURIComponent(goal)}` : "";
  const response = await fetch(`${API_BASE_URL}/api/recommendations${params}`, {
    headers: getAuthHeaders(),
  });
  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.error || "Failed to fetch recommendations");
  }
  return response.json() as Promise<ResourceResponse>;
}

export async function markResourceComplete(id: string, completed: boolean) {
  const response = await fetch(`${API_BASE_URL}/api/recommendations/${id}/complete`, {
    method: "PATCH",
    headers: getAuthHeaders(),
    body: JSON.stringify({ completed }),
  });
  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.error || "Failed to update resource");
  }
  return response.json();
}

export async function bookmarkResource(id: string, bookmarked: boolean) {
  const response = await fetch(`${API_BASE_URL}/api/recommendations/${id}/bookmark`, {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify({ bookmarked }),
  });
  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.error || "Failed to bookmark resource");
  }
  return response.json();
}

export async function getResourceSnapshot() {
  const response = await fetch(`${API_BASE_URL}/api/recommendations/snapshot`, {
    headers: getAuthHeaders(),
  });
  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.error || "Failed to fetch snapshot");
  }
  return response.json();
}

export interface TriggerAnalysisInput {
  careerGoal: string;
  resumeData?: Record<string, unknown>;
  githubData?: Record<string, unknown>;
}

export async function triggerFullAnalysis(input: TriggerAnalysisInput) {
  const response = await fetch(`${API_BASE_URL}/api/recommendations/analyze`, {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify(input),
  });
  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.error || "Failed to trigger full analysis");
  }
  return response.json();
}

// ─── Career Goals ────────────────────────────────────────────────────────────

export async function getCareerGoals() {
  const response = await fetch(`${API_BASE_URL}/api/skill-gap/career-goals`, {
    headers: getAuthHeaders(),
  });
  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.error || "Failed to fetch career goals");
  }
  return response.json() as Promise<{
    goals: { id: string; title: string; description: string; category: string }[];
  }>;
}

// ─── Job Matches ──────────────────────────────────────────────────────────────

export interface CompanyMatch {
  company: string;
  title: string;
  location: string;
  matchScore: number;
  matchedSkills: string[];
  missingSkills: string[];
  totalRequiredSkills: number;
  experienceLevel: string;
}

export async function getJobMatches(careerGoal: string) {
  const response = await fetch(
    `${API_BASE_URL}/api/skill-gap/job-matches?careerGoal=${encodeURIComponent(careerGoal)}`,
    { headers: getAuthHeaders() }
  );
  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.error || "Failed to fetch job matches");
  }
  return response.json() as Promise<{
    matches: CompanyMatch[];
    totalMatches: number;
    careerGoal: string;
  }>;
}

// ─── Progress History ─────────────────────────────────────────────────────────

export interface ProgressPoint {
  date: string;
  matchScore: number;
  skillsCount: number;
}

export async function getProgressHistory() {
  const response = await fetch(`${API_BASE_URL}/api/skill-gap/progress`, {
    headers: getAuthHeaders(),
  });
  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.error || "Failed to fetch progress");
  }
  return response.json() as Promise<{
    progress: ProgressPoint[];
    currentScore: number;
    trend: "up" | "down" | "stable";
  }>;
}
