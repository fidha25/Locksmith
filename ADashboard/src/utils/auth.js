


import axios from 'axios';
import api from '../api/api'; // Adjust based on the export in api.js

// Function to refresh the access token
// const refreshAccessToken = async () => {
//   try {
//     const refreshToken = localStorage.getItem('refreshToken');
//     console.log('Refreshing access token...');
//     console.log('Refresh token:', refreshToken);

//     const response = await api.post('/token/refresh/', {
//       refresh: refreshToken,
//     });

//     console.log('Refresh token response:', response);

//     if (response.status === 200 && response.data.access) {
//       const newAccessToken = response.data.access;
//       localStorage.setItem('accessToken', newAccessToken);
//       console.log('New access token:', newAccessToken);
//       return newAccessToken;
//     } else {
//       throw new Error('Invalid response from refresh token endpoint');
//     }
//   } catch (err) {
//     console.error('Error refreshing access token:', err);
//     // Clear tokens and redirect to login if refresh fails
//     localStorage.removeItem('accessToken');
//     localStorage.removeItem('refreshToken');
//     localStorage.removeItem('userRole');
//     localStorage.removeItem('username');
//     window.location.href = '/login';
//     return null;
//   }
// };

const refreshAccessToken = async () => {
  try {
    const refreshToken = localStorage.getItem('refreshToken');
    console.log('Refreshing access token...');
    console.log('Refresh token:', refreshToken);

    const response = await api.post('/token/refresh/', {
      refresh: refreshToken,
    });

    console.log('Refresh token response:', response);

    if (response.status === 200 && response.data.access) {
      const newAccessToken = response.data.access;
      localStorage.setItem('accessToken', newAccessToken);
      console.log('New access token:', newAccessToken);
      return newAccessToken;
    } else {
      throw new Error('Invalid response from refresh token endpoint');
    }
  } catch (err) {
    console.error('Error refreshing access token:', err);
    // Clear tokens and redirect to login if refresh fails
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('userRole');
    localStorage.removeItem('username');
    window.location.href = '/login';
    return null;
  }
};
// Set up Axios interceptors
// const setupAxiosInterceptors = () => {
//   axios.interceptors.request.use(
//     async (config) => {
//       const accessToken = localStorage.getItem('accessToken');
//       if (accessToken) {
//         config.headers['Authorization'] = `Bearer ${accessToken}`;
//       }
//       return config;
//     },
//     (error) => {
//       return Promise.reject(error);
//     }
//   );

//   axios.interceptors.response.use(
//     (response) => response,
//     async (error) => {
//       const originalRequest = error.config;

//       // If the error is due to an expired token, try to refresh it
//       if (error.response?.status === 401 && !originalRequest._retry) {
//         originalRequest._retry = true;
//         const newAccessToken = await refreshAccessToken();
//         if (newAccessToken) {
//           originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
//           return axios(originalRequest);
//         }
//       }

//       return Promise.reject(error);
//     }
//   );
// };
const setupAxiosInterceptors = () => {
  axios.interceptors.request.use(
    async (config) => {
      const accessToken = localStorage.getItem('accessToken');
      if (accessToken) {
        config.headers['Authorization'] = `Bearer ${accessToken}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;

      // If the error is due to an expired token, try to refresh it
      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        console.log('Access token expired. Attempting to refresh...');
        const newAccessToken = await refreshAccessToken();
        if (newAccessToken) {
          console.log('Retrying original request with new access token');
          originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
          return axios(originalRequest);
        }
      }

      return Promise.reject(error);
    }
  );
};

export { refreshAccessToken, setupAxiosInterceptors };