import api from './api';

const contestsService = {
  // Get all contests
  getAllContests: async () => {
    try {
      const response = await api.get('/contests/');
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Get contest details
  getContest: async (contestId) => {
    try {
      const response = await api.get(`/contests/${contestId}/`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Register for a contest
  registerForContest: async (contestId) => {
    try {
      const response = await api.post(`/contests/${contestId}/register/`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Get contest problems
  getContestProblems: async (contestId) => {
    try {
      const response = await api.get(`/contests/${contestId}/problems/`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Submit solution for a contest problem
  submitContestSolution: async (contestId, problemId, code, language) => {
    try {
      const response = await api.post(`/contests/${contestId}/submissions/`, {
        problem: problemId,
        code,
        language
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Get contest leaderboard
  getContestLeaderboard: async (contestId) => {
    try {
      const response = await api.get(`/contests/${contestId}/leaderboard/`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};

export default contestsService; 