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
  component: ResourcesPage,
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
  authCallbackRoute,
  googleAuthCallbackRoute,
])

export const router = createRouter({ routeTree })
