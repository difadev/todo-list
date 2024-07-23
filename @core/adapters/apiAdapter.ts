import axios from 'axios';

// Create an instance of axios
export const api = axios.create({
  baseURL: 'https://api.jikan.moe/v4',
});

// Request interceptor
api.interceptors.request.use(
  config => {
    // Modify config before request is sent
    return config;
  },
  error => {
    // Handle request error
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  response => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    return response;
  },
  error => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    return Promise.reject(error);
  }
);

