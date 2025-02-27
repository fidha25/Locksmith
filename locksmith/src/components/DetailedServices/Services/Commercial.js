// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./style.css";

// const Commercial = () => {
//   const [services, setServices] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchServices = async () => {
//       try {
//         const response = await axios.get(
//           "http://192.168.1.7:8000/api/admin/services/services_to_customer/?service_type=commercial"
//         );
//         setServices(response.data);
//       } catch (err) {
//         setError("Failed to fetch services");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchServices();
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p className="error">{error}</p>;

//   return (
//     <div className="residential-container">
//       <h2>Commercial Locksmith Services</h2>
//       <div className="services-list">
//         {services.map((service, index) => (
//           <div key={index} className="services-card">
//             <p><strong>Locksmith:</strong> {service.locksmith_name}</p>
//             <p><strong>Service:</strong> {service.admin_service_name}</p>
//             <p><strong>Type:</strong> {service.service_type}</p>
//             <p><strong>Price:</strong> ${service.total_price}</p>
//             <p><strong>Details:</strong> {service.details}</p>
//             <button className="book-button">Book</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Commercial;
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";

const Commercial = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(
          "http://192.168.1.7:8000/api/admin/services/services_to_customer/?service_type=commercial"
        );
        setServices(response.data);
      } catch (err) {
        setError("Failed to fetch services");
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="residential-container">
      <h2>Commercial Locksmith Services</h2>
      <div className="services-list">
        {services.map((service, index) => (
          <div key={index} className="services-card">
            <div className="service-header">
              <h3>{service.admin_service_name}</h3>
              <p className="price">${service.total_price}</p>
            </div>
            <p><strong>Locksmith:</strong> {service.locksmith_name}</p>
            <p><strong>Type:</strong> {service.service_type}</p>
            <p className="details">{service.details}</p>
            <button className="book-button">Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Commercial;