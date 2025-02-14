import React from "react";
import "./LastSection.css"; // Import CSS file

const LastSection = () => {
  return (
    <div className="custom-container d-flex justify-content-center align-items-center">
      <div className="content-box text-center p-5">
        <h5 className="mb-3">Safe & Secure House</h5>
        <h1 className="mt-2 mb-4">Need a Locksmith? We Come to You!</h1>
        <img
          src="images/worker.png"
          alt="Sample"
          className="img-fluid rounded mt-3 sample-img mb-4"
        />
        <p className="container mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <div className="mt-3">
          <button className="btn lavender-btn me-2">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default LastSection;
