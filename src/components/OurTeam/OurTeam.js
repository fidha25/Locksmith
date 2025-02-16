import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./OurTeam.css";

const TeamSection = () => {
  return (
    <section className="team-section">
      <Container>
        <div className="text-center mb-4">
          <p className="section-subtitle">OUR TEAM</p>
          <h2 className="section-title">Meet With Professional Locksmith</h2>
          <p className="section-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <Row className="justify-content-center">
          <Col md={4} sm={12} className="text-center">
            <img src="images/worker-client.jpg" alt="Locksmith 1" className="team-image" />
          </Col>
          <Col md={4} sm={12} className="text-center">
            <img src="images/worker-client.jpg" alt="Locksmith 2" className="team-image" />
          </Col>
          <Col md={4} sm={12} className="text-center">
            <img src="images/worker-client.jpg" alt="Locksmith 3" className="team-image" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TeamSection;
