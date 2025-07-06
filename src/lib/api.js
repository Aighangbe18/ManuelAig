import axios from 'axios';

const API = axios.create({
  baseURL: 'https://manuelbackend-0x7t.onrender.com', // ✅ Change if deployed http://localhost:5000/api
});

// Optional: attach token to protected routes
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export default API;
