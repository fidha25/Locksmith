// import React from "react";
// import { Container, Row, Col, Button } from "react-bootstrap";
// import "./LockSmith.css";

// const LockSmith = () => {
//   return (
//     <section className="LockSmith-section">
//       <Container>
//         <Row className="align-items-center">
//           {/* Left Side - Image */}
//           <Col md={8} lg={6} className="image-content">
//             <img
//               src="images/lk2.jpg"
//               alt="locksmith"
//               className="img-fluid"
//             />
//           </Col>

//           {/* Right Side - Text Content */}
//           <Col md={8} lg={6} className="text-content">
//             <h5>Reliable Locksmith</h5>
//             <h1 className="review-heading">
//               Securing access to<br />your home and<br />businesses
//             </h1>
//             <p>
//               Natoque neque in montes mauris enim sollicitudin parturient nam
//               pharetra elit dui. Id ex augue sagittis lectus nisi tristique
//               malesuada duis sapien posuere. Sit sed fringilla nisl pede
//               venenatis.
//             </p>

//             {/* View More Button */}
//             <Row className="align-items-center mt-4">
//               <Col xs="auto">
//                 <Button className="view-more-btn" variant="dark">View More</Button>
//               </Col>
//             </Row>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default LockSmith;
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./LockSmith.css";

const LockSmith = () => {
  return (
    <section className="LockSmith-section">
      <Container>
        <Row className="align-items-center">
          {/* Left Side - Image (for large screens) */}
          <Col md={12} lg={6} className="image-content d-lg-block d-none">
            <img src="images/lk2.jpg" alt="locksmith" className="img-fluid" />
          </Col>

          {/* Right Side - Text Content */}
          <Col md={12} lg={6} className="lock-text-content">
            <h2 className="fw-bold">RELIABLE LOCKSMITH</h2>
            <h4 ><b>
            Securing Access to Your Home and Business
            </b> </h4>

            {/* Image between heading and paragraph in medium screens */}
            <div className="lock-image-content d-md-block d-lg-none">
              <img src="images/lk2.jpg" alt="locksmith" className="img-fluid" />
            </div>

            <p>
            Securing Access to Your Home and Business
Your safety is our priority. Whether you need a <b>locked-out-of-house locksmith in Perth, emergency lockout services in Melbourne</b>, or <b>lost house keys replacement in Sydney</b>, we deliver fast and reliable locksmith solutions.

            </p>

            {/* View More Button */}
            <Row className="align-items-center mt-4">
              <Col xs={12} className="text-md-center text-lg-start"> {/* Center on md, left on lg */}
                <Button className="view-more-btn" variant="dark">View More</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LockSmith;
