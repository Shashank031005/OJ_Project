import api from './api';

const leaderboardService = {
  // Get global leaderboard
  getGlobalLeaderboard: async (params = {}) => {
    try {
      const response = await api.get('/leaderboard/', { params });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Get user ranking
  getUserRanking: async (userId) => {
    try {
      const response = await api.get(`/leaderboard/user/${userId}/`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};

export default leaderboardService; 