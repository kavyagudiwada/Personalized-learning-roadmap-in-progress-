import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { getUserProfile } from '@/services/api';
import {
  AUTH_TOKEN_KEY,
  AUTH_USER_KEY,
  CAREER_GOAL_KEY,
  clearAuthStorage,
  type AuthUser,
} from '../types/auth';

const rawUrl = import.meta.env.VITE_API_URL;
const isLocal = typeof window !== "undefined" && (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1");
const API_BASE_URL = rawUrl && rawUrl !== "" ? rawUrl : isLocal ? "http://localhost:5001" : "https://personalized-learning-roadmap-backend.onrender.com";

interface AuthState {
  user: AuthUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (token: string, user: AuthUser) => Promise<void>;
  logout: () => void;
  refreshUser: () => Promise<void>;
  setUser: (user: AuthUser | null) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,

      login: async (token: string, user: AuthUser) => {
        localStorage.setItem(AUTH_TOKEN_KEY, token);
        localStorage.setItem(AUTH_USER_KEY, JSON.stringify(user));
        set({ user, isAuthenticated: true });
      },

      logout: () => {
        clearAuthStorage();
        fetch(`${API_BASE_URL}/api/auth/sign-out`, { method: "POST", credentials: "include" }).catch(() => {});
        set({ user: null, isAuthenticated: false });
      },

      refreshUser: async () => {
        const token = localStorage.getItem(AUTH_TOKEN_KEY);
        if (!token) {
          set({ user: null, isAuthenticated: false });
          return;
        }

        try {
          const profile = await getUserProfile();
          const nextUser: AuthUser = {
            id: profile.id,
            username: profile.username,
            email: profile.email,
            fullName: profile.fullName,
            avatarUrl: profile.avatarUrl,
            careerGoal: profile.careerGoal,
            skills: profile.skills || [],
          };
          set({ user: nextUser, isAuthenticated: true });
          localStorage.setItem(AUTH_USER_KEY, JSON.stringify(nextUser));
          if (profile.careerGoal) {
            localStorage.setItem(CAREER_GOAL_KEY, profile.careerGoal);
          }
        } catch {
          clearAuthStorage();
          set({ user: null, isAuthenticated: false });
        }
      },

      setUser: (user: AuthUser | null) => {
        set({ user, isAuthenticated: !!user });
      },
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({ user: state.user, isAuthenticated: state.isAuthenticated }),
    }
  )
);
