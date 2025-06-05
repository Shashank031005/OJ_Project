import api from './api';

const problemsService = {
  // Get all problems
  getAllProblems: async (params = {}) => {
    try {
      const response = await api.get('/problems/', { params });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Get problem by slug
  getProblem: async (slug) => {
    try {
      const response = await api.get(`/problems/${slug}/`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Submit solution for a problem
  submitSolution: async (problemId, code, language) => {
    try {
      const response = await api.post('/solutions/', {
        problem: problemId,
        code,
        language
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Get user submissions for a problem
  getUserSubmissions: async (problemId) => {
    try {
      const response = await api.get(`/solutions/`, {
        params: { problem: problemId }
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Get submission details
  getSubmission: async (submissionId) => {
    try {
      const response = await api.get(`/solutions/${submissionId}/`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};

export default problemsService; 