import axios from 'axios';

// Function to refresh the access token
const refreshAccessToken = async () => {
  try {
    const refreshToken = localStorage.getItem('refreshToken');
    const response = await axios.post('http://192.168.1.7:8000/token/refresh/', {
      refresh: refreshToken,
    });

    const newAccessToken = response.data.access;
    localStorage.setItem('accessToken', newAccessToken);
    return newAccessToken;
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
        const newAccessToken = await refreshAccessToken();
        if (newAccessToken) {
          originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
          return axios(originalRequest);
        }
      }

      return Promise.reject(error);
    }
  );
};

export { refreshAccessToken, setupAxiosInterceptors };

// import axios from 'axios';

// // Function to refresh the access token
// const refreshAccessToken = async () => {
//   try {
//     const refreshToken = localStorage.getItem('refreshToken');
//     const response = await axios.post('http://192.168.1.8:8000/token/refresh/', {
//       refresh: refreshToken,
//     });

//     const newAccessToken = response.data.access;
//     localStorage.setItem('accessToken', newAccessToken);
//     return newAccessToken;
//   } catch (err) {
//     console.error('Error refreshing access token:', err);
//     handleLogout();
//     return null;
//   }
// };

// // Function to handle logout
// const handleLogout = async () => {
//   try {
//     await axios.post('http://192.168.1.8:8000/logout/', {}, {
//       headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` },
//     });
//   } catch (err) {
//     console.error('Error logging out:', err);
//   }
  
//   // Clear local storage and redirect to login
//   localStorage.removeItem('accessToken');
//   localStorage.removeItem('refreshToken');
//   localStorage.removeItem('userRole');
//   localStorage.removeItem('username');
//   window.location.href = '/login';
// };

// // Set up Axios interceptors
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

// export { refreshAccessToken, setupAxiosInterceptors, handleLogout };
