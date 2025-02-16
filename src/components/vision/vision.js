import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { BsBullseye, BsCheckCircle } from "react-icons/bs"; // Vision & Mission Icons
import { FiPhoneCall } from "react-icons/fi"; // Call Icon
import "./vision.css"; // Ensure the CSS file is updated

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <Container>
        <Row className="align-items-center">
          {/* Left Side - Text Content */}
          <Col md={6} className="text-content">
            <h6>WHY CHOOSE US</h6>
            <h2>We Are The Perfect Fit For Your Lock-Out Problem</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Row>
              <Col md={6}>
                <div className="icon-box">
                  <div className="transparent-box">
                    <BsBullseye className="icon" />
                    <h5>Our Vision</h5>
                    <p>Lorem ipsum dolor sit amet, consecte adipiscing elit.</p>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div className="icon-box">
                  <div className="transparent-box">
                    <BsCheckCircle className="icon" />
                    <h5>Our Mission</h5>
                    <p>Lorem ipsum dolor sit amet, consecte adipiscing elit.</p>
                  </div>
                </div>
              </Col>
            </Row>
            <Button className="services-btn">OUR SERVICES</Button>
          </Col>

          {/* Right Side - Image */}
          <Col md={6} className="image-content">
            <img src="/images/worker-client.jpg" alt="Locksmith at work" className="img-fluid" />
            <div className="contact-box">
              <p>If You Need Help or Have Some Questions, Consultation with Us</p>
              <p className="phone-icon">
                <FiPhoneCall className="call-icon" /> (+62) 81 487 1843
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
