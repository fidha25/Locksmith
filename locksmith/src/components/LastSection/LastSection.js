import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./LastSection.css";

const LastSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="custom-container d-flex justify-content-center align-items-center"   style={{
      backgroundImage: "url('/images/key-bg (1).webp')",
    }}>
      <div className="content-box text-center p-4 p-md-5" data-aos="fade-up">
        <h2 className="mb-3 fw-bold text-light" data-aos="fade-down">
          SAFE & SECURE HOUSE
        </h2>
        <h4 className="mt-2 mb-4 text-light" data-aos="fade-right">
          Need a Locksmith? We Come to You!
        </h4>
        <p className="container mb-4 text-light" data-aos="zoom-in">
          Searching for the <b>best emergency locksmith in Australia</b> or dealing with <b>locked keys inside your house?</b> No matter your location, <b>Lock Quick</b> is here to provide <b>fast, affordable, and reliable locksmith services</b> across Australia.
        </p>
        <p className="text-light" data-aos="fade-left">
          <b>Get in touch today – your security is just a click away!</b>
        </p>
        <div className="mt-3" data-aos="flip-up">
          <button className="btn lavender-btn me-2">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default LastSection;
