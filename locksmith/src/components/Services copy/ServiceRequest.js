import React, { useState } from "react";
import { Button, Table, Modal } from "react-bootstrap";
import "./ServiceRequest.css"; // Custom CSS for styling

const initialRequests = [
  {
    id: 1,
    service: "Car Key Replacement",
    customer: "John Doe",
    location: "New York, NY",
    status: "Pending",
    proximity: 5, // Distance in miles
  },
  {
    id: 2,
    service: "Home Lock Repair",
    customer: "Alice Smith",
    location: "Brooklyn, NY",
    status: "Pending",
    proximity: 12,
  },
  {
    id: 3,
    service: "Door Lock Installation",
    customer: "Michael Johnson",
    location: "Queens, NY",
    status: "Pending",
    proximity: 8,
  },
];

const ServiceRequest = () => {
  const [requests, setRequests] = useState(initialRequests);
  const [showModal, setShowModal] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [decision, setDecision] = useState("");

  const openModal = (request, action) => {
    setSelectedRequest(request);
    setDecision(action);
    setShowModal(true);
  };

  const handleDecision = () => {
    if (!selectedRequest) return;

    setRequests((prevRequests) =>
      prevRequests.map((req) =>
        req.id === selectedRequest.id
          ? { ...req, status: decision === "approve" ? "Approved" : "Rejected" }
          : req
      )
    );

    setShowModal(false);
  };

  return (
    <div className="table-container">
      <h2 className="text-center mb-4">Service Request Management</h2>
      <div className="table-responsive">
        <Table bordered hover className="requests-table">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Service</th>
              <th>Customer</th>
              <th>Location</th>
              <th>Status</th>
              <th>Proximity (miles)</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((req) => (
              <tr key={req.id} className={req.status === "Approved" ? "table-success" : req.status === "Rejected" ? "table-danger" : ""}>
                <td>{req.id}</td>
                <td>{req.service}</td>
                <td>{req.customer}</td>
                <td>{req.location}</td>
                <td>{req.status}</td>
                <td>{req.proximity} miles</td>
                <td>
                  {req.status === "Pending" ? (
                    <>
                      <Button variant="success" size="sm" onClick={() => openModal(req, "approve")}>
                        Approve
                      </Button>{" "}
                      <Button variant="danger" size="sm" onClick={() => openModal(req, "reject")}>
                        Reject
                      </Button>
                    </>
                  ) : (
                    <span className="text-muted">No Actions</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      {/* Modal for Approving/Rejecting Requests */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {decision === "approve" ? "Approve Request" : "Reject Request"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to {decision} the service request for{" "}
          <strong>{selectedRequest?.service}</strong> requested by{" "}
          <strong>{selectedRequest?.customer}</strong> in{" "}
          <strong>{selectedRequest?.location}</strong>?
        </Modal.Body>
        <Modal.Footer>
          <Button variant={decision === "approve" ? "success" : "danger"} onClick={handleDecision}>
            {decision === "approve" ? "Approve" : "Reject"}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ServiceRequest;
