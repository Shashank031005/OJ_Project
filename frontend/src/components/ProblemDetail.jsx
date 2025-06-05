import React, { useState } from 'react';

const ProblemDetailPage = () => {
  const [activeTab, setActiveTab] = useState('description');
  
  // Sample problem data
  const problem = {
    id: 1,
    title: 'Two Sum',
    difficulty: 'Easy',
    description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.',
    examples: [
      {
        input: 'nums = [2,7,11,15], target = 9',
        output: '[0,1]',
        explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].'
      },
      {
        input: 'nums = [3,2,4], target = 6',
        output: '[1,2]',
        explanation: 'Because nums[1] + nums[2] == 6, we return [1, 2].'
      }
    ],
    constraints: [
      '2 <= nums.length <= 10^4',
      '-10^9 <= nums[i] <= 10^9',
      '-10^9 <= target <= 10^9',
      'Only one valid answer exists.'
    ]
  };

  // Sample starter code
  const starterCode = `function twoSum(nums, target) {
    // Your code here
};`;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Problem Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-blue-950">
                {problem.id}. {problem.title}
              </h1>
              <div className="mt-1 flex items-center">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  problem.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                  problem.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {problem.difficulty}
                </span>
              </div>
            </div>
            <div className="mt-4 sm:mt-0">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg">
                Submit Solution
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow flex flex-col md:flex-row max-w-6xl mx-auto w-full px-4 py-6">
        {/* Left Panel - Problem Description */}
        <div className="w-full md:w-1/2 md:pr-4 mb-6 md:mb-0">
          <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
            {/* Tabs */}
            <div className="flex border-b border-gray-200">
              <button
                className={`px-4 py-3 text-sm font-medium ${
                  activeTab === 'description' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'
                }`}
                onClick={() => setActiveTab('description')}
              >
                Description
              </button>
              <button
                className={`px-4 py-3 text-sm font-medium ${
                  activeTab === 'solution' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'
                }`}
                onClick={() => setActiveTab('solution')}
              >
                Solution
              </button>
              <button
                className={`px-4 py-3 text-sm font-medium ${
                  activeTab === 'submissions' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'
                }`}
                onClick={() => setActiveTab('submissions')}
              >
                Submissions
              </button>
            </div>

            {/* Tab Content */}
            <div className="p-6">
              {activeTab === 'description' && (
                <div>
                  <p className="text-gray-700 mb-6">{problem.description}</p>
                  
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Examples:</h3>
                  {problem.examples.map((example, index) => (
                    <div key={index} className="mb-4 bg-gray-50 p-4 rounded-lg">
                      <div className="mb-2">
                        <span className="font-medium">Input:</span> {example.input}
                      </div>
                      <div className="mb-2">
                        <span className="font-medium">Output:</span> {example.output}
                      </div>
                      {example.explanation && (
                        <div>
                          <span className="font-medium">Explanation:</span> {example.explanation}
                        </div>
                      )}
                    </div>
                  ))}
                  
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Constraints:</h3>
                  <ul className="list-disc pl-5 text-gray-700">
                    {problem.constraints.map((constraint, index) => (
                      <li key={index} className="mb-1">{constraint}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {activeTab === 'solution' && (
                <div>
                  <p className="text-gray-700 mb-4">Here's an efficient solution using a hash map:</p>
                  <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto">
                    <code className="text-sm">
{`function twoSum(nums, target) {
  const map = new Map();
  
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    
    map.set(nums[i], i);
  }
  
  return null;
}`}
                    </code>
                  </pre>
                  <p className="mt-4 text-gray-700">
                    Time Complexity: O(n) where n is the length of the array.<br />
                    Space Complexity: O(n) for the hash map.
                  </p>
                </div>
              )}
              
              {activeTab === 'submissions' && (
                <div>
                  <p className="text-gray-500 italic text-center py-8">
                    You haven't submitted any solutions yet.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Panel - Code Editor */}
        <div className="w-full md:w-1/2 md:pl-4">
          <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 h-full flex flex-col">
            <div className="bg-gray-50 border-b border-gray-200 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center">
                <span className="text-sm font-medium text-gray-700">JavaScript</span>
                <div className="ml-4 relative">
                  <select className="appearance-none bg-white border border-gray-300 text-sm rounded-md py-1 pl-3 pr-8 text-gray-700">
                    <option>JavaScript</option>
                    <option>Python</option>
                    <option>Java</option>
                    <option>C++</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
              <button className="text-sm text-gray-600 hover:text-gray-900">
                Reset
              </button>
            </div>
            
            <div className="flex-grow p-4 bg-gray-50">
              <textarea
                className="w-full h-full p-4 font-mono text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                defaultValue={starterCode}
              ></textarea>
            </div>
            
            <div className="bg-gray-50 border-t border-gray-200 px-4 py-3 flex justify-between">
              <button className="text-sm text-gray-600 hover:text-gray-900 flex items-center">
                <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                </svg>
                Save
              </button>
              <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md text-sm">
                Run Code
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemDetailPage; 