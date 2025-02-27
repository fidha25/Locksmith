
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Commission.css"; // Custom CSS
// import { Button, Form, InputGroup, Alert } from "react-bootstrap"; // Bootstrap components
// import axios from "axios"; // For making HTTP requests

// const SetCommission = () => {
//   const [commission, setCommission] = useState("");
//   const [message, setMessage] = useState("");
//   const [isError, setIsError] = useState(false);
//   const navigate = useNavigate();

//   // Check if the user is logged in and is an admin
//   useEffect(() => {
//     const accessToken = localStorage.getItem("accessToken");
//     const userRole = localStorage.getItem("userRole");

//     if (!accessToken || userRole !== "admin") {
//       navigate("/login"); // Redirect to login if not logged in or not an admin
//     }
//   }, [navigate]);

//   const handleSetCommission = async () => {
//     // Validate commission amount
//     if (!commission || isNaN(commission) || commission < 0) {
//       setMessage("Please enter a valid commission amount (must be a number greater than or equal to 0).");
//       setIsError(true);
//       return;
//     }

//     try {
//       const accessToken = localStorage.getItem("accessToken");
//       const response = await axios.put(
//         "http://192.168.1.7:8000/api/adminsettings/1/",
//         { commission_amount: parseFloat(commission) }, // Send commission amount
//         {
//           headers: {
//             Authorization: `Bearer ${accessToken}`,
//             "Content-Type": "application/json", // Ensure the content type is set
//           },
//         }
//       );

//       if (response.status === 200) {
//         setMessage(
//           `Commission updated successfully. New commission: ${response.data.commission_amount}, Platform status: ${response.data.platform_status}`
//         );
//         setIsError(false);
//       }
//     } catch (error) {
//       console.error("Error updating commission:", error);
//       setMessage("Failed to update commission. Please try again.");
//       setIsError(true);

//       // Log additional details for debugging
//       if (error.response) {
//         console.error("Response data:", error.response.data);
//         console.error("Response status:", error.response.status);
//         console.error("Response headers:", error.response.headers);
//       } else if (error.request) {
//         console.error("No response received:", error.request);
//       } else {
//         console.error("Error message:", error.message);
//       }
//     }
//   };

//   return (
//     <div className="commission-container">
//       <h2 className="text-center mb-4">Set Commission Amount</h2> {/* Updated title */}
//       <div className="commission-form">
//         {message && (
//           <Alert variant={isError ? "danger" : "success"} onClose={() => setMessage("")} dismissible>
//             {message}
//           </Alert>
//         )}
//         <InputGroup className="mb-3">
//           <Form.Control
//             type="number"
//             value={commission}
//             onChange={(e) => setCommission(e.target.value)}
//             placeholder="Enter commission amount" // Updated placeholder
//             min="0" // Ensure the amount is non-negative
//             step="0.01" // Allow decimal values
//           />
//           <Button variant="dark" onClick={handleSetCommission}>
//             Set
//           </Button>
//         </InputGroup>
//       </div>
//     </div>
//   );
// };

// export default SetCommission;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Commission.css"; // Custom CSS
import { Button, Form, InputGroup, Alert, Spinner } from "react-bootstrap"; // Bootstrap components
import axios from "axios"; // For making HTTP requests

const SetCommission = () => {
  const [commission, setCommission] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(true); // Loading state
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const userRole = localStorage.getItem("userRole");

    if (!accessToken || userRole !== "admin") {
      navigate("/login"); // Redirect to login if not logged in or not an admin
      return;
    }

    // Fetch current commission
    const fetchCommission = async () => {
      try {
        const response = await axios.get("http://192.168.1.7:8000/api/adminsettings/", {
          headers: { Authorization: `Bearer ${accessToken}` },
        });

        if (response.status === 200 && response.data.length > 0) {
          setCommission(response.data[0].commission_amount); // Set current commission
        }
      } catch (error) {
        console.error("Error fetching commission:", error);
        setMessage("Failed to load commission data.");
        setIsError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchCommission();
  }, [navigate]);

  const handleSetCommission = async () => {
    if (!commission || isNaN(commission) || commission < 0) {
      setMessage("Please enter a valid commission amount (must be a number greater than or equal to 0).");
      setIsError(true);
      return;
    }

    try {
      const accessToken = localStorage.getItem("accessToken");
      const response = await axios.put(
        "http://192.168.1.7:8000/api/adminsettings/1/", // Update endpoint
        { commission_amount: parseFloat(commission) },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        setMessage(`Commission updated successfully: ${response.data.commission_amount}`);
        setIsError(false);
      }
    } catch (error) {
      console.error("Error updating commission:", error);
      setMessage("Failed to update commission. Please try again.");
      setIsError(true);
    }
  };

  return (
    <div className="commission-container">
      <h2 className="text-center mb-4">Set Commission Amount</h2>
      
      <div className="commission-form">
        {message && (
          <Alert variant={isError ? "danger" : "success"} onClose={() => setMessage("")} dismissible>
            {message}
          </Alert>
        )}

        {loading ? (
          <div className="text-center">
            <Spinner animation="border" variant="dark" />
            <p>Loading commission...</p>
          </div>
        ) : (
          <InputGroup className="mb-3">
            <Form.Control
              type="number"
              value={commission}
              onChange={(e) => setCommission(e.target.value)}
              placeholder="Enter commission amount"
              min="0"
              step="0.01"
            />
            <Button variant="dark" onClick={handleSetCommission}>
              Update
            </Button>
          </InputGroup>
        )}
      </div>
    </div>
  );
};

export default SetCommission;
