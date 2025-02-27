import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./ServicePara.css";

const ServicePara = () => {
  return (
    <section className="LockSmith-section">
      <Container>
        <Row className="align-items-center">
          {/* Left Side - Image (for large screens) */}
          <Col md={12} lg={6} className="image-content d-lg-block d-none">
            <img src="images/whytrust.jpg" alt="locksmith" className="img-fluid" />
          </Col>

          {/* Right Side - Text Content */}
          <Col md={12} lg={6} className="lock-text-content">
            <h2 className="fw-bold">WHY TRUST LOCKQUICK?</h2>
            <h4 ><b>
            Trusted Locksmiths for Your Safety
            </b> </h4>

            {/* Image between heading and paragraph in medium screens */}
            <div className="lock-image-content d-md-block d-lg-none">
              <img src="images/whytrust.jpg" alt="locksmith" className="img-fluid" />
            </div>

            <p>
            At LockQuick, we understand the importance of security. Whether you need a simple lock change or a complete <b>security system upgrade</b>, our team provides <b>professional locksmith services</b> to keep your home, business, and vehicle secure.
            </p>

            {/* View More Button */}
            <Row className="align-items-center mt-4">
              <Col xs={12} className="text-md-center text-lg-start"> {/* Center on md, left on lg */}
                <Button className="view-more-btn" variant="dark">Learn More</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ServicePara;
