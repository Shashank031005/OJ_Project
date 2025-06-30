import React, { useState } from 'react';

const Home = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data for problems
  const problems = [
    { id: 1, title: 'Two Sum', difficulty: 'Easy' },
    { id: 2, title: 'Add Two Numbers', difficulty: 'Medium' },
    { id: 3, title: 'Longest Substring Without Repeating Characters', difficulty: 'Medium' },
    { id: 4, title: 'Median of Two Sorted Arrays', difficulty: 'Hard' },
    { id: 5, title: 'Longest Palindromic Substring', difficulty: 'Medium' },
  ];

  // Mock user data
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: '/avatar-placeholder.png',
    rank: 'Gold',
    solvedProblems: 42,
    submissions: 78,
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-blue-900 text-white flex flex-col">
        {/* Logo */}
        <div className="p-4 border-b border-blue-800">
          <h1 className="text-xl font-bold">CodeChamp</h1>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4">
          <ul className="space-y-2">
            <li>
              <button 
                onClick={() => setActiveTab('overview')}
                className={`w-full text-left px-4 py-2 rounded-lg flex items-center ${activeTab === 'overview' ? 'bg-blue-800' : 'hover:bg-blue-800'}`}
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
                Overview
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('problems')}
                className={`w-full text-left px-4 py-2 rounded-lg flex items-center ${activeTab === 'problems' ? 'bg-blue-800' : 'hover:bg-blue-800'}`}
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                </svg>
                Problem List
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('ai-chat')}
                className={`w-full text-left px-4 py-2 rounded-lg flex items-center ${activeTab === 'ai-chat' ? 'bg-blue-800' : 'hover:bg-blue-800'}`}
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                </svg>
                AI Chat
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('contests')}
                className={`w-full text-left px-4 py-2 rounded-lg flex items-center ${activeTab === 'contests' ? 'bg-blue-800' : 'hover:bg-blue-800'}`}
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Contests
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('leaderboard')}
                className={`w-full text-left px-4 py-2 rounded-lg flex items-center ${activeTab === 'leaderboard' ? 'bg-blue-800' : 'hover:bg-blue-800'}`}
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                </svg>
                Leaderboard
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm z-10">
          <div className="px-6 py-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-800">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            </h2>
            <div className="relative">
              <input
                type="text"
                placeholder="Search problems..."
                className="px-4 py-2 pr-8 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <svg
                className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 flex overflow-hidden">
          {/* Center Content */}
          <div className="flex-1 overflow-y-auto p-6">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-4">Your Progress</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-500">Solved Problems</p>
                      <p className="text-2xl font-bold">{user.solvedProblems}</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-500">Success Rate</p>
                      <p className="text-2xl font-bold">{Math.round((user.solvedProblems / user.submissions) * 100)}%</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-500">Current Rank</p>
                      <p className="text-2xl font-bold">{user.rank}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-4">Recent Problems</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Problem
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Difficulty
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {problems.slice(0, 3).map((problem) => (
                          <tr key={problem.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-gray-900">{problem.title}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                                ${problem.difficulty === 'Easy' ? 'bg-green-100 text-green-800' : 
                                  problem.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 
                                  'bg-red-100 text-red-800'}`}>
                                {problem.difficulty}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                                Solved
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-4">Upcoming Contests</h3>
                  <div className="space-y-4">
                    <div className="border border-gray-200 p-4 rounded-lg">
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-medium">Weekly Contest 342</h4>
                          <p className="text-sm text-gray-500">Sunday, 10:30 AM</p>
                        </div>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">Register</button>
                      </div>
                    </div>
                    <div className="border border-gray-200 p-4 rounded-lg">
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-medium">Biweekly Contest 112</h4>
                          <p className="text-sm text-gray-500">Saturday, 8:00 PM</p>
                        </div>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">Register</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'problems' && (
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-4">Problem List</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          #
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Title
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Difficulty
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {problems.map((problem) => (
                        <tr key={problem.id} className="hover:bg-gray-50 cursor-pointer">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{problem.id}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-blue-600">{problem.title}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                              ${problem.difficulty === 'Easy' ? 'bg-green-100 text-green-800' : 
                                problem.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 
                                'bg-red-100 text-red-800'}`}>
                              {problem.difficulty}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                              Unsolved
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'ai-chat' && (
              <div className="bg-white p-6 rounded-lg shadow h-full flex flex-col">
                <h3 className="text-lg font-semibold mb-4">AI Assistant</h3>
                <div className="flex-1 border border-gray-200 rounded-lg p-4 mb-4 overflow-y-auto">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                          AI
                        </div>
                      </div>
                      <div className="ml-3 bg-blue-50 p-3 rounded-lg">
                        <p className="text-sm">Hello! I'm your coding assistant. How can I help you today?</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Ask me anything about coding problems..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-r-lg">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Sidebar - Profile */}
          <div className="w-80 bg-white border-l border-gray-200 p-6 overflow-y-auto">
            <div className="text-center mb-6">
              <img
                src={user.avatar}
                alt="Profile"
                className="h-24 w-24 rounded-full mx-auto mb-4 bg-gray-200"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/100?text=User";
                }}
              />
              <h3 className="text-xl font-semibold">{user.name}</h3>
              <p className="text-gray-500 text-sm">{user.email}</p>
              <div className="mt-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {user.rank} Rank
                </span>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <h4 className="text-sm font-medium text-gray-500 mb-2">STATISTICS</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Solved Problems</span>
                  <span className="text-sm font-medium">{user.solvedProblems}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Total Submissions</span>
                  <span className="text-sm font-medium">{user.submissions}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Success Rate</span>
                  <span className="text-sm font-medium">{Math.round((user.solvedProblems / user.submissions) * 100)}%</span>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4 mt-4">
              <h4 className="text-sm font-medium text-gray-500 mb-2">ACHIEVEMENTS</h4>
              <div className="grid grid-cols-3 gap-2">
                <div className="flex flex-col items-center">
                  <div className="h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center">
                    <svg className="h-6 w-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                    </svg>
                  </div>
                  <span className="text-xs mt-1">First Win</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                    <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                    </svg>
                  </div>
                  <span className="text-xs mt-1">Streak 7</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                    <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <span className="text-xs mt-1">Fast Solver</span>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4 mt-4">
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-medium">
                Edit Profile
              </button>
              <button className="w-full mt-2 border border-gray-300 text-gray-700 py-2 rounded-lg text-sm font-medium">
                Log Out
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
