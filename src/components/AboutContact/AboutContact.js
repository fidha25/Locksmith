import React from "react";
import { Container, Button } from "react-bootstrap";
import "./AboutContact.css";

const AboutContact = () => {
  return (
    <section className="banner-section">
      <Container className="text-center">
        <div className="video-btn">
          <span className="play-icon">&#9654;</span>
        </div>
        <h2 className="banner-title">
          We Are Available For 24/7 Emergency Locksmith Services
        </h2>
        <p className="banner-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor.
        </p>
        <Button className="contact-btn">CONTACT US</Button>
      </Container>
    </section>
  );
};

export default AboutContact;
