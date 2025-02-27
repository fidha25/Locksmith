import React from "react";
import "./ServiceStyle.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";


import "bootstrap/dist/css/bootstrap.min.css";

const EmergencyService = () => {
   useEffect(() => {
      window.scrollTo(0, 0); // Scroll to top when the component loads
    }, []);
  return (
    <div className="emergency-service container">
      {/* Section 1: Introduction */}
      <section className="intro-section text-center">
        <h1 className="fw-bold">EMERGENCY LOCKSMITH SERVICES – 24 HOUR EMERGENCY LOCKSMITH </h1>
        <h4>Fast & Reliable Emergency Locksmith Services</h4>
        <p className="lead">
          Locked out at midnight? Lost your keys while traveling? 
          Our 24-hour emergency locksmith services ensure quick, reliable access 
          to your home, business, or vehicle.
        </p>

        {/* Image Placeholder - Centered and Adjusted Width */}
        <div className="image-container">
  <div className="image-placeholder">
    <img src="/images/Emergency.jpg" alt="Automotive" />
  </div>
</div>
        {/* Button Below Image */}
        <div className="text-center">
<Link to="/emergency">
          <button className="btn btn-primary view-locksmiths-btn">View Services</button></Link>        </div>
      </section>

      {/* Section 2: Services Offered */}
      <section className="services-section">
        <h2 className="text-center fw-bold">OUR EMERGENCY LOCKSMITH SERVICES</h2>
        <div className="row">
          {/* Home & Car Lockouts */}
          <div className="col-md-6">
            <div className="service-box">
              <h4>1. Home & Car Lockouts</h4>
              <ul>
                <li> Gain access to homes, apartments, offices, and vehicles</li>
              </ul>
            </div>
          </div>

          {/* Emergency Lock Repairs */}
          <div className="col-md-6">
            <div className="service-box">
              <h4>2. Emergency Lock Repairs</h4>
              <ul>
                <li> Fix broken locks after break-ins</li>
                <li> Secure damaged doors & windows</li>
              </ul>
            </div>
          </div>

          {/* Urgent Key Cutting & Replacements */}
          <div className="col-md-6">
            <div className="service-box">
              <h4>3. Urgent Key Cutting & Replacements</h4>
              <ul>
                <li> Get spare keys on-site</li>
                <li> Replace stolen keys immediately</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Why Choose Us */}
      <section className="why-choose-section text-center">
        <h2 className="fw-bold">WHY CHOOSE US?</h2>
        <ul className="list-unstyled">
          <li>✔ Fast response – 30 minutes in major cities</li>
          <li>✔ Affordable emergency locksmith service</li>
        </ul>
      </section>
    </div>
  );
};

export default EmergencyService;
