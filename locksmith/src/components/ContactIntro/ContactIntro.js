import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap

const ContactIntro = () => {
  return (
    <div
      className="about-section d-flex align-items-center"
      style={{
        minHeight: "525px",
        display: "flex",
        justifyContent: "center",
        padding: "50px 0",
        background: "url('/images/contactus.jpg') no-repeat center center/cover",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center fade-in">
            <h1 className="text-light fw-bold">Contact Us</h1>
            {/* <p className="about-quote">
              "Innovation distinguishes between a leader and a follower."
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactIntro;
