import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
  TIMEOUT: 100000,
  HEADERS: {
    "Content-Type": "application/json",
  },
} as const;

const STORAGE_KEYS = {
  ACCESS_TOKEN: "access_token",
  USER_STORAGE: "user-storage",
} as const;

const axiosInstance = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  timeout: API_CONFIG.TIMEOUT,
  headers: API_CONFIG.HEADERS,
});

axiosInstance.interceptors.request.use(async (config) => {
  const accessToken = localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
