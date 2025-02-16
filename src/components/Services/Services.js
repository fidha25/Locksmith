// // import React from 'react';
// // import { Container, Row, Col, Card } from 'react-bootstrap';
// // import './Services.css'; // Import the CSS file for styling
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import '@fortawesome/fontawesome-free/css/all.min.css';

// // const OurServices = () => {
// //   const services = [
// //     {
// //       icon: 'fas fa-home', // FontAwesome icon for residential services
// //       title: 'Residential Services',
// //       text: 'We provide top-notch residential locksmith services to keep your home secure.',
// //       link: '#',
// //     },
// //     {
// //       icon: 'fas fa-car', // FontAwesome icon for automotive services
// //       title: 'Automotive Services',
// //       text: 'From car key replacement to ignition repair, we handle all automotive locksmith needs.',
// //       link: '#',
// //     },
// //     {
// //       icon: 'fas fa-building', // FontAwesome icon for commercial services
// //       title: 'Commercial Services',
// //       text: 'Secure your business with our professional commercial locksmith solutions.',
// //       link: '#',
// //     },
// //     {
// //       icon: 'fas fa-lock', // FontAwesome icon for emergency services
// //       title: 'Emergency Services',
// //       text: '24/7 emergency locksmith services to assist you whenever you need us.ipouiupoipoiouj',
// //       link: '#',
// //     },
// //     {
// //       icon: 'fas fa-key', // FontAwesome icon for key duplication
// //       title: 'Key Duplication',
// //       text: 'Get high-quality key duplication services for all types of keys.hghhijgykhjhjh hghgkg',
// //       link: '#',
// //     },
// //     {
// //       icon: 'fas fa-shield-alt', // FontAwesome icon for security systems
// //       title: 'Security Systems',
// //       text: 'Enhance your security with our advanced security system installations.jhkhjhijhih',
// //       link: '#',
// //     },
// //   ];

// //   return (
// //     <Container className="our-services-section">
// //       <div className="text-center mb-5">
// //         <h5>Our Services</h5>
// //         <h1 className="mt-2">Comprehensive Locksmith Solutions</h1>
// //       </div>
// //       <Row className="justify-content-center">
// //         {services.map((service, index) => (
// //           <Col xs={12} sm={6} md={4} className="mb-4 d-flex justify-content-center" key={index}>
// //             <Card className="service-card">
// //               <div className="icon-container">
// //                 <i className={`${service.icon} service-icon`}></i>
// //               </div>
// //               <Card.Body className="text-center">
// //                 <Card.Title>{service.title}</Card.Title>
// //                 <Card.Text>{service.text}</Card.Text>
// //                 <a href={service.link} className="learn-more-link">
// //                   Learn More <i className="fas fa-arrow-right"></i>
// //                 </a>
// //               </Card.Body>
// //             </Card>
// //           </Col>
// //         ))}
// //       </Row>
// //     </Container>
// //   );
// // };

// // export default OurServices;
// import React, { useEffect, useState } from 'react';
// import { Container, Row, Col, Card, Spinner } from 'react-bootstrap';
// import './Services.css'; // Import the CSS file for styling
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import axios from 'axios';

// const OurServices = () => {
//   const [services, setServices] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchServices = async () => {
//       try {
//         const response = await axios.get('http://192.168.1.8:8000/api/services/');
//         setServices(response.data);
//       } catch (error) {
//         setError('Failed to fetch services. Please try again later.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchServices();
//   }, []);

//   return (
//     <Container className="our-services-section">
//       <div className="text-center mb-5">
//         <h5>Our Services</h5>
//         <h1 className="mt-2">Comprehensive Locksmith Solutions</h1>
//       </div>
//       {loading ? (
//         <div className="text-center">
//           <Spinner animation="border" variant="primary" />
//         </div>
//       ) : error ? (
//         <div className="text-center text-danger">{error}</div>
//       ) : (
//         <Row className="justify-content-center">
//           {services.map((service, index) => (
//             <Col xs={12} sm={6} md={4} className="mb-4 d-flex justify-content-center" key={index}>
//               <Card className="service-card">
//                 <div className="icon-container">
//                   <i className="fas fa-tools service-icon"></i>
//                 </div>
//                 <Card.Body className="text-center">
//                   <Card.Title>{service.service_type}</Card.Title>
//                   <Card.Text>Price: ${service.price || 'N/A'}</Card.Text>
//                   <Card.Text>{service.description || 'Quality locksmith services available'}</Card.Text>
//                   <a href="#" className="learn-more-link">
//                     Learn More <i className="fas fa-arrow-right"></i>
//                   </a>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       )}
//     </Container>
//   );
// };

// export default OurServices;
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap';
import './Services.css'; // Import the CSS file for styling
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import axios from 'axios';

const OurServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('http://192.168.1.8:8000/api/services/');
        setServices(response.data);
      } catch (error) {
        console.error('Error fetching services:', error);
        setError('Failed to fetch services. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <Container className="our-services-section">
      <div className="text-center mb-5">
        <h5>Our Services</h5>
        <h1 className="mt-2">Comprehensive Locksmith Solutions</h1>
      </div>
      {loading ? (
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : error ? (
        <div className="text-center text-danger">{error}</div>
      ) : (
        <Row className="justify-content-center">
          {services.map((service, index) => (
            <Col xs={12} sm={6} md={4} className="mb-4 d-flex justify-content-center" key={index}>
              <Card className="service-card">
                <div className="icon-container">
                  <i className="fas fa-tools service-icon"></i>
                </div>
                <Card.Body className="text-center">
                  <Card.Title>{service.service_type}</Card.Title>
                  <Card.Text>Price: ${service.price || 'N/A'}</Card.Text>
                  <Card.Text>{service.description || 'Quality locksmith services available'}</Card.Text>
                  <a href="#" className="learn-more-link">
                    Learn More <i className="fas fa-arrow-right"></i>
                  </a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default OurServices;
