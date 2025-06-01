import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CodeEditor from '../components/CodeEditor'

// Mock data - in a real app, this would be fetched from an API
const mockProblem = {
  title: 'Two Sum',
  difficulty: 'easy',
  description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice.',
  inputFormat: 'First line contains an integer n, the size of the array. Second line contains n space-separated integers representing the array elements. Third line contains a single integer target.',
  outputFormat: 'Return indices of the two numbers such that they add up to target.',
  constraints: '2 <= nums.length <= 10^4, -10^9 <= nums[i] <= 10^9, -10^9 <= target <= 10^9',
  sampleInput: '4\n2 7 11 15\n9',
  sampleOutput: '0 1',
  explanation: 'Because nums[0] + nums[1] == 2 + 7 == 9, we return [0, 1].',
};

const languageOptions = [
  { value: 'python', label: 'Python' },
  { value: 'java', label: 'Java' },
  { value: 'cpp', label: 'C++' },
  { value: 'javascript', label: 'JavaScript' },
];

interface TestResult {
  passed: boolean;
  output: string;
  expected: string;
  executionTime: string;
  memoryUsage: string;
}

const ProblemDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState(languageOptions[0].value);
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<TestResult[] | null>(null);
  const [activeTab, setActiveTab] = useState<'description' | 'submissions' | 'discussion'>('description');
  const [isCustomTestActive, setIsCustomTestActive] = useState(false);
  const [customInput, setCustomInput] = useState('');
  const [customOutput, setCustomOutput] = useState('');
  const [isCustomTestLoading, setIsCustomTestLoading] = useState(false);
  
  // In a real app, we would fetch the problem details using the slug
  useEffect(() => {
    setCode(getStarterCode(language));
  }, [language]);

  const handleSubmit = () => {
    setIsLoading(true);
    setResults(null);
    
    // Mock API call
    setTimeout(() => {
      setIsLoading(false);
      
      // Mock test results
      setResults([
        {
          passed: true,
          output: '[0, 1]',
          expected: '[0, 1]',
          executionTime: '5ms',
          memoryUsage: '2.1MB',
        },
        {
          passed: true,
          output: '[1, 3]',
          expected: '[1, 3]',
          executionTime: '3ms',
          memoryUsage: '2.0MB',
        },
        {
          passed: false,
          output: '[0, 2]',
          expected: '[0, 3]',
          executionTime: '4ms',
          memoryUsage: '2.2MB',
        }
      ]);
    }, 1500);
  };

  const handleRunCustomTest = () => {
    if (!customInput.trim()) return;
    
    setIsCustomTestLoading(true);
    setCustomOutput('');
    
    // Mock API call
    setTimeout(() => {
      setIsCustomTestLoading(false);
      setCustomOutput(`[0, 1]\n\nExecution Time: 4ms\nMemory Usage: 2.1MB`);
    }, 1000);
  };

  const getStarterCode = (lang: string) => {
    switch (lang) {
      case 'python':
        return `def two_sum(nums, target):
    # Your solution here
    pass`;
      case 'java':
        return `class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Your solution here
        return new int[]{0, 0};
    }
}`;
      case 'cpp':
        return `vector<int> twoSum(vector<int>& nums, int target) {
    // Your solution here
    return {0, 0};
}`;
      case 'javascript':
        return `function twoSum(nums, target) {
    // Your solution here
    return [0, 0];
}`;
      default:
        return '// Start coding here';
    }
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLanguage = e.target.value;
    
    // Confirm before changing language if code has been modified from starter code
    if (code !== getStarterCode(language) && code.trim() !== '') {
      if (window.confirm('Changing language will reset your code. Continue?')) {
        setLanguage(newLanguage);
      }
    } else {
      setLanguage(newLanguage);
    }
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
    <div className="animate-fade-in">
      <div className="mb-6">
        <h1 className="text-xl sm:text-2xl font-bold">{mockProblem.title}</h1>
        <div className="mt-2 flex flex-wrap items-center gap-2 sm:gap-4">
          {getDifficultyBadge(mockProblem.difficulty)}
          <span className="text-gray-500 text-xs sm:text-sm">Acceptance Rate: 64%</span>
          <span className="text-gray-500 text-xs sm:text-sm">Submissions: 2.5M</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        {/* Left Panel: Problem + Results */}
        <div className="flex flex-col space-y-4">
          {/* Tab Navigation */}
          <div className="border-b border-gray-200 overflow-x-auto">
            <nav className="flex space-x-4 sm:space-x-8 whitespace-nowrap">
              <button
                onClick={() => setActiveTab('description')}
                className={`py-3 sm:py-4 px-1 border-b-2 font-medium text-xs sm:text-sm ${
                  activeTab === 'description' 
                    ? 'border-primary-500 text-primary-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Description
              </button>
              <button
                onClick={() => setActiveTab('submissions')}
                className={`py-3 sm:py-4 px-1 border-b-2 font-medium text-xs sm:text-sm ${
                  activeTab === 'submissions' 
                    ? 'border-primary-500 text-primary-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Submissions
              </button>
              <button
                onClick={() => setActiveTab('discussion')}
                className={`py-3 sm:py-4 px-1 border-b-2 font-medium text-xs sm:text-sm ${
                  activeTab === 'discussion' 
                    ? 'border-primary-500 text-primary-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Discussion
              </button>
            </nav>
          </div>
          
          {/* Tab Content */}
          {activeTab === 'description' && (
            <div className="space-y-4">
              <div className="prose prose-sm sm:prose max-w-none">
                <h2 className="text-lg sm:text-xl font-medium mt-0">Problem Description</h2>
                <p>{mockProblem.description}</p>
                
                <h3 className="text-base sm:text-lg font-medium">Input Format</h3>
                <p>{mockProblem.inputFormat}</p>
                
                <h3 className="text-base sm:text-lg font-medium">Output Format</h3>
                <p>{mockProblem.outputFormat}</p>
                
                <h3 className="text-base sm:text-lg font-medium">Constraints</h3>
                <p className="whitespace-pre-line">{mockProblem.constraints}</p>
              </div>
              
              {/* Sample Test Cases */}
              <div>
                <h3 className="text-base sm:text-lg font-medium">Example</h3>
                <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Input */}
                  <div className="border rounded-md overflow-hidden">
                    <div className="bg-gray-50 p-2 text-xs sm:text-sm font-medium text-gray-500 border-b">
                      Input
                    </div>
                    <pre className="p-3 text-xs sm:text-sm font-mono bg-gray-50 overflow-x-auto">
                      {mockProblem.sampleInput}
                    </pre>
                  </div>
                  
                  {/* Output */}
                  <div className="border rounded-md overflow-hidden">
                    <div className="bg-gray-50 p-2 text-xs sm:text-sm font-medium text-gray-500 border-b">
                      Output
                    </div>
                    <pre className="p-3 text-xs sm:text-sm font-mono bg-gray-50 overflow-x-auto">
                      {mockProblem.sampleOutput}
                    </pre>
                  </div>
                </div>
                
                {/* Explanation */}
                {mockProblem.explanation && (
                  <div className="mt-4">
                    <h4 className="text-sm sm:text-base font-medium">Explanation</h4>
                    <p className="mt-1 text-xs sm:text-sm text-gray-600">{mockProblem.explanation}</p>
                  </div>
                )}
              </div>
            </div>
          )}
          
          {/* Submissions tab content */}
          {activeTab === 'submissions' && (
            <div>
              <h2 className="text-lg font-medium">Your Submissions</h2>
              {/* Replace with actual submissions table */}
              <div className="mt-3 bg-white rounded-md overflow-hidden border">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th className="px-3 sm:px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-3 sm:px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Language</th>
                        <th className="px-3 sm:px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Runtime</th>
                        <th className="px-3 sm:px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Memory</th>
                        <th className="px-3 sm:px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Submitted</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-3 sm:px-4 py-2 whitespace-nowrap">
                          <span className="badge badge-success">Accepted</span>
                        </td>
                        <td className="px-3 sm:px-4 py-2 whitespace-nowrap text-xs sm:text-sm text-gray-500">Python</td>
                        <td className="px-3 sm:px-4 py-2 whitespace-nowrap text-xs sm:text-sm text-gray-500">5ms</td>
                        <td className="px-3 sm:px-4 py-2 whitespace-nowrap text-xs sm:text-sm text-gray-500">2.1MB</td>
                        <td className="px-3 sm:px-4 py-2 whitespace-nowrap text-xs sm:text-sm text-gray-500">2 hours ago</td>
                      </tr>
                      <tr>
                        <td className="px-3 sm:px-4 py-2 whitespace-nowrap">
                          <span className="badge badge-error">Wrong Answer</span>
                        </td>
                        <td className="px-3 sm:px-4 py-2 whitespace-nowrap text-xs sm:text-sm text-gray-500">Python</td>
                        <td className="px-3 sm:px-4 py-2 whitespace-nowrap text-xs sm:text-sm text-gray-500">4ms</td>
                        <td className="px-3 sm:px-4 py-2 whitespace-nowrap text-xs sm:text-sm text-gray-500">2.0MB</td>
                        <td className="px-3 sm:px-4 py-2 whitespace-nowrap text-xs sm:text-sm text-gray-500">2 hours ago</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
          
          {/* Discussion tab content */}
          {activeTab === 'discussion' && (
            <div className="space-y-6">
              <h2 className="text-lg font-medium">Discussion</h2>
              <div className="bg-white p-3 sm:p-4 rounded-lg border border-gray-200">
                <textarea 
                  className="w-full border rounded-md p-2 text-sm" 
                  rows={3} 
                  placeholder="Share your thoughts or ask a question..."
                />
                <div className="mt-2 flex justify-end">
                  <button className="btn btn-small">Post Comment</button>
                </div>
              </div>
              
              {/* Sample comments - would be fetched from API */}
              <div className="space-y-4">
                <div className="bg-white p-3 sm:p-4 rounded-lg border border-gray-200">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-3">
                      <div className="w-8 h-8 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-semibold text-sm">
                        J
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center">
                        <h3 className="text-sm font-semibold">John Doe</h3>
                        <span className="ml-2 text-xs text-gray-500">1 day ago</span>
                      </div>
                      <p className="mt-1 text-xs sm:text-sm text-gray-600">
                        Has anyone tried using a hash map to solve this problem? I found it to be much more efficient than the brute force approach.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Test Results (shown only after submission) */}
          {results && (
            <div className="mt-4">
              <h3 className="text-lg font-medium mb-3">Test Results</h3>
              <div className="space-y-3">
                {results.map((result, index) => (
                  <div 
                    key={index} 
                    className={`p-3 rounded-md border ${
                      result.passed ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-xs sm:text-sm">
                        Test Case {index + 1}
                        {result.passed ? ' - Passed!' : ' - Failed'}
                      </span>
                      <div className="text-xs">
                        <span className="mr-2 text-gray-600">Runtime: {result.executionTime}</span>
                        <span className="text-gray-600">Memory: {result.memoryUsage}</span>
                      </div>
                    </div>
                    
                    <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Output:</div>
                        <div className="bg-white p-2 rounded border border-gray-200 overflow-x-auto">
                          {result.output}
                        </div>
                      </div>
                      
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Expected:</div>
                        <div className="bg-white p-2 rounded border border-gray-200 overflow-x-auto">
                          {result.expected}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        
        {/* Right Panel: Code Editor */}
        <div className="flex flex-col space-y-4">
          {/* Language selection and custom test toggle */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
            <div className="flex items-center space-x-2">
              <label htmlFor="language-select" className="text-xs sm:text-sm font-medium text-gray-700">
                Language:
              </label>
              <select 
                id="language-select"
                className="text-xs sm:text-sm border-gray-300 rounded-md shadow-sm focus:border-primary-500 focus:ring-primary-500"
                value={language}
                onChange={handleLanguageChange}
              >
                {languageOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            
            <button 
              className={`flex items-center text-xs sm:text-sm font-medium ${
                isCustomTestActive 
                  ? 'text-primary-600' 
                  : 'text-gray-600 hover:text-primary-600'
              }`}
              onClick={() => setIsCustomTestActive(!isCustomTestActive)}
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              Custom Test
              {isCustomTestActive ? 
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                :
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              }
            </button>
          </div>
          
          {/* Code Editor */}
          <CodeEditor 
            code={code}
            language={language}
            onChange={setCode}
            height="calc(100vh - 300px)" 
          />
          
          {/* Custom Test Input/Output - Collapsible */}
          {isCustomTestActive && (
            <div className="border rounded-md animate-fade-in">
              <div className="flex flex-col sm:flex-row">
                <div className="flex-1 p-3 border-b sm:border-b-0 sm:border-r">
                  <label htmlFor="custom-input" className="block text-xs font-medium text-gray-700 mb-1">
                    Input
                  </label>
                  <textarea 
                    id="custom-input"
                    rows={3}
                    className="w-full text-xs sm:text-sm font-mono p-2 border rounded focus:ring-primary-500 focus:border-primary-500"
                    value={customInput}
                    onChange={(e) => setCustomInput(e.target.value)}
                    placeholder="Enter custom input..."
                  />
                </div>
                <div className="flex-1 p-3">
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Output
                  </label>
                  <pre className="w-full h-full min-h-[4rem] text-xs sm:text-sm font-mono p-2 bg-gray-50 border rounded overflow-auto">
                    {customOutput || 'Results will appear here...'}
                  </pre>
                </div>
              </div>
              <div className="bg-gray-50 p-2 border-t flex justify-end">
                <button 
                  className="btn btn-small flex items-center"
                  onClick={handleRunCustomTest}
                  disabled={isCustomTestLoading}
                >
                  {isCustomTestLoading ? (
                    <>
                      <div className="loading-spinner w-3 h-3 mr-1"></div>
                      Running...
                    </>
                  ) : (
                    <>
                      <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Run Test
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
          
          {/* Actions */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <button
              className="btn-secondary flex-grow sm:flex-grow-0 text-xs sm:text-sm flex items-center justify-center"
              onClick={handleRunCustomTest}
              disabled={isCustomTestLoading}
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Run Code
            </button>
            
            <button 
              className="btn flex-grow sm:flex-grow-0 text-xs sm:text-sm flex items-center justify-center"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <div className="loading-spinner w-4 h-4 mr-1"></div>
                  Submitting...
                </>
              ) : (
                <>
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Submit
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemDetailPage; 