import api from './api';

const authService = {
  // User login
  login: async (email, password) => {
    try {
      const response = await api.post('/accounts/login/', { email, password });
      if (response.data.token) {
        localStorage.setItem('oj_auth_token', response.data.token);
        localStorage.setItem('oj_auth_user', JSON.stringify(response.data.user));
      }
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // User registration
  register: async (userData) => {
    try {
      const response = await api.post('/accounts/register/', userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Get current user profile
  getProfile: async () => {
    try {
      const response = await api.get('/accounts/profile/');
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Update user profile
  updateProfile: async (userData) => {
    try {
      const response = await api.put('/accounts/profile/', userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Logout user
  logout: () => {
    localStorage.removeItem('oj_auth_token');
    localStorage.removeItem('oj_auth_user');
  },

  // Check if user is logged in
  isAuthenticated: () => {
    return localStorage.getItem('oj_auth_token') !== null;
  },

  // Get current user data
  getCurrentUser: () => {
    const userStr = localStorage.getItem('oj_auth_user');
    if (userStr) {
      return JSON.parse(userStr);
    }
    return null;
  }
};

export default authService; 