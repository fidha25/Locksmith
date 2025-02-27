import React from "react";
import "./ServiceStyle.css";
import { useEffect } from "react";

import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const ResidentialService = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when the component loads
  }, []);
  return (
    <div className="residential-service container">
      {/* Section 1: Introduction */}
      <section className="intro-section text-center">
        {/* <h1 className="fw-bold">Residential Locksmith Services – Home Lock Change Service</h1> */}
        <h1 className="fw-bold">RESIDENTIAL LOCKSMITH SERVICES – HOME LOCK CHANGE SERVICE</h1>
        <h4>Why Secure Your Home?</h4>
        <p className="lead">
        A strong and reliable lock is the first line of defense for your home. Whether you've <b>moved to a new house, lost your keys, or need better security</b>, a professional <b>home lock change service</b> ensures safety for your family and belongings.
        </p>

        {/* Image Placeholder - Centered and Adjusted Width */}
        <div className="image-container">
  <div className="image-placeholder">
    <img src="/images/residential.jpg" alt="Automotive" />
  </div>
</div>

        {/* Button Below Image */}
        <div className="text-center"><Link to="/residential">
          <button className="btn btn-primary view-locksmiths-btn">View Services</button></Link>
        </div>
      </section>

      {/* Section 2: Services Offered */}
      <section className="services-section">
        <h2 className="text-center fw-bold">OUR RESIDENTIAL LOCKSMITH SERVICES IN AUSTRALIA</h2>
        <div className="row">
          {/* Home Lock Installation & Upgrades */}
          <div className="col-md-6">
            <div className="service-box">
              <h4>1. Home Lock Installation & Upgrades</h4>
              <ul>
                <li> Install <b>high-security locks</b> (deadbolts, digital locks, smart locks)</li>
                <li> Replace outdated or damaged locks with durable <b>Australian-standard locks</b></li>
                <li> Choose from top brands like <b>Gainsborough, Carbine, and Lockwood</b></li>
              </ul>
            </div>
          </div>

          {/* Lock Repairs & Maintenance */}
          <div className="col-md-6">
            <div className="service-box">
              <h4>2. Lock Repairs & Maintenance</h4>
              <ul>
                <li> Fix <b>jammed locks, broken keys stuck inside, and misaligned door locks</b></li>
                <li> Lubricate and adjust locks for <b>smooth operation</b></li>
              </ul>
            </div>
          </div>

          {/* Re-keying & Master Key Systems */}
          <div className="col-md-6">
            <div className="service-box">
              <h4>3. Re-keying & Master Key Systems</h4>
              <ul>
                <li> Change the internal lock mechanism to work with a new key</li>
                <li> Set up master key systems for rental properties and multi-door access</li>
              </ul>
            </div>
          </div>

          {/* Emergency Home Lockouts */}
          <div className="col-md-6">
            <div className="service-box">
              <h4>4. Emergency Home Lockouts</h4>
              <ul>
                <li> Locked out of your house? Get fast, damage-free entry assistance</li>
                <li> Available 24/7 in Sydney, Melbourne, Brisbane, and other cities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Why Choose Us */}
      <section className="why-choose-section text-center">
        <h2 className="fw-bold">WHY CHOOSE US?</h2>
        <ul className="list-unstyled">
          <li>✔ Certified and insured locksmiths across Sydney, Melbourne, Perth, and Brisbane</li>
          <li>✔ Same-day lock change service available</li>
          <li>✔ Affordable pricing with upfront quotes</li>
        </ul>
      </section>
    </div>
  );
};

export default ResidentialService;
