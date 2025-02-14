import React from "react";
import { FaCheckCircle, FaPhoneAlt } from "react-icons/fa";
import "./SecurityInfoSection.css"; // Import the CSS file

const SecurityInfoSection = () => {
  return (
    <section className="security-section">
      <div className="content-wrapper">
        {/* Top Left: Headings */}
        <div className="heading-container">
          <h5 className="subheading">Who We Are</h5>
          <h2 className="main-heading">Driven to Protect What Matters Most.</h2>
        </div>

        <div className="content-container">
          {/* Left Side: Image */}
          <div className="image-container">
            <div className="gradient-overlay"></div>
            <img
              src="images\worker-client.jpg"
              alt="Worker and Client"
              className="main-image"
            />
          </div>

          {/* Right Side: Text Content */}
          <div className="text-content">
            <p className="description">
              Mus odio elementum rhoncus magnis nostra vestibulum phasellus
              lobortis porta placerat semper tincidunt ut fames nisl sollicitudin
              bibendum nec si dictum venenatis cursus.
            </p>

            {/* Features List */}
            <ul className="features-list">
              {[
                "Expert Locksmiths Anytime: Trusted professionals available 24/7.",
                "Fast & Reliable Service: Quick response with quality assurance.",
                "Affordable & Customer-Focused: Competitive prices with client satisfaction priority.",
                "Comprehensive Security Solutions: From basic repairs to advanced installations.",
              ].map((text, index) => (
                <li key={index} className="feature-item">
                  <FaCheckCircle className="icon" />
                  {text}
                </li>
              ))}
            </ul>

            {/* Contact & Button */}
            <div className="contact-container">
              <button className="learn-more-btn">Learn More</button>
              <div className="phone-info">
                <FaPhoneAlt className="phone-icon" />
                <span className="phone-number">+6221.2002.2012</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityInfoSection;
