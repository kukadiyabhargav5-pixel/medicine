import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;
const baseURL = apiUrl ? `${apiUrl.replace(/\/$/, '')}/api` : '/api';

const api = axios.create({
  baseURL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const message = error.response.data?.error?.message || 
        'હાલમાં analysis કરવામાં સમસ્યા આવી છે. કૃપા કરીને થોડા સમય પછી ફરી પ્રયાસ કરો.';
      return Promise.reject(new Error(message));
    }
    if (error.request) {
      return Promise.reject(new Error('Server સાથે connection થઈ શકતું નથી. કૃપા કરીને internet connection ચકાસો.'));
    }
    return Promise.reject(error);
  }
);

export default api;
