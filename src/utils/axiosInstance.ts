import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
  InternalAxiosRequestConfig,
} from 'axios';
import createAuthRefreshInterceptor from 'axios-auth-refresh';

const baseURL = import.meta.env.VITE_API_URL;
export const publicApi = axios.create({
  baseURL,
  timeout: 120000,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
  },
});

const api = axios.create({
  baseURL,
  timeout: 120000,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
  },
});

api.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('accessToken');

    if (token && !config.headers?.Authorization) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

const refreshAuthLogic = async (failedRequest: any) => {
  const refreshToken = localStorage.getItem('refreshToken');
  const data = {
    refreshToken: refreshToken,
  };

  const options: AxiosRequestConfig = {
    method: 'POST',
    data,
    url: `${baseURL}/auth/refresh-token`,
  };

  return axios(options)
    .then(async (tokenRefreshResponse: AxiosResponse) => {
      failedRequest.response.config.headers.Authorization =
        'Bearer ' + tokenRefreshResponse.data.data.accessToken;

      localStorage.setItem(
        'accessToken',
        tokenRefreshResponse.data.accessToken,
      );
      failedRequest.response.config.headers['Authorization'] =
        `Bearer ${tokenRefreshResponse.data.accessToken}`;

      return Promise.resolve();
    })
    .catch((e: AxiosError) => {
      return Promise.reject(e);
    });
};

createAuthRefreshInterceptor(api, refreshAuthLogic, {});

api.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    return Promise.reject(error);
  },
);

export default api;
