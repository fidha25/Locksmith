
// // import React, { useState, useEffect } from "react"; 
// // import axios from "axios";
// // import "./LockSmithForm.css";
// // import { useNavigate } from "react-router-dom";
// // import api from '../../api/api';


// // const LockSmithForm = () => {
// //   const navigate = useNavigate();
// //   const [formData, setFormData] = useState({
// //     address: "",
// //     contact_number: "",
// //     service_area: "",
// //     longitude: "",
// //     latitude: "",
// //     pcc_file: null,
// //     license_file: null,
// //     photo: null,
// //   });

// //   const [message, setMessage] = useState(null);
// //   const [error, setError] = useState(null);

// //   // Fetch existing form data on component mount
// //   useEffect(() => {
// //     const fetchFormData = async () => {
// //       try {
// //         const accessToken = localStorage.getItem("accessToken");
// //         if (!accessToken) {
// //           throw new Error("No access token found. Please login.");
// //         }

// //         const response = await api.get("api/locksmiths/locksmithform_val/", {
// //           headers: {
// //             Authorization: `Bearer ${accessToken}`,
// //           },
// //         });

// //         const data = response.data;
// //         if (data && (data.address || data.contact_number || data.service_area || data.longitude || data.latitude)) {
// //           console.log("Fields are already filled, navigating...");
// //           navigate("/waiting-for-approval", { state: { token: accessToken } });
// //         } else {
// //           setFormData({
// //             address: data.address || "",
// //             contact_number: data.contact_number || "",
// //             service_area: data.service_area || "",
// //             longitude: data.longitude || "",
// //             latitude: data.latitude || "",
// //             pcc_file: null,
// //             license_file: null,
// //             photo: null,
// //           });
// //         }
// //       } catch (error) {
// //         console.error("Error fetching form data:", error);
// //       }
// //     };

// //     fetchFormData();
// //   }, [navigate]);

// //   const handleChange = (e) => {
// //     const { name, value, files } = e.target;

// //     setFormData((prevData) => ({
// //       ...prevData,
// //       [name]: files ? files[0] : value, // For file inputs, set the first file
// //     }));
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     const data = new FormData();
// //     Object.keys(formData).forEach((key) => {
// //       if (formData[key]) {
// //         data.append(key, formData[key]);
// //       }
// //     });

// //     try {
// //       const accessToken = localStorage.getItem("accessToken");
// //       if (!accessToken) {
// //         throw new Error("No access token found. Please login.");
// //       }

// //       const response = await api.post("/locksmith/profile/update/", data, {
// //         headers: {
// //           "Content-Type": "multipart/form-data",
// //           Authorization: `Bearer ${accessToken}`,
// //         },
// //       });

// //       setMessage("Profile updated successfully!");
// //       setError(null);
// //       console.log("Profile updated successfully", response.data);

// //       // Navigate after updating
// //       navigate("/waiting-for-approval", { state: { token: accessToken } });

// //     } catch (error) {
// //       setError("Error updating profile. Please try again.");
// //       setMessage(null);
// //       console.error("Error updating profile:", error);
// //     }
// //   };

// //   return (
// //     <div className="container locksmith-form">
// //       <h2 className="text-center mb-4">Locksmith Dashboard</h2>

// //       {message && <div className="alert alert-success">{message}</div>}
// //       {error && <div className="alert alert-danger">{error}</div>}

// //       <form onSubmit={handleSubmit} encType="multipart/form-data">
// //         <div className="form-group">
// //           <label>Address</label>
// //           <input type="text" name="address" value={formData.address} onChange={handleChange} className="form-control" />
// //         </div>

// //         <div className="form-group">
// //           <label>Contact Number</label>
// //           <input type="text" name="contact_number" value={formData.contact_number} onChange={handleChange} className="form-control" />
// //         </div>

// //         <div className="form-group">
// //           <label>Service Area</label>
// //           <input type="text" name="service_area" value={formData.serviceArea} onChange={handleChange} className="form-control" />
// //         </div>

// //         <div className="form-group">
// //           <label>Longitude</label>
// //           <input type="text" name="longitude" value={formData.longitude} onChange={handleChange} className="form-control" />
// //         </div>

// //         <div className="form-group">
// //           <label>Latitude</label>
// //           <input type="text" name="latitude" value={formData.latitude} onChange={handleChange} className="form-control" />
// //         </div>

// //         <div className="form-group">
// //           <label>PCC File </label>
// //           <input type="file" name="pcc_file" onChange={handleChange} className="form-control-file" />
// //         </div>

// //         <div className="form-group">
// //           <label>License File </label>
// //           <input type="file" name="license_file" onChange={handleChange} className="form-control-file" />
// //         </div>

// //         <div className="form-group">
// //           <label>Photo </label>
// //           <input type="file" name="photo" onChange={handleChange} className="form-control-file" />
// //         </div>

// //         <div className="text-center">
// //           <button type="submit" className="btn btn-primary">Update Profile</button>
// //         </div>
// //       </form>
// //     </div>
// //   );
// // };

// // export default LockSmithForm;
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "./LockSmithForm.css";
// import api from "../../api/api";

// const LockSmithForm = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     address: "",
//     contact_number: "",
//     service_area: "",
//     longitude: "",
//     latitude: "",
//     pcc_file: null,
//     license_file: null,
//     photo: null,
//   });

//   const [message, setMessage] = useState(null);
//   const [error, setError] = useState(null);

//   // 🔐 Check authentication & role
//   useEffect(() => {
//     const accessToken = localStorage.getItem("accessToken");
//     const userRole = localStorage.getItem("userRole");

//     if (!accessToken || userRole !== "locksmith") {
//       navigate("/login");
//       return;
//     }

//     // Fetch existing form data
//     const fetchFormData = async () => {
//       try {
//         const response = await api.get("api/locksmiths/locksmithform_val/", {
//           headers: { Authorization: `Bearer ${accessToken}` },
//         });

//         const data = response.data;
//         if (data && (data.address || data.contact_number || data.service_area)) {
//           navigate("/waiting-for-approval", { state: { token: accessToken } });
//         } else {
//           setFormData({
//             address: data.address || "",
//             contact_number: data.contact_number || "",
//             service_area: data.service_area || "",
//             longitude: data.longitude || "",
//             latitude: data.latitude || "",
//             pcc_file: null,
//             license_file: null,
//             photo: null,
//           });
//         }
//       } catch (error) {
//         console.error("Error fetching form data:", error);
//       }
//     };

//     fetchFormData();
//   }, [navigate]);

//   // Handle form input changes
//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: files ? files[0] : value,
//     }));
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const data = new FormData();
//     Object.keys(formData).forEach((key) => {
//       if (formData[key]) {
//         data.append(key, formData[key]);
//       }
//     });

//     try {
//       const accessToken = localStorage.getItem("accessToken");
//       if (!accessToken) {
//         throw new Error("No access token found. Please login.");
//       }

//       await api.post("/locksmith/profile/update/", data, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//           Authorization: `Bearer ${accessToken}`,
//         },
//       });

//       setMessage("Profile updated successfully!");
//       setError(null);

//       // Redirect after success
//       navigate("/waiting-for-approval", { state: { token: accessToken } });
//     } catch (error) {
//       setError("Error updating profile. Please try again.");
//       setMessage(null);
//       console.error("Error updating profile:", error);
//     }
//   };

//   return (
//     <div className="container locksmith-form">
//       <h2 className="text-center mb-4">Locksmith Dashboard</h2>

//       {message && <div className="alert alert-success">{message}</div>}
//       {error && <div className="alert alert-danger">{error}</div>}

//       <form onSubmit={handleSubmit} encType="multipart/form-data">
//         <div className="form-group">
//           <label>Address</label>
//           <input type="text" name="address" value={formData.address} onChange={handleChange} className="form-control" />
//         </div>

//         <div className="form-group">
//           <label>Contact Number</label>
//           <input type="text" name="contact_number" value={formData.contact_number} onChange={handleChange} className="form-control" />
//         </div>

//         <div className="form-group">
//           <label>Service Area</label>
//           <input type="text" name="service_area" value={formData.service_area} onChange={handleChange} className="form-control" />
//         </div>

//         <div className="form-group">
//           <label>Longitude</label>
//           <input type="text" name="longitude" value={formData.longitude} onChange={handleChange} className="form-control" />
//         </div>

//         <div className="form-group">
//           <label>Latitude</label>
//           <input type="text" name="latitude" value={formData.latitude} onChange={handleChange} className="form-control" />
//         </div>

//         <div className="form-group">
//           <label>PCC File</label>
//           <input type="file" name="pcc_file" onChange={handleChange} className="form-control-file" />
//         </div>

//         <div className="form-group">
//           <label>License File</label>
//           <input type="file" name="license_file" onChange={handleChange} className="form-control-file" />
//         </div>

//         <div className="form-group">
//           <label>Photo</label>
//           <input type="file" name="photo" onChange={handleChange} className="form-control-file" />
//         </div>

//         <div className="text-center">
//           <button type="submit" className="btn btn-primary">Update Profile</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default LockSmithForm;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./LockSmithForm.css";
import api from "../../api/api";

const LockSmithForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    address: "",
    contact_number: "",
    service_area: "",
    longitude: "",
    latitude: "",
    pcc_file: null,
    license_file: null,
    photo: null,
  });

  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const [fileError, setFileError] = useState(null);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const userRole = localStorage.getItem("userRole");

    if (!accessToken || userRole !== "locksmith") {
      navigate("/login?role=locksmith");
      return;
    }

    const fetchFormData = async () => {
      try {
        const response = await api.get("api/locksmiths/locksmithform_val/", {
          headers: { Authorization: `Bearer ${accessToken}` },
        });

        const data = response.data;
        if (data && (data.address || data.contact_number || data.service_area)) {
          navigate("/waiting-for-approval", { state: { token: accessToken } });
        } else {
          setFormData({
            address: data.address || "",
            contact_number: data.contact_number || "",
            service_area: data.service_area || "",
            longitude: data.longitude || "",
            latitude: data.latitude || "",
            pcc_file: null,
            license_file: null,
            photo: null,
          });
        }
      } catch (error) {
        console.error("Error fetching form data:", error);
      }
    };

    fetchFormData();
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      const file = files[0];
      if (file && file.size > 150 * 1024) {
        setFileError("File size should be less than 150KB.");
        return;
      } else {
        setFileError(null);
      }
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (fileError) return;

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      if (formData[key]) {
        data.append(key, formData[key]);
      }
    });

    try {
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        throw new Error("No access token found. Please login.");
      }

      await api.post("/locksmith/profile/update/", data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${accessToken}`,
        },
      });

      setMessage("Profile updated successfully!");
      setError(null);
      navigate("/waiting-for-approval", { state: { token: accessToken } });
    } catch (error) {
      setError("Error updating profile. Please try again.");
      setMessage(null);
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="container locksmith-form">
      <h2 className="text-center mb-4">Locksmith Dashboard</h2>

      {message && <div className="alert alert-success">{message}</div>}
      {error && <div className="alert alert-danger">{error}</div>}
      {fileError && <div className="alert alert-warning">{fileError}</div>}

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="form-group">
          <label>Address</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} className="form-control" />
        </div>

        <div className="form-group">
          <label>Contact Number</label>
          <input type="text" name="contact_number" value={formData.contact_number} onChange={handleChange} className="form-control" />
        </div>

        <div className="form-group">
          <label>Service Area</label>
          <input type="text" name="service_area" value={formData.service_area} onChange={handleChange} className="form-control" />
        </div>

        <div className="form-group">
          <label>Longitude</label>
          <input type="text" name="longitude" value={formData.longitude} onChange={handleChange} className="form-control" />
        </div>

        <div className="form-group">
          <label>Latitude</label>
          <input type="text" name="latitude" value={formData.latitude} onChange={handleChange} className="form-control" />
        </div>

        <div className="form-group">
          <label>PCC File (Max 150KB)</label>
          <input type="file" name="pcc_file" onChange={handleChange} className="form-control-file" />
        </div>

        <div className="form-group">
          <label>License File (Max 150KB)</label>
          <input type="file" name="license_file" onChange={handleChange} className="form-control-file" />
        </div>

        <div className="form-group">
          <label>Photo (Max 150KB)</label>
          <input type="file" name="photo" onChange={handleChange} className="form-control-file" />
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-primary">Update Profile</button>
        </div>
      </form>
    </div>
  );
};

export default LockSmithForm;
