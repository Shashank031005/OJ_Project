import React, { useState } from 'react';
import contestsImage from '/contests.jpg';

const ContestsPage = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  
  // Sample contests data
  const upcomingContests = [
    { 
      id: 1, 
      name: 'Weekly Contest 345', 
      date: 'Jun 10, 2023', 
      time: '8:00 PM - 9:30 PM', 
      duration: '1.5 hours',
      registered: true
    },
    { 
      id: 2, 
      name: 'Biweekly Contest 102', 
      date: 'Jun 18, 2023', 
      time: '8:00 PM - 9:30 PM', 
      duration: '1.5 hours',
      registered: false
    },
    { 
      id: 3, 
      name: 'Monthly Challenge - June', 
      date: 'Jun 25, 2023', 
      time: '7:00 PM - 10:00 PM', 
      duration: '3 hours',
      registered: false
    },
  ];

  const pastContests = [
    { 
      id: 101, 
      name: 'Weekly Contest 344', 
      date: 'Jun 3, 2023', 
      participants: 12458,
      rank: 1024,
      solved: 3,
      total: 4
    },
    { 
      id: 102, 
      name: 'Biweekly Contest 101', 
      date: 'May 28, 2023', 
      participants: 11235,
      rank: 876,
      solved: 2,
      total: 4
    },
    { 
      id: 103, 
      name: 'Weekly Contest 343', 
      date: 'May 27, 2023', 
      participants: 12089,
      rank: 1542,
      solved: 2,
      total: 4
    },
    { 
      id: 104, 
      name: 'Monthly Challenge - May', 
      date: 'May 20, 2023', 
      participants: 15782,
      rank: 932,
      solved: 5,
      total: 8
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="flex flex-col md:flex-row w-full max-w-6xl shadow-lg rounded-lg overflow-hidden">
        {/* Left Section (Contests) */}
        <div className="w-full md:w-2/3 p-8 md:p-12">
          <h2 className="text-3xl font-bold text-blue-950 mb-2">Coding Contests</h2>
          <p className="text-gray-600 mb-6">Participate in contests to improve your skills and ranking</p>

          {/* Tabs */}
          <div className="flex border-b border-gray-200 mb-6">
            <button
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === 'upcoming' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'
              }`}
              onClick={() => setActiveTab('upcoming')}
            >
              Upcoming Contests
            </button>
            <button
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === 'past' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'
              }`}
              onClick={() => setActiveTab('past')}
            >
              Past Contests
            </button>
          </div>

          {/* Upcoming Contests */}
          {activeTab === 'upcoming' && (
            <div className="space-y-4">
              {upcomingContests.map(contest => (
                <div key={contest.id} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-blue-600">{contest.name}</h3>
                      <div className="mt-1 text-sm text-gray-600">
                        <p>{contest.date} • {contest.time}</p>
                        <p>Duration: {contest.duration}</p>
                      </div>
                    </div>
                    <div className="mt-4 sm:mt-0">
                      {contest.registered ? (
                        <button className="px-4 py-2 bg-green-100 text-green-800 rounded-lg text-sm font-medium">
                          Registered
                        </button>
                      ) : (
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
                          Register
                        </button>
                      )}
                    </div>
                  </div>
                  {contest.registered && (
                    <div className="mt-4 bg-blue-50 rounded-lg p-3 text-sm">
                      <p className="text-blue-800">
                        <span className="font-medium">Reminder:</span> This contest starts in 3 days. Make sure to join on time!
                      </p>
                    </div>
                  )}
                </div>
              ))}

              <div className="mt-6 text-center">
                <button className="text-sm text-blue-600 font-medium hover:text-blue-800">
                  View all upcoming contests
                </button>
              </div>
            </div>
          )}

          {/* Past Contests */}
          {activeTab === 'past' && (
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Contest</th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Date</th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Rank</th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Solved</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {pastContests.map(contest => (
                    <tr key={contest.id} className="hover:bg-gray-50">
                      <td className="py-3 px-4">
                        <a href="#" className="text-blue-600 hover:underline font-medium">{contest.name}</a>
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-600">{contest.date}</td>
                      <td className="py-3 px-4">
                        <span className="text-sm font-medium">
                          {contest.rank} <span className="text-gray-500 font-normal">/ {contest.participants}</span>
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-sm">
                          {contest.solved}/{contest.total}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="mt-6 text-center">
                <button className="text-sm text-blue-600 font-medium hover:text-blue-800">
                  View all past contests
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Right Section (Image) */}
        <div className="hidden md:flex md:w-1/3 bg-gray-100 items-center justify-center">
          <img
            src={contestsImage}
            alt="Coding Contests"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ContestsPage; 