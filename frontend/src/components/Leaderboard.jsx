import React from 'react';
import leaderboardImage from '/leaderboard.jpg';

const LeaderboardPage = () => {
  // Sample leaderboard data
  const leaderboardData = [
    { rank: 1, username: 'codeMaster', score: 9850, solved: 142, country: 'United States' },
    { rank: 2, username: 'algorithmPro', score: 9720, solved: 138, country: 'India' },
    { rank: 3, username: 'devNinja', score: 9650, solved: 135, country: 'Germany' },
    { rank: 4, username: 'codeWizard', score: 9580, solved: 132, country: 'Japan' },
    { rank: 5, username: 'byteMaster', score: 9520, solved: 130, country: 'Canada' },
    { rank: 6, username: 'hackStar', score: 9480, solved: 129, country: 'United Kingdom' },
    { rank: 7, username: 'logicGeek', score: 9420, solved: 128, country: 'Australia' },
    { rank: 8, username: 'bugHunter', score: 9350, solved: 126, country: 'Brazil' },
    { rank: 9, username: 'codeArtist', score: 9300, solved: 125, country: 'France' },
    { rank: 10, username: 'techGuru', score: 9250, solved: 124, country: 'China' },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="flex flex-col md:flex-row w-full max-w-6xl shadow-lg rounded-lg overflow-hidden">
        {/* Left Section (Leaderboard) */}
        <div className="w-full md:w-2/3 p-8 md:p-12">
          <h2 className="text-3xl font-bold text-blue-950 mb-2">Leaderboard</h2>
          <p className="text-gray-600 mb-6">Top performers based on problem-solving score</p>

          {/* Filter Options */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              <button className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">Global</button>
              <button className="bg-white border border-gray-300 text-gray-700 px-3 py-1 rounded-full text-sm">Regional</button>
              <button className="bg-white border border-gray-300 text-gray-700 px-3 py-1 rounded-full text-sm">Monthly</button>
              <button className="bg-white border border-gray-300 text-gray-700 px-3 py-1 rounded-full text-sm">Weekly</button>
              <button className="bg-white border border-gray-300 text-gray-700 px-3 py-1 rounded-full text-sm">Daily</button>
            </div>
          </div>

          {/* Leaderboard Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead>
                <tr className="bg-gray-50">
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Rank</th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">User</th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Score</th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Problems Solved</th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Country</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {leaderboardData.map((user) => (
                  <tr key={user.rank} className={`hover:bg-gray-50 ${user.rank <= 3 ? 'bg-blue-50' : ''}`}>
                    <td className="py-3 px-4">
                      <div className={`flex items-center justify-center w-6 h-6 rounded-full ${
                        user.rank === 1 ? 'bg-yellow-400' :
                        user.rank === 2 ? 'bg-gray-300' :
                        user.rank === 3 ? 'bg-amber-600' : 'bg-white'
                      } ${user.rank <= 3 ? 'text-white font-bold' : 'text-gray-700'}`}>
                        {user.rank}
                      </div>
                    </td>
                    <td className="py-3 px-4 font-medium text-blue-600">{user.username}</td>
                    <td className="py-3 px-4 font-medium">{user.score}</td>
                    <td className="py-3 px-4">{user.solved}</td>
                    <td className="py-3 px-4">{user.country}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-6">
            <button className="flex items-center text-sm text-gray-700">
              <img src="/arrow-left.svg" alt="Previous" className="h-4 w-4 mr-1" />
              Previous
            </button>
            <div className="flex items-center gap-2">
              <button className="h-8 w-8 rounded-full bg-blue-600 text-white flex items-center justify-center">1</button>
              <button className="h-8 w-8 rounded-full text-gray-700 flex items-center justify-center">2</button>
              <button className="h-8 w-8 rounded-full text-gray-700 flex items-center justify-center">3</button>
              <span className="text-gray-500">...</span>
              <button className="h-8 w-8 rounded-full text-gray-700 flex items-center justify-center">10</button>
            </div>
            <button className="flex items-center text-sm text-gray-700">
              Next
              <img src="/arrow-right.svg" alt="Next" className="h-4 w-4 ml-1" />
            </button>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="hidden md:flex md:w-1/3 bg-gray-100 items-center justify-center">
          <img
            src={leaderboardImage}
            alt="Leaderboard"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default LeaderboardPage; 