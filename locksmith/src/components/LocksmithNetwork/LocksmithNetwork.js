// import React from 'react';
// import './LocksmithNetwork.css'; // Import the CSS file

// const LocksmithNetwork = () => {
//   return (
//     <div className="locksmith-container container">
//       <div className="row justify-content-center">
//         {/* Left Side */}
//         <div className="left-content col-md-6 text-center">
//           <h2 className='fw-bold text-black'>JOIN OUR PROFESSIONAL LOCKSMITH NETWORK IN AUSTRALIA</h2>
//           <p className="description">
//             We are expanding across Australia, with locksmith job openings in:
//           </p>
//           <ul className="points-list">
//             <li><b>Sydney, NSW</b> – High demand for commercial locksmiths.</li>
//             <li><b>Melbourne, VIC</b> – Automotive key replacement and emergency services.</li>
//             <li><b>Brisbane, QLD</b> – Residential security upgrades and smart lock installations.</li>
//             <li><b>Perth, WA</b> – Mobile locksmiths needed for remote areas.</li>
//             <li><b>Adelaide, SA</b> – Master key systems and access control specialists.</li>
//           </ul>
//         </div>

//         {/* Right Side */}
//         <div className="right-content col-md-6 text-center">
//           <img
//             src="/images/Untitled design (2).png" // Replace with your image URL
//             alt="Locksmith Network"
//             className="network-image"
//           />
//         </div>
//       </div>

//       {/* Centered Section */}
//       <div className="row justify-content-center">
//         <div className="centered-content col-md-8 text-center">
//           <p className="image-description">
//             By joining us, you become part of a trusted <b>Australia-wide locksmith network</b>, helping people secure their homes, offices, and vehicles.
//           </p>
//           <h4 className="text-black fw-bold">Ready to Start? Apply Today – It’s 100% Free!</h4>
//           <p className="sub-description">
//             Click the <b>"Sign Up as a Locksmith"</b> button to begin your journey with us. Our team will guide you through the process and ensure you <b>start receiving locksmith jobs immediately – at no cost!</b>
//           </p>
//           <p className="sub-description">
//           <b>Join us today and unlock new career opportunities!</b>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LocksmithNetwork;

import React from 'react';
import './LocksmithNetwork.css';

const LocksmithNetwork = () => {
  return (
    <div className="locksmith-container container py-5">
      <div className="row align-items-center">
        {/* Left Side */}
        <div className="left-content col-lg-6 text-lg-start text-center mb-4">
          <h2 className='fw-bold text-dark mb-3'>
            JOIN OUR PROFESSIONAL LOCKSMITH NETWORK IN AUSTRALIA
          </h2>
          <p className="description">
            We are expanding across Australia, with locksmith job openings in:
          </p>
          <ul className="points-list">
            <li><b>Sydney, NSW</b> – High demand for commercial locksmiths.</li>
            <li><b>Melbourne, VIC</b> – Automotive key replacement and emergency services.</li>
            <li><b>Brisbane, QLD</b> – Residential security upgrades and smart lock installations.</li>
            <li><b>Perth, WA</b> – Mobile locksmiths needed for remote areas.</li>
            <li><b>Adelaide, SA</b> – Master key systems and access control specialists.</li>
          </ul>
        </div>
        
        {/* Right Side */}
        <div className="right-content col-lg-6 text-center">
          <img
            src="/images/locksmith-network.png"
            alt="Locksmith Network"
            className="network-image img-fluid rounded shadow-lg"
          />
        </div>
      </div>
      
      {/* Centered Section */}
      <div className="text-center mt-5">
        <p className="image-description fw-medium text-black">
          Become part of a trusted <b>Australia-wide locksmith network</b>, helping people secure their homes, offices, and vehicles.
        </p>
        <h4 className="text-black fw-bold">Ready to Start? Apply Today – It’s 100% Free!</h4>
        <p className="sub-description text-black">
          Click the <b>"Sign Up as a Locksmith"</b> button to begin. Our team will guide you through the process and ensure you <b>start receiving locksmith jobs immediately – at no cost!</b>
        </p>
        <p className="sub-description text-black fw-bold">
          Join us today and unlock new career opportunities!
        </p>
      </div>
    </div>
  );
};

export default LocksmithNetwork;
