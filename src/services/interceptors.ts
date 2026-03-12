// interceptors.ts
import axios, { InternalAxiosRequestConfig, AxiosResponse } from 'axios';

const token = import.meta.env.VITE_APP_TOKEN;
const baseUrl = import.meta.env.VITE_APP_BASE_URL;

axios.defaults.baseURL = baseUrl;

// Request Interceptor
axios.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Response Interceptor
axios.interceptors.response.use((response: AxiosResponse) => {
  return response;
});

export default axios;
