import {
  getItemFromLocalStorage,
  setItemToLocalStorage,
} from '@utils/secure-storage.helper';
import api from './api';

export const getAuthToken = async (): Promise<string | null> => {
  // In a real implementation, you might get this from localStorage, cookies, or state management
  const token = getItemFromLocalStorage('ut');
  return token;
};

export const refreshToken = async (): Promise<string | null> => {
  try {
    // In a real implementation, make an API call to refresh the token
    const response = await api.post('/auth/refresh-token');
    const newAccessToken = response.data.data.accessToken;
    const newRefreshToken = response.data.data.refreshToken;
    setItemToLocalStorage('ut', newAccessToken);
    setItemToLocalStorage('rt', newRefreshToken);

    return newAccessToken;
  } catch (error) {
    console.error('Failed to refresh token:', error);
    return null;
  }
};
