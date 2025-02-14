
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./IntroSection.css"; // Import the CSS file

const IntroSection = () => {
  return (
    <section className="intro-section">
      <Container>
        <Row className="align-items-center">
          {/* Left Side - Text Content */}
          <Col md={6} className="text-content">
            <Button variant="light" className="promo-btn">
              24/7 EMERGENCY CALL
            </Button>{" "}
            {/* Light lavender transparent button */}
            <h1 className="intro-heading">
              We Provide Best
              <br /> <span className="highlight-text">Locksmith</span> Services{" "}
              <br />
              That You Can Trust
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam quis nostrud
            </p>
            <Button  className="me-2 appointment-button">
              APPOINTMENT
            </Button>
          </Col>

          {/* Right Side - Image */}
          <Col md={6} className="image-content">
            <img
              src="images/—Pngtree—key_744696.png"
              alt="Intro"
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default IntroSection;