

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./MyProfile.css";
// import api from '../../../api/api';

// const MyProfile = () => {
//   const [formData, setFormData] = useState({
//     address: "",
//     contact_number: "",
//     service_area: "",
//     pcc_file: null,
//     license_file: null,
//     photo: null,
//   });

//   const [fileURLs, setFileURLs] = useState({
//     pcc_file: null,
//     license_file: null,
//     photo: null,
//   });

//   const [message, setMessage] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchFormData = async () => {
//       try {
//         const accessToken = localStorage.getItem("accessToken");
//         if (!accessToken) {
//           throw new Error("No access token found. Please login.");
//         }

//         const response = await api.get("/api/locksmiths/locksmithform_val/", {
//           headers: { Authorization: `Bearer ${accessToken}` },
//         });

//         const data = response.data;
//         const baseURL = api.defaults.baseURL; // Get base URL from axios instance

//         setFormData({
//           address: data.address || "",
//           contact_number: data.contact_number || "",
//           service_area: data.service_area || "",
//           pcc_file: null,
//           license_file: null,
//           photo: null,
//         });

//         // setFileURLs({
//         //   pcc_file: data.pcc_file ? `http://192.168.1.8:8000${data.pcc_file}` : null,
//         //   license_file: data.license_file ? `http://192.168.1.8:8000${data.license_file}` : null,
//         //   photo: data.photo ? `http://192.168.1.8:8000${data.photo}` : null,
//         // });
//         setFileURLs({
//           pcc_file: data.pcc_file ? `${baseURL}${data.pcc_file}` : null,
//           license_file: data.license_file ? `${baseURL}${data.license_file}` : null,
//           photo: data.photo ? `${baseURL}${data.photo}` : null,
//         });

//       } catch (error) {
//         console.error("Error fetching form data:", error);
//       }
//     };

//     fetchFormData();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;

//     if (files) {
//       setFormData((prevData) => ({
//         ...prevData,
//         [name]: files[0],
//       }));
//     } else {
//       setFormData((prevData) => ({
//         ...prevData,
//         [name]: value,
//       }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.address || !formData.contact_number || !formData.service_area) {
//       setError("Please fill out all required fields.");
//       return;
//     }

//     const data = new FormData();
//     data.append("address", formData.address);
//     data.append("contact_number", formData.contact_number);
//     data.append("service_area", formData.service_area);

//     if (formData.pcc_file) {
//       data.append("pcc_file", formData.pcc_file);
//     }

//     if (formData.license_file) {
//       data.append("license_file", formData.license_file);
//     }

//     if (formData.photo) {
//       data.append("photo", formData.photo);
//     }

//     try {
//       const accessToken = localStorage.getItem("accessToken");
//       if (!accessToken) {
//         throw new Error("No access token found. Please login.");
//       }

//       const response = await api.put("/locksmith/profile/update/", data, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//           Authorization: `Bearer ${accessToken}`,
//         },
//       });

//       setMessage("Profile updated successfully!");
//       setError(null);
//       console.log("Profile updated successfully", response.data);
//     } catch (error) {
//       setError("Error updating profile. Please try again.");
//       setMessage(null);
//       console.error("Error updating profile:", error);
//       if (error.response) {
//         console.error("Server response:", error.response.data);
//       }
//     }
//   };

//   return (
//     <div className="container locksmith-form">
//       <h2 className="text-center mb-4">Locksmith Profile</h2>

//       {message && <div className="alert alert-success">{message}</div>}
//       {error && <div className="alert alert-danger">{error}</div>}

//       <form onSubmit={handleSubmit} encType="multipart/form-data">
//         <div className="form-group">
//           <label>Address</label>
//           <input type="text" name="address" value={formData.address} onChange={handleChange} className="form-control" required />
//         </div>

//         <div className="form-group">
//           <label>Contact Number</label>
//           <input type="text" name="contact_number" value={formData.contact_number} onChange={handleChange} className="form-control" required />
//         </div>

//         <div className="form-group">
//           <label>Service Area</label>
//           <input type="text" name="service_area" value={formData.service_area} onChange={handleChange} className="form-control" required />
//         </div>

//         <div className="form-group">
//           <label>PCC File</label>
//           <input type="file" name="pcc_file" onChange={handleChange} className="form-control-file" />
//           {fileURLs.pcc_file && !formData.pcc_file && (
//             <a href={fileURLs.pcc_file} target="_blank" rel="noopener noreferrer">
//               View Current PCC File
//             </a>
//           )}
//         </div>

//         <div className="form-group">
//           <label>License File</label>
//           <input type="file" name="license_file" onChange={handleChange} className="form-control-file" />
//           {fileURLs.license_file && !formData.license_file && (
//             <a href={fileURLs.license_file} target="_blank" rel="noopener noreferrer">
//               View Current License File
//             </a>
//           )}
//         </div>

//         <div className="form-group">
//           <label>Photo</label>
//           <input type="file" name="photo" onChange={handleChange} className="form-control-file" />
//           {fileURLs.photo && !formData.photo && (
//             <a href={fileURLs.photo} target="_blank" rel="noopener noreferrer">
//               View Current Photo
//             </a>
//           )}
//         </div>

//         <div className="text-center">
//           <button type="submit" className="btn btn-dark">Update Profile</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default MyProfile;
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./MyProfile.css";
import api from '../../../api/api';

const MyProfile = () => {
  const [formData, setFormData] = useState({
    address: "",
    contact_number: "",
    service_area: "",
    pcc_file: null,
    license_file: null,
    photo: null,
  });

  const [fileURLs, setFileURLs] = useState({
    pcc_file: null,
    license_file: null,
    photo: null,
  });

  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFormData = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        if (!accessToken) {
          throw new Error("No access token found. Please login.");
        }

        const response = await api.get("/api/locksmiths/locksmithform_val/", {
          headers: { Authorization: `Bearer ${accessToken}` },
        });

        const data = response.data;
        const baseURL = api.defaults.baseURL; // Get base URL from axios instance

        setFormData({
          address: data.address || "",
          contact_number: data.contact_number || "",
          service_area: data.service_area || "",
          pcc_file: null,
          license_file: null,
          photo: null,
        });

        setFileURLs({
          pcc_file: data.pcc_file ? `${baseURL}${data.pcc_file}` : null,
          license_file: data.license_file ? `${baseURL}${data.license_file}` : null,
          photo: data.photo ? `${baseURL}${data.photo}` : null,
        });

      } catch (error) {
        console.error("Error fetching form data:", error);
      }
    };

    fetchFormData();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.address || !formData.contact_number || !formData.service_area) {
      setError("Please fill out all required fields.");
      return;
    }

    const data = new FormData();
    data.append("address", formData.address);
    data.append("contact_number", formData.contact_number);
    data.append("service_area", formData.service_area);

    if (formData.pcc_file) {
      data.append("pcc_file", formData.pcc_file);
    }

    if (formData.license_file) {
      data.append("license_file", formData.license_file);
    }

    if (formData.photo) {
      data.append("photo", formData.photo);
    }

    try {
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        throw new Error("No access token found. Please login.");
      }

      const response = await api.put("/locksmith/profile/update/", data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${accessToken}`,
        },
      });

      setMessage("Profile updated successfully!");
      setError(null);
      console.log("Profile updated successfully", response.data);
    } catch (error) {
      setError("Error updating profile. Please try again.");
      setMessage(null);
      console.error("Error updating profile:", error);
      if (error.response) {
        console.error("Server response:", error.response.data);
      }
    }
  };

  return (
    <div className="container locksmith-form">
      <h2 className="text-center mb-4">Locksmith Profile</h2>

      {message && <div className="alert alert-success">{message}</div>}
      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="form-group">
          <label>Address</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} className="form-control" required />
        </div>

        <div className="form-group">
          <label>Contact Number</label>
          <input type="text" name="contact_number" value={formData.contact_number} onChange={handleChange} className="form-control" required />
        </div>

        <div className="form-group">
          <label>Service Area</label>
          <input type="text" name="service_area" value={formData.service_area} onChange={handleChange} className="form-control" required />
        </div>

        <div className="form-group">
          <label>PCC File</label>
          <input type="file" name="pcc_file" onChange={handleChange} className="form-control-file" />
          {fileURLs.pcc_file && !formData.pcc_file && (
            <a href={fileURLs.pcc_file} target="_blank" rel="noopener noreferrer">
              View Current PCC File
            </a>
          )}
        </div>

        <div className="form-group">
          <label>License File</label>
          <input type="file" name="license_file" onChange={handleChange} className="form-control-file" />
          {fileURLs.license_file && !formData.license_file && (
            <a href={fileURLs.license_file} target="_blank" rel="noopener noreferrer">
              View Current License File
            </a>
          )}
        </div>

        <div className="form-group">
          <label>Photo</label>
          <input type="file" name="photo" onChange={handleChange} className="form-control-file" />
          {fileURLs.photo && !formData.photo && (
            <a href={fileURLs.photo} target="_blank" rel="noopener noreferrer">
              View Current Photo
            </a>
          )}
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-dark custom-button">
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default MyProfile;