import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./LockSmith.css";

const LockSmith = () => {
  return (
    <section className="LockSmith-section">
      <Container>
        <Row className="align-items-center">
          {/* Left Side - Image */}
          <Col md={6} className="image-content">
            <img
              src="images/—Pngtree—key_744696.png"
              alt="locksmith"
              className="img-fluid"
            />
          </Col>

          {/* Right Side - Text Content */}
          <Col md={6} className="text-content">
            <h5>Reliable Locksmith</h5>
            <h1 className="review-heading">
              Securing access to<br />your home and<br />businesses
            </h1>
            <p>
              Natoque neque in montes mauris enim sollicitudin parturient nam
              pharetra elit dui. Id ex augue sagittis lectus nisi tristique
              malesuada duis sapien posuere. Sit sed fringilla nisl pede
              venenatis.
            </p>

            {/* View More Button */}
            <Row className="align-items-center mt-4">
              <Col xs="auto">
                <Button className="view-more-btn">View More</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LockSmith;