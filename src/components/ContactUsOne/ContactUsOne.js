import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./ContactUsOne.css"; // Ensure you import the CSS file

const ContactUsOne = () => {
  return (
    <section className="contact-section">
      <Container className="text-center">
        <h6 className="contact-title">CONTACT US</h6>
        <h2 className="contact-heading">Get In Touch With Us</h2>
        <p className="contact-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <Row className="justify-content-center">
          {/* Office Location */}
          <Col md={4} sm={12} className="contact-card">
            <div className="contact-box">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h5>Office Location</h5>
              <p>Jl. Raya Puputan No 142, Denpasar</p>
            </div>
          </Col>

          {/* Phone Contact */}
          <Col md={4} sm={12} className="contact-card">
            <div className="contact-box brown-bg">
              <div className="contact-icon">
                <i className="fas fa-phone-alt"></i>
              </div>
              <h5>Give Us A Call</h5>
              <p>(+62)81 115 8596 / (+62)81 115 8749</p>
            </div>
          </Col>

          {/* Email Contact */}
          <Col md={4} sm={12} className="contact-card">
            <div className="contact-box black-bg">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <h5>Email Us</h5>
              <p>support@domain.com</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactUsOne;
