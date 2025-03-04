import React from "react";
import { Container, Button } from "react-bootstrap";
import "./AboutContact.css";

const AboutContact = () => {
  return (
    <section className="banner-section">
      <Container className="text-center">
        <div className="video-btn">
          <span className="play-icon" variant="dark">&#9654;</span>
        </div>
        {/* <h2 className="banner-title">
          We Are Available For 24/7 Emergency Locksmith Services
        </h2> */}
        {/* <h2 className="fw-bold">
        24/7 Emergency Locksmith Services – We Come to You!
        </h2> */}
        <h2 className="fw-bold">
        24/7 EMERGENCY LOCKSMITH SERVICES – WE COME TO YOU!
        </h2>
        <p className="text-dark">
        Locked out in the middle of the night? Need urgent key replacement? Searching for a <b>reliable locksmith in Brisbane, Canberra, Sydney, Melbourne, Adelaide, or Perth? LockQuick has you covered!</b>
        </p>
        <p className="text-dark"><i>We are available 24/7 to provide quick, efficient, and professional locksmith services—because your security can’t wait!</i></p>
        <p className="text-dark"><b>Call us now for immediate assistance!</b></p>
        <Button className="contact-btn text-light"  variant="dark">CONTACT US</Button>
      </Container>
    </section>
  );
};

export default AboutContact;
