import React from "react";
import "./ServiceStyle.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";


const AutomotiveService = () => {
   useEffect(() => {
      window.scrollTo(0, 0); // Scroll to top when the component loads
    }, []);
  return (
    <div className="automotive-service container">
      {/* Section 1: Introduction */}
      <section className="service-intro-section text-center">
        <h1 className="fw-bold">AUTOMOTIVE LOCKSMITH SERVICES – CAR KEY REPLACEMENT NEAR ME</h1>
        <p className="lead">
          Losing your car keys or dealing with a faulty ignition can be frustrating.
          Our automotive locksmith services provide quick car key replacement, key programming, 
          and emergency lockout solutions across Australia.
        </p>

        {/* Image Placeholder - Centered and Adjusted Width */}
        <div className="image-container">
  <div className="image-placeholder">
    <img src="/images/automotive.jpg" alt="Automotive" />
  </div>
</div>



        {/* Button Below Image */}
        <div className="text-center">
<Link to="/automotive">
          <button className="btn btn-primary view-locksmiths-btn">View Services</button></Link>        </div>
      </section>

      {/* Section 2: Services Offered */}
      <section className="services-section">
        <h2 className="text-center fw-bold">OUR CAR LOCKSMITH SERVICES</h2>
        <div className="row">
          {/* Car Lockout Assistance */}
          <div className="col-md-6">
            <div className="service-box">
              <h4>1. Car Lockout Assistance</h4>
              <ul>
                <li> Unlock vehicles without damage</li>
                <li> Available for all car brands: Toyota, Ford, Hyundai, BMW, Mercedes</li>
              </ul>
            </div>
          </div>

          {/* Car Key Cutting & Replacement */}
          <div className="col-md-6">
            <div className="service-box">
              <h4>2. Car Key Cutting & Replacement</h4>
              <ul>
                <li> Cut new car keys for lost, broken, or stolen keys</li>
                <li> On-site key cutting for instant replacements</li>
              </ul>
            </div>
          </div>

          {/* Transponder Key Programming */}
          <div className="col-md-6">
            <div className="service-box">
              <h4>3. Transponder Key Programming</h4>
              <ul>
                <li> Program chip-enabled car keys</li>
                <li> Fix issues with immobilizers & remote entry systems</li>
              </ul>
            </div>
          </div>

          {/* Ignition Repair & Replacement */}
          <div className="col-md-6">
            <div className="service-box">
              <h4>4. Ignition Repair & Replacement</h4>
              <ul>
                <li> Repair jammed or broken ignitions</li>
                <li> Replace ignition locks for push-to-start and traditional key systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Why Choose Us */}
      <section className="why-choose-section text-center">
        <h2 className="fw-bold">WHY CHOOSE US?</h2>
        <ul className="list-unstyled">
          <li>✔ Mobile auto locksmith service – we come to you!</li>
          <li>✔ Specialized in all car makes & models</li>
          <li>✔ Competitive pricing & same-day key replacements</li>
        </ul>
      </section>
    </div>
  );
};

export default AutomotiveService;
