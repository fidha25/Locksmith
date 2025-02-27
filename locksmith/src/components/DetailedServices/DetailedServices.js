// // import React, { useEffect } from 'react';
// // import { Container, Row, Col, Card } from 'react-bootstrap';
// // import { motion } from 'framer-motion';
// // import AOS from 'aos';
// // import 'aos/dist/aos.css';
// // import './DetailedServices.css';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import '@fortawesome/fontawesome-free/css/all.min.css';

// // const DetailedServices = () => {
// //   useEffect(() => {
// //     AOS.init({ duration: 1000, delay: 200 });
// //   }, []);

// //   // const services = [
// //   //   { icon: 'fas fa-home', title: 'Residential Services', text: 'Ensure your home’s security with expert <block repairs, rekeying, and installations. We also offer best emergency locksmith services.', link: '#' },
// //   //   { icon: 'fas fa-car', title: 'Automotive Services', text: 'Locked out of your vehicle? Our specialists offer fast key replacements and car lockout services.', link: '#' },
// //   //   { icon: 'fas fa-building', title: 'Commercial Services', text: 'Secure your business with high-tech security systems and advanced access control solutions.', link: '#' },
// //   //   { icon: 'fas fa-lock', title: 'Emergency Services', text: 'Locked out? We provide affordable 24/7 emergency locksmith services with quick response times.', link: '#' },
// //   //   { icon: 'fas fa-key', title: 'Key Duplication', text: 'Locked out? We provide affordable 24/7 emergency locksmith services with quick response times.', link: '#' },
// //   //   { icon: 'fas fa-shield-alt', title: 'Security Systems', text: 'Upgrade your security with advanced locks, keyless entry, and CCTV installations.', link: '#' },
// //   // ];
// //   const services = [
// //     { 
// //       icon: 'fas fa-home', 
// //       title: '<strong>Residential Services</strong>', 
// //       text: 'Ensure your home’s security with expert <strong>lock repairs</strong>, <strong>rekeying</strong>, and <strong>installations</strong>. We also offer <strong>best emergency locksmith</strong> services.', 
// //       link: '#' 
// //     },
// //     { 
// //       icon: 'fas fa-car', 
// //       title: '<strong>Automotive Services</strong>', 
// //       text: 'Locked out of your vehicle? Our specialists offer <strong>fast key replacements and car lockout services.</strong>', 
// //       link: '#' 
// //     },
// //     { 
// //       icon: 'fas fa-building', 
// //       title: '<strong>Commercial Services</strong>', 
// //       text: 'Secure your business with high-tech security systems and <strong>advanced access control solutions</strong>.', 
// //       link: '#' 
// //     },
// //     { 
// //       icon: 'fas fa-lock', 
// //       title: '<strong>Emergency Services</strong>', 
// //       text: 'Locked out? We provide <strong>affordable 24/7 emergency locksmith services</strong> with quick response times.', 
// //       link: '#' 
// //     },
// //     { 
// //       icon: 'fas fa-key', 
// //       title: '<strong>Key Duplication</strong>', 
// //       text: 'Lost your keys? Our experts can <Strong>replace lost house keys fast</Strong> or duplicate any key type.', 
// //       link: '#' 
// //     },
// //     { 
// //       icon: 'fas fa-shield-alt', 
// //       title: '<strong>Security Systems</strong>', 
// //       text: 'Upgrade your security with <strong>advanced locks</strong>, <strong>keyless entry</strong>, and <strong>CCTV installations</strong>.', 
// //       link: '#' 
// //     },
// //   ];

// //   return (
// //     <Container className="our-services-section">
// //       <div className="text-center mb-5">
// //         <h2 className='fw-bold'>OUR SERVICES</h2>
// //         <h4 className="mt-2"><b>Comprehensive Locksmith Solutions</b></h4>
// //         <p>We provide expert locksmith services tailored to your needs:</p>
// //       </div>
// //       <Row className="justify-content-center">
// //         {services.map((service, index) => (
// //           <Col xs={12} sm={6} md={6} lg={4} className="mb-4 d-flex justify-content-center" key={index}>
// //             <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
// //               <Card className="service-card" data-aos="fade-up" data-aos-delay={index * 200}>
// //                 <div className="icon-container">
// //                   <motion.i 
// //                     className={`${service.icon} service-icon`}
// //                     whileHover={{ scale: 1.2, rotate: 90 }}
// //                     whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
// //                   ></motion.i>
// //                 </div>
// //                 <Card.Body className="text-center d-flex flex-column">
// //                   {/* <Card.Title >{service.title}</Card.Title> */}
// //                   {/* <Card.Text className="flex-grow-1">{service.text}</Card.Text> */}
// //                   <Card.Title className="flex-grow-1" dangerouslySetInnerHTML={{ __html: service.title }}></Card.Title>

// //                   <Card.Text className="flex-grow-1" dangerouslySetInnerHTML={{ __html: service.text }}></Card.Text>

// //                   <a href={service.link} className="learn-more-link mt-auto">
// //                     Learn More <i className="fas fa-arrow-right"></i>
// //                   </a>
// //                 </Card.Body>
// //               </Card>
// //             </motion.div>
// //           </Col>
// //         ))}
// //       </Row>
// //     </Container>
// //   );
// // };

// // export default DetailedServices;

// import React, { useEffect } from 'react';
// import { Container, Row, Col, Card } from 'react-bootstrap';
// import { motion } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import './DetailedServices.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';

// const DetailedServices = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000, delay: 200 });
//   }, []);

//   const navigate = useNavigate();

//   const services = [
//     { icon: 'fas fa-home', title: 'Residential Services', text: 'Ensure your home’s security with expert lock repairs, rekeying, and installations.', path: '/residential' },
//     { icon: 'fas fa-car', title: 'Automotive Services', text: 'Locked out of your vehicle? Our specialists offer fast key replacements and car lockout services.', path: '/automotive' },
//     { icon: 'fas fa-building', title: 'Commercial Services', text: 'Secure your business with high-tech security systems and advanced access control solutions.', path: '/commercial' },
//     { icon: 'fas fa-lock', title: 'Emergency Services', text: 'Locked out? We provide affordable 24/7 emergency locksmith services with quick response times.', path: '/emergency' },
//     { icon: 'fas fa-key', title: 'Key Duplication', text: 'Lost your keys? Our experts can replace lost house keys fast or duplicate any key type.', path: '/key-duplication' },
//     { icon: 'fas fa-shield-alt', title: 'Security Systems', text: 'Upgrade your security with advanced locks, keyless entry, and CCTV installations.', path: '/security-systems' },
//   ];

//   return (
//     <Container className="our-services-section">
//       <div className="text-center mb-5">
//         <h2 className='fw-bold'>OUR SERVICES</h2>
//         <h4 className="mt-2"><b>Comprehensive Locksmith Solutions</b></h4>
//         <p>We provide expert locksmith services tailored to your needs:</p>
//       </div>
//       <Row className="justify-content-center">
//         {services.map((service, index) => (
//           <Col xs={12} sm={6} md={6} lg={4} className="mb-4 d-flex justify-content-center" key={index}>
//             {/* Entire Card Clickable */}
//             <motion.div 
//               whileHover={{ scale: 1.05 }} 
//               whileTap={{ scale: 0.95 }} 
//               onClick={() => navigate(service.path)} 
//               style={{ cursor: 'pointer' }} // Ensures it's clickable
//             >
//               <Card className="service-card" data-aos="fade-up" data-aos-delay={index * 200}>
//                 <div className="icon-container">
//                   <motion.i 
//                     className={`${service.icon} service-icon`}
//                     whileHover={{ scale: 1.2, rotate: 90 }}
//                     whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
//                   ></motion.i>
//                 </div>
//                 <Card.Body className="text-center d-flex flex-column">
//                   <Card.Title className="flex-grow-1">{service.title}</Card.Title>
//                   <Card.Text className="flex-grow-1">{service.text}</Card.Text>
//                   {/* Prevent Event Bubbling */}
//                   <button 
//                     className="learn-more-link mt-auto btn btn-primary"
//                     onClick={(e) => { 
//                       e.stopPropagation(); // Stops parent event from firing
//                       navigate(service.path);
//                     }}
//                   >
//                     Learn More <i className="fas fa-arrow-right"></i>
//                   </button>
//                 </Card.Body>
//               </Card>
//             </motion.div>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default DetailedServices;
import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './DetailedServices.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const DetailedServices = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, delay: 200 });
  }, []);

  const navigate = useNavigate();

  const services = [
    { icon: 'fas fa-home', title: 'Residential Services', text: 'Ensure your home’s security with expert lock repairs, rekeying, and installations.', path: '/residential-service' },
    { icon: 'fas fa-car', title: 'Automotive Services', text: 'Locked out of your vehicle? Our specialists offer fast key replacements and car lockout services.', path: '/automotive-service' },
    { icon: 'fas fa-building', title: 'Commercial Services', text: 'Secure your business with high-tech security systems and advanced access control solutions.', path: '/commercial-service' },
    { icon: 'fas fa-lock', title: 'Emergency Services', text: 'Locked out? We provide affordable 24/7 emergency locksmith services with quick response times.', path: '/emergency-service' },
    { icon: 'fas fa-key', title: 'Key Duplication', text: 'Lost your keys? Our experts can replace lost house keys fast or duplicate any key type.', path: '/smart-lock-service' },
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
            {/* Entire Card Clickable */}
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }} 
              onClick={() => navigate(service.path)} 
              style={{ cursor: 'pointer' }} // Ensures it's clickable
            >
              <Card className="service-card" data-aos="fade-up" data-aos-delay={index * 200}>
                <div className="icon-container">
                  <motion.i 
                    className={`${service.icon} service-icon`}
                    whileHover={{ scale: 1.2, rotate: 90 }}
                    whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
                  ></motion.i>
                </div>
                <Card.Body className="text-center d-flex flex-column">
                  <Card.Title className="flex-grow-1">{service.title}</Card.Title>
                  <Card.Text className="flex-grow-1">{service.text}</Card.Text>
                  {/* Prevent Event Bubbling */}
                  <Link 
                    to={service.path} 
                    className="learn-more-link mt-auto "
                    onClick={(e) => e.stopPropagation()} // Stops parent event from firing
                  >
                    Learn More <i className="fas fa-arrow-right"></i>
                  </Link>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default DetailedServices;
