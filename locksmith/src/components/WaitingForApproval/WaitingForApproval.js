

// import React, { useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";

// const WaitingForApproval = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const token = location.state?.token || localStorage.getItem("accessToken");

//   useEffect(() => {
//     if (!token) {
//       navigate("/login"); // Redirect if no token
//     }
//   }, [token, navigate]);

//   return (
//     <div className="d-flex justify-content-center align-items-center vh-100">
//       <div className="card text-center p-4 shadow-lg">
//         <h2 className="mb-3">Waiting for Approval</h2>
//         <p>Your profile update has been submitted successfully. Please wait for admin approval.</p>
//       </div>
//     </div>
//   );
// };

// export default WaitingForApproval;
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const WaitingForApproval = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const token = location.state?.token || localStorage.getItem("accessToken");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!token) {
      console.log("No token found, redirecting to login...");
      navigate("/login");
      return;
    }

    const checkApprovalStatus = async () => {
      try {
        console.log("Fetching approval status...");
        const response = await axios.get("http://192.168.1.7:8000/api/Approvalverification/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log("API Response:", response.data);

        // Ensure response is an array and get the first element
        const locksmithData = Array.isArray(response.data) ? response.data[0] : null;

        if (locksmithData && locksmithData.is_approved) {
          console.log("User is approved, navigating to /lock-dashboard");
          navigate("/lock-dashboard"); // Redirect if approved
        } else {
          console.log("User is not approved yet");
          setLoading(false);
        }
      } catch (err) {
        console.error("Error fetching approval status:", err);
        setError("Error fetching approval status. Please try again.");
        setLoading(false);
      }
    };

    checkApprovalStatus();
  }, [token, navigate]);

  if (loading) {
    return <div className="text-center mt-5">Checking approval status...</div>;
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card text-center p-4 shadow-lg">
        <h2 className="mb-3">Waiting for Approval</h2>
        {error ? <p className="text-danger">{error}</p> : <p>Your profile update has been submitted successfully. Please wait for admin approval.</p>}
      </div>
    </div>
  );
};

export default WaitingForApproval;
