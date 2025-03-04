

// // // import React from "react";
// // // import { Container, Row, Col, Button, Dropdown, InputGroup, Carousel } from "react-bootstrap";
// // // import { Search } from "react-bootstrap-icons";
// // // import { Link } from 'react-router-dom';

// // // import "./IntroSection.css"; // Import the CSS file

// // // const IntroSection = () => {
// // //   return (
// // //     <section className="intro-section">
// // //       {/* Background Carousel with Controls and Indicators */}
// // //       <Carousel className="background-carousel" interval={3000} pause={false} indicators>
// // //         <Carousel.Item>
// // //           <img className="d-block w-100 img-fluid" src="images/lkbg1new.png" alt="First slide" />
// // //         </Carousel.Item>
// // //         <Carousel.Item>
// // //           <img className="d-block w-100 img-fluid" src="images/lkbg2new.png" alt="Second slide" />
// // //         </Carousel.Item>
// // //         <Carousel.Item>
// // //           <img className="d-block w-100 img-fluid" src="images/lkbg3new.png" alt="Third slide" />
// // //         </Carousel.Item>
// // //       </Carousel>

// // //       {/* Content Overlay */}
// // //       <Container className="text-center content-overlay">
// // //         <Row className="justify-content-center align-items-center">
// // //           {/* Text Content */}
// // //           <Col md={8} lg={6} className="text-content text-center">
// // //             <h1 className="intro-heading">
// // //               <span className="highlight-text">LOCK QUICK</span> – FAST & RELIABLE LOCKSMITH SERVICES IN AUSTRALIA
// // //             </h1>
// // //             <h4><b>24/7 Emergency Locksmith Services – Anytime, Anywhere!</b></h4>
// // //             <p>
// // //               Locked out of your home, office, or car? Need urgent lock repairs or key replacements? <b>Lock Quick</b> is your go-to locksmith service provider, offering <b>affordable locksmith services, 24-hour locksmith support</b>, and <b>fast mobile locksmith solutions around Australia.</b> Whether it's an emergency lockout or a security upgrade, our certified professionals are always ready to assist.
// // //             </p>
// // //             {/* Aligned Dropdown and Button in Same Line */}
// // //             <div className="d-flex justify-content-center align-items-center w-100 service-dropdown-container">
// // //               <Dropdown>
// // //                 <Dropdown.Toggle style={{ backgroundColor: "white", color: "black" }} id="dropdown-basic">
// // //                   Select Service
// // //                 </Dropdown.Toggle>
// // //                 <Dropdown.Menu>
// // //                 <Dropdown.Item as={Link} to="/residential">Residential</Dropdown.Item>
// // // <Dropdown.Item as={Link} to="/automotive">Automotive</Dropdown.Item>
// // // <Dropdown.Item as={Link} to="/commercial">Commercial</Dropdown.Item>
// // // <Dropdown.Item as={Link} to="/emergency">Emergency</Dropdown.Item>
// // // <Dropdown.Item as={Link} to="/smart-lock">Smart Lock</Dropdown.Item>

// // //                 </Dropdown.Menu>
// // //               </Dropdown>
// // //               <Button variant="dark" className="search-button ms-2">
// // //                 <Search />
// // //               </Button>
// // //             </div>
// // //           </Col>
// // //         </Row>
// // //       </Container>
// // //     </section>
// // //   );
// // // };

// // // export default IntroSection;

// // import React, { useState, useEffect } from "react";
// // import { Container, Row, Col, Button, Dropdown, InputGroup, Carousel } from "react-bootstrap";
// // import { Search } from "react-bootstrap-icons";
// // import { Link, useNavigate } from 'react-router-dom';
// // import "./IntroSection.css";

// // const IntroSection = () => {
// //   const [selectedService, setSelectedService] = useState("Select Service");
// //   const navigate = useNavigate();

// //   // Check if user is authenticated
// //   const isAuthenticated = () => {
// //     const token = localStorage.getItem("accessToken");
// //     const role = localStorage.getItem("userRole");
// //     return token && role === "customer";
// //   };

// //   const handleSelect = (eventKey) => {
// //     setSelectedService(eventKey);
// //   };

// //   const handleSearch = () => {
// //     if (selectedService === "Select Service") {
// //       alert("Please select a service first.");
// //       return;
// //     }
    
// //     if (!isAuthenticated()) {
// //       alert("Please login first.");
// //       navigate("/login");
// //     } else {
// //       navigate(`/${selectedService.toLowerCase()}`);
// //     }
// //   };

// //   return (
// //     <section className="intro-section">
// //       <Carousel className="background-carousel" interval={3000} pause={false} indicators>
// //         <Carousel.Item>
// //           <img className="d-block w-100 img-fluid" src="images/lkbg1new.png" alt="First slide" />
// //         </Carousel.Item>
// //         <Carousel.Item>
// //           <img className="d-block w-100 img-fluid" src="images/lkbg2new.png" alt="Second slide" />
// //         </Carousel.Item>
// //         <Carousel.Item>
// //           <img className="d-block w-100 img-fluid" src="images/lkbg3new.png" alt="Third slide" />
// //         </Carousel.Item>
// //       </Carousel>

// //       <Container className="text-center content-overlay">
// //         <Row className="justify-content-center align-items-center">
// //           <Col md={8} lg={6} className="text-content text-center">
// //             <h1 className="intro-heading">
// //               <span className="highlight-text">LOCK QUICK</span> – FAST & RELIABLE LOCKSMITH SERVICES IN AUSTRALIA
// //             </h1>
// //             <h4><b>24/7 Emergency Locksmith Services – Anytime, Anywhere!</b></h4>
// //             <p>
// //               Locked out of your home, office, or car? Need urgent lock repairs or key replacements? <b>Lock Quick</b> is your go-to locksmith service provider, offering <b>affordable locksmith services, 24-hour locksmith support</b>, and <b>fast mobile locksmith solutions around Australia.</b>
// //             </p>
// //             <div className="d-flex justify-content-center align-items-center w-100 service-dropdown-container">
// //               <Dropdown onSelect={handleSelect}>
// //                 <Dropdown.Toggle style={{ backgroundColor: "white", color: "black" }} id="dropdown-basic">
// //                   {selectedService}
// //                 </Dropdown.Toggle>
// //                 <Dropdown.Menu>
// //                   <Dropdown.Item eventKey="residential">Residential</Dropdown.Item>
// //                   <Dropdown.Item eventKey="automotive">Automotive</Dropdown.Item>
// //                   <Dropdown.Item eventKey="commercial">Commercial</Dropdown.Item>
// //                   <Dropdown.Item eventKey="emergency">Emergency</Dropdown.Item>
// //                   <Dropdown.Item eventKey="smart-lock">Smart Lock</Dropdown.Item>
// //                 </Dropdown.Menu>
// //               </Dropdown>
// //               <Button variant="dark" className="search-button ms-2" onClick={handleSearch}>
// //                 <Search />
// //               </Button>
// //             </div>
// //           </Col>
// //         </Row>
// //       </Container>
// //     </section>
// //   );
// // };

// // export default IntroSection;
// import React, { useState, useEffect } from "react";
// import { Container, Row, Col, Button, Dropdown, InputGroup, Carousel } from "react-bootstrap";
// import { Search } from "react-bootstrap-icons";
// import { Link, useNavigate } from 'react-router-dom';
// import "./IntroSection.css";

// const IntroSection = () => {
//   const [selectedService, setSelectedService] = useState("Select Service");
//   const navigate = useNavigate();

//   const isAuthenticated = () => {
//     const token = localStorage.getItem("accessToken");
//     const role = localStorage.getItem("userRole");
//     return token && role === "customer";
//   };

//   const handleSelect = (eventKey) => {
//     setSelectedService(eventKey);
//   };

//   const handleSearch = () => {
//     if (selectedService === "Select Service") {
//       alert("Please select a service first.");
//       return;
//     }
    
//     if (!isAuthenticated()) {
//       alert("Please login first.");
//       navigate("/login");
//     } else {
//       navigate(`/${selectedService.toLowerCase()}`);
//     }
//   };

//   return (
//     <section className="intro-section">
//       <Carousel className="background-carousel" interval={3000} pause={false} indicators>
//         <Carousel.Item>
//           <img className="d-block w-100 img-fluid" src="images/lkbg1new.png" alt="First slide" />
//         </Carousel.Item>
//         <Carousel.Item>
//           <img className="d-block w-100 img-fluid" src="images/lkbg2new.png" alt="Second slide" />
//         </Carousel.Item>
//         <Carousel.Item>
//           <img className="d-block w-100 img-fluid" src="images/lkbg3new.png" alt="Third slide" />
//         </Carousel.Item>
//       </Carousel>

//       <Container className="text-center content-overlay">
//         <Row className="justify-content-center align-items-center">
//           <Col md={8} lg={6} className="text-content text-center">
//             <h1 className="intro-heading">
//               <span className="highlight-text">LOCK QUICK</span> – FAST & RELIABLE LOCKSMITH SERVICES IN AUSTRALIA
//             </h1>
//             <h4><b>24/7 Emergency Locksmith Services – Anytime, Anywhere!</b></h4>
//             <p>
//               Locked out of your home, office, or car? Need urgent lock repairs or key replacements? <b>Lock Quick</b> is your go-to locksmith service provider, offering <b>affordable locksmith services, 24-hour locksmith support</b>, and <b>fast mobile locksmith solutions around Australia.</b>
//             </p>
//             <div className="d-flex justify-content-center align-items-center w-100 service-dropdown-container">
//               <Dropdown onSelect={handleSelect}>
//                 <Dropdown.Toggle style={{ backgroundColor: "white", color: "black" }} id="dropdown-basic">
//                   {selectedService}
//                 </Dropdown.Toggle>
//                 <Dropdown.Menu>
//                   <Dropdown.Item eventKey="residential">Residential</Dropdown.Item>
//                   <Dropdown.Item eventKey="automotive">Automotive</Dropdown.Item>
//                   <Dropdown.Item eventKey="commercial">Commercial</Dropdown.Item>
//                   <Dropdown.Item eventKey="emergency">Emergency</Dropdown.Item>
//                   <Dropdown.Item eventKey="smart-lock">Smart Lock</Dropdown.Item>
//                 </Dropdown.Menu>
//               </Dropdown>
//               <Button variant="dark" className="search-button ms-2" onClick={handleSearch}>
//                 <Search />
//               </Button>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default IntroSection;
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Dropdown, Carousel } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import "./IntroSection.css";

const IntroSection = () => {
  const [selectedService, setSelectedService] = useState("Select Service");
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  const isAuthenticated = () => {
    const token = localStorage.getItem("accessToken");
    const role = localStorage.getItem("userRole");
    return token && role === "customer";
  };

  const handleSelect = (eventKey) => {
    setSelectedService(eventKey);
  };

  const handleSearch = () => {
    if (selectedService === "Select Service") {
      alert("Please select a service first.");
      return;
    }
    
    if (!isAuthenticated()) {
      alert("Please login first.");
      navigate("/login");
    } else {
      navigate(`/${selectedService.toLowerCase()}`);
    }
  };

  return (
    <section className="intro-section">
      <Carousel className="background-carousel" interval={3000} pause={false} indicators>
        <Carousel.Item>
          <img className="d-block w-100 img-fluid" src="images/lkbg1new.png" alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 img-fluid" src="images/lkbg2new.png" alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 img-fluid" src="images/lkbg3new.png" alt="Third slide" />
        </Carousel.Item>
      </Carousel>

      <Container fluid className="text-center content-overlay">
        <Row className="justify-content-center align-items-center">
          <Col md={10} lg={8} className="text-content" data-aos="fade-up">
            <h1 className="intro-heading">
              <span className="highlight-text">LOCK QUICK</span> – FAST & RELIABLE LOCKSMITH SERVICES IN AUSTRALIA
            </h1>
            <h4 className="text-light"><b>24/7 Emergency Locksmith Services – Anytime, Anywhere!</b></h4>
            <p>
              Locked out? Need urgent lock repairs? <b>Lock Quick</b> offers <b>affordable 24-hour locksmith support</b> with fast mobile solutions across Australia.
            </p>
            <div className="d-flex justify-content-center align-items-center w-100 service-dropdown-container">
              <Dropdown onSelect={handleSelect}>
                <Dropdown.Toggle style={{ backgroundColor: "white", color: "black", width: "300px" }} id="dropdown-basic">
                  {selectedService}
                </Dropdown.Toggle>
                <Dropdown.Menu style={{ width: "300px" }}>
                  <Dropdown.Item eventKey="residential">Residential</Dropdown.Item>
                  <Dropdown.Item eventKey="automotive">Automotive</Dropdown.Item>
                  <Dropdown.Item eventKey="commercial">Commercial</Dropdown.Item>
                  <Dropdown.Item eventKey="emergency">Emergency</Dropdown.Item>
                  <Dropdown.Item eventKey="smart-lock">Smart Lock</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Button variant="dark" className="search-button ms-2" onClick={handleSearch}>
                Search
                <Search />
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default IntroSection;
