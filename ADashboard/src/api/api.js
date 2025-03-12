import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL || 'http://192.168.1.12:8000', // Ensure this points to your backend
});

export default api;