// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import "./OurTeam.css";

// const TeamSection = () => {
//   return (
//     <section className="team-section">
//       <Container>
//         <div className="text-center mb-4">
//           {/* <h6 className="section-subtitle">OUR TEAM</h6>
//           <h2 className="section-title">Meet With Professional Locksmith</h2> */}
//           <h6>OUR TEAM</h6>
//           <h2 >Meet With Professional Locksmith</h2>
//           <p className="section-text">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua.
//           </p>
//         </div>
//         <Row className="justify-content-center">
//           <Col md={4} sm={12} className="text-center">
//             <img src="images/lk1.jpg" alt="Locksmith 1" className="team-image" />
//           </Col>
//           <Col md={4} sm={12} className="text-center">
//             <img src="images/lk2.jpg" alt="Locksmith 2" className="team-image" />
//           </Col>
//           <Col md={4} sm={12} className="text-center">
//             <img src="images/lk3.jpg" alt="Locksmith 3" className="team-image" />
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default TeamSection;
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaStar } from "react-icons/fa"; // Import star icon from Font Awesome
import "./OurTeam.css";

const TeamSection = () => {
  return (
    <section className="team-section">
      <Container>
        <div className="text-center mb-4">
          {/* <h6 className="section-subtitle">OUR TEAM</h6> */}
          {/* <h2 className="section-title">Meet Our Expert Locksmith Team</h2> */}
          {/* <h2 className="fw-bold">Meet Our Expert Locksmith Team</h2> */}
          <h2 className="fw-bold">MEET OUR EXPERT LOCKSMITH TEAM</h2>

          {/* <p className="section-text"> */}
          <p>

          At <b>LockQuick</b>, we take pride in our <b>highly trained and experienced locksmith professionals</b>, dedicated to providing exceptional service in your city.
          </p>
        </div>
        <Row className="justify-content-center">
          {/* Locksmith 1 */}
          <Col md={4} sm={12} className="text-center mb-4">
            <img src="images/lk1.jpg" alt="Locksmith 1" className="team-image" />
            <h4 className="mt-3 fw-bold">John Doe</h4>
            <p className="location"> Residential & Commercial Locksmith in <b>Sydney & Melbourne</b></p>
            <div className="rating">
              {[...Array(4)].map((_, i) => (
                <FaStar key={i} className="star filled" />
              ))}
              {[...Array(1)].map((_, i) => (
                <FaStar key={i} className="star" />
              ))}
            </div>
          </Col>

          {/* Locksmith 2 */}
          <Col md={4} sm={12} className="text-center mb-4">
            <img src="images/lk2.jpg" alt="Locksmith 2" className="team-image" />
            <h4 className="mt-3 fw-bold">Jane Smith</h4>
            <p className="location">Automotive Locksmith Specialist in <b>Brisbane & Canberra</b></p>
            <div className="rating">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="star filled" />
              ))}
            </div>
          </Col>

          {/* Locksmith 3 */}
          <Col md={4} sm={12} className="text-center mb-4">
            <img src="images/lk3.jpg" alt="Locksmith 3" className="team-image" />
            <h4 className="mt-3 fw-bold">Mike Johnson</h4>
            <p className="location">Smart Lock & Security System Technician in <b>Adelaide & Perth</b></p>
            <div className="rating">
              {[...Array(3)].map((_, i) => (
                <FaStar key={i} className="star filled" />
              ))}
              {[...Array(2)].map((_, i) => (
                <FaStar key={i} className="star" />
              ))}
            </div>
          </Col>
        </Row>
        <p>Each team member is trained in the latest security advancements to ensure <b>you receive the highest quality service, no matter where you are in Australia</b>.</p>
      </Container>
    </section>
  );
};

export default TeamSection;