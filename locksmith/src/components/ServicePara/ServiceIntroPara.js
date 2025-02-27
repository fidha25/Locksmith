import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./ServiceIntroPara.css"; // Ensure the CSS file is imported

const ServiceIntroPara = () => {
  return (
    <section className="locksmith-section py-5">
      <Container>
        <Row className="align-items-center">
          {/* Left Side - Image Section */}
          <Col lg={6} className="text-center text-lg-start">
            <img
              src="images/abt1.png"
              alt="Locksmith Work"
              className="img-fluid main-image"
            />
          </Col>

          {/* Right Side - Text Content */}
          <Col lg={6} className="text-container">
            {/* <p className="welcome-text">WELCOME TO KEYMAN</p>
            <h6 className="title">
              We Have 15 Years of Experience in Locksmith Service
            </h6> */}
            <h1 className="fw-bold">
            {/* Welcome to LockQuick – Your Trusted Locksmith Experts Across Australia */}
            PROFESSIONAL LOCKSMITH SOLUTIONS FOR HOMES AND BUSINESSES
            </h1>
            <p className="description">
            When it comes to securing your home, office, or vehicle, you need a locksmith you can trust. At LockQuick, we provide fast, reliable, and professional locksmith services to keep you safe and secure. Whether you're locked out, need key replacements, or want to install advanced security systems, we are here to help.
            </p>
            <p>We proudly serve Brisbane, Canberra, Sydney, Melbourne, Adelaide, and Perth, offering 24/7 emergency assistance and expert locksmith solutions tailored to your needs.</p>

           

           

           
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ServiceIntroPara;
