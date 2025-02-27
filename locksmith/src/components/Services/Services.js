import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Services.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const OurServices = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, delay: 200 });
  }, []);

  // const services = [
  //   { icon: 'fas fa-home', title: 'Residential Services', text: 'Ensure your home’s security with expert <block repairs, rekeying, and installations. We also offer best emergency locksmith services.', link: '#' },
  //   { icon: 'fas fa-car', title: 'Automotive Services', text: 'Locked out of your vehicle? Our specialists offer fast key replacements and car lockout services.', link: '#' },
  //   { icon: 'fas fa-building', title: 'Commercial Services', text: 'Secure your business with high-tech security systems and advanced access control solutions.', link: '#' },
  //   { icon: 'fas fa-lock', title: 'Emergency Services', text: 'Locked out? We provide affordable 24/7 emergency locksmith services with quick response times.', link: '#' },
  //   { icon: 'fas fa-key', title: 'Key Duplication', text: 'Locked out? We provide affordable 24/7 emergency locksmith services with quick response times.', link: '#' },
  //   { icon: 'fas fa-shield-alt', title: 'Security Systems', text: 'Upgrade your security with advanced locks, keyless entry, and CCTV installations.', link: '#' },
  // ];
  const services = [
    { 
      icon: 'fas fa-home', 
      title: '<strong>Residential Services</strong>', 
      text: 'Ensure your home’s security with expert <strong>lock repairs</strong>, <strong>rekeying</strong>, and <strong>installations</strong>. We also offer <strong>best emergency locksmith</strong> services.', 
      link: '#' 
    },
    { 
      icon: 'fas fa-car', 
      title: '<strong>Automotive Services</strong>', 
      text: 'Locked out of your vehicle? Our specialists offer <strong>fast key replacements and car lockout services.</strong>', 
      link: '#' 
    },
    { 
      icon: 'fas fa-building', 
      title: '<strong>Commercial Services</strong>', 
      text: 'Secure your business with high-tech security systems and <strong>advanced access control solutions</strong>.', 
      link: '#' 
    },
    { 
      icon: 'fas fa-lock', 
      title: '<strong>Emergency Services</strong>', 
      text: 'Locked out? We provide <strong>affordable 24/7 emergency locksmith services</strong> with quick response times.', 
      link: '#' 
    },
    { 
      icon: 'fas fa-key', 
      title: '<strong>Key Duplication</strong>', 
      text: 'Lost your keys? Our experts can <Strong>replace lost house keys fast</Strong> or duplicate any key type.', 
      link: '#' 
    },
    { 
      icon: 'fas fa-shield-alt', 
      title: '<strong>Security Systems</strong>', 
      text: 'Upgrade your security with <strong>advanced locks</strong>, <strong>keyless entry</strong>, and <strong>CCTV installations</strong>.', 
      link: '#' 
    },
  ];

  return (
    <Container className="our-services-section">
      <div className="text-center mb-5">
        <h2 className='fw-bold'>OUR SERVICES</h2>
        <h4 className="mt-2"><b>Comprehensive Locksmith Solutions</b></h4>
        <p>We provide expert locksmith services tailored to your needs:</p>
      </div>
      <Row className="justify-content-center">
        {services.map((service, index) => (
          <Col xs={12} sm={6} md={6} lg={4} className="mb-4 d-flex justify-content-center" key={index}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Card className="service-card service-demo" data-aos="fade-up" data-aos-delay={index * 200}>
                <div className="icon-container">
                  <motion.i 
                    className={`${service.icon} service-icon`}
                    whileHover={{ scale: 1.2, rotate: 90 }}
                    whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
                  ></motion.i>
                </div>
                <Card.Body className="text-center d-flex flex-column">
                  {/* <Card.Title >{service.title}</Card.Title> */}
                  {/* <Card.Text className="flex-grow-1">{service.text}</Card.Text> */}
                  <Card.Title className="flex-grow-1" dangerouslySetInnerHTML={{ __html: service.title }}></Card.Title>

                  <Card.Text className="flex-grow-1" dangerouslySetInnerHTML={{ __html: service.text }}></Card.Text>

                  <a href={service.link} className="learn-more-link mt-auto">
                    Learn More <i className="fas fa-arrow-right"></i>
                  </a>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default OurServices;





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
//         console.error('Error fetching services:', error);
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
