const rawApiUrl = import.meta.env.VITE_API_URL;
const isLocal = typeof window !== "undefined" && (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1");
const API_BASE_URL = rawApiUrl && rawApiUrl !== "" ? rawApiUrl : isLocal ? "http://localhost:5001" : "https://personalized-learning-roadmap-backend.onrender.com";

export async function fetchSession() {
  const response = await fetch(`${API_BASE_URL}/api/auth/get-session`, {
    credentials: "include",
  });
  if (!response.ok) {
    throw new Error("Failed to fetch session");
  }
  return response.json() as Promise<{
    session: { token: string; id: string; userId: string; expiresAt: string };
    user: Record<string, unknown>;
  } | null>;
}
