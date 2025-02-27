
// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import { useNavigate } from 'react-router-dom';
// // import './Signup.css';

// // export default function Login() {
// //   const [loginData, setLoginData] = useState({
// //     username: '',
// //     password: '',
// //     otp_code: '',
// //   });
// //   const [error, setError] = useState('');
// //   const [success, setSuccess] = useState('');
// //   const navigate = useNavigate();

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setLoginData({
// //       ...loginData,
// //       [name]: value,
// //     });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setError('');
// //     setSuccess('');

// //     try {
// //       const response = await axios.post('http://192.168.1.7:8000/login/', loginData);
      
// //       // Extract tokens and user data from response
// //       const { access, refresh, role, username, password } = response.data;

// //       // Store tokens and user data in local storage
// //       localStorage.setItem('accessToken', access);
// //       localStorage.setItem('refreshToken', refresh);
// //       localStorage.setItem('userRole', role);
// //       localStorage.setItem('username', username);
// //       localStorage.setItem('password', password);

// //       setSuccess('Login successful!');

// //       console.log('Response:', response.data);

// //       // Reset form fields
// //       setLoginData({
// //         username: '',
// //         password: '',
// //         otp_code: '',
// //       });

// //       // Redirect based on user role
// //       if (role === 'customer') {
// //         navigate('/'); // Navigate to home page for customers
// //       } else if (role === 'locksmith') {
// //         navigate('/locksmith'); // Navigate to locksmith page for locksmiths
// //       } else {
// //         setError('Unknown role. Please contact support.');
// //       }
// //     } catch (err) {
// //       setError(err.response?.data?.message || 'Login failed. Please try again.');
// //       console.error('Error:', err);
// //     }
// //   };

// //   return (
    
// //     <div className=" container mt-5">
// //       <div className="row justify-content-center">
// //         <div className="col-md-6">
// //           <form onSubmit={handleSubmit} className="signup-form p-4 shadow">
// //             <h2 className="text-center mb-4">Login</h2>
// //             {error && <p className="text-danger text-center">{error}</p>}
// //             {success && <p className="text-success text-center">{success}</p>}
// //             <div className="mb-3">
// //               <label htmlFor="username" className="form-label">Username:</label>
// //               <input type="text" id="username" name="username" value={loginData.username} onChange={handleChange} className="form-control" required />
// //             </div>
// //             <div className="mb-3">
// //               <label htmlFor="password" className="form-label">Password:</label>
// //               <input type="password" id="password" name="password" value={loginData.password} onChange={handleChange} className="form-control" required />
// //             </div>
// //             <div className="mb-3">
// //               <label htmlFor="otp_code" className="form-label">OTP Code:</label>
// //               <input type="text" id="otp_code" name="otp_code" value={loginData.otp_code} onChange={handleChange} className="form-control" required />
// //             </div>
// //             <button type="submit" className="btn btn-dark w-100">Login</button>
// //           </form>
// //         </div>
// //       </div>
// //     </div>
    
// //   );
// // }

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate, useLocation } from 'react-router-dom';
// import './Signup.css';

// export default function Login() {
//   const [loginData, setLoginData] = useState({
//     username: '',
//     password: '',
//     otp_code: '',
//   });
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const navigate = useNavigate();
//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);
//   const selectedRole = queryParams.get('role') || 'customer'; // Default to 'customer'

//   useEffect(() => {
//     console.log("Selected Role:", selectedRole);
//   }, [selectedRole]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setLoginData({
//       ...loginData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setSuccess('');

//     try {
//       const response = await axios.post('http://192.168.1.7:8000/login/', {
//         ...loginData,
//         role: selectedRole, // Explicitly send the selected role
//       });

//       const { access, refresh, role, username } = response.data;

//       // **Role validation: Check if backend role matches selected role**
//       if (role !== selectedRole) {
//         setError(`Unauthorized access! You selected "${selectedRole}", but your account is "${role}".`);
//         return;
//       }

//       // Store user session details
//       localStorage.setItem('accessToken', access);
//       localStorage.setItem('refreshToken', refresh);
//       localStorage.setItem('userRole', role);
//       localStorage.setItem('username', username);

//       setSuccess('Login successful!');
//       setLoginData({ username: '', password: '', otp_code: '' });

//       // Redirect based on actual user role
//       navigate(role === 'customer' ? '/' : '/locksmith');
      
//     } catch (err) {
//       setError(err.response?.data?.message || 'Login failed. Please try again.');
//       console.error('Error:', err);
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <div className="row justify-content-center">
//         <div className="col-md-6">
//           <form onSubmit={handleSubmit} className="signup-form p-4 shadow">
//             <h2 className="text-center mb-4">Login as {selectedRole.charAt(0).toUpperCase() + selectedRole.slice(1)}</h2>
//             {error && <p className="text-danger text-center">{error}</p>}
//             {success && <p className="text-success text-center">{success}</p>}
//             <div className="mb-3">
//               <label htmlFor="username" className="form-label">Username:</label>
//               <input type="text" id="username" name="username" value={loginData.username} onChange={handleChange} className="form-control" required />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="password" className="form-label">Password:</label>
//               <input type="password" id="password" name="password" value={loginData.password} onChange={handleChange} className="form-control" required />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="otp_code" className="form-label">OTP Code:</label>
//               <input type="text" id="otp_code" name="otp_code" value={loginData.otp_code} onChange={handleChange} className="form-control" required />
//             </div>
//             <button type="submit" className="btn btn-dark w-100">Login</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import './Signup.css';

export default function Login() {
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
    otp_code: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedRole = queryParams.get('role') || 'customer'; // Default to 'customer'

  useEffect(() => {
    console.log("Selected Role:", selectedRole);
  }, [selectedRole]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await axios.post('http://192.168.1.7:8000/login/', {
        ...loginData,
        role: selectedRole, // Explicitly send the selected role
      });

      const { access, refresh, role, username } = response.data;

      // **Role validation: Check if backend role matches selected role**
      if (role !== selectedRole) {
        setError(`Unauthorized access! You selected "${selectedRole}", but your account is "${role}".`);
        return;
      }

      // Store user session details
      localStorage.setItem('accessToken', access);
      localStorage.setItem('refreshToken', refresh);
      localStorage.setItem('userRole', role);
      localStorage.setItem('username', username);

      setSuccess('Login successful!');
      setLoginData({ username: '', password: '', otp_code: '' });

      // Redirect based on actual user role
      navigate(role === 'customer' ? '/' : '/locksmith');
      
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please try again.');
      console.error('Error:', err);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit} className="signup-form p-4 shadow">
            <h2 className="text-center mb-4">Login as {selectedRole.charAt(0).toUpperCase() + selectedRole.slice(1)}</h2>
            {error && <p className="text-danger text-center">{error}</p>}
            {success && <p className="text-success text-center">{success}</p>}
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username:</label>
              <input type="text" id="username" name="username" value={loginData.username} onChange={handleChange} className="form-control" required />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password:</label>
              <input type="password" id="password" name="password" value={loginData.password} onChange={handleChange} className="form-control" required />
            </div>
            <div className="mb-3">
              <label htmlFor="otp_code" className="form-label">OTP Code:</label>
              <input type="text" id="otp_code" name="otp_code" value={loginData.otp_code} onChange={handleChange} className="form-control" required />
            </div>
            <button type="submit" className="btn btn-dark w-100">Login</button>
            
            <div className="text-center mt-3">
              {selectedRole === 'customer' ? (
                <p>Don't have an account? <Link to="/usersignup">Sign up </Link>here</p>
              ) : (
                <p>Don't have an account? <Link to="/signup">Sign up </Link>here</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
