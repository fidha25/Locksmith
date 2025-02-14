import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserShield, faIdCard, faClock } from '@fortawesome/free-solid-svg-icons'; // Import icons
import './CardSection.css'; // Import the CSS file for styling

const CardSection = () => {
  return (
    <Container className="card-section">
      <div className="text-center mb-4">
        <h5>What We Do</h5>
        <h1 className="mt-2">Specialized locksmith services</h1>
      </div>
      <Row className="justify-content-center">
        {/* Card 1 */}
        <Col xs={12} sm={6} md={4} className="mb-4 d-flex justify-content-center">
          <Card className="card-item">
            <div className="card-icon">
              <FontAwesomeIcon icon={faUserShield} size="3x" /> {/* Icon for Reliable Locksmith */}
            </div>
            <Card.Body>
              <Card.Title>Reliable Locksmith</Card.Title>
              <Card.Text>
                Ultrices placerat amet mus ex adipiscing metus
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Card 2 */}
        <Col xs={12} sm={6} md={4} className="mb-4 d-flex justify-content-center">
          <Card className="card-item">
            <div className="card-icon">
              <FontAwesomeIcon icon={faIdCard} size="3x" /> {/* Icon for Licensed and Insured */}
            </div>
            <Card.Body>
              <Card.Title>Licensed and Insured</Card.Title>
              <Card.Text>
                Ultrices placerat amet mus ex adipiscing metus
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Card 3 */}
        <Col xs={12} sm={6} md={4} className="mb-4 d-flex justify-content-center">
          <Card className="card-item">
            <div className="card-icon">
              <FontAwesomeIcon icon={faClock} size="3x" /> {/* Icon for 24/7 Availability */}
            </div>
            <Card.Body>
              <Card.Title>24/7 Availability</Card.Title>
              <Card.Text>
                Ultrices placerat amet mus ex adipiscing metus
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CardSection;