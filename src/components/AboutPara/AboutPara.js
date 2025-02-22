// import React from "react";
// import { Container, Row, Col, Button } from "react-bootstrap";
// import "./AboutPara.css";

// const AboutPara = () => {
//   return (
//     <section className="SecureAccess-section">
//       <Container>
//         {/* Add justify-content-center to center the columns */}
//         <Row className="align-items-center justify-content-center gx-3">
          
//           {/* Right Side - Text Content */}
//           <Col md={8} lg={6} className="info-content">

//             <h5>About Us</h5>
//             <h1 className="highlight-heading">
//               Protecting homes and<br /> businesses with<br /> reliability
//             </h1>
//             <p>
//               Ensuring top-tier security with cutting-edge solutions. Our expert
//               locksmith services guarantee safety and peace of mind for your
//               family and business.
//             </p>

//             {/* View More Button */}
//             <Row className="align-items-center mt-4">
//               <Col xs="auto">
//                 <Button variant="dark" className="explore-btn">Explore More</Button>
//               </Col>
//             </Row>
//           </Col>

//           {/* Left Side - Image */}
//           <Col md={6} className="visual-content">
//             <img
//               src="/images/worker-client.jpg"
//               alt="locksmith"
//               className="img-fluid"
//             />
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default AboutPara;
// // import React from "react";
// // import { Container, Row, Col, Button } from "react-bootstrap";
// // import "./AboutPara.css";

// // const AboutPara = () => {
// //   return (
// //     <section className="SecureAccess-section">
// //       <Container>
// //         <Row className="align-items-center justify-content-center gx-3">
// //           {/* Right Side - Text Content */}
// //           <Col md={8} lg={6} className="info-content text-md-center">
// //             <h5>About Us</h5>
// //             <h1 className="highlight-heading">
// //               Protecting homes and<br /> businesses with<br /> reliability
// //             </h1>

// //             {/* Image placed between the heading and paragraph */}
// //             <div className="visual-content">
// //               <img
// //                 src="/images/worker-client.jpg"
// //                 alt="locksmith"
// //                 className="img-fluid custom-img"
// //               />
// //             </div>

// //             <p>
// //               Ensuring top-tier security with cutting-edge solutions. Our expert
// //               locksmith services guarantee safety and peace of mind for your
// //               family and business.
// //             </p>

// //             {/* View More Button */}
// //             <Row className="justify-content-md-center mt-4">
// //               <Col xs="auto">
// //                 <Button variant="dark" className="explore-btn">Explore More</Button>
// //               </Col>
// //             </Row>
// //           </Col>
// //         </Row>
// //       </Container>
// //     </section>
// //   );
// // };

// // export default AboutPara;
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./AboutPara.css";

const AboutPara = () => {
  return (
    <section className="SecureAccess-section">
      <Container>
        {/* Adjust alignment for medium screens */}
        <Row className="align-items-center justify-content-center text-md-center text-lg-start gx-3">
          {/* Right Side - Text Content */}
          <Col md={8} lg={6} className="info-content">
            <h5>About Us</h5>
            <h1 className="highlight-heading">
              Protecting homes and<br /> businesses with<br /> reliability
            </h1>
            {/* Image appears between h1 and p on medium screens */}
            <div className="d-md-block d-lg-none text-center">
              <img
                src="/images/worker-client.jpg"
                alt="locksmith"
                className="img-fluid"
              />
            </div>
            <p>
              Ensuring top-tier security with cutting-edge solutions. Our expert
              locksmith services guarantee safety and peace of mind for your
              family and business.
            </p>
            {/* View More Button (Centered on Medium Screens) */}
            <Row className="align-items-center justify-content-center mt-4">
              <Col xs="auto">
                <Button variant="dark" className="explore-btn">Explore More</Button>
              </Col>
            </Row>
          </Col>
          {/* Left Side - Image (Only for large screens) */}
          <Col md={6} className="visual-content d-none d-lg-block">
            <img
              src="/images/worker-client.jpg"
              alt="locksmith"
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutPara;

