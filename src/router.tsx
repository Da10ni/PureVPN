import { createBrowserRouter, Navigate } from 'react-router-dom'
import { LandingPage } from '@/surfaces/marketing/LandingPage'
import { ReportPage } from '@/surfaces/report/ReportPage'
import { IdentityProtectionPage } from '@/surfaces/dashboard/IdentityProtectionPage'
import { ProPlanPage } from '@/surfaces/dashboard/ProPlanPage'

export const router = createBrowserRouter([
  { path: '/', element: <LandingPage /> },
  { path: '/report', element: <ReportPage /> },
  { path: '/app', element: <Navigate to="/app/identity-protection" replace /> },
  { path: '/app/identity-protection', element: <IdentityProtectionPage /> },
  { path: '/app/pro-plan', element: <ProPlanPage /> },
  { path: '*', element: <Navigate to="/" replace /> },
])
