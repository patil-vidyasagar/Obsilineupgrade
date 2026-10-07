const getAppParams = () => {
  return {
    appId: 'local-app',
    token: localStorage.getItem('authToken') || null,
    functionsVersion: '1.0.0',
    appBaseUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5173',
  }
}

export const appParams = {
  ...getAppParams()
}
