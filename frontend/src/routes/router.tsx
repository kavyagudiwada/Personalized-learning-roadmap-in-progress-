import { createRouter, createRoute, createRootRoute, Outlet } from '@tanstack/react-router'
import Home from '@/features/dashboard/components/home'
import LoginPage from '@/features/authentication/components/login-page'
import Dashboard from '@/features/dashboard/components/dashboard'
import ResumeAnalysis from '@/features/profile-analysis/components/resume-analysis'
import SkillGapDashboard from '@/features/skill-gap-analysis/components/skill-gap-dashboard'
import JobMatches from '@/features/skill-gap-analysis/components/job-matches'
import ProgressHistory from '@/features/skill-gap-analysis/components/progress-history'
import GithubAnalysis from '@/features/profile-analysis/components/github-analysis'
import AssessmentPage from '@/features/interview-preparation/components/assessment-page'
import ResourcesPage from '@/routes/resources'
import AuthCallback from '@/features/authentication/components/auth-callback'
import GoogleAuthCallback from '@/features/authentication/components/google-auth-callback'
import RoadmapGeneratorPage from '@/features/roadmap-generator/components/roadmap-generator-page'
import ChatbotPage from '@/features/chatbot/components/chatbot-page'
import GamificationDashboard from '@/features/gamification/components/gamification-dashboard'
import CodingChallenges from '@/features/gamification/components/coding-challenges'
import InterviewPrepPage from '@/features/interview-preparation/components/interview-prep-page'
import SelectGoal from '@/features/skill-gap-analysis/components/select-goal'

const rootRoute = createRootRoute({
  component: () => (
    <>
      <Outlet />
    </>
  ),
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
})

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/login',
  component: LoginPage,
})

const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/dashboard',
  component: Dashboard,
})

const resumeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/resume',
  component: ResumeAnalysis,
})

const skillGapRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/skill-gap',
  component: SkillGapDashboard,
})

const jobMatchesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/skill-gap/job-matches',
  component: JobMatches,
})

const progressRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/skill-gap/progress',
  component: ProgressHistory,
})

const githubRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/github',
  component: GithubAnalysis,
})

const assessmentRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/assessment',
  component: AssessmentPage,
})

const resourcesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/resources',
  validateSearch: (input: Record<string, unknown>) => ({
    skill: typeof input.skill === 'string' ? input.skill : undefined,
  }),
  component: ResourcesPage,
})


const roadmapRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/roadmap",
  component: RoadmapGeneratorPage,
});




const chatbotRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/chatbot',
  component: ChatbotPage,
})

const gamificationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/gamification',
  component: GamificationDashboard,
})

const codingChallengesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/gamification/challenges',
  component: CodingChallenges,
})

const interviewPrepRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/interview-prep',
  component: InterviewPrepPage,
})

const selectGoalRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/select-goal',
  component: SelectGoal,
})

const authCallbackRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/auth/callback',
  component: AuthCallback,
})

const googleAuthCallbackRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/auth/google/callback',
  component: GoogleAuthCallback,
})

const routeTree = rootRoute.addChildren([
  indexRoute,
  loginRoute,
  dashboardRoute,
  resumeRoute,
  skillGapRoute,
  jobMatchesRoute,
  progressRoute,
  githubRoute,
  assessmentRoute,
  resourcesRoute,
  roadmapRoute, 
  chatbotRoute,
  interviewPrepRoute,
  gamificationRoute,
  codingChallengesRoute,
  selectGoalRoute,
  authCallbackRoute,
  googleAuthCallbackRoute,

])

export const router = createRouter({ routeTree })
