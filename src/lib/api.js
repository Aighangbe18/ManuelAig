import axios from 'axios';

const API = axios.create({
  baseURL:
    import.meta.env.MODE === 'development'
      ? 'http://localhost:5000/api' // 🔧 Local backend with `/api`
      : 'https://manuelbackend-1.onrender.com/api', // 🌐 Production backend
  withCredentials: true, // ✅ Allows sending cookies or auth headers
});

// ✅ Attach JWT token (if available) to every request
API.interceptors.request.use((req) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const token = user?.token;

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

export default API;
