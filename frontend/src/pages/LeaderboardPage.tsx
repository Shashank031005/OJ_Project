import { useState } from 'react'

// Mock data
const leaderboardData = [
  { id: 1, username: 'alexander42', score: 950, problemsSolved: 42, rank: 1 },
  { id: 2, username: 'codemaster', score: 920, problemsSolved: 38, rank: 2 },
  { id: 3, username: 'devninja', score: 890, problemsSolved: 35, rank: 3 },
  { id: 4, username: 'techguru', score: 850, problemsSolved: 33, rank: 4 },
  { id: 5, username: 'algorithms_expert', score: 820, problemsSolved: 31, rank: 5 },
  { id: 6, username: 'coder123', score: 780, problemsSolved: 29, rank: 6 },
  { id: 7, username: 'pythonista', score: 750, problemsSolved: 27, rank: 7 },
  { id: 8, username: 'jsdev', score: 730, problemsSolved: 26, rank: 8 },
  { id: 9, username: 'codewizard', score: 700, problemsSolved: 25, rank: 9 },
  { id: 10, username: 'binary_search', score: 680, problemsSolved: 24, rank: 10 },
];

const LeaderboardPage = () => {
  const [timeFilter, setTimeFilter] = useState('all-time');
  
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Leaderboard</h1>
      
      <div className="mb-6">
        <div className="flex space-x-4">
          <button 
            className={`px-4 py-2 rounded ${timeFilter === 'all-time' ? 'bg-primary-100 text-primary-800' : 'bg-gray-100 text-gray-600'}`}
            onClick={() => setTimeFilter('all-time')}
          >
            All Time
          </button>
          <button 
            className={`px-4 py-2 rounded ${timeFilter === 'monthly' ? 'bg-primary-100 text-primary-800' : 'bg-gray-100 text-gray-600'}`}
            onClick={() => setTimeFilter('monthly')}
          >
            Monthly
          </button>
          <button 
            className={`px-4 py-2 rounded ${timeFilter === 'weekly' ? 'bg-primary-100 text-primary-800' : 'bg-gray-100 text-gray-600'}`}
            onClick={() => setTimeFilter('weekly')}
          >
            Weekly
          </button>
          <button 
            className={`px-4 py-2 rounded ${timeFilter === 'daily' ? 'bg-primary-100 text-primary-800' : 'bg-gray-100 text-gray-600'}`}
            onClick={() => setTimeFilter('daily')}
          >
            Daily
          </button>
        </div>
      </div>
      
      <div className="overflow-x-auto rounded-lg">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="py-3 px-4 text-left">Rank</th>
              <th className="py-3 px-4 text-left">Username</th>
              <th className="py-3 px-4 text-left">Score</th>
              <th className="py-3 px-4 text-left">Problems Solved</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {leaderboardData.map(user => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="py-3 px-4">
                  <div className="flex items-center">
                    <span className="font-medium">{user.rank}</span>
                    {user.rank <= 3 && (
                      <span className="ml-2">
                        {user.rank === 1 ? '🥇' : user.rank === 2 ? '🥈' : '🥉'}
                      </span>
                    )}
                  </div>
                </td>
                <td className="py-3 px-4 font-medium">{user.username}</td>
                <td className="py-3 px-4">{user.score}</td>
                <td className="py-3 px-4">{user.problemsSolved}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaderboardPage; 