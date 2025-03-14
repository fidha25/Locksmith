// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./style.css";
// import api from "../../../api/api";

// const Automotive = () => {
//   const [services, setServices] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchServices = async () => {
//       try {
//         const token = localStorage.getItem("accessToken"); // Get stored token
    
//         const response = await api.get("/api/admin/services/services_to_customer/", {
//           params: { service_type: "automotive" },
//           headers: {
//             Authorization: token ? `Bearer ${token}` : "", // Pass token if available
//           },
//         });
    
//         setServices(response.data);
//       } catch (err) {
//         console.error("API Error:", err.response?.data || err.message);
//         setError(err.response?.data?.message || "Failed to fetch services");
//       } finally {
//         setLoading(false);
//       }
//     };
    
//     fetchServices();
//   }, []);

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


//   if (loading) return <p>Loading...</p>;
//   if (error) return <p className="error">{error}</p>;

//   return (
//     <div className="residential-container">
//       <h2>Automotive Locksmith Services</h2>
//       <div className="services-list">
//         {services.map((service, index) => (
//           <div key={index} className="services-card">
//             <div className="service-header">
//               <h3>{service.admin_service_name}</h3>
//               <p className="price">${service.total_price}</p>
//             </div>
//             <p><strong>Locksmith:</strong> {service.locksmith_name}</p>
//             <p><strong>Type:</strong> {service.service_type}</p>
//             <p className="details">{service.details}</p>
//             <button className="book-button" onClick={() => handleBooking(service)}>
//               Book Now
//             </button>          </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Automotive;
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import api from "../../../api/api";

const Automotive = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      (error) => {
        console.error("Error getting location:", error);
        setError("Failed to retrieve location. Please enable location services.");
        setLoading(false);
      }
    );
  }, []);

  useEffect(() => {
    if (latitude !== null && longitude !== null) {
      const fetchServices = async () => {
        try {
          const token = localStorage.getItem("accessToken");
          const response = await api.get("/api/admin/services/services_to_customer/", {
            params: {
              service_type: "automotive",
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
  }, [latitude, longitude]);

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
      alert("Booking successful!");
    } catch (error) {
      console.error("Booking failed:", error);
      alert("Booking failed. Please try again.");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="residential-container ">
      <h2>Automotive Locksmith Services</h2>
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

export default Automotive;
