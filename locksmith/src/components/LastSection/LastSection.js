// import React from "react";
// import "./LastSection.css"; // Import CSS file

// const LastSection = () => {
//   return (
//     <div className="custom-container d-flex justify-content-center align-items-center">
//       <div className="content-box text-center p-5">
//         {/* <h5 className="mb-3">Safe & Secure House</h5>
//         <h1 className="mt-2 mb-4">Need a Locksmith? We Come to You!</h1> */}
//         <h2 className="mb-3 fw-bold text-light">SAFE & SECURE HOUSE</h2>
//         <h4 className="mt-2 mb-4 text-light">Need a Locksmith? We Come to You!</h4>
//         {/* <img
//           src="images/worker.png"
//           alt="Sample"
//           className="img-fluid rounded mt-3 sample-img mb-4"
//         /> */}
//         <p className="container mb-4 text-light">
//         Searching for the <b>best emergency locksmith in Australia </b>or dealing with <b>locked keys inside your house?</b> No matter your location,<b> Lock Quick</b> is here to provide<b> fast, affordable, and reliable locksmith services</b> across Australia.
//         </p>
//         <p className="text-light"><b>Get in touch today – your security is just a call away!</b></p>
//         <div className="mt-3">
//           <button className="btn lavender-btn me-2">Contact Us</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LastSection;
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import "./LastSection.css"; // Import CSS file

const LastSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a 1000ms animation duration
  }, []);

  return (
    <div className="custom-container d-flex justify-content-center align-items-center">
      <div className="content-box text-center p-5" data-aos="fade-up">
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
          <b>Get in touch today – your security is just a call away!</b>
        </p>
        <div className="mt-3" data-aos="flip-up">
          <button className="btn lavender-btn me-2">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default LastSection;
