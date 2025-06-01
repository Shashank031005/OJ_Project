import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  });
  
  const [errors, setErrors] = useState<{
    username?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
    agreeTerms?: string;
    general?: string;
  }>({});
  
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('register');
  const [animateFields, setAnimateFields] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Trigger animation after component mounts
    setTimeout(() => setAnimateFields(true), 100);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when field is edited
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const validate = () => {
    const newErrors: typeof errors = {};
    
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    } else if (formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    if (!formData.agreeTerms) {
      newErrors.agreeTerms = 'You must agree to the terms and conditions';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) {
      return;
    }
    
    setIsLoading(true);
    
    // In a real app, this would call a registration API
    setTimeout(() => {
      setIsLoading(false);
      // Simulate successful registration
      navigate('/login');
    }, 1000);
  };

  // Benefits to show in the left panel
  const benefits = [
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      title: "500+ Coding Challenges",
      description: "Access to our entire library of programming problems",
      color: "bg-gradient-to-r from-amber-400 to-orange-500"
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Global Community",
      description: "Connect with developers worldwide",
      color: "bg-gradient-to-r from-pink-500 to-rose-500"
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      title: "Free Forever",
      description: "No credit card required, all basic features free",
      color: "bg-gradient-to-r from-violet-500 to-purple-600"
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "AI-Powered Hints",
      description: "Get smart suggestions when you're stuck",
      color: "bg-gradient-to-r from-fuchsia-500 to-pink-600"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen w-full bg-gradient-to-br from-orange-800 via-amber-700 to-yellow-600 relative overflow-hidden">
      {/* Moving background pattern */}
      <div className="absolute inset-0 w-full h-full z-0 opacity-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzBoLTZsMyAzIDMtM3ptLTQtM2gydjJoLTJ2LTJ6bTAgMTBoMnYyaC0ydi0yek0zMCAzMGgydjJoLTJ2LTJ6bTYtM2gydjJoLTJ2LTJ6bTAgMTBoMnYyaC0ydi0yeiIvPjwvZz48L2c+PC9zdmc+')] bg-repeat animate-gradient-y"></div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 -right-10 w-60 h-60 bg-orange-300 rounded-full opacity-20 animate-pulse-slow blur-3xl"></div>
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-amber-400 rounded-full opacity-20 animate-pulse-slow blur-3xl" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-10 right-1/4 w-40 h-40 bg-rose-400 rounded-full opacity-20 animate-pulse-slow blur-3xl" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="flex flex-col md:flex-row-reverse w-full min-h-screen">
        {/* Left column: Benefits (on larger screens) */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-amber-900 text-white p-8 space-y-6 md:space-y-8 relative">
          {/* Floating elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-r from-amber-400 to-orange-400 rounded-lg shadow-lg shadow-amber-500/20 animate-float"></div>
            <div className="absolute bottom-10 left-10 w-16 h-16 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full shadow-lg shadow-rose-500/20 animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-md shadow-lg shadow-yellow-500/20 transform rotate-45 animate-float" style={{ animationDelay: '1s' }}></div>
          </div>
          
          {/* Geometric patterns */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute w-full h-full">
              <div className="absolute left-1/3 top-1/6 w-32 h-32 border-4 border-amber-500 rounded-full animate-spin-slow"></div>
              <div className="absolute right-1/4 top-1/2 w-20 h-20 border-4 border-orange-500 transform rotate-45 animate-pulse-glow"></div>
              <div className="absolute left-1/5 bottom-1/3 w-40 h-40 border-4 border-rose-500 rounded-full animate-float"></div>
            </div>
          </div>
          
          <div className="max-w-lg w-full space-y-8 z-10">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-200">
                Join Our Coding Community
              </h2>
              <p className="text-lg md:text-xl text-amber-100 mb-6 md:mb-10">
                Elevate your programming skills with thousands of challenges and a supportive global community.
              </p>
            </div>
            
            <div className="space-y-4 md:space-y-6 hidden md:block">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className={`${benefit.color} rounded-xl p-4 md:p-5 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg flex items-center`}
                >
                  <div className="flex-shrink-0 mr-4 text-white">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold mb-1">{benefit.title}</h3>
                    <p className="text-white text-opacity-90 text-sm md:text-base">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center hidden md:block">
              <p className="text-lg mb-4 text-amber-200">
                Already over <span className="font-bold text-white">350,000</span> developers have joined
              </p>
              <div className="flex justify-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-500 to-orange-400 transform hover:scale-110 transition-transform shadow-lg shadow-amber-500/30"></div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-rose-500 to-pink-400 transform hover:scale-110 transition-transform shadow-lg shadow-rose-500/30"></div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-500 to-amber-400 transform hover:scale-110 transition-transform shadow-lg shadow-yellow-500/30"></div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-red-400 transform hover:scale-110 transition-transform shadow-lg shadow-orange-500/30"></div>
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-amber-800 font-bold text-xs transform hover:scale-110 transition-transform shadow-lg">+345k</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right column: Registration form */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center py-8 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-md w-full space-y-8">
            <div className="flex justify-center">
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-4 rounded-full shadow-2xl shadow-amber-500/50 transform hover:scale-105 transition-transform duration-300 animate-pulse-glow">
                <div className="text-4xl font-extrabold text-white">OJ</div>
              </div>
            </div>
            
            <div className="bg-white/90 backdrop-filter backdrop-blur-xl px-6 py-8 rounded-2xl shadow-2xl shadow-black/20 transform transition-all duration-300 hover:shadow-amber-500/30">
              {/* Tab navigation */}
              <div className="flex mb-6 bg-gray-100 p-1 rounded-lg">
                <button
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
                    activeTab === 'login' 
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md' 
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                  onClick={() => {
                    if (activeTab === 'register') {
                      window.location.href = '/login';
                    }
                  }}
                >
                  Login
                </button>
                <button
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
                    activeTab === 'register' 
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md' 
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                  onClick={() => setActiveTab('register')}
                >
                  Register
                </button>
              </div>
              
              <h2 className="text-center text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-6">
                Create your account
              </h2>
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                {errors.general && (
                  <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4 rounded animate-shake">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-red-700">{errors.general}</p>
                      </div>
                    </div>
                  </div>
                )}
                
                <div className={`space-y-4 ${animateFields ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
                  <div>
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                    <input
                      id="username"
                      name="username"
                      type="text"
                      autoComplete="username"
                      required
                      className={`appearance-none relative block w-full px-4 py-3 border ${
                        errors.username ? 'border-red-300' : 'border-gray-300'
                      } placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200 text-sm`}
                      placeholder="Choose a unique username"
                      value={formData.username}
                      onChange={handleChange}
                    />
                    {errors.username && (
                      <p className="mt-1 text-sm text-red-600 animate-bounce-once">{errors.username}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className={`appearance-none relative block w-full px-4 py-3 border ${
                        errors.email ? 'border-red-300' : 'border-gray-300'
                      } placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200 text-sm`}
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600 animate-bounce-once">{errors.email}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="new-password"
                      required
                      className={`appearance-none relative block w-full px-4 py-3 border ${
                        errors.password ? 'border-red-300' : 'border-gray-300'
                      } placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200 text-sm`}
                      placeholder="Create a secure password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                    {errors.password && (
                      <p className="mt-1 text-sm text-red-600 animate-bounce-once">{errors.password}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      autoComplete="new-password"
                      required
                      className={`appearance-none relative block w-full px-4 py-3 border ${
                        errors.confirmPassword ? 'border-red-300' : 'border-gray-300'
                      } placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200 text-sm`}
                      placeholder="Confirm your password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                    />
                    {errors.confirmPassword && (
                      <p className="mt-1 text-sm text-red-600 animate-bounce-once">{errors.confirmPassword}</p>
                    )}
                  </div>
                  
                  <div className={`flex items-start ${animateFields ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
                    <div className="flex items-center h-5">
                      <input
                        id="agreeTerms"
                        name="agreeTerms"
                        type="checkbox"
                        className={`h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded transition-all duration-200 ${
                          errors.agreeTerms ? 'border-red-300' : ''
                        }`}
                        checked={formData.agreeTerms}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="agreeTerms" className="font-medium text-gray-700">
                        I agree to the{' '}
                        <a href="#" className="text-amber-600 hover:text-amber-500 transition-colors duration-200">
                          Terms and Conditions
                        </a>
                      </label>
                      {errors.agreeTerms && (
                        <p className="text-sm text-red-600 animate-bounce-once">{errors.agreeTerms}</p>
                      )}
                    </div>
                  </div>
                </div>

                <div className={animateFields ? 'animate-fade-in' : 'opacity-0'} style={{ animationDelay: '0.6s' }}>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-all duration-200 transform hover:translate-y-[-2px] hover:shadow-lg shadow-amber-500/50"
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Creating Account...
                      </>
                    ) : (
                      <>
                        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                          <svg className="h-5 w-5 text-amber-300 group-hover:text-amber-200 transition-colors duration-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                          </svg>
                        </span>
                        Create Account
                      </>
                    )}
                  </button>
                </div>
              </form>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Already have an account?{' '}
                  <Link to="/login" className="font-medium text-amber-600 hover:text-amber-500 transition-colors duration-200">
                    Sign in instead
                  </Link>
                </p>
              </div>
            </div>
            
            <div className="text-center mt-6 text-white text-sm">
              <p>© {new Date().getFullYear()} Online Judge. All rights reserved.</p>
            </div>
          </div>
        </div>
        
        {/* Mobile benefits - only visible on small screens */}
        <div className="block md:hidden w-full bg-gradient-to-br from-amber-900 via-orange-800 to-orange-900 text-white p-6 space-y-4">
          <div className="text-center mb-4">
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-200">
              Why Join?
            </h3>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            {benefits.slice(0, 4).map((benefit, index) => (
              <div 
                key={index} 
                className={`${benefit.color} rounded-lg p-3 flex flex-col items-center text-center shadow-lg`}
              >
                <div className="w-8 h-8 mb-2">
                  {benefit.icon}
                </div>
                <h4 className="text-sm font-bold mb-1">{benefit.title.split(' ')[0]}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage; 