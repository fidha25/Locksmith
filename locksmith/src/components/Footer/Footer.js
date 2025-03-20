
import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, InputGroup } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaTwitter, FaPaperPlane } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";

const Footer = () => {
  return (
    <div
      className="footer-section"
      style={{
        backgroundColor: "rgb(144, 145, 149)",
        marginTop: "0 !important",
        paddingTop: "0",
        backgroundImage: "url('/images/dark-grey-bg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
      }}
    >
      <Container className="footer">
        <Row>
          {/* First Column */}
          <Col sm={12} md={4} lg={4} className="footer-column">
            <div className="logo-container">
              <img
                alt="Logo"
                src="/images/logo.webp"
                className="d-inline-block align-top logo-img"
              />
            </div>
            <p className="text-light">
            Lock Quick offers fast, reliable locksmith services across Australia. From lock repairs to emergency lockouts, our certified experts are available 24/7 to keep you secure.</p>          </Col>

          {/* Quick Links */}
          <Col sm={12} md={2} lg={2} className="footer-column">
            <h5 className="footer-heading">Quick Links</h5>
            <ul className="custom-list">
              <li><Link to="/" className="text-light">Home</Link></li>
              <li><Link to="/about-us" className="text-light">About</Link></li>
              <li><Link to="/services" className="text-light">Services</Link></li>
              <li><Link to="/careers" className="text-light">Careers</Link></li>
              <li><Link to="/contact-us" className="text-light">Contact Us</Link></li>
            </ul>
          </Col>

          {/* Services */}
          <Col sm={12} md={2} lg={2} className="footer-column">
            <h5 className="footer-heading">Services</h5>
            <ul className="custom-list">
              <li><Link to="/residential-service" className="text-light">Residential</Link></li>
              <li><Link to="/commercial-service" className="text-light">Commercial</Link></li>
              <li><Link to="/automotive-service" className="text-light">Automotive</Link></li>
              <li><Link to="/emergency-service" className="text-light">Emergency</Link></li>
              <li><Link to="/smart-lock-service" className="text-light">SmartLock</Link></li>
            </ul>
          </Col>

          {/* Support */}
          <Col sm={12} md={2} lg={2} className="footer-column">
            <h5 className="footer-heading">Support</h5>
            <ul className="custom-list">
              <li><Link to="/faq" className="text-light">FAQs</Link></li>
              <li><Link to="/contact-support" className="text-light">Contact Support</Link></li>
              <li><a href="/docs/Terms of Use.pdf" className="text-light" target="_blank" rel="noopener noreferrer">Terms & Conditions</a></li>
              <li><a href="/docs/Privacy Policy.pdf" className="text-light" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
            </ul>
          </Col>

          {/* Get in Touch */}
          <Col sm={12} md={2} lg={2} className="footer-column">
            <h5 className="footer-heading">Get in Touch</h5>
            <p className="text-white">
              Questions or feedback? <br />
              We'd love to hear from you.
            </p>
            {/* Email Input Field */}
            <InputGroup className="email-input">
              <Form.Control type="email" placeholder="Email address" className="rounded-input" />
              <InputGroup.Text className="send-icon">
                <FaPaperPlane />
              </InputGroup.Text>
            </InputGroup>
          </Col>
        </Row>

        {/* Horizontal Line */}
        <hr className="footer-line" />

        {/* Social Media Icons */}
        <Row className="social justify-content-center">
          <Col className="text-center">
            <div className="social-icons">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="social-icon" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="social-icon" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="social-icon" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
