import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import HomePage from './pages/HomePage'
import ProblemListPage from './pages/ProblemListPage'
import ProblemDetailPage from './pages/ProblemDetailPage'
import LeaderboardPage from './pages/LeaderboardPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ProfilePage from './pages/ProfilePage'
import NotFoundPage from './pages/NotFoundPage'
import { Suspense, lazy } from 'react'
import type { ReactNode } from 'react'

// Create loader component
const PageLoader = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="loading-spinner h-12 w-12"></div>
    <span className="sr-only">Loading...</span>
  </div>
);

// Lazy load routes for code splitting
const LazyContestsPage = lazy(() => import('./pages/ContestsPage'));

// Simple auth check for protected routes
const RequireAuth = ({ children }: { children: ReactNode }) => {
  const isAuthenticated = localStorage.getItem('oj_auth_user') !== null;
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return <>{children}</>;
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: (
          <RequireAuth>
            <HomePage />
          </RequireAuth>
        )
      },
      {
        path: 'problems',
        element: (
          <RequireAuth>
            <ProblemListPage />
          </RequireAuth>
        )
      },
      {
        path: 'problems/:slug',
        element: (
          <RequireAuth>
            <ProblemDetailPage />
          </RequireAuth>
        )
      },
      {
        path: 'leaderboard',
        element: (
          <RequireAuth>
            <LeaderboardPage />
          </RequireAuth>
        )
      },
      {
        path: 'contests',
        element: (
          <RequireAuth>
            <Suspense fallback={<PageLoader />}>
              <LazyContestsPage />
            </Suspense>
          </RequireAuth>
        ),
      },
      {
        path: 'profile',
        element: (
          <RequireAuth>
            <ProfilePage />
          </RequireAuth>
        )
      },
      {
        path: '*',
        element: <NotFoundPage />
      }
    ]
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/register',
    element: <RegisterPage />
  },
  {
    path: '*',
    element: <Navigate to="/login" replace />
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
