import React from 'react';
import profileImage from '/profile.jpg';

const ProfilePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="flex flex-col md:flex-row w-full max-w-6xl shadow-lg rounded-lg overflow-hidden">
        {/* Left Section (Form) */}
        <div className="w-full md:w-1/2 p-8 md:p-12">
          <h2 className="text-3xl font-bold text-blue-950 mb-2">Your Profile</h2>
          <p className="text-gray-600 mb-6">Update your information</p>

          <form className="space-y-4">
            {/* Profile Picture */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <img 
                  src="/avatar-placeholder.jpg" 
                  alt="Profile" 
                  className="h-24 w-24 rounded-full object-cover border-2 border-blue-600"
                />
                <button 
                  type="button" 
                  className="absolute bottom-0 right-0 bg-blue-600 rounded-full p-1 text-white"
                >
                  <img src="/edit.svg" alt="Edit" className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Name Fields */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full">
                <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
                  <img src="/user.svg" alt="User Icon" className="h-5 w-5 text-gray-400 mr-2" />
                  <input
                    type="text"
                    className="w-full outline-none text-sm"
                    placeholder="John"
                  />
                </div>
              </div>
              <div className="w-full">
                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
                  <img src="/user.svg" alt="User Icon" className="h-5 w-5 text-gray-400 mr-2" />
                  <input
                    type="text"
                    className="w-full outline-none text-sm"
                    placeholder="Doe"
                  />
                </div>
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
              <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
                <img src="/email.svg" alt="Email Icon" className="h-5 w-5 text-gray-400 mr-2" />
                <input
                  type="email"
                  className="w-full outline-none text-sm"
                  placeholder="you@example.com"
                  readOnly
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">Email cannot be changed</p>
            </div>

            {/* Bio Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
              <div className="flex items-start border border-gray-300 rounded-lg px-3 py-2">
                <img src="/bio.svg" alt="Bio Icon" className="h-5 w-5 text-gray-400 mr-2 mt-1" />
                <textarea
                  className="w-full outline-none text-sm resize-none"
                  placeholder="Tell us about yourself"
                  rows={3}
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg text-lg"
              >
                Update Profile
              </button>
            </div>
          </form>

          {/* Change Password Link */}
          <p className="mt-6 text-sm text-center">
            Need to change your password? <a href="#" className="text-blue-600 hover:underline font-medium">Click here</a>
          </p>
        </div>

        {/* Right Section (Image) */}
        <div className="hidden md:flex md:w-1/2 bg-gray-100 items-center justify-center">
          <img
            src={profileImage}
            alt="Profile Image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage; 