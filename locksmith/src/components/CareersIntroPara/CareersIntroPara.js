import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./CareersIntroPara.css"; // Ensure the CSS file is imported

const CareersIntroPara = () => {
  return (
    <section className="locksmith-section py-5">
      <Container>
        <Row className="align-items-center">
          {/* Left Side - Image Section */}
          <Col lg={6} className="text-center text-lg-start">
            <img
              src="/images/Career4.png"
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
            LOCKSMITH JOB OPPORTUNITIES IN AUSTRAILIA – JOIN OUR TEAM TODAY!
            </h1>
            <p className="description text-black">
            Are you an experienced locksmith or just starting your career in the security industry? We are looking for skilled, passionate, and professional locksmiths to join our growing network across Australia. Whether you specialize in <b>residential locksmith services, commercial security solutions, automotive key replacement, or smart lock installations</b>, we offer a rewarding career path with <b>excellent benefits – and it’s completely FREE to join!</b>
            </p>

            {/* <Row> */}
              
                {/* <ul className="list-unstyled">
                  <li><span className="brown-tick">✔</span>	<b>Fast & Reliable </b>– Quick response times and efficient service</li>
                  <li><span className="brown-tick">✔</span><b> Certified & Insured</b> – Licensed professionals ensuring your security.</li>
                  <li><span className="brown-tick">✔</span> <b>Advanced Security Solutions</b> – Smart locks and high-tech access control.</li>
                </ul> */}
              
              {/* <Col md={6}>
                <ul className="list-unstyled">
                  <li><span className="brown-tick">✔</span> Installation and repair of locks</li>
                  <li><span className="brown-tick">✔</span> Fast lock-out service</li>
                  <li><span className="brown-tick">✔</span> Quick Tips and Advice</li>
                </ul>
              </Col> */}
            {/* </Row> */}

            {/* Testimonial Section */}
            {/* <div className="testimonial p-3 mt-3">
              <p className="quote text-dark">
                <i>
                  "At LockQuick, your safety is our priority. We provide expert locksmith services tailored to your needs."
                </i>
              </p>
            </div> */}

            {/* Button */}
            {/* <Button variant="dark" className="mt-3 more-btn">
              MORE ABOUT US
            </Button> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CareersIntroPara;
