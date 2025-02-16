// import React, { useState } from "react";
// import axios from "axios";
// import "./CreateServices.css";
// import { Form, Button, Container, Row, Col } from "react-bootstrap";

// const CreateService = () => {
//   const [formData, setFormData] = useState({
//     service_type: "",
//     price: "",
//   });
//   const [message, setMessage] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage("");

//     try {
//       const response = await axios.post("http://192.168.1.8:8000/api/Locksmithservices/", formData);
//       setMessage("Service created successfully!");
//       setFormData({ service_type: "", price: "" });
//     } catch (error) {
//       setMessage("Failed to create service. Please try again.");
//     }
//   };

//   return (
//     <Container className="create-service-container">
//       <Row className="justify-content-md-center">
//         <Col md={6}>
//           <h2 className="text-center">Create Service</h2>
//           {message && <p className="message text-center">{message}</p>}
//           <Form onSubmit={handleSubmit} className="service-form">
//             <Form.Group controlId="serviceType">
//               <Form.Label>Service Type</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="service_type"
//                 value={formData.service_type}
//                 onChange={handleChange}
//                 placeholder="Enter service type"
//                 required
//               />
//             </Form.Group>

//             <Form.Group controlId="price">
//               <Form.Label>Price</Form.Label>
//               <Form.Control
//                 type="number"
//                 name="price"
//                 value={formData.price}
//                 onChange={handleChange}
//                 placeholder="Enter price"
//                 required
//               />
//             </Form.Group>

//             <Button variant="primary" type="submit" className="submit-btn">
//               Create Service
//             </Button>
//           </Form>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default CreateService;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./CreateServices.css";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const CreateService = () => {
  const [formData, setFormData] = useState({
    service_type: "",
    price: "",
  });
  const [message, setMessage] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const userRole = localStorage.getItem("userRole");

    if (!token || userRole !== "locksmith") {
      setIsAuthorized(false);
    } else {
      setIsAuthorized(true);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    const token = localStorage.getItem("accessToken");
    if (!token) {
      setMessage("Unauthorized. Please log in as a locksmith.");
      return;
    }

    try {
      const response = await axios.post(
        "http://192.168.1.8:8000/api/Locksmithservices/",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include token
          },
        }
      );
      setMessage("Service created successfully!");
      setFormData({ service_type: "", price: "" });
    } catch (error) {
      setMessage("Failed to create service. Please try again.");
    }
  };

  if (!isAuthorized) {
    return (
      <Container className="create-service-container">
        <Row className="justify-content-md-center">
          <Col md={6}>
            <h2 className="text-center">Access Denied</h2>
            <p className="text-center text-danger">
              You must be logged in as a locksmith to create services.
            </p>
            <Button variant="primary" onClick={() => navigate("/login")}>
              Go to Login
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container className="create-service-container">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2 className="text-center">Create Service</h2>
          {message && <p className="message text-center">{message}</p>}
          <Form onSubmit={handleSubmit} className="service-form">
            <Form.Group controlId="serviceType">
              <Form.Label>Service Type</Form.Label>
              <Form.Control
                type="text"
                name="service_type"
                value={formData.service_type}
                onChange={handleChange}
                placeholder="Enter service type"
                required
              />
            </Form.Group>

            <Form.Group controlId="price">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="Enter price"
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="submit-btn">
              Create Service
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateService;
