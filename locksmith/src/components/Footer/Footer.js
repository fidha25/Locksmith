

import React from "react";
import { Container, Row, Col, Form, InputGroup } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaTwitter, FaPaperPlane } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-section" 
    style={{
      backgroundColor: "rgb(144, 145, 149)",
      marginTop: "0 !important",
      paddingTop: "0",
      backgroundImage: "url('/images/dark-grey-bg.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "white"
    }}
    >
      <Container className="footer">
        <Row>
          {/* First Column */}
          <Col sm={12} md={4} lg={4} className="footer-column">
            <div className="logo-container">
              <img
                alt="Logo"
                src="images/newlogo.png"
                className="d-inline-block align-top logo-img"
              />
            </div>
            <p className="text-light">
              Sydney en Virginia, encontró una de las palabras más oscuras de la
              lengua del latín, "consecteur".
            </p>
          </Col>

          {/* Second Column */}
          <Col sm={12} md={2} lg={2} className="footer-column">
            <h5 className="footer-heading">About</h5>
            <ul className="custom-list">
              <li className="text-light">About Us</li>
              <li className="text-light">Features</li>
              <li className="text-light">News</li>
              <li className="text-light">Services</li>
            </ul>
          </Col>

          {/* Third Column */}
          <Col sm={12} md={2} lg={2} className="footer-column">
            <h5 className="footer-heading">Company</h5>
            <ul className="custom-list">
              <li className="text-light">Why LockQuick</li>
              <li className="text-light">Partner With Us</li>
              <li className="text-light">FAQ</li>
              <li className="text-light">Blog</li>
            </ul>
          </Col>

          {/* Fourth Column */}
          <Col sm={12} md={2} lg={2} className="footer-column">
            <h5 className="footer-heading">Support</h5>
            <ul className="custom-list text-muted">
              <li className="text-light">Account</li>
              <li className="text-light">Support Center</li>
              <li className="text-light">Feedback</li>
              <li className="text-light">Contact Us</li>
              <li className="text-light">Accessibility</li>
            </ul>
          </Col>

          {/* Fifth Column */}
          <Col sm={12} md={2} lg={2} className="footer-column">
            <h5 className="footer-heading">Get in Touch</h5>
            <p>
              Questions or feedback? <br />
              We'd love to hear from you.
            </p>
            {/* Email Input Field */}
            <InputGroup className="email-input">
              <Form.Control
                type="email"
                placeholder="Email address"
                className="rounded-input"
              />
              <InputGroup.Text className="send-icon">
                <FaPaperPlane />
              </InputGroup.Text>
            </InputGroup>
          </Col>
        </Row>

        {/* Horizontal Line */}
        <hr className="footer-line" />

        {/* Social Media Icons Centered */}
        <Row className="social justify-content-center">
          <Col className="text-center">
            <div className="social-icons">
              <FaFacebookF className="social-icon" />
              <FaInstagram className="social-icon" />
              <FaTwitter className="social-icon" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;