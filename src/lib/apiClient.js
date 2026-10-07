const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

const apiClient = {
  auth: {
    login: async (email, password) => {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      if (!response.ok) throw new Error('Login failed');
      return response.json();
    },
    logout: async () => {
      // Optional: notify backend of logout
      try {
        await fetch(`${API_BASE_URL}/auth/logout`, { method: 'POST' });
      } catch (error) {
        console.error('Logout notification failed:', error);
      }
    },
    me: async () => {
      const response = await fetch(`${API_BASE_URL}/auth/me`, {
        headers: { 
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        }
      });
      if (!response.ok) throw new Error('Auth check failed');
      return response.json();
    }
  },
  app: {
    getPublicSettings: async () => {
      return { id: 'local', public_settings: {} };
    }
  }
};

export default apiClient;
