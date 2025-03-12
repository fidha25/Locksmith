import React, { useEffect, useState } from "react";
import axios from "axios";
import api from "../../../api/api";

import "./style.css";

const SmartLock = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const token = localStorage.getItem("accessToken"); // Get stored token
    
        const response = await api.get("/api/admin/services/services_to_customer/", {
          params: { service_type: "smart-lock" },
          headers: {
            Authorization: token ? `Bearer ${token}` : "", // Pass token if available
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
  }, []);

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
    <div className="residential-container">
      <h2>Smark Lock Services</h2>
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
            <button className="book-button" onClick={() => handleBooking(service)}>
              Book Now
            </button>          </div>
        ))}
      </div>
    </div>
  );
};

export default SmartLock;