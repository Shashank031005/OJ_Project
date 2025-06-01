import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

// Mock data for trending problems
const trendingProblems = [
  { id: 1, title: 'Two Sum', slug: 'two-sum', difficulty: 'easy', solveCount: 12345 },
  { id: 2, title: 'Add Two Numbers', slug: 'add-two-numbers', difficulty: 'medium', solveCount: 9876 },
  { id: 3, title: 'Longest Palindromic Substring', slug: 'longest-palindrome', difficulty: 'medium', solveCount: 7654 },
];

// Mock data for recent contests
const recentContests = [
  { 
    id: 1, 
    title: 'Weekly Contest 352', 
    startTime: new Date(Date.now() + 86400000).toISOString(),
    duration: '1.5 hours',
    participants: 2356
  },
  { 
    id: 2, 
    title: 'Biweekly Contest 115', 
    startTime: new Date(Date.now() + 345600000).toISOString(),
    duration: '2 hours',
    participants: 1987
  }
];

const HomePage = () => {
  const [activeUsers, setActiveUsers] = useState(0);
  const [solvedProblems, setSolvedProblems] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate data loading with a slight delay
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  // Animate counters
  useEffect(() => {
    if (!isLoaded) return;

    // Animate active users count
    let count = 0;
    const finalActiveUsers = 1457;
    const incrementActiveUsers = () => {
      count += 35;
      if (count >= finalActiveUsers) {
        setActiveUsers(finalActiveUsers);
        return;
      }
      setActiveUsers(count);
      setTimeout(incrementActiveUsers, 30);
    };
    incrementActiveUsers();

    // Animate solved problems count
    let problemCount = 0;
    const finalSolvedProblems = 2356789;
    const incrementSolvedProblems = () => {
      problemCount += 58000;
      if (problemCount >= finalSolvedProblems) {
        setSolvedProblems(finalSolvedProblems);
        return;
      }
      setSolvedProblems(Math.floor(problemCount));
      setTimeout(incrementSolvedProblems, 30);
    };
    incrementSolvedProblems();
  }, [isLoaded]);

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

  const getDifficultyBadge = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return <span className="badge badge-success capitalize">Easy</span>;
      case 'medium':
        return <span className="badge badge-warning capitalize">Medium</span>;
      case 'hard':
        return <span className="badge badge-error capitalize">Hard</span>;
      default:
        return null;
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-primary-600 to-blue-700 text-white rounded-lg shadow-lg mb-12 transform transition-all duration-500 animate-fade-in">
        <div className="text-center mb-12 px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 animate-slide-up">
            Welcome to Online Judge
          </h1>
          <p className="text-lg text-primary-100 max-w-3xl mx-auto animate-slide-up" style={{animationDelay: '100ms'}}>
            A secure, scalable, and intelligent environment for coding challenges with AI-powered feedback
          </p>
          
          {/* Stats */}
          <div className="flex flex-col md:flex-row justify-center gap-8 mt-10 animate-slide-up" style={{animationDelay: '200ms'}}>
            <div className="flex flex-col items-center">
              <div className="text-3xl md:text-4xl font-bold">{formatNumber(activeUsers)}</div>
              <div className="text-primary-200 text-sm">Active Users</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl md:text-4xl font-bold">2,500+</div>
              <div className="text-primary-200 text-sm">Problems</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl md:text-4xl font-bold">{formatNumber(solvedProblems)}</div>
              <div className="text-primary-200 text-sm">Submissions</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-4 px-4">
          <Link to="/problems" className="btn bg-white text-primary-700 hover:bg-primary-100 animate-slide-up" style={{animationDelay: '300ms'}}>
            Browse Problems
          </Link>
          <Link to="/register" className="btn bg-primary-800 hover:bg-primary-900 animate-slide-up" style={{animationDelay: '400ms'}}>
            Sign Up Free
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-12 animate-fade-in" style={{animationDelay: '500ms'}}>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="card hover:-translate-y-1 transition-transform duration-300">
            <div className="mb-4 p-3 bg-primary-100 text-primary-700 rounded-full w-12 h-12 flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold mb-3">Practice Coding</h2>
            <p className="mb-4 text-gray-600">Solve challenges in multiple programming languages and improve your skills</p>
            <Link to="/problems" className="btn">Browse Problems</Link>
          </div>

          <div className="card hover:-translate-y-1 transition-transform duration-300">
            <div className="mb-4 p-3 bg-yellow-100 text-yellow-700 rounded-full w-12 h-12 flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold mb-3">Compete</h2>
            <p className="mb-4 text-gray-600">Participate in coding contests and challenge yourself against others</p>
            <Link to="/contests" className="btn">View Contests</Link>
          </div>

          <div className="card hover:-translate-y-1 transition-transform duration-300">
            <div className="mb-4 p-3 bg-blue-100 text-blue-700 rounded-full w-12 h-12 flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold mb-3">Get Smart Feedback</h2>
            <p className="mb-4 text-gray-600">Receive AI-powered suggestions to improve your code</p>
            <Link to="/problems" className="btn">Start Coding</Link>
          </div>
        </div>
      </section>

      {/* Recent Problems and Upcoming Contests */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 animate-fade-in" style={{animationDelay: '600ms'}}>
        {/* Trending Problems */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Trending Problems</h2>
          <div className="card">
            <div className="space-y-4">
              {trendingProblems.map(problem => (
                <div key={problem.id} className="flex justify-between items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <div>
                    <div className="flex items-center mb-1">
                      {getDifficultyBadge(problem.difficulty)}
                      <span className="ml-2 text-gray-500 text-xs">{formatNumber(problem.solveCount)} solves</span>
                    </div>
                    <Link to={`/problems/${problem.slug}`} className="text-primary-600 hover:text-primary-800 font-medium">
                      {problem.title}
                    </Link>
                  </div>
                  <Link to={`/problems/${problem.slug}`} className="btn-secondary btn-small">
                    Solve
                  </Link>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-4">
              <Link to="/problems" className="text-primary-600 hover:text-primary-800 font-medium">
                View All Problems &rarr;
              </Link>
            </div>
          </div>
        </section>
        
        {/* Upcoming Contests */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Upcoming Contests</h2>
          <div className="card">
            <div className="space-y-4">
              {recentContests.map(contest => (
                <div key={contest.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <h3 className="font-medium text-lg">
                    <Link to="/contests" className="text-primary-600 hover:text-primary-800">
                      {contest.title}
                    </Link>
                  </h3>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 mt-2 text-sm">
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
                      {formatNumber(contest.participants)} registered
                    </div>
                  </div>
                  <div className="mt-3">
                    <Link to="/contests" className="btn-secondary btn-small">
                      Register
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-4">
              <Link to="/contests" className="text-primary-600 hover:text-primary-800 font-medium">
                View All Contests &rarr;
              </Link>
            </div>
          </div>
        </section>
      </div>
      
      {/* Testimonials/Quotes */}
      <section className="py-12 bg-gray-50 -mx-4 px-4 animate-fade-in" style={{animationDelay: '700ms'}}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">What Users Say</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card">
              <div className="text-primary-500 mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-gray-600 italic mb-4">"This platform has been instrumental in my coding journey. The AI-powered feedback helped me understand my mistakes and improve rapidly."</p>
              <div className="flex items-center">
                <div className="font-semibold">Sarah Johnson</div>
                <span className="mx-2 text-gray-400">•</span>
                <div className="text-gray-500 text-sm">Software Engineer</div>
              </div>
            </div>
            
            <div className="card">
              <div className="text-primary-500 mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-gray-600 italic mb-4">"As an educator, I find this platform perfect for my students. The variety of problems and secure execution environment makes teaching coding a breeze."</p>
              <div className="flex items-center">
                <div className="font-semibold">Michael Chen</div>
                <span className="mx-2 text-gray-400">•</span>
                <div className="text-gray-500 text-sm">CS Professor</div>
              </div>
            </div>
            
            <div className="card">
              <div className="text-primary-500 mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-gray-600 italic mb-4">"Preparing for technical interviews has never been easier. The platform's leaderboard and contest features keep me motivated to continue improving."</p>
              <div className="flex items-center">
                <div className="font-semibold">Alex Rodriguez</div>
                <span className="mx-2 text-gray-400">•</span>
                <div className="text-gray-500 text-sm">Student</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage 