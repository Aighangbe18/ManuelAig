import axios from 'axios';

const API = axios.create({
  baseURL:
    import.meta.env.MODE === 'development'
      ? 'http://localhost:5000/api' // ✅ Local backend with /api prefix
      : 'https://manuelbackend-1.onrender.com/api', // ✅ Live backend with /api
  withCredentials: true, // ✅ Required for CORS with cookies/token headers
});

// ✅ Auto-attach token for protected routes
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

 export default API;
