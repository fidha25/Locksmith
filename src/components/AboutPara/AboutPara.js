import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./AboutPara.css";

const AboutPara = () => {
  return (
    <section className="SecureAccess-section">
      <Container>
        {/* Add justify-content-center to center the columns */}
        <Row className="align-items-center justify-content-center gx-3">
          
          {/* Right Side - Text Content */}
          <Col md={6} className="info-content">
            <h5>About Us</h5>
            <h1 className="highlight-heading">
              Protecting homes and<br /> businesses with<br /> reliability
            </h1>
            <p>
              Ensuring top-tier security with cutting-edge solutions. Our expert
              locksmith services guarantee safety and peace of mind for your
              family and business.
            </p>

            {/* View More Button */}
            <Row className="align-items-center mt-4">
              <Col xs="auto">
                <Button className="explore-btn">Explore More</Button>
              </Col>
            </Row>
          </Col>

          {/* Left Side - Image */}
          <Col md={6} className="visual-content">
            <img
              src="/images/worker-client.jpg"
              alt="locksmith"
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutPara;
