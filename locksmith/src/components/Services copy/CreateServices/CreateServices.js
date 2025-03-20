
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import api from '../../../api/api';

// import { Form, Button, Container, Alert } from "react-bootstrap";
// import "./CreateServices.css"; // Custom CSS

// const CreateService = () => {
//   const [services, setServices] = useState([]);
//   const [selectedService, setSelectedService] = useState("");
//   const [selectedServiceId, setSelectedServiceId] = useState(null);
//   const [customPrice, setCustomPrice] = useState("");
//   const [details, setDetails] = useState("");
//   const [serviceType, setServiceType] = useState("");
//   const [message, setMessage] = useState(null);

//   const serviceTypes = ["smart_lock", "emergency", "automotive", "commercial", "residential"];

//   useEffect(() => {
//     const fetchServices = async () => {
//       try {
//         const accessToken = localStorage.getItem("accessToken"); // Check token
//         if (!accessToken) {
//           setMessage({ type: "danger", text: "Unauthorized. Please log in." });
//           return;
//         }

//         const response = await api.get("/api/admin/services/available_services/", {
//           headers: { Authorization: `Bearer ${accessToken}` },
//         });

//         setServices(response.data);
//       } catch (error) {
//         setMessage({ type: "danger", text: "Failed to fetch services." });
//         console.error("Error fetching services:", error);
//       }
//     };

//     fetchServices();
//   }, []);

//   const handleServiceChange = (e) => {
//     const selectedId = e.target.value;
//     const service = services.find((s) => s.id.toString() === selectedId);
//     setSelectedServiceId(selectedId);
//     setSelectedService(service ? service.name : "");
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!selectedServiceId || !customPrice || !details || !serviceType) {
//       setMessage({ type: "warning", text: "Please fill in all fields." });
//       return;
//     }

//     try {
//       const accessToken = localStorage.getItem("accessToken");
//       if (!accessToken) {
//         setMessage({ type: "danger", text: "Unauthorized. Please log in." });
//         return;
//       }

//       const newService = {
//         admin_service_id: selectedServiceId,
//         service_name: selectedService,
//         custom_price: parseFloat(customPrice),
//         details,
//         service_type: serviceType,
//       };

//       await api.post("/api/services/", newService, {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${accessToken}`,
//         },
//       });

//       setMessage({ type: "success", text: "Service added successfully!" });
//       setSelectedService("");
//       setSelectedServiceId(null);
//       setCustomPrice("");
//       setDetails("");
//       setServiceType("");
//     } catch (error) {
//       setMessage({ type: "danger", text: "Failed to add service." });
//       console.error("Error adding service:", error);
//     }
//   };

//   return (
//     <Container className="choose-service-container">
//       <h2 className="text-center">Choose a Service</h2>
//       {message && <Alert variant={message.type}>{message.text}</Alert>}
//       <Form onSubmit={handleSubmit}>
//         <Form.Group>
//           <Form.Label>Select Service</Form.Label>
//           <Form.Control as="select" value={selectedServiceId || ""} onChange={handleServiceChange}>
//             <option value="">-- Choose a Service --</option>
//             {services.map((service) => (
//               <option key={service.id} value={service.id}>
//                 {service.name}
//               </option>
//             ))}
//           </Form.Control>
//         </Form.Group>

//         <Form.Group>
//           <Form.Label>Service Type</Form.Label>
//           <Form.Control as="select" value={serviceType} onChange={(e) => setServiceType(e.target.value)}>
//             <option value="">-- Choose a Service Type --</option>
//             {serviceTypes.map((type) => (
//               <option key={type} value={type}>
//                 {type}
//               </option>
//             ))}
//           </Form.Control>
//         </Form.Group>

//         <Form.Group>
//           <Form.Label>Custom Price ($)</Form.Label>
//           <Form.Control
//             type="number"
//             value={customPrice}
//             onChange={(e) => setCustomPrice(e.target.value)}
//             min="1"
//             required
//           />
//         </Form.Group>

//         <Form.Group>
//           <Form.Label>Details</Form.Label>
//           <Form.Control
//             as="textarea"
//             rows={3}
//             value={details}
//             onChange={(e) => setDetails(e.target.value)}
//             required
//           />
//         </Form.Group>

//         <Button variant="dark" type="submit" className="mt-3">
//           Add Service
//         </Button>
//       </Form>
//     </Container>
//   );
// };

// export default CreateService;

import React, { useState, useEffect } from "react";
import axios from "axios";
import api from '../../../api/api';

import { Form, Button, Container, Alert } from "react-bootstrap";
import "./CreateServices.css"; // Custom CSS

const CreateService = () => {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState("");
  const [selectedServiceId, setSelectedServiceId] = useState("");
  const [customPrice, setCustomPrice] = useState("");
  const [details, setDetails] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [message, setMessage] = useState(null);

  const serviceTypes = ["smart_lock", "emergency", "automotive", "commercial", "residential"];

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        if (!accessToken) {
          setMessage({ type: "danger", text: "Unauthorized. Please log in." });
          return;
        }

        const response = await api.get("/api/admin/services/available_services/", {
          headers: { Authorization: `Bearer ${accessToken}` },
        });

        setServices(response.data);
      } catch (error) {
        setMessage({ type: "danger", text: "Failed to fetch services." });
        console.error("Error fetching services:", error.response?.data || error.message);
      }
    };

    fetchServices();
  }, []);

  const handleServiceChange = (e) => {
    const selectedId = e.target.value;
    const service = services.find((s) => s.id.toString() === selectedId);
    setSelectedServiceId(selectedId);
    setSelectedService(service ? service.name : "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedServiceId || !customPrice || !details || !serviceType) {
      setMessage({ type: "warning", text: "Please fill in all fields." });
      return;
    }

    const price = parseFloat(customPrice);
    if (isNaN(price) || price <= 0) {
      setMessage({ type: "warning", text: "Invalid price. Enter a valid number." });
      return;
    }

    try {
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        setMessage({ type: "danger", text: "Unauthorized. Please log in." });
        return;
      }

      const newService = {
        admin_service_id: Number(selectedServiceId), // Ensure it's a number
        service_name: selectedService,
        custom_price: price, // Ensure it's a float
        details,
        service_type: serviceType,
      };

      console.log("Sending Data:", newService); // Debugging log

      const response = await api.post("/api/services/", newService, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });

      console.log("Response:", response.data); // Debugging log

      setMessage({ type: "success", text: "Service added successfully!" });
      setSelectedService("");
      setSelectedServiceId("");
      setCustomPrice("");
      setDetails("");
      setServiceType("");
    } catch (error) {
      console.error("Error adding service:", error.response?.data || error.message);
      setMessage({ type: "danger", text: error.response?.data?.message || "Failed to add service." });
    }
  };

  return (
    <Container className="choose-service-container">
      <h2 className="text-center">Choose a Service</h2>
      {message && <Alert variant={message.type}>{message.text}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Select Service</Form.Label>
          <Form.Control as="select" value={selectedServiceId} onChange={handleServiceChange}>
            <option value="">-- Choose a Service --</option>
            {services.map((service) => (
              <option key={service.id} value={service.id}>
                {service.name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Service Type</Form.Label>
          <Form.Control as="select" value={serviceType} onChange={(e) => setServiceType(e.target.value)}>
            <option value="">-- Choose a Service Type --</option>
            {serviceTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Custom Price ($)</Form.Label>
          <Form.Control
            type="number"
            value={customPrice}
            onChange={(e) => setCustomPrice(e.target.value)}
            min="1"
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Details</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="dark" type="submit" className="mt-3">
          Add Service
        </Button>
      </Form>
    </Container>
  );
};

export default CreateService;
