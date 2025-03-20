
// // import React, { useState, useEffect } from "react";
// // import api from '../../api/api';
// // import "./UserProfile.css";


// // export default function UserProfile() {
// //   const [profile, setProfile] = useState(null);
// //   const [updatedProfile, setUpdatedProfile] = useState({
// //     id: "",
// //     address: "",
// //     contact_number: "",
// //     user: {
// //       username: "",
// //       email: "",
// //       first_name: "",
// //       last_name: "",
// //     },
// //   });
// //   const [error, setError] = useState("");
// //   const [success, setSuccess] = useState("");

// //   useEffect(() => {
// //     const fetchProfile = async () => {
// //       const token = localStorage.getItem("accessToken");

// //       console.log("Access Token:", token);

// //       if (!token) {
// //         setError("You must be logged in to view your profile.");
// //         return;
// //       }

// //       try {
// //         console.log("Fetching user profile...");
// //         const response = await api.get(
// //           "/api/customer-profile/",
// //           {
// //             headers: {
// //               Authorization: `Bearer ${token}`,
// //             },
// //           }
// //         );

// //         console.log("API Response:", response.data);

// //         if (Array.isArray(response.data) && response.data.length > 0) {
// //           const userData = response.data[0]; // Assuming the profile is the first object
// //           setProfile(userData);
// //           setUpdatedProfile({
// //             id: userData.id || "",
// //             address: userData.address || "",
// //             contact_number: userData.contact_number || "",
// //             user: {
// //               username: userData.user?.username || "",
// //               email: userData.user?.email || "",
// //               first_name: userData.user?.first_name || "",
// //               last_name: userData.user?.last_name || "",
// //             },
// //           });
// //         } else {
// //           setError("No profile data found.");
// //         }
// //       } catch (err) {
// //         console.error("Error fetching profile:", err);
// //         setError(err.response?.data?.message || "Failed to fetch profile.");
// //       }
// //     };

// //     fetchProfile();
// //   }, []);

// //   // Handle input change
// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
    
// //     // If the field is inside the user object
// //     if (["username", "email", "first_name", "last_name"].includes(name)) {
// //       setUpdatedProfile((prev) => ({
// //         ...prev,
// //         user: { ...prev.user, [name]: value },
// //       }));
// //     } else {
// //       setUpdatedProfile((prev) => ({
// //         ...prev,
// //         [name]: value,
// //       }));
// //     }
// //   };

// //   // Handle profile update
// //   const handleUpdate = async (e) => {
// //     e.preventDefault();
// //     setSuccess("");
// //     setError("");

// //     const token = localStorage.getItem("accessToken");
// //     if (!token) {
// //       setError("You must be logged in to update your profile.");
// //       return;
// //     }

// //     try {
// //       console.log("Updating profile...");
// //       const response = await api.put(
// //         `/api/customer-profile/${updatedProfile.id}/`,
// //         updatedProfile,
// //         {
// //           headers: {
// //             Authorization: `Bearer ${token}`,
// //             "Content-Type": "application/json",
// //           },
// //         }
// //       );

// //       console.log("Update Response:", response.data);
// //       setSuccess("Profile updated successfully!");
// //     } catch (err) {
// //       console.error("Error updating profile:", err);
// //       setError(err.response?.data?.message || "Failed to update profile.");
// //     }
// //   };

// //   if (error) {
// //     return <p className="text-danger text-center">{error}</p>;
// //   }

// //   if (!profile) {
// //     return <p className="text-center">Loading...</p>;
// //   }

// //   return (

// // <div className="profile-container">
// // <h2 className="profile-title">Customer Profile</h2>
// // <div className="card shadow p-4">
// //   {success && <p className="profile-success">{success}</p>}
// //   {error && <p className="profile-error">{error}</p>}

// //   <form onSubmit={handleUpdate} className="profile-form">
// //     <div className="mb-3">
// //       <label><strong>ID:</strong></label>
// //       <input type="text" name="id" value={updatedProfile.id} readOnly />
// //     </div>

// //     <div className="mb-3">
// //       <label><strong>Address:</strong></label>
// //       <input type="text" name="address" value={updatedProfile.address} onChange={handleChange} required />
// //     </div>

// //     <div className="mb-3">
// //       <label><strong>Contact Number:</strong></label>
// //       <input type="text" name="contact_number" value={updatedProfile.contact_number} onChange={handleChange} required />
// //     </div>

// //     {/* User details */}
// //     <div className="mb-3">
// //       <label><strong>Username:</strong></label>
// //       <input type="text" name="username" value={updatedProfile.user.username} onChange={handleChange} required />
// //     </div>

// //     <div className="mb-3">
// //       <label><strong>Email:</strong></label>
// //       <input type="email" name="email" value={updatedProfile.user.email} onChange={handleChange} required />
// //     </div>

// //     <div className="mb-3">
// //       <label><strong>First Name:</strong></label>
// //       <input type="text" name="first_name" value={updatedProfile.user.first_name} onChange={handleChange} required />
// //     </div>

// //     <div className="mb-3">
// //       <label><strong>Last Name:</strong></label>
// //       <input type="text" name="last_name" value={updatedProfile.user.last_name} onChange={handleChange} required />
// //     </div>

// //     <button type="submit" className="profile-update-btn">Update Profile</button>
// //   </form>
// // </div>
// // </div>
// //   );
// // }
// import React, { useState, useEffect } from "react";
// import api from '../../api/api';
// import "./UserProfile.css";

// export default function UserProfile() {
//   const [profile, setProfile] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [updatedProfile, setUpdatedProfile] = useState({
//     id: "",
//     address: "",
//     contact_number: "",
//     user: {
//       username: "",
//       email: "",
//       first_name: "",
//       last_name: "",
//     },
//   });
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   useEffect(() => {
//     const fetchProfile = async () => {
//       const token = localStorage.getItem("accessToken");

//       if (!token) {
//         setError("You must be logged in to view your profile.");
//         setLoading(false);
//         return;
//       }

//       try {
//         const response = await api.get("/api/customer-profile/", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         if (Array.isArray(response.data) && response.data.length > 0) {
//           const userData = response.data[0];
//           setProfile(userData);
//           setUpdatedProfile({
//             id: userData.id || "",
//             address: userData.address || "",
//             contact_number: userData.contact_number || "",
//             user: {
//               username: userData.user?.username || "",
//               email: userData.user?.email || "",
//               first_name: userData.user?.first_name || "",
//               last_name: userData.user?.last_name || "",
//             },
//           });
//         } else {
//           setError("No profile data found.");
//         }
//       } catch (err) {
//         setError(err.response?.data?.message || "Failed to fetch profile.");
//       }
//       setLoading(false);
//     };

//     fetchProfile();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (["username", "email", "first_name", "last_name"].includes(name)) {
//       setUpdatedProfile((prev) => ({
//         ...prev,
//         user: { ...prev.user, [name]: value },
//       }));
//     } else {
//       setUpdatedProfile((prev) => ({
//         ...prev,
//         [name]: value,
//       }));
//     }
//   };

//   const handleUpdate = async (e) => {
//     e.preventDefault();
//     setSuccess("");
//     setError("");

//     const token = localStorage.getItem("accessToken");
//     if (!token) {
//       setError("You must be logged in to update your profile.");
//       return;
//     }

//     try {
//       const response = await api.put(`/api/customer-profile/${updatedProfile.id}/`, updatedProfile, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "application/json",
//         },
//       });
//       setSuccess("Profile updated successfully!");
//     } catch (err) {
//       setError(err.response?.data?.message || "Failed to update profile.");
//     }
//   };

//   if (loading) {
//     return (
//       <div className="text-center mt-5">
//         <div className="spinner-border text-dark" role="status">
//           <span className="visually-hidden">Loading...</span>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return <p className="text-danger text-center">{error}</p>;
//   }

//   return (
//     <div className="profile-container">
//       <h2 className="profile-title">Customer Profile</h2>
//       <div className="card shadow p-4">
//         {success && <p className="profile-success">{success}</p>}
//         {error && <p className="profile-error">{error}</p>}

//         <form onSubmit={handleUpdate} className="profile-form">
//           <div className="mb-3">
//             <label><strong>ID:</strong></label>
//             <input type="text" name="id" value={updatedProfile.id} readOnly />
//           </div>

//           <div className="mb-3">
//             <label><strong>Address:</strong></label>
//             <input type="text" name="address" value={updatedProfile.address} onChange={handleChange} required />
//           </div>

//           <div className="mb-3">
//             <label><strong>Contact Number:</strong></label>
//             <input type="text" name="contact_number" value={updatedProfile.contact_number} onChange={handleChange} required />
//           </div>

//           <div className="mb-3">
//             <label><strong>Username:</strong></label>
//             <input type="text" name="username" value={updatedProfile.user.username} onChange={handleChange} required />
//           </div>

//           <div className="mb-3">
//             <label><strong>Email:</strong></label>
//             <input type="email" name="email" value={updatedProfile.user.email} onChange={handleChange} required />
//           </div>

//           <div className="mb-3">
//             <label><strong>First Name:</strong></label>
//             <input type="text" name="first_name" value={updatedProfile.user.first_name} onChange={handleChange} required />
//           </div>

//           <div className="mb-3">
//             <label><strong>Last Name:</strong></label>
//             <input type="text" name="last_name" value={updatedProfile.user.last_name} onChange={handleChange} required />
//           </div>

//           <button type="submit" className="profile-update-btn">Update Profile</button>
//         </form>
//       </div>
//     </div>
//   );
// }
import React, { useState, useEffect } from "react";
import api from '../../api/api';
import "./UserProfile.css";

export default function UserProfile() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [updatedProfile, setUpdatedProfile] = useState({
    id: "",
    address: "",
    contact_number: "",
    user: {
      username: "",
      email: "",
      first_name: "",
      last_name: "",
    },
  });
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("accessToken");

      if (!token) {
        setError("You must be logged in to view your profile.");
        setLoading(false);
        return;
      }

      try {
        const response = await api.get("/api/customer-profile/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (Array.isArray(response.data) && response.data.length > 0) {
          const userData = response.data[0];
          setProfile(userData);
          setUpdatedProfile({
            id: userData.id || "",
            address: userData.address || "",
            contact_number: userData.contact_number || "",
            user: {
              username: userData.user?.username || "",
              email: userData.user?.email || "",
              first_name: userData.user?.first_name || "",
              last_name: userData.user?.last_name || "",
            },
          });
        } else {
          setError("No profile data found.");
        }
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch profile.");
      }
      setLoading(false);
    };

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (["username", "email", "first_name", "last_name"].includes(name)) {
      setUpdatedProfile((prev) => ({
        ...prev,
        user: { ...prev.user, [name]: value },
      }));
    } else {
      setUpdatedProfile((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setError("");

    const token = localStorage.getItem("accessToken");
    if (!token) {
      setError("You must be logged in to update your profile.");
      return;
    }

    try {
      const response = await api.put(`/api/customer-profile/${updatedProfile.id}/`, updatedProfile, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      alert("Profile updated successfully!");
    } catch (err) {
      const errorMessage = err.response?.data?.message || "Failed to update profile.";
      setError(errorMessage);
      alert(errorMessage);
    }
  };

  if (loading) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-dark" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return <p className="text-danger text-center">{error}</p>;
  }

  return (
    <div className="profile-container">
      <h2 className="profile-title">Customer Profile</h2>
      <div className="card shadow p-4">
        {error && <p className="profile-error">{error}</p>}

        <form onSubmit={handleUpdate} className="profile-form">
          <div className="mb-3">
            <label><strong>ID:</strong></label>
            <input type="text" name="id" value={updatedProfile.id} readOnly />
          </div>

          <div className="mb-3">
            <label><strong>Address:</strong></label>
            <input type="text" name="address" value={updatedProfile.address} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label><strong>Contact Number:</strong></label>
            <input type="text" name="contact_number" value={updatedProfile.contact_number} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label><strong>Username:</strong></label>
            <input type="text" name="username" value={updatedProfile.user.username} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label><strong>Email:</strong></label>
            <input type="email" name="email" value={updatedProfile.user.email} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label><strong>First Name:</strong></label>
            <input type="text" name="first_name" value={updatedProfile.user.first_name} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label><strong>Last Name:</strong></label>
            <input type="text" name="last_name" value={updatedProfile.user.last_name} onChange={handleChange} required />
          </div>

          <button type="submit" className="profile-update-btn">Update Profile</button>
        </form>
      </div>
    </div>
  );
}
