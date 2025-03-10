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
      <section className="service-intro-section text-center">
        <h1 className="fw-bold">COMMERCIAL LOCKSMITH SERVICES – BUSINESS SECURITY LOCK SOLUTIONS</h1>
        <h4>The Importance of Commercial Security</h4>
        <p className="lead text-black">
        A business needs <b>strong security locks</b> to protect <b>confidential data, expensive equipment, and employees</b>. We provide <b>business security lock solutions</b> customized for offices, retail stores, warehouses, and industrial buildings.
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
                <li> Install <b>heavy-duty locks, mortise locks, and restricted key systems</b></li>
                <li> <b>Compliant with Australian Building Security Standards</b></li>
              </ul>
            </div>
          </div>

          {/* Master Key Systems & Restricted Key Access */}
          <div className="col-md-6">
            <div className="service-box">
              <h4>2. Master Key Systems & Restricted Key Access</h4>
              <ul>
                <li> Set up a <b>master key system for office security</b></li>
                <li> Issue <b>restricted keys that prevent unauthorized duplication</b></li>
              </ul>
            </div>
          </div>

          {/* Access Control & Digital Locks */}
          <div className="col-md-6">
            <div className="service-box">
              <h4>3. Access Control & Digital Locks</h4>
              <ul>
                <li> Install <b>keypad, fingerprint, or card-based access control systems</b></li>
                <li> <b>Manage entry remotely</b> via smartphone apps</li>
              </ul>
            </div>
          </div>

          {/* Lock Maintenance & Emergency Repairs */}
          <div className="col-md-6">
            <div className="service-box">
              <h4>4. Lock Maintenance & Emergency Repairs</h4>
              <ul>
                <li> <b>24/7 emergency locksmith services for office lockouts, break-in repairs</b></li>
                <li> Routine <b>lock inspections & maintenance</b></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Why Choose Us */}
      <section className="why-choose-section text-center">
        <h2 className="fw-bold">WHY CHOOSE US?</h2>
        <ul className="list-unstyled">
          <li>✔ Servicing <b>corporate offices, warehouses, and government buildings</b></li>
          <li>✔ <b>Locksmiths are Compliant with Australian security regulations</b></li>
          <li>✔ <b>Affordable commercial lock installations with warranty</b></li>
        </ul>
      </section>
    </div>
  );
};

export default CommercialService;
