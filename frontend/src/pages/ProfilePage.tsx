import { useState, useEffect } from 'react'

// Mock user data - in a real app, this would come from an API
const mockUserData = {
  username: 'test_user',
  email: 'test@example.com',
  joinedDate: '2023-01-15',
  stats: {
    problemsSolved: 42,
    submissions: 87,
    acceptanceRate: '48.3%',
    ranking: 256,
  },
  recentSubmissions: [
    {
      id: 1,
      problemTitle: 'Two Sum',
      submittedAt: '2023-03-20T14:45:00',
      status: 'Accepted',
      language: 'Python',
      executionTime: '45ms',
    },
    {
      id: 2,
      problemTitle: 'Valid Parentheses',
      submittedAt: '2023-03-19T10:22:00',
      status: 'Wrong Answer',
      language: 'Java',
      executionTime: '60ms',
    },
    {
      id: 3,
      problemTitle: 'LRU Cache',
      submittedAt: '2023-03-18T16:15:00',
      status: 'Time Limit Exceeded',
      language: 'C++',
      executionTime: '450ms',
    },
  ],
};

const ProfilePage = () => {
  const [user, setUser] = useState(mockUserData);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setUser(mockUserData);
      setIsLoading(false);
    }, 500);
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-lg">Loading profile...</p>
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Accepted':
        return 'bg-green-100 text-green-800';
      case 'Wrong Answer':
        return 'bg-red-100 text-red-800';
      case 'Time Limit Exceeded':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">User Profile</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <div className="card">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl text-primary-600 font-bold">
                  {user.username.charAt(0).toUpperCase()}
                </span>
              </div>
              
              <h2 className="text-xl font-semibold">{user.username}</h2>
              <p className="text-gray-600">{user.email}</p>
              <p className="text-sm text-gray-500 mt-1">
                Member since {new Date(user.joinedDate).toLocaleDateString()}
              </p>
            </div>
            
            <div className="mt-6 pt-6 border-t">
              <h3 className="text-lg font-semibold mb-4">Statistics</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Problems Solved</p>
                  <p className="text-lg font-medium">{user.stats.problemsSolved}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Total Submissions</p>
                  <p className="text-lg font-medium">{user.stats.submissions}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Acceptance Rate</p>
                  <p className="text-lg font-medium">{user.stats.acceptanceRate}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Ranking</p>
                  <p className="text-lg font-medium">#{user.stats.ranking}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-2">
          <div className="card">
            <h3 className="text-lg font-semibold mb-4">Recent Submissions</h3>
            
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Problem</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Language</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Submitted</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {user.recentSubmissions.map(submission => (
                    <tr key={submission.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3">
                        <a href={`/problems/${submission.problemTitle.toLowerCase().replace(/\s+/g, '-')}`} className="text-primary-600 hover:text-primary-800">
                          {submission.problemTitle}
                        </a>
                      </td>
                      <td className="px-4 py-3">
                        <span className={`inline-block px-2 py-1 text-xs font-semibold rounded ${getStatusColor(submission.status)}`}>
                          {submission.status}
                        </span>
                      </td>
                      <td className="px-4 py-3">{submission.language}</td>
                      <td className="px-4 py-3">{submission.executionTime}</td>
                      <td className="px-4 py-3 text-sm text-gray-500">
                        {formatDate(submission.submittedAt)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage; 