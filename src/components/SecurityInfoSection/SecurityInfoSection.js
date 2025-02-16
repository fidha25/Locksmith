import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./SecurityInfoSection.css"; // Ensure the CSS file is imported

const SecurityInfoSection = () => {
  return (
    <section className="locksmith-section py-5">
      <Container>
        <Row className="align-items-center">
          {/* Left Side - Image Section */}
          <Col lg={6} className="text-center text-lg-start">
            <img
              src="images/pexels-sora-shimazaki-5668842.jpg"
              alt="Locksmith Work"
              className="img-fluid main-image"
            />
          </Col>

          {/* Right Side - Text Content */}
          <Col lg={6} className="text-container">
            <p className="welcome-text">WELCOME TO KEYMAN</p>
            <h2 className="title">
              We Have 15 Years of Experience in Locksmith Service
            </h2>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi.
            </p>

            <Row>
              <Col md={6}>
                <ul className="list-unstyled">
                  <li><span className="brown-tick">✔</span> Deadlocks & Padlocks</li>
                  <li><span className="brown-tick">✔</span> Keyless entry systems</li>
                  <li><span className="brown-tick">✔</span> Free Consultations</li>
                </ul>
              </Col>
              <Col md={6}>
                <ul className="list-unstyled">
                  <li><span className="brown-tick">✔</span> Installation and repair of locks</li>
                  <li><span className="brown-tick">✔</span> Fast lock-out service</li>
                  <li><span className="brown-tick">✔</span> Quick Tips and Advice</li>
                </ul>
              </Col>
            </Row>

            {/* Testimonial Section */}
            <div className="testimonial p-3 mt-3">
              <p className="quote">
                <i>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore."
                </i>
              </p>
              <p className="author"><strong>Ronnie Sawyer</strong></p>
            </div>

            {/* Button */}
            <Button variant="dark" className="mt-3 more-btn">
              MORE ABOUT US
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SecurityInfoSection;
