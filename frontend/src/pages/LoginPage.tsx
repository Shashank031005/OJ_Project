import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<{ email?: string; password?: string; general?: string }>({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!formData.email.trim()) newErrors.email = 'Email address is required';
    if (!formData.password) newErrors.password = 'Password is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      localStorage.setItem('oj_auth_user', JSON.stringify({ email: formData.email }));
      navigate('/');
    }, 1000);
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Left: Login Form */}
      <div className="flex flex-col justify-center w-full lg:w-1/2 px-8 md:px-24">
        <div className="max-w-md w-full mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-2">Sign in</h1>
          <p className="text-xl text-gray-600 mb-10">Sign in to your account</p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-gray-700 text-base mb-2">Email address</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-blue-500">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 12l-4 4-4-4m8-4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2z" />
                  </svg>
                </span>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className={`pl-10 w-full py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-500' : ''}`}
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email address"
                />
              </div>
              {errors.email && <p className="mt-1 text-red-500">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="password" className="block text-gray-700 text-base mb-2">Password</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-blue-500">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm6 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2v-6a2 2 0 012-2h8a2 2 0 012 2z" />
                  </svg>
                </span>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  className={`pl-10 w-full py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.password ? 'border-red-500' : ''}`}
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                />
              </div>
              {errors.password && <p className="mt-1 text-red-500">{errors.password}</p>}
            </div>
            <div className="flex justify-end">
              <a href="#" className="text-blue-600 text-sm font-medium hover:underline">Forgot password?</a>
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl text-lg transition"
            >
              {isLoading ? 'Signing in...' : 'Sign in'}
            </button>
          </form>
          <div className="mt-8 text-center">
            <span className="text-gray-700 text-base">Don't have an account? </span>
            <Link to="/register" className="text-blue-600 font-semibold hover:underline">Sign up</Link>
          </div>
        </div>
      </div>
      {/* Right: Illustration */}
      <div className="hidden lg:flex items-center justify-center w-1/2 bg-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-purple-50 rounded-full opacity-70 transform scale-150"></div>
        <div className="z-10 w-full max-w-2xl px-8">
          <div className="bg-blue-700 rounded-t-lg px-6 py-3 text-white text-xl font-semibold">
            Online Judge
          </div>
          <div className="bg-white rounded-b-lg p-6 shadow-lg mb-6">
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-teal-400 rounded-full mr-2"></div>
                <div className="h-3 bg-gray-200 rounded-full w-2/3"></div>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-orange-400 rounded-full mr-2"></div>
                <div className="h-3 bg-gray-200 rounded-full w-3/4"></div>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-purple-400 rounded-full mr-2"></div>
                <div className="h-3 bg-gray-200 rounded-full w-2/3"></div>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-400 rounded-full mr-2"></div>
                <div className="h-3 bg-gray-200 rounded-full w-1/2"></div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute top-0 right-10 w-16 h-16 bg-teal-400 rounded-lg p-2 transform -translate-y-1/2 shadow-lg flex items-center justify-center text-white text-xl font-mono">
              &lt;/&gt;
            </div>
            
            <div className="flex justify-between relative">
              {/* Plant */}
              <div className="absolute left-0 bottom-2">
                <div className="relative">
                  <div className="w-12 h-12 bg-orange-400 rounded-lg"></div>
                  <div className="absolute top-0 left-0 transform -translate-y-16">
                    <svg width="100" height="100" viewBox="0 0 100 100" className="text-teal-500" fill="currentColor">
                      <path d="M50,10 C65,25 65,45 50,60 C35,45 35,25 50,10 Z" />
                      <path d="M30,25 C45,40 45,60 30,75 C15,60 15,40 30,25 Z" />
                      <path d="M70,25 C85,40 85,60 70,75 C55,60 55,40 70,25 Z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Person coding */}
              <div className="ml-auto mr-8 mb-8">
                <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 100 100">
                  {/* Table */}
                  <rect x="10" y="65" width="80" height="5" fill="#4B6BFD" />
                  <rect x="15" y="70" width="5" height="25" fill="#4B6BFD" />
                  <rect x="80" y="70" width="5" height="25" fill="#4B6BFD" />
                  
                  {/* Laptop */}
                  <rect x="30" y="45" width="40" height="25" fill="#0F2652" rx="2" />
                  <rect x="32" y="47" width="36" height="21" fill="#4CC9F0" rx="1" />
                  <rect x="25" y="70" width="50" height="3" fill="#0F2652" />
                  
                  {/* Person */}
                  {/* Head */}
                  <circle cx="65" cy="40" r="10" fill="#F8B195" />
                  <path d="M60,35 Q65,30 70,35" stroke="#0F2652" strokeWidth="1" fill="none" />
                  <circle cx="62" cy="38" r="1" fill="#0F2652" />
                  <circle cx="68" cy="38" r="1" fill="#0F2652" />
                  <path d="M58,36 Q55,30 61,32" stroke="#0F2652" strokeWidth="2" fill="#0F2652" />
                  
                  {/* Body */}
                  <rect x="60" y="50" width="20" height="25" fill="#FF9F1C" rx="5" />
                  
                  {/* Arms */}
                  <path d="M60,55 Q50,60 40,60" stroke="#FF9F1C" strokeWidth="5" fill="none" />
                  <path d="M80,55 Q88,60 85,65" stroke="#FF9F1C" strokeWidth="5" fill="none" />
                  
                  {/* Legs */}
                  <path d="M65,75 L65,95" stroke="#2A4365" strokeWidth="8" />
                  <path d="M75,75 L75,95" stroke="#2A4365" strokeWidth="8" />
                  <rect x="61" y="95" width="8" height="3" fill="#2A4365" />
                  <rect x="71" y="95" width="8" height="3" fill="#2A4365" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Code symbols */}
          <div className="absolute top-8 right-8 w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center text-white text-xl font-mono transform rotate-12 shadow-lg">
            &lt;/&gt;
          </div>
          <div className="absolute bottom-20 left-12 w-14 h-14 bg-purple-600 rounded-lg flex items-center justify-center text-white text-2xl transform -rotate-12 shadow-lg">
            =&gt;
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
