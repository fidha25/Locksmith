
// import React, { useEffect, useState } from "react";
// import api from "../../../api/api";
// import "./style.css";

// const Emergency = () => {
//   const [services, setServices] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [geoLoading, setGeoLoading] = useState(true); // New state for geolocation loading
//   const [error, setError] = useState(null);
//   const [latitude, setLatitude] = useState(null);
//   const [longitude, setLongitude] = useState(null);

//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         setLatitude(position.coords.latitude);
//         setLongitude(position.coords.longitude);
//         setGeoLoading(false); // Geolocation loading complete
//       },
//       (error) => {
//         console.error("Error getting location:", error);
//         setError("Failed to retrieve location. Please enable location services.");
//         setLoading(false);
//         setGeoLoading(false); // Geolocation loading complete even if it fails
//       }
//     );
//   }, []);

//   useEffect(() => {
//     if (latitude !== null && longitude !== null && !geoLoading) {
//       const fetchServices = async () => {
//         try {
//           const token = localStorage.getItem("accessToken");
//           const response = await api.get("/api/admin/services/services_to_customer/", {
//             params: { 
//               service_type: "emergency",
//               latitude,
//               longitude
//             },
//             headers: {
//               Authorization: token ? `Bearer ${token}` : "",
//             },
//           });
//           setServices(response.data);
//         } catch (err) {
//           console.error("API Error:", err.response?.data || err.message);
//           setError(err.response?.data?.message || "Failed to fetch services");
//         } finally {
//           setLoading(false);
//         }
//       };
      
//       fetchServices();
//     }
//   }, [latitude, longitude, geoLoading]); // Add geoLoading as a dependency

//   const handleBooking = async (service) => {
//     const token = localStorage.getItem("accessToken");
//     if (!token) {
//       alert("Please log in to book a service.");
//       return;
//     }

//     const currentTime = new Date().toISOString();

//     const bookingData = {
//       service_request: service.id,
//       locksmith: service.locksmith_id,
//       scheduled_time: currentTime,
//       scheduled_date: currentTime,
//       locksmith_service: service.id,
//     };

//     try {
//       await api.post("/api/bookings/", bookingData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "application/json",
//         },
//       });
//       alert("Booking successful!");
//     } catch (error) {
//       console.error("Booking failed:", error);
//       alert("Booking failed. Please try again.");
//     }
//   };

//   if (loading || geoLoading) {
//     return (
//       <div className="loading-container">
//         <div className="loading-spinner"></div>
//         <p className="loading-message">Fetching emergency services near you...</p>
//       </div>
//     );
//   }

//   if (error) return <p className="error">{error}</p>;

//   return (
//     <div className="residential-container">
//       <h2>Emergency Locksmith Services</h2>
//       <div className="services-list">
//         {services.map((service, index) => (
//           <div key={index} className="services-card">
//             <div className="service-header">
//               <h3>{service.service.admin_service_name}</h3>
//               <p className="price">${service.service.total_price}</p>
//             </div>
//             <p className="text-black"><strong>Locksmith:</strong> {service.locksmith}</p>
//             <p className="text-black"><strong>Type:</strong> {service.service.service_type}</p>
//             <p className="text-black"><strong>Distance:</strong> {service.distance_km} km</p>
//             <p className="details text-black">{service.service.details}</p>
//             <button className="book-button" onClick={() => handleBooking(service.service)}>
//               Book Now
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Emergency;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../api/api";
import "./style.css";

const Emergency = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [geoLoading, setGeoLoading] = useState(true); // New state for geolocation loading
  const [error, setError] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [bookingSuccess, setBookingSuccess] = useState(false); // New state for booking success message
  const navigate = useNavigate();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        setGeoLoading(false); // Geolocation loading complete
      },
      (error) => {
        console.error("Error getting location:", error);
        setError("Failed to retrieve location. Please enable location services.");
        setLoading(false);
        setGeoLoading(false); // Geolocation loading complete even if it fails
      }
    );
  }, []);

  useEffect(() => {
    if (latitude !== null && longitude !== null && !geoLoading) {
      const fetchServices = async () => {
        try {
          const token = localStorage.getItem("accessToken");
          const response = await api.get("/api/admin/services/services_to_customer/", {
            params: { 
              service_type: "emergency",
              latitude,
              longitude
            },
            headers: {
              Authorization: token ? `Bearer ${token}` : "",
            },
          });
          setServices(response.data);
        } catch (err) {
          console.error("API Error:", err.response?.data || err.message);
          setError(err.response?.data?.message || "Failed to fetch services");
        } finally {
          setLoading(false);
        }
      };
      
      fetchServices();
    }
  }, [latitude, longitude, geoLoading]); // Add geoLoading as a dependency

  const handleBooking = async (service) => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      alert("Please log in to book a service.");
      return;
    }

    const currentTime = new Date().toISOString();
    const bookingData = {
      service_request: service.id,
      locksmith: service.locksmith_id,
      scheduled_time: currentTime,
      scheduled_date: currentTime,
      locksmith_service: service.id,
    };

    try {
      await api.post("/api/bookings/", bookingData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      setBookingSuccess(true); // Set booking success to true
      setTimeout(() => {
        navigate("/confirm-payment", { state: { service } }); // Navigate after showing the message
      }, 2000); // Wait 2 seconds before navigating
    } catch (error) {
      console.error("Booking failed:", error);
      alert("Booking failed. Please try again.");
    }
  };

  if (loading || geoLoading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p className="loading-message">Fetching services near you...</p>
      </div>
    );
  }

  if (error) return <p className="error">{error}</p>;

  return (
    <div className="residential-container">
      <h2>Emergency Locksmith Services</h2>
      {bookingSuccess && ( // Display booking success message
        <div className="success-message">
          <p>Booking Initialized! Redirecting to confirmation page...</p>
        </div>
      )}
      <div className="services-list">
        {services.map((service, index) => (
          <div key={index} className="services-card">
            <div className="service-header">
              <h3>{service.service.admin_service_name}</h3>
              <p className="price">${service.service.total_price}</p>
            </div>
            <p className="text-black"><strong>Locksmith:</strong> {service.locksmith}</p>
            <p className="text-black"><strong>Type:</strong> {service.service.service_type}</p>
            <p className="text-black"><strong>Distance:</strong> {service.distance_km} km</p>
            <p className="details text-black">{service.service.details}</p>
            <button className="book-button" onClick={() => handleBooking(service.service)}>
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Emergency;