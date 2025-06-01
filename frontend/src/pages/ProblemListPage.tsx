import { Link } from 'react-router-dom'
import { useState } from 'react'

// Mock data - in a real application this would come from an API
const mockProblems = [
  {
    id: 1,
    title: 'Two Sum',
    slug: 'two-sum',
    difficulty: 'easy',
    acceptanceRate: '70%',
  },
  {
    id: 2,
    title: 'Longest Substring Without Repeating Characters',
    slug: 'longest-substring',
    difficulty: 'medium',
    acceptanceRate: '45%',
  },
  {
    id: 3,
    title: 'Median of Two Sorted Arrays',
    slug: 'median-of-arrays',
    difficulty: 'hard',
    acceptanceRate: '30%',
  },
  {
    id: 4,
    title: 'Valid Parentheses',
    slug: 'valid-parentheses',
    difficulty: 'easy',
    acceptanceRate: '65%',
  },
  {
    id: 5,
    title: 'LRU Cache',
    slug: 'lru-cache',
    difficulty: 'medium',
    acceptanceRate: '38%',
  }
]

const ProblemListPage = () => {
  const [filter, setFilter] = useState('all')
  
  const filteredProblems = filter === 'all' 
    ? mockProblems 
    : mockProblems.filter(problem => problem.difficulty === filter)

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-800'
      case 'medium': return 'bg-yellow-100 text-yellow-800'
      case 'hard': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Problems</h1>
      
      <div className="mb-6">
        <div className="flex space-x-4">
          <button 
            className={`px-4 py-2 rounded ${filter === 'all' ? 'bg-primary-100 text-primary-800' : 'bg-gray-100 text-gray-600'}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button 
            className={`px-4 py-2 rounded ${filter === 'easy' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'}`}
            onClick={() => setFilter('easy')}
          >
            Easy
          </button>
          <button 
            className={`px-4 py-2 rounded ${filter === 'medium' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-600'}`}
            onClick={() => setFilter('medium')}
          >
            Medium
          </button>
          <button 
            className={`px-4 py-2 rounded ${filter === 'hard' ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-600'}`}
            onClick={() => setFilter('hard')}
          >
            Hard
          </button>
        </div>
      </div>
      
      <div className="overflow-x-auto rounded-lg">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="py-3 px-4 text-left">Title</th>
              <th className="py-3 px-4 text-left">Difficulty</th>
              <th className="py-3 px-4 text-left">Acceptance Rate</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredProblems.map(problem => (
              <tr key={problem.id} className="hover:bg-gray-50">
                <td className="py-3 px-4">
                  <Link to={`/problems/${problem.slug}`} className="text-primary-600 hover:text-primary-800">
                    {problem.title}
                  </Link>
                </td>
                <td className="py-3 px-4">
                  <span className={`inline-block px-2 py-1 text-xs font-semibold rounded ${getDifficultyColor(problem.difficulty)}`}>
                    {problem.difficulty.charAt(0).toUpperCase() + problem.difficulty.slice(1)}
                  </span>
                </td>
                <td className="py-3 px-4">{problem.acceptanceRate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ProblemListPage 