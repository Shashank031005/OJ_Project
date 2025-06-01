import { useState, useEffect } from 'react'
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom'

const RootLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userDropdownOpen, setUserDropdownOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  // Check if user is logged in on component mount
  useEffect(() => {
    const userData = localStorage.getItem('oj_auth_user')
    if (userData) {
      setIsLoggedIn(true)
    }
  }, [])
  
  // Handle scrolling behavior
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when location changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname])
  
  // Handle dark mode toggle
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  // Close dropdown menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userDropdownOpen && !(event.target as Element).closest('.user-dropdown')) {
        setUserDropdownOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [userDropdownOpen]);

  const handleLogout = () => {
    localStorage.removeItem('oj_auth_user')
    setIsLoggedIn(false)
    setUserDropdownOpen(false)
    navigate('/')
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <header 
        className={`sticky top-0 z-30 bg-white dark:bg-gray-800 ${
          scrolled ? 'shadow-md' : ''
        } transition-shadow duration-300`}
      >
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <Link 
              to="/" 
              className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent"
            >
              Online Judge
            </Link>
            
            {/* Desktop navigation */}
            <nav className="hidden md:flex items-center space-x-1 ml-4 lg:ml-8">
              <NavLink to="/" exact={true}>Home</NavLink>
              <NavLink to="/problems">Problems</NavLink>
              <NavLink to="/leaderboard">Leaderboard</NavLink>
              <NavLink to="/contests">Contests</NavLink>
            </nav>
          </div>
          
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Dark mode toggle */}
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="btn-icon"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            
            {/* User authentication */}
            {isLoggedIn ? (
              <div className="relative user-dropdown">
                <button 
                  className="flex items-center space-x-1 sm:space-x-2 rounded-full bg-primary-100 dark:bg-primary-800 p-1 pr-2 sm:pr-3 hover:bg-primary-200 dark:hover:bg-primary-700 transition-colors"
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-semibold">
                    T
                  </div>
                  <span className="text-xs sm:text-sm dark:text-white">test_user</span>
                  <svg className="hidden sm:block w-4 h-4 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Dropdown menu */}
                {userDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-40 sm:w-48 py-2 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 animate-fade-in z-50">
                    <Link 
                      to="/profile" 
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                      onClick={() => setUserDropdownOpen(false)}
                    >
                      My Profile
                    </Link>
                    <Link 
                      to="/settings" 
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                      onClick={() => setUserDropdownOpen(false)}
                    >
                      Settings
                    </Link>
                    <button 
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="hidden sm:flex items-center space-x-2">
                <Link to="/login" className="btn-secondary text-xs sm:text-sm">Login</Link>
                <Link to="/register" className="btn text-xs sm:text-sm">Register</Link>
              </div>
            )}
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden btn-icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 animate-slide-down">
            <div className="flex flex-col py-3">
              <MobileNavLink to="/" exact={true}>Home</MobileNavLink>
              <MobileNavLink to="/problems">Problems</MobileNavLink>
              <MobileNavLink to="/leaderboard">Leaderboard</MobileNavLink>
              <MobileNavLink to="/contests">Contests</MobileNavLink>
              
              {!isLoggedIn && (
                <div className="flex flex-col space-y-2 px-4 py-3 border-t border-gray-200 dark:border-gray-700">
                  <Link to="/login" className="btn-secondary w-full text-center">Login</Link>
                  <Link to="/register" className="btn w-full text-center">Register</Link>
                </div>
              )}
            </div>
          </nav>
        )}
      </header>

      <main className="container mx-auto px-3 sm:px-4 py-4 sm:py-6 flex-grow transition-all duration-200">
        <Outlet />
      </main>

      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-4 sm:py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-center text-sm text-gray-600 dark:text-gray-400">
              &copy; {new Date().getFullYear()} Online Judge Platform. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-3 md:gap-4 mt-4 md:mt-0">
              <a href="#" className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                About Us
              </a>
              <a href="#" className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                Privacy
              </a>
              <a href="#" className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                Terms
              </a>
              <a href="#" className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Desktop navigation link with active state
const NavLink = ({ to, children, exact = false }: { to: string; children: React.ReactNode; exact?: boolean }) => {
  const location = useLocation()
  const isActive = exact ? location.pathname === to : location.pathname.startsWith(to)
  
  return (
    <Link 
      to={to}
      className={`px-2 lg:px-3 py-2 rounded-md text-xs lg:text-sm font-medium transition-colors ${
        isActive 
          ? 'bg-primary-50 text-primary-700 dark:bg-primary-900 dark:text-primary-300'
          : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
      }`}
    >
      {children}
    </Link>
  )
}

// Mobile navigation link
const MobileNavLink = ({ to, children, exact = false }: { to: string; children: React.ReactNode; exact?: boolean }) => {
  const location = useLocation()
  const isActive = exact ? location.pathname === to : location.pathname.startsWith(to)
  
  return (
    <Link 
      to={to}
      className={`px-4 py-3 block ${
        isActive 
          ? 'bg-primary-50 text-primary-700 dark:bg-primary-900 dark:text-primary-300' 
          : 'text-gray-700 dark:text-gray-200'
      }`}
    >
      {children}
    </Link>
  )
}

export default RootLayout 