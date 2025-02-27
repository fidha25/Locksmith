import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./ContactUsOne.css"; // Ensure you import the CSS file

const ContactUsOne = () => {
  return (
    <section className="contact-section">
      <Container className="text-center">
        <h1 className="fw-bold">Get In Touch With LockQuick – Your Trusted Locksmith Experts</h1>
        <p >
        Need a reliable locksmith? We’re here to help! Whether you're locked out, need key replacements, or want to upgrade your security, our expert team is available 24/7 across <b>Brisbane, Canberra, Sydney, Melbourne, Adelaide, and Perth</b>.
        </p>
        <p><i>Fast Response | Professional Service | Affordable Prices</i>
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
