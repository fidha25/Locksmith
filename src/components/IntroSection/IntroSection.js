
// // import React from "react";
// // import { Container, Row, Col, Button } from "react-bootstrap";
// // import "./IntroSection.css"; // Import the CSS file

// // const IntroSection = () => {
// //   return (
// //     <section className="intro-section">
// //       <Container>
// //         <Row className="align-items-center">
// //           {/* Left Side - Text Content */}
// //           <Col md={6} className="text-content">
// //             <Button variant="light" className="promo-btn">
// //               24/7 EMERGENCY CALL
// //             </Button>{" "}
// //             {/* Light lavender transparent button */}
// //             <h1 className="intro-heading">
// //               We Provide Best
// //               <br /> <span className="highlight-text">Locksmith</span> Services{" "}
// //               <br />
// //               That You Can Trust
// //             </h1>
// //             <p>
// //               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
// //               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
// //               enim ad minim veniam quis nostrud
// //             </p>
// //             <Button  className="me-2 appointment-button">
// //               APPOINTMENT
// //             </Button>
// //           </Col>

// //           {/* Right Side - Image */}
// //           <Col md={6} className="image-content">
// //             <img
// //               src="images/—Pngtree—key_744696.png"
// //               alt="Intro"
// //               className="img-fluid"
// //             />
// //           </Col>
// //         </Row>
// //       </Container>
// //     </section>
// //   );
// // };

// // export default IntroSection;
// import React from "react";
// import { Container, Row, Col, Button } from "react-bootstrap";
// import "./IntroSection.css"; // Import the CSS file

// const IntroSection = () => {
//   return (
//     <section className="intro-section">
//       <Container className="text-center"> {/* Center align content */}
//         <Row className="justify-content-center align-items-center">
//           {/* Left Side - Text Content */}
//           <Col md={8} lg={6} className="text-content">
//             <Button variant="light" className="promo-btn">
//               24/7 EMERGENCY CALL
//             </Button>
//             <h1 className="intro-heading">
//               We Provide Best<br />
//               <span className="highlight-text">Locksmith</span> Services<br />
//               That You Can Trust
//             </h1>
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//               enim ad minim veniam quis nostrud
//             </p>
//             <Button className="appointment-button">APPOINTMENT</Button>
//           </Col>

//           {/* Right Side - Image */}
//           <Col md={8} lg={6} className="image-content">
//             <img
//               src="images/—Pngtree—key_744696.png"
//               alt="Intro"
//               className="img-fluid"
//             />
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default IntroSection;
import React from "react";
import { Container, Row, Col, Button, Dropdown, InputGroup } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import "./IntroSection.css"; // Import the CSS file

const IntroSection = () => {
  return (
    <section className="intro-section">
      <Container className="text-center"> {/* Center align content */}
        <Row className="justify-content-center align-items-center">
          {/* Left Side - Text Content */}
          <Col md={8} lg={6} className="text-content">
            <Button variant="light" className="promo-btn">
              24/7 EMERGENCY CALL
            </Button>
            <h1 className="intro-heading">
              We Provide Best<br />
              <span className="highlight-text">Locksmith</span> Services<br />
              That You Can Trust
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam quis nostrud
            </p>
            <InputGroup className="service-dropdown">
              <Dropdown>
                <Dropdown.Toggle style={{ backgroundColor: "white", color: "black" }} id="dropdown-basic">
                  Select Service
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#service1">Service 1</Dropdown.Item>
                  <Dropdown.Item href="#service2">Service 2</Dropdown.Item>
                  <Dropdown.Item href="#service3">Service 3</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Button variant="secondary" className="search-button">
                <Search />
              </Button>
            </InputGroup>
          </Col>

          {/* Right Side - Image */}
          <Col md={8} lg={6} className="image-content">
            <img
              src="images/—Pngtree—key_744696.png"
              alt="Intro"
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default IntroSection;
