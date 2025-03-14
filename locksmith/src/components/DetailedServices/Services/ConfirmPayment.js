

// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import "./ConfirmPayment.css"; // Import the CSS file

// const ConfirmPayment = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { service } = location.state;

//   const handleConfirmPayment = () => {
//     // Redirect to Stripe payment page
//     navigate("/payment", { state: { service } });
//   };

//   return (
//     <div className="confirmation-container container mt-5 mb-5">
//       <div className="card p-4">
//         <h2 className="text-center mb-4">Confirm Your Booking</h2>
//         <div className="booking-details mb-4">
//           <h3 className="text-black">{service.admin_service_name}</h3>
//           <p className="mb-2 text-black"><strong>Price:</strong> ${service.total_price}</p>
//           <p className="text-black"><strong>Details:</strong> {service.details}</p>
//         </div>
//         <p className="text-center mb-4 text-black">Are you sure you want to proceed with the payment?</p>
//         <div className="text-center">
//           <button className="confirm-button btn btn-primary btn-lg" onClick={handleConfirmPayment}>
//             Confirm and Proceed to Payment
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ConfirmPayment;

import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import api from '../../../api/api'; // Use your custom API instance
import "./ConfirmPayment.css"; // Import the CSS file

const ConfirmPayment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { service } = location.state;

  const handleConfirmPayment = async () => {
    const accessToken = localStorage.getItem('accessToken');

    if (!accessToken) {
      alert("You need to login first.");
      navigate("/login");
      return;
    }

    try {
      const response = await api.post(
        "/api/bookings/12/process_payment/",
        { service_id: service.id }, // Adjust the payload as needed
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      const { checkout_url } = response.data;
      window.location.href = checkout_url; // Redirect to the checkout URL
    } catch (error) {
      console.error("Payment processing failed:", error);
      console.error("Error response:", error.response); // Log the full error response
      alert("Payment processing failed. Please try again.");
    }
  };

  return (
    <div className="confirmation-container container mt-5 mb-5">
      <div className="card p-4">
        <h2 className="text-center mb-4">Confirm Your Booking</h2>
        <div className="booking-details mb-4">
          <h3 className="text-black">{service.admin_service_name}</h3>
          <p className="mb-2 text-black"><strong>Price:</strong> ${service.total_price}</p>
          <p className="text-black"><strong>Details:</strong> {service.details}</p>
        </div>
        <p className="text-center mb-4 text-black">Are you sure you want to proceed with the payment?</p>
        <div className="text-center">
          <button className="confirm-button btn btn-primary btn-lg" onClick={handleConfirmPayment}>
            Confirm and Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPayment;