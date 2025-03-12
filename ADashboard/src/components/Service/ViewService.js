import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Table, Container, Alert } from "react-bootstrap";
import api from './../../api/api';

import axios from "axios";
import "./ViewService.css"; // Import CSS

const ViewServices = () => {
  const [services, setServices] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) {
      navigate("/"); // Redirect to login if not authenticated
      return;
    }

    api
      .get("/api/admin/services/", {
        headers: {
          Authorization: `Bearer ${accessToken}`, // Include token in header
        },
      })
      .then((response) => {
        setServices(response.data);
      })
      .catch((error) => {
        console.error("Error fetching services:", error);
        setError("Failed to fetch services. Please try again.");
        if (error.response && error.response.status === 401) {
          localStorage.removeItem("accessToken");
          navigate("/"); // Redirect if unauthorized
        }
      });
  }, [navigate]);

  return (
    <Container className="table-container">
      <h2 className="text-center mb-4">View Services</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <div className="table-responsive">
        <Table bordered hover className="service-table">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Service Name</th>
              <th>Base Price ($)</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service) => (
              <tr key={service.id}>
                <td>{service.id}</td>
                <td>{service.name}</td>
                <td>${service.base_price}</td>
                <td>{service.description}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default ViewServices;
