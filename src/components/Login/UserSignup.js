
// import React, { useState } from 'react';
// import axios from 'axios';
// import './Signup.css';

// export default function UserSignup() {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//     role: 'customer',
//     totp_enabled: true,
//   });
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const [totpData, setTotpData] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setSuccess('');
//     setTotpData(null);

//     try {
//       const response = await axios.post('http://192.168.1.8:8000/register/user/', formData);
      
//       // Extract tokens from response
//       const { access, refresh, user } = response.data;

//       // Store tokens in local storage
//       localStorage.setItem('accessToken', access);
//       localStorage.setItem('refreshToken', refresh);

//       setSuccess('Signup successful!');
//       setTotpData({
//         secret: user.totp_secret,
//         qrCode: user.totp_qr_code,
//         qrCodeUrl: user.totp_qr_code_url,
//       });

//       console.log('Response:', response.data);

//       setFormData({
//         username: '',
//         email: '',
//         password: '',
//         role: 'customer',
//         totp_enabled: true,
//       });
//     } catch (err) {
//       setError(err.response?.data?.message || 'Signup failed. Please try again.');
//       console.error('Error:', err);
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <div className="row justify-content-center">
//         <div className="col-md-6">
//           <form onSubmit={handleSubmit} className="signup-form p-4 shadow">
//             <h2 className="text-center mb-4">Sign Up</h2>
//             {error && <p className="text-danger text-center">{error}</p>}
//             {success && <p className="text-success text-center">{success}</p>}
//             <div className="mb-3">
//               <label htmlFor="username" className="form-label">Username:</label>
//               <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} className="form-control" required />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="email" className="form-label">Email:</label>
//               <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="form-control" required />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="password" className="form-label">Password:</label>
//               <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="form-control" required />
//             </div>
//             <button type="submit" className="btn btn-primary w-100">Register</button>
//           </form>
//           {totpData && (
//             <div className="mt-4 p-3 border rounded text-center">
//               <h4>TOTP Setup</h4>
//               <p><strong>Secret Key:</strong> {totpData.secret}</p>
//               <img src={totpData.qrCode} alt="TOTP QR Code" className="img-fluid" />
//               <p>Scan the QR code using your authenticator app.</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css';

export default function UserSignup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: 'customer',
    totp_enabled: true,
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [totpData, setTotpData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setTotpData(null);

    try {
      const response = await axios.post('http://192.168.1.8:8000/register/user/', formData);
      
      // Extract tokens and user data from response
      const { access, refresh, user } = response.data;

      // Store tokens in local storage
      localStorage.setItem('accessToken', access);
      localStorage.setItem('refreshToken', refresh);

      setSuccess('Signup successful!');
      setTotpData({
        secret: user.totp_secret,
        qrCode: user.totp_qr_code,
        qrCodeUrl: user.totp_qr_code_url,
      });

      console.log('Response:', response.data);

      // Reset form fields
      setFormData({
        username: '',
        email: '',
        password: '',
        role: 'customer',
        totp_enabled: true,
      });
    } catch (err) {
      setError(err.response?.data?.message || 'Signup failed. Please try again.');
      console.error('Error:', err);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit} className="signup-form p-4 shadow">
            <h2 className="text-center mb-4">Sign Up</h2>
            {error && <p className="text-danger text-center">{error}</p>}
            {success && <p className="text-success text-center">{success}</p>}
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username:</label>
              <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} className="form-control" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email:</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="form-control" required />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password:</label>
              <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="form-control" required />
            </div>
            <button type="submit" className="btn btn-primary w-100">Register</button>
          </form>
          {totpData && (
            <div className="mt-4 p-3 border rounded text-center">
              <h4>TOTP Setup</h4>
              <p><strong>Secret Key:</strong> {totpData.secret}</p>
              <img src={totpData.qrCode} alt="TOTP QR Code" className="img-fluid" />
              <p>Scan the QR code using your authenticator app.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}