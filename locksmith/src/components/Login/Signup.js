
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../api/api'; // Importing api.js
import './Signup.css';

export default function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: 'locksmith',
    totp_enabled: true,
  });
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [totpData, setTotpData] = useState(null);
  const navigate = useNavigate();

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

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setError('');
  //   setSuccess('');
  //   setTotpData(null);

  //   if (!agreeTerms) {
  //     setError('You must agree to the terms and policies to register.');
  //     return;
  //   }

  //   try {
  //     const response = await api.post('/register/locksmith/', formData); // Using api.js

  //     // Ensure the response contains the TOTP data
  //     const { user } = response.data;

  //     if (!user.totp_secret || !user.totp_qr_code || !user.totp_qr_code_url) {
  //       throw new Error('TOTP data not found in response.');
  //     }

  //     setSuccess('Signup successful! Please scan the QR code to set up TOTP.');
  //     setTotpData({
  //       secret: user.totp_secret,
  //       qrCode: user.totp_qr_code,
  //       qrCodeUrl: user.totp_qr_code_url,
  //     });

  //     // Clear the form
  //     setFormData({
  //       username: '',
  //       email: '',
  //       password: '',
  //       role: 'locksmith',
  //       totp_enabled: true,
  //     });
  //     setAgreeTerms(false);

  //     // Redirect to login page after successful signup
  //     // navigate('/login?role=locksmith');
  //   } catch (err) {
  //     setError(err.response?.data?.message || 'Signup failed. Please try again.');
  //     console.error('Error:', err);
  //   }
  // };

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
      const response = await api.post('/register/locksmith/', formData);
  
      setSuccess('Signup successful! Please login.');
      setTotpData({
        secret: response.data.user.totp_secret,
        qrCode: response.data.user.totp_qr_code,
        qrCodeUrl: response.data.user.totp_qr_code_url,
      });
  
      setFormData({
        username: '',
        email: '',
        password: '',
        role: 'locksmith',
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
            <h2 className="text-center mb-4">Sign Up as Locksmith</h2>
            {error && <p className="text-danger text-center">{error}</p>}
            {success && <p className="text-success text-center">{success}</p>}
            {totpData && (
              <div className="text-center mb-3">
                <h4>TOTP Setup</h4>
                <p className='text-black'><strong>Secret Key:</strong> {totpData.secret}</p>
                <img src={totpData.qrCode} alt="TOTP QR Code" className="img-fluid" style={{ width: '150px', height: '150px' }} />
                <p className='text-black'>Scan the QR code using your authenticator app.</p>
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
              <input type="checkbox" id="agreeTerms" className="form-check-input" checked={agreeTerms} onChange={handleCheckboxChange} />
              <label htmlFor="agreeTerms" className="form-check-label">
                I agree to the <a href="/docs/Terms of Use.pdf" target="_blank" rel="noopener noreferrer">Terms of use</a> and <a href="/docs/Privacy Policy.pdf" target="_blank" rel="noopener noreferrer">Privacy policy</a>
              </label>
            </div>
            <button type="submit" className="btn btn-dark w-100" disabled={!agreeTerms}>Register</button>
            <div className="text-center mt-3">
              <p className='text-black'>Already have an account? <Link to="/login?role=locksmith">Login</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}