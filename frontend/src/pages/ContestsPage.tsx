import { useState } from 'react'
import { Link } from 'react-router-dom'

// Mock data for contests
const mockContests = [
  {
    id: 1,
    title: 'Weekly Contest 352',
    description: 'Regular weekly coding contest with four problems of varying difficulty levels.',
    startTime: new Date(Date.now() + 86400000).toISOString(), // Tomorrow
    duration: '1.5 hours',
    status: 'upcoming',
    participants: 2356
  },
  {
    id: 2,
    title: 'Biweekly Contest 115',
    description: 'Biweekly contest featuring algorithmic challenges and data structure problems.',
    startTime: new Date(Date.now() + 345600000).toISOString(), // 4 days later
    duration: '2 hours',
    status: 'upcoming',
    participants: 1987
  },
  {
    id: 3,
    title: 'Education Round #3',
    description: 'Educational contest focused on learning new algorithms and techniques.',
    startTime: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
    duration: '2 hours',
    status: 'past',
    participants: 1560
  },
  {
    id: 4,
    title: 'Grand Challenge 2023',
    description: 'Annual coding contest with challenging problems and valuable prizes.',
    startTime: new Date(Date.now() - 604800000).toISOString(), // 1 week ago
    duration: '3 hours',
    status: 'past',
    participants: 3214
  },
];

const ContestsPage = () => {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');
  
  const filteredContests = mockContests.filter(contest => contest.status === activeTab);
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat().format(num);
  };
  
  // Calculate time remaining for upcoming contests
  const getTimeRemaining = (startTime: string) => {
    const startDate = new Date(startTime).getTime();
    const now = Date.now();
    const diff = startDate - now;
    
    // If already started, return empty string
    if (diff <= 0) return '';
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    
    if (days > 0) {
      return `${days}d ${hours}h`;
    } else if (hours > 0) {
      return `${hours}h ${minutes}m`;
    } else {
      return `${minutes}m`;
    }
  };

  return (
    <div className="animate-fade-in">
      <h1 className="text-3xl font-bold mb-6">Contests</h1>
      
      {/* Tab Navigation */}
      <div className="mb-6 border-b border-gray-200">
        <nav className="flex space-x-8">
          <button
            onClick={() => setActiveTab('upcoming')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'upcoming' 
                ? 'border-primary-500 text-primary-600' 
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Upcoming Contests
          </button>
          <button
            onClick={() => setActiveTab('past')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'past' 
                ? 'border-primary-500 text-primary-600' 
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Past Contests
          </button>
        </nav>
      </div>
      
      {/* Contest List */}
      <div className="space-y-6">
        {filteredContests.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500">No {activeTab} contests found.</p>
          </div>
        ) : (
          filteredContests.map(contest => (
            <div 
              key={contest.id}
              className="card hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div className="flex-1">
                  <h2 className="text-xl font-semibold">
                    <Link to={`/contests/${contest.id}`} className="text-primary-600 hover:text-primary-800">
                      {contest.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 mt-1">{contest.description}</p>
                  
                  <div className="flex flex-wrap gap-x-6 gap-y-2 mt-3 text-sm">
                    <div className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {formatDate(contest.startTime)}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {contest.duration}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      {formatNumber(contest.participants)} participants
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 md:mt-0 flex flex-col items-end">
                  {activeTab === 'upcoming' && (
                    <>
                      <div className="mb-3 text-primary-600 font-medium">
                        {getTimeRemaining(contest.startTime)} remaining
                      </div>
                      <button className="btn">Register</button>
                    </>
                  )}
                  {activeTab === 'past' && (
                    <>
                      <Link to={`/contests/${contest.id}`} className="btn-secondary">
                        View Results
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ContestsPage; 