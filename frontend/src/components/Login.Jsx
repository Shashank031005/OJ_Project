import React from 'react';
import loginImage from '/login.jpg';
const LogInPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="flex flex-col md:flex-row w-full max-w-6xl shadow-lg rounded-lg overflow-hidden">
        {/* Left Section (Form) */}
        <div className="w-full md:w-1/2 p-8 md:p-12">
          <h2 className="text-3xl font-bold text-blue-950 mb-2">Sign in</h2>
          <p className="text-gray-600 mb-6">Sign in to your account</p>

          <form className="space-y-6">
            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
              <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
                <img src="/email.svg" alt="Email Icon" className="h-5 w-5 text-gray-400 mr-2" />
                <input
                  type="email"
                  className="w-full outline-none text-sm"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
                <img src="/password.svg" alt="Password Icon" className="h-5 w-5 text-gray-400 mr-2" />
                <input
                  type="password"
                  className="w-full outline-none text-sm"
                  placeholder="Enter your password"
                />
              </div>
              <div className="text-right text-sm mt-2">
                <a href="#" className="text-blue-600 hover:underline">Forgot password?</a>
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg text-lg"
              >
                Sign in
              </button>
            </div>
          </form>

          {/* Sign up link */}
          <p className="mt-6 text-sm text-center">
            Don't have an account? <a href="#" className="text-blue-600 hover:underline font-medium">Sign up</a>
          </p>
        </div>

        {/* Right Section (/Image) */}
        <div className="hidden md:flex md:w-1/2 bg-gray-100 items-center justify-center">
          <img
            src={loginImage}
            alt="Login Image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default LogInPage;
