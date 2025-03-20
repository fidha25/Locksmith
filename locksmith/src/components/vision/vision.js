import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaEye } from "react-icons/fa"; // Vision Icon
import { GiAchievement } from "react-icons/gi"; // Mission Icon
import { FiPhoneCall } from "react-icons/fi"; // Call Icon
import "./vision.css"; // Ensure the CSS file is updated
import { Link } from "react-router-dom";


const WhyChooseUs = () => {
  return (
    <section className="vision">
      <Container>
        <Row className="align-items-center h-100">
          {/* Left Side - Text Content */}
          <Col md={6} className="vision-text-content d-flex flex-column justify-content-center">
            <h2 className="fw-bold">WHY CHOOSE LOCKQUICK?</h2>
            <h4>Your Security, Our Expertise</h4>
            <p className="text-black">
              Finding a <b>trusted locksmith in Brisbane, Canberra, Sydney, Melbourne, Adelaide, or Perth</b> 
              can be challenging, but with <b>LockQuick</b>, you get the best service wherever you are.
            </p>

            <Row>
              <Col md={6}>
                <div className="icon-box">
                  <div className="transparent-box">
                    <FaEye className="icon" />
                    <h5 className="fw-bold">Our Vision</h5>
                    <p className="text-black">
                      To be the most <b>trusted locksmith service provider across Australia</b>, delivering 
                      top-tier security solutions with integrity and professionalism.
                    </p>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div className="icon-box">
                  <div className="transparent-box">
                    <GiAchievement className="icon" />
                    <h5 className="fw-bold">Our Mission</h5>
                    <p className="text-black">
                      To provide <b>fast, efficient, and affordable locksmith solutions</b>, integrating the latest 
                      security technologies for <b>homes, businesses, and vehicles</b>.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>

            <Link to="/services" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
  <Button className="services-btn">
    OUR SERVICES
  </Button>
</Link>          </Col>

          {/* Right Side - Image */}
          <Col md={6} className="image-content d-flex flex-column justify-content-center">
            <img src="/images/worker-client.jpg" alt="Locksmith at work" className="img-fluid locksmith-img" />
            <div className="vision-contact-box">
              <p className="text-white"><i>Locked out or need urgent security assistance? Call our experts now!</i></p>
              <p className="phone-icon text-white">
                <FiPhoneCall className="call-icon text-white" /> (+62) 81 487 1843
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
