const rawApiUrl = import.meta.env.VITE_API_URL;
const isLocal = typeof window !== "undefined" && (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1");
const API_BASE_URL = rawApiUrl && rawApiUrl !== "" ? rawApiUrl : isLocal ? "http://localhost:5001" : "https://personalized-learning-roadmap-backend.onrender.com";

export function getGitHubOAuthRedirectUri() {
  return `${window.location.origin}/auth/callback`;
}

export function getGoogleOAuthRedirectUri() {
  return `${window.location.origin}/auth/google/callback`;
}

async function startSocialOAuth(provider: "google" | "github") {
  const form = document.createElement("form");
  form.method = "POST";
  form.action = `${API_BASE_URL}/api/auth/sign-in/social`;

  const inputs: Record<string, string> = {
    provider,
    callbackURL:
      provider === "google"
        ? getGoogleOAuthRedirectUri()
        : getGitHubOAuthRedirectUri(),
  };
  for (const [key, value] of Object.entries(inputs)) {
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = key;
    input.value = value;
    form.appendChild(input);
  }

  document.body.appendChild(form);
  form.submit();
}

export function startGitHubOAuth() {
  startSocialOAuth("github");
}

export function startGoogleOAuth() {
  startSocialOAuth("google");
}
