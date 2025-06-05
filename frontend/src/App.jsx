import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import HomePage from './components/Home'
import ProblemListPage from './components/ProblemList'
import ProblemDetailPage from './components/ProblemDetail'
import LeaderboardPage from './components/Leaderboard'
import LoginPage from './components/Login'
import RegisterPage from './components/Register'
import ProfilePage from './components/Profile'
import NotFoundPage from './components/NotFound'
import { Suspense, lazy } from 'react'
import authService from './services/auth'

// Create loader component
const PageLoader = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="loading-spinner h-12 w-12"></div>
    <span className="sr-only">Loading...</span>
  </div>
);

// Lazy load routes for code splitting
const LazyContestsPage = lazy(() => import('./components/Contests'));

// Auth check for protected routes using our auth service
const RequireAuth = ({ children }) => {
  const isAuthenticated = authService.isAuthenticated();
  
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