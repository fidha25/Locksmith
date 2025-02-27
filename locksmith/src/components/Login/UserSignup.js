
// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import './Signup.css';

// // export default function UserSignup() {
// //   const [formData, setFormData] = useState({
// //     username: '',
// //     email: '',
// //     password: '',
// //     role: 'customer',
// //     totp_enabled: true,
// //   });
// //   const [error, setError] = useState('');
// //   const [success, setSuccess] = useState('');
// //   const [totpData, setTotpData] = useState(null);

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({
// //       ...formData,
// //       [name]: value,
// //     });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setError('');
// //     setSuccess('');
// //     setTotpData(null);

// //     try {
// //       const response = await axios.post('http://192.168.1.7:8000/register/user/', formData);
      
// //       // Extract tokens and user data from response
// //       const { access, refresh, user } = response.data;

// //       // Store tokens in local storage
// //       localStorage.setItem('accessToken', access);
// //       localStorage.setItem('refreshToken', refresh);

// //       setSuccess('Signup successful!');
// //       setTotpData({
// //         secret: user.totp_secret,
// //         qrCode: user.totp_qr_code,
// //         qrCodeUrl: user.totp_qr_code_url,
// //       });

// //       console.log('Response:', response.data);

// //       // Reset form fields
// //       setFormData({
// //         username: '',
// //         email: '',
// //         password: '',
// //         role: 'customer',
// //         totp_enabled: true,
// //       });
// //     } catch (err) {
// //       setError(err.response?.data?.message || 'Signup failed. Please try again.');
// //       console.error('Error:', err);
// //     }
// //   };

// //   return (
// //     <div className="container mt-5">
// //       <div className="row justify-content-center">
// //         <div className="col-md-6">
// //           <form onSubmit={handleSubmit} className="signup-form p-4 shadow">
// //             <h2 className="text-center mb-4">Sign Up</h2>
// //             {error && <p className="text-danger text-center">{error}</p>}
// //             {success && <p className="text-success text-center">{success}</p>}
// //             <div className="mb-3">
// //               <label htmlFor="username" className="form-label">Username:</label>
// //               <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} className="form-control" required />
// //             </div>
// //             <div className="mb-3">
// //               <label htmlFor="email" className="form-label">Email:</label>
// //               <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="form-control" required />
// //             </div>
// //             <div className="mb-3">
// //               <label htmlFor="password" className="form-label">Password:</label>
// //               <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="form-control" required />
// //             </div>
// //             <button type="submit" className="btn btn-dark w-100">Register</button>
// //           </form>
// //           {totpData && (
// //             <div className="mt-4 p-3 border rounded text-center">
// //               <h4>TOTP Setup</h4>
// //               <p><strong>Secret Key:</strong> {totpData.secret}</p>
// //               <img src={totpData.qrCode} alt="TOTP QR Code" className="img-fluid" />
// //               <p>Scan the QR code using your authenticator app.</p>
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
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
//       const response = await axios.post('http://192.168.1.7:8000/register/user/', formData);
      
//       const { access, refresh, user } = response.data;
//       localStorage.setItem('accessToken', access);
//       localStorage.setItem('refreshToken', refresh);

//       setSuccess('Signup successful!');
//       setTotpData({
//         secret: user.totp_secret,
//         qrCode: user.totp_qr_code,
//         qrCodeUrl: user.totp_qr_code_url,
//       });

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
//             <button type="submit" className="btn btn-dark w-100">Register</button>
//             <div className="text-center mt-3">
//             <p>Already have an account? Please<Link to="/login?role=customer"> login</Link></p>
//           </div>
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
import { Link } from 'react-router-dom';
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
  const [agreeTerms, setAgreeTerms] = useState(false);
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

  const handleCheckboxChange = (e) => {
    setAgreeTerms(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setTotpData(null);

    if (!agreeTerms) {
      setError('You must agree to the terms and policies to register.');
      return;
    }

    try {
      const response = await axios.post('http://192.168.1.7:8000/register/user/', formData);
      const { access, refresh, user } = response.data;
      localStorage.setItem('accessToken', access);
      localStorage.setItem('refreshToken', refresh);

      setSuccess('Signup successful!');
      setTotpData({
        secret: user.totp_secret,
        qrCode: user.totp_qr_code,
      });

      setFormData({
        username: '',
        email: '',
        password: '',
        role: 'customer',
        totp_enabled: true,
      });
      setAgreeTerms(false);
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
            {totpData && (
              <div className="text-center mb-3">
                <p><strong>Secret Key:</strong> {totpData.secret}</p>
                <img src={totpData.qrCode} alt="TOTP QR Code" style={{ width: '150px', height: '150px' }} />
                <p>Scan the QR code using your authenticator app.</p>
              </div>
            )}
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
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                id="agreeTerms"
                className="form-check-input"
                checked={agreeTerms}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="agreeTerms" className="form-check-label">
                I agree to the <a href="/docs/Terms of Use.pdf" target="_blank" rel="noopener noreferrer">Terms of use</a> and <a href="/docs/Privacy Policy.pdf" target="_blank" rel="noopener noreferrer">Privacy policy</a>
              </label>
            </div>
            <button type="submit" className="btn btn-dark w-100" disabled={!agreeTerms}>Register</button>
            <div className="text-center mt-3">
              <p>Already have an account? <Link to="/login?role=customer">Login</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
