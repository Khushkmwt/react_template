import axios from 'axios';

const API = axios.create({
  baseURL: '/api', // Will be proxied
  withCredentials: true,
});

export default API;
