import React from "react";
import { Container, Row, Col, Form, InputGroup } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaTwitter, FaPaperPlane } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";

const Footer = () => {
  return (
    <div class="footer-section">
    <Container className="footer">
      <Row>
        {/* First Column */}
        <Col sm={12} md={4} lg={4} className="footer-column">
          <div className="logo-container">
            <img
              alt="Logo"
              src="images/man.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            <h3 className="ms-2 footer-heading">LockQuick</h3>
          </div>
          <p>
            Sydney en Virginia, encontró una de las palabras más oscuras de la
            lengua del latín, "consecteur".
          </p>
          <div className="social-icons">
            <FaFacebookF className="social-icon" />
            <FaInstagram className="social-icon" />
            <FaTwitter className="social-icon" />
          </div>
        </Col>

        {/* Second Column */}
        <Col sm={12} md={2} lg={2} className="footer-column">
          <h5 className="footer-heading">About</h5>
          <ul className="custom-list ">
            <li>About Us</li>
            <li>Features</li>
            <li>News</li>
            <li>Services</li>
          </ul>
        </Col>

        {/* Third Column */}
        <Col sm={12} md={2} lg={2} className="footer-column">
          <h5 className="footer-heading">Company</h5>
          <ul className="custom-list ">
            <li>Why LockQuick</li>
            <li>Partner With Us</li>
            <li>FAQ</li>
            <li>Blog</li>
          </ul>
        </Col>

        {/* Fourth Column */}
        <Col sm={12} md={2} lg={2} className="footer-column">
          <h5 className="footer-heading">Support</h5>
          <ul className="custom-list text-muted">
            <li>Account</li>
            <li>Support Center</li>
            <li>Feedback</li>
            <li>Contact Us</li>
            <li>Accessibility</li>
          </ul>
        </Col>

        {/* Fifth Column */}
        <Col sm={12} md={2} lg={2} className="footer-column">
          <h5 className="footer-heading">Get in Touch</h5>
          <p >
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
    </Container>
    </div>
  );
};

export default Footer;
