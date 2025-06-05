import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import problemListImage from '/problem-list.jpg';
import problemsService from '../services/problems';

const ProblemListPage = () => {
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch problems from API
  useEffect(() => {
    const fetchProblems = async () => {
      try {
        setLoading(true);
        const data = await problemsService.getAllProblems();
        setProblems(data.results || data);
        setError(null);
      } catch (err) {
        setError('Failed to load problems. Please try again later.');
        console.error('Error fetching problems:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProblems();
  }, []);

  // Filter problems based on difficulty and search term
  const filteredProblems = problems.filter(problem => {
    // Filter by difficulty
    if (filter !== 'All' && filter !== 'Solved' && filter !== 'Unsolved') {
      if (problem.difficulty !== filter) return false;
    }
    
    // Filter by solved status
    if (filter === 'Solved' && !problem.solved) return false;
    if (filter === 'Unsolved' && problem.solved) return false;
    
    // Filter by search term
    if (searchTerm && !problem.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    
    return true;
  });

  // Difficulty color mapping
  const difficultyColor = {
    Easy: 'text-green-600',
    Medium: 'text-yellow-600',
    Hard: 'text-red-600'
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="flex flex-col md:flex-row w-full max-w-6xl shadow-lg rounded-lg overflow-hidden">
        {/* Left Section (Problem List) */}
        <div className="w-full md:w-2/3 p-8 md:p-12">
          <h2 className="text-3xl font-bold text-blue-950 mb-2">Problems</h2>
          <p className="text-gray-600 mb-6">Practice coding problems to improve your skills</p>

          {/* Error message */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}

          {/* Search and Filter */}
          <div className="mb-6">
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 mb-4">
              <img src="/search.svg" alt="Search Icon" className="h-5 w-5 text-gray-400 mr-2" />
              <input
                type="text"
                className="w-full outline-none text-sm"
                placeholder="Search problems..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              <button 
                className={`${filter === 'All' ? 'bg-blue-600 text-white' : 'bg-white border border-gray-300 text-gray-700'} px-3 py-1 rounded-full text-sm`}
                onClick={() => setFilter('All')}
              >
                All
              </button>
              <button 
                className={`${filter === 'Easy' ? 'bg-blue-600 text-white' : 'bg-white border border-gray-300 text-gray-700'} px-3 py-1 rounded-full text-sm`}
                onClick={() => setFilter('Easy')}
              >
                Easy
              </button>
              <button 
                className={`${filter === 'Medium' ? 'bg-blue-600 text-white' : 'bg-white border border-gray-300 text-gray-700'} px-3 py-1 rounded-full text-sm`}
                onClick={() => setFilter('Medium')}
              >
                Medium
              </button>
              <button 
                className={`${filter === 'Hard' ? 'bg-blue-600 text-white' : 'bg-white border border-gray-300 text-gray-700'} px-3 py-1 rounded-full text-sm`}
                onClick={() => setFilter('Hard')}
              >
                Hard
              </button>
              <button 
                className={`${filter === 'Solved' ? 'bg-blue-600 text-white' : 'bg-white border border-gray-300 text-gray-700'} px-3 py-1 rounded-full text-sm`}
                onClick={() => setFilter('Solved')}
              >
                Solved
              </button>
              <button 
                className={`${filter === 'Unsolved' ? 'bg-blue-600 text-white' : 'bg-white border border-gray-300 text-gray-700'} px-3 py-1 rounded-full text-sm`}
                onClick={() => setFilter('Unsolved')}
              >
                Unsolved
              </button>
            </div>
          </div>

          {/* Loading state */}
          {loading ? (
            <div className="flex justify-center my-8">
              <div className="loading-spinner h-8 w-8"></div>
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <>
              {/* Problems Table */}
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">ID</th>
                      <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Title</th>
                      <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Difficulty</th>
                      <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {filteredProblems.length > 0 ? (
                      filteredProblems.map(problem => (
                        <tr key={problem.id} className="hover:bg-gray-50 cursor-pointer">
                          <td className="py-3 px-4 text-sm">{problem.id}</td>
                          <td className="py-3 px-4 text-sm font-medium">
                            <Link to={`/problems/${problem.slug}`} className="text-blue-600 hover:underline">
                              {problem.title}
                            </Link>
                          </td>
                          <td className={`py-3 px-4 text-sm ${difficultyColor[problem.difficulty]}`}>
                            {problem.difficulty}
                          </td>
                          <td className="py-3 px-4 text-sm">
                            {problem.solved ? (
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                Solved
                              </span>
                            ) : (
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                Unsolved
                              </span>
                            )}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="4" className="py-4 text-center text-gray-500">
                          No problems found matching your criteria
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              {filteredProblems.length > 0 && (
                <div className="flex items-center justify-between mt-6">
                  <button 
                    className="flex items-center text-sm text-gray-700"
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                  >
                    <img src="/arrow-left.svg" alt="Previous" className="h-4 w-4 mr-1" />
                    Previous
                  </button>
                  <div className="flex items-center gap-2">
                    {/* Pagination buttons would be dynamically generated based on total pages */}
                    <button className="h-8 w-8 rounded-full bg-blue-600 text-white flex items-center justify-center">1</button>
                    <button className="h-8 w-8 rounded-full text-gray-700 flex items-center justify-center">2</button>
                    <button className="h-8 w-8 rounded-full text-gray-700 flex items-center justify-center">3</button>
                    <span className="text-gray-500">...</span>
                    <button className="h-8 w-8 rounded-full text-gray-700 flex items-center justify-center">10</button>
                  </div>
                  <button 
                    className="flex items-center text-sm text-gray-700"
                    onClick={() => setCurrentPage(prev => prev + 1)}
                  >
                    Next
                    <img src="/arrow-right.svg" alt="Next" className="h-4 w-4 ml-1" />
                  </button>
                </div>
              )}
            </>
          )}
        </div>

        {/* Right Section (Image) */}
        <div className="hidden md:flex md:w-1/3 bg-gray-100 items-center justify-center">
          <img
            src={problemListImage}
            alt="Problem List"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ProblemListPage; 