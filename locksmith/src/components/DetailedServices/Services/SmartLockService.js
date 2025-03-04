import React from "react";
import "./ServiceStyle.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";


const SmartLockService = () => {
   useEffect(() => {
      window.scrollTo(0, 0); // Scroll to top when the component loads
    }, []);
  return (
    <div className="smart-lock-service container">
      {/* Section 1: Introduction */}
      <section className="service-intro-section text-center">
        <h1 className="fw-bold">SMART LOCK SOLUTIONS – BEST SMART LOCK INSTALLATION</h1>
        <h4>Upgrade to Smart Locks</h4>
        <p className="lead">
          Smart locks offer keyless convenience, remote access, and advanced security. 
          Our smart lock installation services make your home or business safer and more convenient.
        </p>

        {/* Image Placeholder - Centered and Adjusted Width */}
        <div className="image-container">
  <div className="image-placeholder">
    <img src="/images/smart-lock.jpg" alt="Automotive" />
  </div>
</div>

        {/* Button Below Image */}
        <div className="text-center">
<Link to="/smart-lock">
          <button className="btn btn-primary view-locksmiths-btn">View Services</button></Link>        </div>
      </section>

      {/* Section 2: Services Offered */}
      <section className="services-section">
        <h2 className="text-center fw-bold">SMART LOCK SERVICES IN AUSTRALIA</h2>
        <div className="row">
          {/* Digital & Keyless Lock Installation */}
          <div className="col-md-6">
            <div className="service-box">
              <h4>1. Digital & Keyless Lock Installation</h4>
              <ul>
                <li> Install fingerprint, PIN code, or Bluetooth locks</li>
              </ul>
            </div>
          </div>

          {/* Smart Lock Troubleshooting & Repairs */}
          <div className="col-md-6">
            <div className="service-box">
              <h4>2. Smart Lock Troubleshooting & Repairs</h4>
              <ul>
                <li> Fix battery issues, connectivity problems, and lock malfunctions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Why Choose Us */}
      <section className="why-choose-section text-center">
        <h2 className="fw-bold">WHY CHOOSE US?</h2>
        <ul className="list-unstyled">
          <li>✔ Top brands: Yale, Samsung, Schlage</li>
          <li>✔ Certified locksmiths for smart lock installation</li>
        </ul>
      </section>
    </div>
  );
};

export default SmartLockService;
