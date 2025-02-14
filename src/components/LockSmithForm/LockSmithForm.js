import React, { useState } from "react";
import "./LockSmithForm.css";

const LockSmithForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    address: "",
    contactNumber: "",
    pccFile: null,
    licenseFile: null,
    photo: null,
    serviceArea: "",
    longitude: "",
    latitude: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Add your form submission logic here (e.g., API call)
  };

  return (
    <div className="container locksmith-form">
      <h2 className="text-center mb-4">Locksmith Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>Contact Number</label>
              <input
                type="tel"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Service Area</label>
              <input
                type="text"
                name="serviceArea"
                value={formData.serviceArea}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>Longitude</label>
              <input
                type="text"
                name="longitude"
                value={formData.longitude}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Latitude</label>
              <input
                type="text"
                name="latitude"
                value={formData.latitude}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>PCC File</label>
              <input
                type="file"
                name="pccFile"
                onChange={handleChange}
                className="form-control-file"
                required
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>License File</label>
              <input
                type="file"
                name="licenseFile"
                onChange={handleChange}
                className="form-control-file"
                required
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>Photo</label>
              <input
                type="file"
                name="photo"
                onChange={handleChange}
                className="form-control-file"
                required
              />
            </div>
          </div>
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default LockSmithForm;