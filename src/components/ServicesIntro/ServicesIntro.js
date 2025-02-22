import React from "react";
import "./ServicesIntro.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap

const ServicesIntro=() => {
  return (
    <div className="about-section d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center fade-in">
            <h1 className="about-heading">Our Services</h1>
            <p className="about-quote">
              "Innovation distinguishes between a leader and a follower."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesIntro;
