import React from "react";
import "./ServiceStyle.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

const CommercialService = () => {
   useEffect(() => {
      window.scrollTo(0, 0); // Scroll to top when the component loads
    }, []);
  return (
    <div className="commercial-service container">
      {/* Section 1: Introduction */}
      <section className="intro-section text-center">
        <h1 className="fw-bold">COMMERCIAL LOCKSMITH SERVICES – BUSINESS SECURITY LOCK SOLUTIONS</h1>
        <h4>The Importance of Commercial Security</h4>
        <p className="lead">
        A business needs strong security locks to protect confidential data, expensive equipment, and employees. We provide business security lock solutions customized for offices, retail stores, warehouses, and industrial buildings.
        </p>

        {/* Image Placeholder - Adjusted Width & Centered */}
        <div className="image-container">
  <div className="image-placeholder">
    <img src="/images/commercial.jpg" alt="Automotive" />
  </div>
</div>
        {/* Button Below Image - Ensured Visibility */}
        <div className="text-center">
<Link to="/commercial">
          <button className="btn btn-primary view-locksmiths-btn">View Services</button></Link>        </div>
      </section>

      {/* Section 2: Services Offered */}
      <section className="services-section">
        <h2 className="text-center fw-bold">OUR COMMERCIAL SERVICES IN AUSTRALIA</h2>
        <div className="row">
          {/* High-Security Lock Installation */}
          <div className="col-md-6">
            <div className="service-box">
              <h4>1. High-Security Lock Installation</h4>
              <ul>
                <li> Install heavy-duty locks, mortise locks, and restricted key systems</li>
                <li> Compliant with Australian Building Security Standards</li>
              </ul>
            </div>
          </div>

          {/* Master Key Systems & Restricted Key Access */}
          <div className="col-md-6">
            <div className="service-box">
              <h4>2. Master Key Systems & Restricted Key Access</h4>
              <ul>
                <li> Set up a master key system for office security</li>
                <li> Issue restricted keys that prevent unauthorized duplication</li>
              </ul>
            </div>
          </div>

          {/* Access Control & Digital Locks */}
          <div className="col-md-6">
            <div className="service-box">
              <h4>3. Access Control & Digital Locks</h4>
              <ul>
                <li> Install keypad, fingerprint, or card-based access control systems</li>
                <li> Manage entry remotely via smartphone apps</li>
              </ul>
            </div>
          </div>

          {/* Lock Maintenance & Emergency Repairs */}
          <div className="col-md-6">
            <div className="service-box">
              <h4>4. Lock Maintenance & Emergency Repairs</h4>
              <ul>
                <li> 24/7 emergency locksmith services for office lockouts, break-in repairs</li>
                <li> Routine lock inspections & maintenance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Why Choose Us */}
      <section className="why-choose-section text-center">
        <h2 className="fw-bold">WHY CHOOSE US?</h2>
        <ul className="list-unstyled">
          <li>✔ Servicing corporate offices, warehouses, and government buildings</li>
          <li>✔ Compliant with Australian security regulations</li>
          <li>✔ Affordable commercial lock installations with warranty</li>
        </ul>
      </section>
    </div>
  );
};

export default CommercialService;
