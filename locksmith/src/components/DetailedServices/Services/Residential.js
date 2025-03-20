
// // // import React, { useEffect, useState } from "react";
// // // import { useNavigate } from "react-router-dom";
// // // import api from "../../../api/api";
// // // import "./style.css";

// // // const Residential = () => {
// // //   const [services, setServices] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [geoLoading, setGeoLoading] = useState(true); // New state for geolocation loading
// // //   const [error, setError] = useState(null);
// // //   const [latitude, setLatitude] = useState(null);
// // //   const [longitude, setLongitude] = useState(null);
// // //   const [bookingSuccess, setBookingSuccess] = useState(false); // New state for booking success message
// // //   const navigate = useNavigate();

// // //   useEffect(() => {
// // //     navigator.geolocation.getCurrentPosition(
// // //       (position) => {
// // //         setLatitude(position.coords.latitude);
// // //         setLongitude(position.coords.longitude);
// // //         setGeoLoading(false); // Geolocation loading complete
// // //       },
// // //       (error) => {
// // //         console.error("Error getting location:", error);
// // //         setError("Failed to retrieve location. Please enable location services.");
// // //         setLoading(false);
// // //         setGeoLoading(false); // Geolocation loading complete even if it fails
// // //       }
// // //     );
// // //   }, []);

// // //   useEffect(() => {
// // //     if (latitude !== null && longitude !== null && !geoLoading) {
// // //       const fetchServices = async () => {
// // //         try {
// // //           const token = localStorage.getItem("accessToken");
// // //           const response = await api.get("/api/admin/services/services_to_customer/", {
// // //             params: { 
// // //               service_type: "residential",
// // //               latitude,
// // //               longitude
// // //             },
// // //             headers: {
// // //               Authorization: token ? `Bearer ${token}` : "",
// // //             },
// // //           });
// // //           setServices(response.data);
// // //         } catch (err) {
// // //           console.error("API Error:", err.response?.data || err.message);
// // //           setError(err.response?.data?.message || "Failed to fetch services");
// // //         } finally {
// // //           setLoading(false);
// // //         }
// // //       };
      
// // //       fetchServices();
// // //     }
// // //   }, [latitude, longitude, geoLoading]); // Add geoLoading as a dependency

// // //   const handleBooking = async (service) => {
// // //     const token = localStorage.getItem("accessToken");
// // //     if (!token) {
// // //       alert("Please log in to book a service.");
// // //       return;
// // //     }

// // //     const currentTime = new Date().toISOString();
// // //     const bookingData = {
// // //       service_request: service.id,
// // //       locksmith: service.locksmith_id,
// // //       scheduled_time: currentTime,
// // //       scheduled_date: currentTime,
// // //       locksmith_service: service.id,
// // //     };

// // //     try {
// // //       await api.post("/api/bookings/", bookingData, {
// // //         headers: {
// // //           Authorization: `Bearer ${token}`,
// // //           "Content-Type": "application/json",
// // //         },
// // //       });
// // //       setBookingSuccess(true); // Set booking success to true
// // //       setTimeout(() => {
// // //         navigate("/confirm-payment", { state: { service } }); // Navigate after showing the message
// // //       }, 2000); // Wait 2 seconds before navigating
// // //     } catch (error) {
// // //       console.error("Booking failed:", error);
// // //       alert("Booking failed. Please try again.");
// // //     }
// // //   };

// // //   if (loading || geoLoading) {
// // //     return (
// // //       <div className="loading-container">
// // //         <div className="loading-spinner"></div>
// // //         <p className="loading-message">Fetching services near you...</p>
// // //       </div>
// // //     );
// // //   }

// // //   if (error) return <p className="error">{error}</p>;

// // //   return (
// // //     <div className="residential-container">
// // //       <h2>Residential Locksmith Services</h2>
// // //       {bookingSuccess && ( // Display booking success message
// // //         <div className="success-message">
// // //           <p>Booking Initialized! Redirecting to confirmation page...</p>
// // //         </div>
// // //       )}
// // //       <div className="services-list">
// // //         {services.map((service, index) => (
// // //           <div key={index} className="services-card">
// // //             <div className="service-header">
// // //               <h3>{service.service.admin_service_name}</h3>
// // //               <p className="price">${service.service.total_price}</p>
// // //             </div>
// // //             <p className="text-black"><strong>Locksmith:</strong> {service.locksmith}</p>
// // //             <p className="text-black"><strong>Type:</strong> {service.service.service_type}</p>
// // //             <p className="text-black"><strong>Distance:</strong> {service.distance_km} km</p>
// // //             <p className="details text-black">{service.service.details}</p>
// // //             <button className="book-button" onClick={() => handleBooking(service.service)}>
// // //               Book Now
// // //             </button>
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Residential;


// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import api from "../../../api/api";
// import Box from "@mui/material/Box";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import "./style.css";

// const Residential = () => {
//   const [services, setServices] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [geoLoading, setGeoLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [latitude, setLatitude] = useState(null);
//   const [longitude, setLongitude] = useState(null);
//   const [bookingSuccess, setBookingSuccess] = useState(false);
//   const [selectedService, setSelectedService] = useState(0); // State for selected tab
//   const navigate = useNavigate();

//   // Fetch geolocation
//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         setLatitude(position.coords.latitude);
//         setLongitude(position.coords.longitude);
//         setGeoLoading(false);
//       },
//       (error) => {
//         console.error("Error getting location:", error);
//         setError("Failed to retrieve location. Please enable location services.");
//         setLoading(false);
//         setGeoLoading(false);
//       }
//     );
//   }, []);

//   // Fetch services based on geolocation
//   useEffect(() => {
//     if (latitude !== null && longitude !== null && !geoLoading) {
//       const fetchServices = async () => {
//         try {
//           const token = localStorage.getItem("accessToken");
//           const response = await api.get("/api/admin/services/services_to_customer/", {
//             params: {
//               service_type: "residential",
//               latitude,
//               longitude,
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
//   }, [latitude, longitude, geoLoading]);

//   // Handle tab change
//   const handleTabChange = (event, newValue) => {
//     setSelectedService(newValue);
//   };

//   // Handle booking
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
//       setBookingSuccess(true);
//       setTimeout(() => {
//         navigate("/confirm-payment", { state: { service } });
//       }, 2000);
//     } catch (error) {
//       console.error("Booking failed:", error);
//       alert("Booking failed. Please try again.");
//     }
//   };

//   // Get unique service names for tabs
//   const serviceNames = [...new Set(services.map((service) => service.service.admin_service_name))];

//   // Filter services based on the selected tab
//   const filteredServices = services.filter(
//     (service) => service.service.admin_service_name === serviceNames[selectedService]
//   );

//   if (loading || geoLoading) {
//     return (
//       <div className="loading-container">
//         <div className="loading-spinner"></div>
//         <p className="loading-message">Fetching services near you...</p>
//       </div>
//     );
//   }

//   if (error) return <p className="error">{error}</p>;

//   return (
//     <Box className="residential-container">
//       <h2>Residential Locksmith Services</h2>
//       {bookingSuccess && (
//         <div className="success-message">
//           <p>Booking Initialized! Redirecting to confirmation page...</p>
//         </div>
//       )}

//       {/* Tabs for service names */}
//       <Box
//   sx={{
//     overflowX: "auto",
//     whiteSpace: "nowrap",
//     width: "100%",
//     display: "flex",
//     justifyContent: "center",
//     backgroundColor: "#f5f5f5",
//     borderRadius: "10px",
//     padding: "10px",
//     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//     marginBottom: "30px", // Added margin between tabs and cards
//     "&::-webkit-scrollbar": {
//       display: "none",
//     },
//     scrollbarWidth: "none",
//     msOverflowStyle: "none",
//   }}
// >
//   <Tabs
//     value={selectedService}
//     onChange={handleTabChange}
//     variant="scrollable"
//     scrollButtons="auto"
//     allowScrollButtonsMobile
//     aria-label="service tabs"
//     sx={{
//       width: "100%",
//       "& .MuiTab-root": {
//         fontSize: "1rem",
//         fontWeight: "bold",
//         color: "#333",
//         textTransform: "none",
//         minWidth: "unset",
//         padding: "6px 8px", // Reduced padding between tabs
//         margin: "0 4px", // Reduced margin between tabs
//         "&:hover": {
//           backgroundColor: "#f0f0f0",
//         },
//       },
//       "& .Mui-selected": {
//         color: "rgb(240, 178, 131)", // Updated selected tab text color
//         backgroundColor: "#fff", // White background for selected tab
//         borderRadius: "8px", // Rounded corners for selected tab
//       },
//       "& .MuiTabs-indicator": {
//         backgroundColor: "rgb(240, 178, 131)", // Updated indicator color
//         height: "3px",
//       },
//     }}
//   >
//     {serviceNames.map((name, index) => (
//       <Tab key={index} label={name} />
//     ))}
//   </Tabs>
// </Box>

//       <div className="services-list">
//         {filteredServices.map((service, index) => (
//           <div key={index} className="services-card">
//             <div className="service-header">
//               <h3>{service.service.admin_service_name}</h3>
//               <p className="price">${service.service.total_price}</p>
//             </div>
//             <p className="text-black">
//               <strong>Locksmith:</strong> {service.locksmith}
//             </p>
//             <p className="text-black">
//               <strong>Type:</strong> {service.service.service_type}
//             </p>
//             <p className="text-black">
//               <strong>Distance:</strong> {service.distance_km} km
//             </p>
//             <p className="details text-black">{service.service.details}</p>
//             <button className="book-button" onClick={() => handleBooking(service.service)}>
//               Book Now
//             </button>
//           </div>
//         ))}
//       </div>
//     </Box>
//   );
// };

// export default Residential;
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../api/api";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import "./style.css";

const Residential = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [geoLoading, setGeoLoading] = useState(true);
  const [error, setError] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [selectedService, setSelectedService] = useState(0); // Default to the first service
  const [filterValue, setFilterValue] = useState(""); // Default to the first service name
  const navigate = useNavigate();

  // Fetch geolocation
  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      setLoading(false);
      setGeoLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        setGeoLoading(false);
      },
      (error) => {
        console.error("Error getting location:", error);
        setError("Failed to retrieve location. Please enable location services or enter your location manually.");
        setLoading(false);
        setGeoLoading(false);
      }
    );
  }, []);

  // Fetch services based on geolocation
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const response = await api.get("/api/admin/services/services_to_customer/", {
          params: {
            service_type: "residential",
            latitude,
            longitude,
          },
          headers: {
            Authorization: token ? `Bearer ${token}` : "",
          },
        });
        setServices(response.data);
        if (response.data.length > 0) {
          setFilterValue(response.data[0].service.admin_service_name);
        }
      } catch (err) {
        console.error("API Error:", err.response?.data || err.message);
        setError(err.response?.data?.message || "Failed to fetch services");
      } finally {
        setLoading(false);
      }
    };

    const debounceTimer = setTimeout(() => {
      if (latitude !== null && longitude !== null && !geoLoading) {
        fetchServices();
      }
    }, 500); // Debounce for 500ms

    return () => clearTimeout(debounceTimer);
  }, [latitude, longitude, geoLoading]);

  // Handle tab change
  const handleTabChange = (event, newValue) => {
    setSelectedService(newValue);
    setFilterValue(serviceNames[newValue]); // Sync filter dropdown with selected tab
  };

  // Handle filter change
  const handleFilterChange = (event) => {
    const selectedName = event.target.value;
    setFilterValue(selectedName);
    if (selectedName === "") {
      setSelectedService(-1); // Reset selected tab for "All Services"
    } else {
      const index = serviceNames.indexOf(selectedName);
      setSelectedService(index); // Sync selected tab with filter dropdown
    }
  };

  // Handle booking
  const handleBooking = async (service) => {
    const isConfirmed = window.confirm("Are you sure you want to book this service?");
    if (!isConfirmed) return;

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
      setBookingSuccess(true);
      setTimeout(() => {
        navigate("/confirm-payment", { state: { service } });
      }, 2000);
    } catch (error) {
      console.error("Booking failed:", error);
      alert("Booking failed. Please try again.");
    }
  };

  // Get unique service names for tabs and dropdown
  const serviceNames = [...new Set(services.map((service) => service.service.admin_service_name))];

  // Filter services based on the selected tab or filter dropdown
  const filteredServices = filterValue === ""
    ? services // Show all services when "All Services" is selected
    : services.filter((service) => service.service.admin_service_name === filterValue);

  if (loading || geoLoading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p className="loading-message">Fetching services near you...</p>
      </div>
    );
  }

  if (error) return <p className="error">{error}</p>;

  if (!loading && !geoLoading && filteredServices.length === 0) {
    return (
      <div className="no-services-message">
        <p>No services available in your area. Please try again later.</p>
      </div>
    );
  }

  return (
    <Box className="residential-container">
      <h2>Residential Locksmith Services</h2>
      {bookingSuccess && (
        <div className="success-message">
          <p className="text-white">Booking Initialized! Redirecting to confirmation page...</p>
        </div>
      )}

      {/* Filter Dropdown */}
      <div className="filter-container">
        <label htmlFor="service-filter">Filter by Service: </label>
        <select
          id="service-filter"
          value={filterValue}
          onChange={handleFilterChange}
          className="filter-dropdown"
          aria-label="Filter services by name"
        >
          <option value="">All Services</option>
          {serviceNames.map((name, index) => (
            <option key={index} value={name}>
              {name}
            </option>
          ))}
        </select>
      </div>

      {/* Tabs for service names */}
     
      <Box
  sx={{
    width: "100%", // Ensure the container takes full width
    maxWidth: "1200px", // Limit maximum width for larger screens
    margin: "0 auto", // Center the container
    backgroundColor: "#f5f5f5",
    borderRadius: "10px",
    padding: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    marginBottom: "30px",
  }}
>
  <Tabs
    value={selectedService === -1 ? false : selectedService} // No tab selected for "All Services"
    onChange={handleTabChange}
    variant="scrollable"
    scrollButtons="auto"
    allowScrollButtonsMobile
    aria-label="service tabs"
    sx={{
      width: "100%", // Ensure Tabs take full width of the container
      "& .MuiTab-root": {
        fontSize: "1rem",
        fontWeight: "bold",
        color: "#333",
        textTransform: "none",
        minWidth: "200px", // Set a fixed minimum width for each tab
        flex: 1, // Allow tabs to grow and fill available space
        padding: "6px 8px",
        margin: "0 4px",
        "&:hover": {
          backgroundColor: "#f0f0f0",
        },
      },
      "& .Mui-selected": {
        color: "rgb(240, 178, 131)",
        backgroundColor: "#fff",
        borderRadius: "8px",
      },
      "& .MuiTabs-indicator": {
        backgroundColor: "rgb(240, 178, 131)",
        height: "3px",
      },
    }}
  >
    {serviceNames.map((name, index) => (
      <Tab key={index} label={name} />
    ))}
  </Tabs>
</Box>

      {/* Services List */}
      <div className="services-list">
        {filteredServices.map((service, index) => (
          <ServiceCard key={index} service={service} onBook={handleBooking} />
        ))}
      </div>
    </Box>
  );
};

// Reusable ServiceCard Component
const ServiceCard = ({ service, onBook }) => (
  <div className="services-card">
    <div className="service-header">
      <h3>{service.service.admin_service_name}</h3>
      <p className="price">${service.service.total_price}</p>
    </div>
    {/* Availability Status */}
    <div
      className={`availability-status ${
        service.service.is_available ? "available" : "unavailable"
      }`}
    >
      {service.service.is_available ? "Open for Service" : "Currently Unavailable"}
    </div>
    <p className="text-black">
      <strong>Locksmith:</strong> {service.locksmith}
    </p>
    <p className="text-black">
      <strong>Type:</strong> {service.service.service_type}
    </p>
    <p className="text-black">
      <strong>Distance:</strong> {service.distance_km} km
    </p>
    <p className="details text-black">{service.service.details}</p>
    <button
      className="book-button"
      onClick={() => onBook(service.service)}
      disabled={!service.service.is_available} // Disable button if unavailable
    >
      {service.service.is_available ? "Book Now" : "Unavailable"}
    </button>
  </div>
);

export default Residential;