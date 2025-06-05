import React from 'react';
import homeImage from '/home.jpg';

const HomePage = () => {
  // Sample user stats
  const userStats = {
    problemsSolved: 42,
    ranking: 1024,
    streak: 7,
    points: 3850
  };

  // Sample recent submissions
  const recentSubmissions = [
    { id: 1, problem: 'Two Sum', status: 'Accepted', language: 'JavaScript', time: '2 hours ago' },
    { id: 2, problem: 'Valid Parentheses', status: 'Wrong Answer', language: 'Python', time: '5 hours ago' },
    { id: 3, problem: 'Merge Two Sorted Lists', status: 'Accepted', language: 'Java', time: '1 day ago' }
  ];

  // Sample recommended problems
  const recommendedProblems = [
    { id: 101, title: 'Binary Tree Inorder Traversal', difficulty: 'Medium', acceptance: '68%' },
    { id: 102, title: 'Maximum Subarray', difficulty: 'Easy', acceptance: '49%' },
    { id: 103, title: 'Reverse Linked List', difficulty: 'Easy', acceptance: '70%' }
  ];

  // Sample upcoming contests
  const upcomingContests = [
    { id: 1, name: 'Weekly Contest 345', date: 'Sat, Jun 10, 2023', time: '8:00 PM', duration: '1.5 hours' },
    { id: 2, name: 'Biweekly Contest 102', date: 'Sun, Jun 18, 2023', time: '8:00 PM', duration: '1.5 hours' }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="flex flex-col md:flex-row w-full max-w-6xl shadow-lg rounded-lg overflow-hidden">
        {/* Left Section (Dashboard) */}
        <div className="w-full md:w-2/3 p-8 md:p-12">
          <h2 className="text-3xl font-bold text-blue-950 mb-2">Welcome Back!</h2>
          <p className="text-gray-600 mb-6">Your coding journey continues today</p>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-sm font-medium text-gray-500">Problems Solved</h3>
              <p className="text-2xl font-bold text-blue-600">{userStats.problemsSolved}</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-sm font-medium text-gray-500">Ranking</h3>
              <p className="text-2xl font-bold text-blue-600">#{userStats.ranking}</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-sm font-medium text-gray-500">Current Streak</h3>
              <p className="text-2xl font-bold text-blue-600">{userStats.streak} days</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-sm font-medium text-gray-500">Points</h3>
              <p className="text-2xl font-bold text-blue-600">{userStats.points}</p>
            </div>
          </div>

          {/* Recent Submissions */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Recent Submissions</h3>
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Problem</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Language</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {recentSubmissions.map(submission => (
                    <tr key={submission.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm font-medium text-blue-600">{submission.problem}</td>
                      <td className="px-4 py-3 text-sm">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          submission.status === 'Accepted' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {submission.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm">{submission.language}</td>
                      <td className="px-4 py-3 text-sm text-gray-500">{submission.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Recommended Problems */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Recommended Problems</h3>
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <ul className="divide-y divide-gray-200">
                  {recommendedProblems.map(problem => (
                    <li key={problem.id} className="p-4 hover:bg-gray-50">
                      <a href="#" className="block">
                        <h4 className="text-sm font-medium text-blue-600">{problem.title}</h4>
                        <div className="flex items-center mt-1 text-xs">
                          <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                            problem.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                            problem.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {problem.difficulty}
                          </span>
                          <span className="ml-2 text-gray-500">Acceptance: {problem.acceptance}</span>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Upcoming Contests */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Upcoming Contests</h3>
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <ul className="divide-y divide-gray-200">
                  {upcomingContests.map(contest => (
                    <li key={contest.id} className="p-4 hover:bg-gray-50">
                      <a href="#" className="block">
                        <h4 className="text-sm font-medium text-blue-600">{contest.name}</h4>
                        <p className="text-xs text-gray-500 mt-1">{contest.date} • {contest.time}</p>
                        <p className="text-xs text-gray-500">Duration: {contest.duration}</p>
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="bg-gray-50 px-4 py-3 text-center">
                  <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-800">
                    View all contests
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="hidden md:flex md:w-1/3 bg-gray-100 items-center justify-center">
          <img
            src={homeImage}
            alt="Home"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage; 