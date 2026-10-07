// Simple API client without Base44 dependency
const apiClient = {
  auth: {
    me: async () => {
      // Return a mock user or null
      return null;
    },
    logout: () => {
      localStorage.removeItem('authToken');
    },
    redirectToLogin: (url) => {
      window.location.href = '/login';
    }
  },
  app: {
    getPublicSettings: async () => {
      return { id: 'local', public_settings: {} };
    }
  }
};

export const base44 = apiClient;
