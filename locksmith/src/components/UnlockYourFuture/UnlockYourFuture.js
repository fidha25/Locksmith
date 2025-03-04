import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

import "./UnlockYourFuture.css";

const UnlockYourFuture = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <section className="unlock-section">
      <Container>
        <Row className="align-items-center">
          {/* Left Side - Text Content */}
          <Col md={6} className="unlock-text-content" data-aos="fade-right">
            <h2 className="fw-bold text-light unlock-heading">
              UNLOCK YOUR FUTURE – BECOME A LOCKSMITH WITH US!
            </h2>
            <p>
              <b>Are You a Skilled Locksmith Looking for More Jobs?</b> Join our{" "}
              <b>Australia-wide locksmith network</b> and start receiving
              high-paying service requests today!
            </p>

            {/* Additional Points as a List */}
            <ul className="benefits-list">
              <li className="text-light">
                <b>Guaranteed Work Opportunities</b> – Residential, Commercial &
                Automotive Locksmith Jobs
              </li>
              <li className="text-light">
                <b>Flexible Schedule</b> – Work in <b>Sydney, Melbourne, Brisbane, Perth, Adelaide & Beyond</b>
              </li>
              <li className="text-light">
                <b>Instant Job Assignments</b> – No more waiting! Start getting
                locksmith service requests immediately.
              </li>
              <li className="text-light">
                <b>Work Independently or with a Team</b> – Choose your preferred
                work style
              </li>
              <li className="text-light">
                <b>Free Sign-Up & Quick Approval</b> – Fast-track your locksmith
                career now!
              </li>
            </ul>

            <Button className="services-btn" data-aos="zoom-in">
              Start Earning!
            </Button>
          </Col>

          {/* Right Side - Image */}
          {/* <Col md={6} className="image-content" data-aos="fade-left">
            <img src="/images/Future.png" alt="Locksmith at work" className="img-fluid unlock-image" />
          </Col> */}
        </Row>
      </Container>
    </section>
  );
};

export default UnlockYourFuture;
