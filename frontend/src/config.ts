export const API_URL = 
  (import.meta.env.VITE_API_URL as string) || 
  (import.meta.env.PROD 
    ? 'https://ujmah-backend.onrender.com/api' 
    : 'http://localhost:5000/api');
