

// import React, { useState, useEffect } from "react";
// import axios from "axios"; 
// import "./LockSmithForm.css";
// import { useNavigate } from "react-router-dom";

// const LockSmithForm = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//     address: "",
//     contactNumber: "",
//     serviceArea: "",
//     longitude: "",
//     latitude: "",
//     pccFile: null,
//     licenseFile: null,
//     photo: null,
//   });

//   useEffect(() => {
//     const userRole = localStorage.getItem("userRole");
//     const username = localStorage.getItem("username");
//     const accessToken = localStorage.getItem("accessToken"); // Retrieve access token

//     if (userRole !== "locksmith" || !username || !accessToken) {
//       navigate("/login");
//       return;
//     }

//     // Fetch existing locksmith details
//     axios
//       .get(`http://192.168.1.8:8000/locksmith/profile/${username}`, {
//         headers: { Authorization: `Bearer ${accessToken}` },
//       })
//       .then((response) => {
//         setFormData((prevData) => ({
//           ...prevData,
//           ...response.data,
//         }));
//       })
//       .catch((error) => {
//         console.error("Error fetching locksmith details:", error);
//       });
//   }, [navigate]);

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData({
//       ...formData,
//       [name]: files ? files[0] : value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const data = new FormData();
//     Object.keys(formData).forEach((key) => {
//       if (formData[key] !== null && formData[key] !== "") {
//         data.append(key, formData[key]);
//       }
//     });

//     try {
//       const accessToken = localStorage.getItem("accessToken");

//       const response = await axios.put(
//         "http://192.168.1.8:8000/locksmith/profile/update/",
//         data,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//             Authorization: `Bearer ${accessToken}`,
//           },
//         }
//       );

//       console.log("Profile updated successfully:", response.data);
//     } catch (error) {
//       console.error("Error updating profile:", error);
//     }
//   };

//   return (
//     <div className="container locksmith-form">
//       <h2 className="text-center mb-4">Locksmith Dashboard</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="row">
//           <div className="col-md-6">
//             <div className="form-group">
//               <label>Username</label>
//               <input type="text" name="username" value={formData.username} className="form-control" disabled />
//             </div>
//           </div>
//           <div className="col-md-6">
//             <div className="form-group">
//               <label>Email</label>
//               <input type="email" name="email" value={formData.email} className="form-control" disabled />
//             </div>
//           </div>
//         </div>

//         <div className="row">
//           <div className="col-md-6">
//             <div className="form-group">
//               <label>Password</label>
//               <input type="password" name="password" value={formData.password} onChange={handleChange} className="form-control" />
//             </div>
//           </div>
//           <div className="col-md-6">
//             <div className="form-group">
//               <label>Address</label>
//               <input type="text" name="address" value={formData.address} onChange={handleChange} className="form-control" />
//             </div>
//           </div>
//         </div>

//         <div className="row">
//           <div className="col-md-6">
//             <div className="form-group">
//               <label>Contact Number</label>
//               <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} className="form-control" />
//             </div>
//           </div>
//           <div className="col-md-6">
//             <div className="form-group">
//               <label>Service Area</label>
//               <input type="text" name="serviceArea" value={formData.serviceArea} onChange={handleChange} className="form-control" />
//             </div>
//           </div>
//         </div>

//         <div className="row">
//           <div className="col-md-6">
//             <div className="form-group">
//               <label>Longitude</label>
//               <input type="text" name="longitude" value={formData.longitude} onChange={handleChange} className="form-control" />
//             </div>
//           </div>
//           <div className="col-md-6">
//             <div className="form-group">
//               <label>Latitude</label>
//               <input type="text" name="latitude" value={formData.latitude} onChange={handleChange} className="form-control" />
//             </div>
//           </div>
//         </div>

//         <div className="row">
//           <div className="col-md-6">
//             <div className="form-group">
//               <label>PCC File</label>
//               <input type="file" name="pccFile" onChange={handleChange} className="form-control-file" />
//             </div>
//           </div>
//           <div className="col-md-6">
//             <div className="form-group">
//               <label>License File</label>
//               <input type="file" name="licenseFile" onChange={handleChange} className="form-control-file" />
//             </div>
//           </div>
//         </div>

//         <div className="row">
//           <div className="col-md-6">
//             <div className="form-group">
//               <label>Photo</label>
//               <input type="file" name="photo" onChange={handleChange} className="form-control-file" />
//             </div>
//           </div>
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
import axios from "axios"; 
import "./LockSmithForm.css";
import { useNavigate } from "react-router-dom";

const LockSmithForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    address: "",
    contactNumber: "",
    serviceArea: "",
    longitude: "",
    latitude: "",
    pccFile: null,
    licenseFile: null,
    photo: null,
  });

  useEffect(() => {
    const userRole = localStorage.getItem("userRole");
    const username = localStorage.getItem("username");
    const accessToken = localStorage.getItem("accessToken"); // Retrieve access token

    if (userRole !== "locksmith" || !username || !accessToken) {
      navigate("/login");
      return;
    }

    // Fetch existing locksmith details
    axios
      .get(`http://192.168.1.8:8000/locksmith/profile/${username}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((response) => {
        setFormData((prevData) => ({
          ...prevData,
          ...response.data,
        }));
      })
      .catch((error) => {
        console.error("Error fetching locksmith details:", error);
      });
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      if (formData[key] !== null && formData[key] !== "") {
        data.append(key, formData[key]);
      }
    });

    try {
      const accessToken = localStorage.getItem("accessToken");

      const response = await axios.put(
        "http://192.168.1.8:8000/locksmith/profile/update/",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      console.log("Profile updated successfully:", response.data);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="container locksmith-form">
      <h2 className="text-center mb-4">Locksmith Dashboard</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>Username</label>
              <input type="text" name="username" value={formData.username} className="form-control" disabled />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Email</label>
              <input type="email" name="email" value={formData.email} className="form-control" disabled />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>Password</label>
              <input type="password" name="password" value={formData.password} onChange={handleChange} className="form-control" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Address</label>
              <input type="text" name="address" value={formData.address} onChange={handleChange} className="form-control" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>Contact Number</label>
              <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} className="form-control" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Service Area</label>
              <input type="text" name="serviceArea" value={formData.serviceArea} onChange={handleChange} className="form-control" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>Longitude</label>
              <input type="text" name="longitude" value={formData.longitude} onChange={handleChange} className="form-control" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Latitude</label>
              <input type="text" name="latitude" value={formData.latitude} onChange={handleChange} className="form-control" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>PCC File</label>
              <input type="file" name="pccFile" onChange={handleChange} className="form-control-file" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>License File</label>
              <input type="file" name="licenseFile" onChange={handleChange} className="form-control-file" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>Photo</label>
              <input type="file" name="photo" onChange={handleChange} className="form-control-file" />
            </div>
          </div>
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-primary">Update Profile</button>
        </div>
      </form>
    </div>
  );
};

export default LockSmithForm;
// (put ,post issue...get help)
