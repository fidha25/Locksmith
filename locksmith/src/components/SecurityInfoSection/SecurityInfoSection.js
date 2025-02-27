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
              src="images/abt1.png"
              alt="Locksmith Work"
              className="img-fluid main-image"
            />
          </Col>

          {/* Right Side - Text Content */}
          <Col lg={6} className="text-container">
            {/* <p className="welcome-text">WELCOME TO KEYMAN</p>
            <h6 className="title">
              We Have 15 Years of Experience in Locksmith Service
            </h6> */}
            <h1 className="fw-bold">
            {/* Welcome to LockQuick – Your Trusted Locksmith Experts Across Australia */}
            WELCOME TO LOCKQUICK – YOUR TRUSTED LOCKSMITH EXPERTS ACROSS AUSTRALIA
            </h1>
            <p className="description">
            For over 15 years, <b>LockQuick</b> has been a leading provider of <b>professional locksmith services</b> in <b>Brisbane, Canberra, Sydney, Melbourne, Adelaide, and Perth</b>. Our expert team is dedicated to ensuring the safety and security of homes, businesses, and vehicles with <b>fast, reliable, and affordable locksmith solutions</b>.
            </p>
            <p>We understand that security is more than just locks and keys—it’s about <b>trust and peace of mind</b>. Whether you need a quick lock repair, emergency lockout assistance, or advanced security installations, <b>our mobile locksmiths are available 24/7 to help</b>.</p>

            <Row>
              
                <ul className="list-unstyled">
                  <li><span className="brown-tick">✔</span>	<b>Fast & Reliable </b>– Quick response times and efficient service</li>
                  <li><span className="brown-tick">✔</span><b> Certified & Insured</b> – Licensed professionals ensuring your security.</li>
                  <li><span className="brown-tick">✔</span> <b>Advanced Security Solutions</b> – Smart locks and high-tech access control.</li>
                </ul>
              
              {/* <Col md={6}>
                <ul className="list-unstyled">
                  <li><span className="brown-tick">✔</span> Installation and repair of locks</li>
                  <li><span className="brown-tick">✔</span> Fast lock-out service</li>
                  <li><span className="brown-tick">✔</span> Quick Tips and Advice</li>
                </ul>
              </Col> */}
            </Row>

            {/* Testimonial Section */}
            <div className="testimonial p-3 mt-3">
              <p className="quote">
                <i>
                  "At LockQuick, your safety is our priority. We provide expert locksmith services tailored to your needs."
                </i>
              </p>
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
