// import React, { useState } from "react";
// import "./Alogin.css";
// import { Form, Button, Container, Card, Alert } from "react-bootstrap";
// import axios from "axios";

// const Alogin = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//   });

//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage("");
//     setError("");

//     try {
//       const response = await axios.post("http://192.168.1.8:8000/login/", formData);
      
//       if (response.status === 200) {
//         const { access, refresh, role, username } = response.data;

//         // Store tokens and user details in local storage
//         localStorage.setItem("accessToken", access);
//         localStorage.setItem("refreshToken", refresh);
//         localStorage.setItem("userRole", role);
//         localStorage.setItem("username", username);

//         setMessage("Login successful!");
//       }
//     } catch (err) {
//       setError("Login failed! Please check your username and password.");
//     }
//   };

//   return (
//     <Container className="login-container">
//       <Card className="login-card">
//         <Card.Body>
//           <h2 className="text-center">Admin Login</h2>

//           {message && <Alert variant="success">{message}</Alert>}
//           {error && <Alert variant="danger">{error}</Alert>}

//           <Form onSubmit={handleSubmit}>
//             <Form.Group controlId="formUsername">
//               <Form.Label className="label">Username</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="username"
//                 value={formData.username}
//                 onChange={handleChange}
//                 placeholder="Enter username"
//                 required
//               />
//             </Form.Group>

//             <Form.Group controlId="formPassword">
//               <Form.Label className="label">Password</Form.Label>
//               <Form.Control
//                 type="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 placeholder="Enter password"
//                 required
//               />
//             </Form.Group>

//             <Button variant="primary" type="submit" className="w-100 mt-3">
//               Login
//             </Button>
//           </Form>
//         </Card.Body>
//       </Card>
//     </Container>
//   );
// };

// export default Alogin;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container, Card, Alert } from "react-bootstrap";
import api from '../../api/api';
import "./Alogin.css";

const Alogin = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      navigate("/admin"); // Redirect if already logged in
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const response = await api.post("/login/", formData);
      
      if (response.status === 200) {
        const { access, refresh, role, username } = response.data;

        // Store tokens and user details in local storage
        localStorage.setItem("accessToken", access);
        localStorage.setItem("refreshToken", refresh);
        localStorage.setItem("userRole", role);
        localStorage.setItem("username", username);

        setMessage("Login successful!");
        navigate("/admin"); // Redirect to Admin Dashboard
      }
    } catch (err) {
      setError("Login failed! Please check your username and password.");
    }
  };

  return (
    <Container fluid className="login-container">
      <Card className="login-card">
        <Card.Body>
          <h2 className="text-center">Admin Login</h2>

          {message && <Alert variant="success">{message}</Alert>}
          {error && <Alert variant="danger">{error}</Alert>}

          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formUsername">
              <Form.Label className="label">Username</Form.Label>
              <Form.Control
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter username"
                required
              />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label className="label">Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mt-3">
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Alogin;
