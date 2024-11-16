import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
  InternalAxiosRequestConfig,
} from 'axios';
import axiosRetry from 'axios-retry';
import { store } from 'src/store';
import { logout } from 'src/store/features/authSlice';
import { getAuthToken, refreshToken } from './auth';
import { handleApiError } from './error-handler';
import { clearItemsFromLocalStorage } from '@utils/secure-storage.helper';

interface ErrorResponse {
  message: string;
  status: number;
  errors?: Record<string, string[]>;
}

const hostname: string = window.location.hostname.split('.')[0];

const baseURL: string =
  hostname === 'app'
    ? import.meta.env.VITE_PROD_BASE_URL
    : import.meta.env.VITE_DEV_BASE_URL;

const defaultConfig: AxiosRequestConfig = {
  baseURL,
  timeout: 20000,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
  },
};

const api: AxiosInstance = axios.create(defaultConfig);
export const publicApi: AxiosInstance = axios.create(defaultConfig);

// Configure retry behavior
axiosRetry(api, {
  retries: 3,
  retryDelay: (retryCount) => {
    return retryCount * 1000; // Time interval between retries (1s, 2s, 3s)
  },
  retryCondition: (error) => {
    // Retry on network errors or 5xx server errors
    return (
      axiosRetry.isNetworkOrIdempotentRequestError(error) ||
      (error.response?.status ?? 0) >= 500
    );
  },
});

// Request interceptor
api.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    // Add timestamp for cache busting if needed
    const timestamp = new Date().getTime();
    const url = config.url!;
    const separator = url.includes('?') ? '&' : '?';
    config.url = `${url}${separator}_t=${timestamp}`;

    // Add authorization header if token exists
    const token = await getAuthToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // Log request in development
    if (import.meta.env.DEV) {
      console.log(`🚀 [API] ${config.method?.toUpperCase()} ${config.url}`);
    }

    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

// Response interceptor
api.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    // Transform and log response in development
    if (import.meta.env.DEV) {
      console.log(`✅ [API] Response:`, {
        data: response.data,
        status: response.status,
        message: response.data?.message,
      });
    }

    return response;
  },
  async (error: AxiosError<ErrorResponse>) => {
    const originalRequest = error.config;

    // Handle 401 Unauthorized error
    if (error.response?.status === 401 && originalRequest) {
      try {
        // Attempt to refresh the token
        const newToken = await refreshToken();

        // Retry the original request with the new token
        if (newToken && originalRequest.headers) {
          originalRequest.headers.Authorization = `Bearer ${newToken}`;
          return api(originalRequest);
        }
      } catch (refreshError) {
        // Handle refresh token failure (e.g., logout user)
        store.dispatch(logout());
        clearItemsFromLocalStorage();
        console.error('Token refresh failed:', refreshError);
      }
    }

    // Handle other errors
    return Promise.reject(handleApiError(error));
  },
);

export default api;
