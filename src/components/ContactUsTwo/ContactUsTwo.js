import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./ContactUsTwo.css"; // Ensure the CSS file is imported

const ContactForm = () => {
  return (
    <section className="contact-form-section">
      <Container>
        <Row className="align-items-center">
          {/* Left Side - Map */}
          <Col lg={6} md={12} className="map-container">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.0711837902063!2d115.22209547428217!3d-8.670458691406412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd240e7b84f05df%3A0x42ddbe60b445e653!2sJl.%20Raya%20Puputan%20No.142%2C%20Panjer%2C%20Denpasar%20Selatan%2C%20Kota%20Denpasar%2C%20Bali%2080234%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1700000000000"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Col>

          {/* Right Side - Contact Form */}
          <Col lg={6} md={12} className="form-container">
            <Form>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Your Name" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control type="email" placeholder="Your Email" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Your Subject" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control as="textarea" rows={4} placeholder="Your Message" />
              </Form.Group>

              <Button variant="secondary" className="send-btn">
                SEND MESSAGE
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactForm;
