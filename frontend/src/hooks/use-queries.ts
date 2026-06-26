import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../lib/query-client";
import {
  bookmarkResource,
  getDashboardData,
  getGithubAnalysis,
  getJobMatches,
  getLatestSkillGap,
  getProgressHistory,
  getResourceRecommendations,
  markResourceComplete,
  getUserProfile,
  syncGithubUsername,
  triggerFullAnalysis,
} from "../services/api";

export function useUserProfile(enabled = true) {
  return useQuery({
    queryKey: queryKeys.profile,
    queryFn: getUserProfile,
    enabled: enabled && !!localStorage.getItem("auth_token"),
  });
}

export function useDashboard() {
  return useQuery({
    queryKey: queryKeys.dashboard,
    queryFn: getDashboardData,
    enabled: !!localStorage.getItem("auth_token"),
  });
}

export function useSkillGapLatest() {
  return useQuery({
    queryKey: queryKeys.skillGap,
    queryFn: getLatestSkillGap,
    enabled: !!localStorage.getItem("auth_token"),
  });
}

export function useGithubAnalysis(enabled = true) {
  return useQuery({
    queryKey: queryKeys.githubAnalysis,
    queryFn: getGithubAnalysis,
    enabled: enabled && !!localStorage.getItem("auth_token"),
  });
}

export function useJobMatches(careerGoal: string | undefined) {
  return useQuery({
    queryKey: queryKeys.jobMatches(careerGoal ?? ""),
    queryFn: () => getJobMatches(careerGoal!),
    enabled: !!careerGoal && !!localStorage.getItem("auth_token"),
  });
}

export function useProgressHistory() {
  return useQuery({
    queryKey: queryKeys.progressHistory,
    queryFn: getProgressHistory,
    enabled: !!localStorage.getItem("auth_token"),
  });
}

export function useResourceRecommendations(goal?: string) {
  return useQuery({
    queryKey: [...queryKeys.resources, goal],
    queryFn: () => getResourceRecommendations(goal),
    enabled: !!localStorage.getItem("auth_token"),
  });
}

export function useMarkResourceComplete() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, completed }: { id: string; completed: boolean }) =>
      markResourceComplete(id, completed),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.resources });
    },
  });
}

export function useBookmarkResource() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, bookmarked }: { id: string; bookmarked: boolean }) =>
      bookmarkResource(id, bookmarked),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.resources });
    },
  });
}

export function useTriggerFullAnalysis() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: Parameters<typeof triggerFullAnalysis>[0]) =>
      triggerFullAnalysis(input),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.resources });
      queryClient.invalidateQueries({ queryKey: queryKeys.resourceSnapshot });
      queryClient.invalidateQueries({ queryKey: queryKeys.dashboard });
    },
  });
}

export function useSyncGithub() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: syncGithubUsername,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.profile });
      queryClient.invalidateQueries({ queryKey: queryKeys.githubAnalysis });
      queryClient.invalidateQueries({ queryKey: queryKeys.dashboard });
    },
  });
}
