// // import React, { useState, useEffect } from "react";
// // import axios from "axios";
// // import { Table, Container, Alert } from "react-bootstrap";
// // import "./MyServices.css"; // Custom CSS file

// // const MyServices = () => {
// //   const [services, setServices] = useState([]);
// //   const [message, setMessage] = useState(null);

// //   useEffect(() => {
// //     const fetchServices = async () => {
// //       try {
// //         const accessToken = localStorage.getItem("accessToken");
// //         if (!accessToken) {
// //           setMessage({ type: "danger", text: "Unauthorized. Please log in." });
// //           return;
// //         }

// //         const response = await axios.get("http://192.168.1.7:8000/api/services/", {
// //           headers: { Authorization: `Bearer ${accessToken}` },
// //         });

// //         setServices(response.data);
// //       } catch (error) {
// //         setMessage({ type: "danger", text: "Failed to fetch services." });
// //         console.error("Error fetching services:", error);
// //       }
// //     };

// //     fetchServices();
// //   }, []);

// //   return (
// //     <Container className="my-services-container">
// //       <h2 className="text-center">My Services</h2>
// //       {message && <Alert variant={message.type}>{message.text}</Alert>}
// //       <Table striped bordered hover responsive className="mt-3">
// //         <thead>
// //           <tr>
// //             <th>ID</th>
// //             <th>Admin Service ID</th>
// //             <th>Admin Service Name</th>
// //             <th>Custom Price ($)</th>
// //             <th>Total Price ($)</th>
// //             <th>Details</th>
// //             <th>Status</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {services.length > 0 ? (
// //             services.map((service) => (
// //               <tr key={service.id}>
// //                 <td>{service.id}</td>
// //                 <td>{service.admin_service_id}</td>
// //                 <td>{service.admin_service_name || "N/A"}</td> {/* Display service name */}
// //                 <td>{service.custom_price}</td>
// //                 <td>{service.total_price || "N/A"}</td>
// //                 <td>{service.details}</td>
// //                 <td className={`status ${service.approved === true ? "approved" : service.approved === false ? "rejected" : "pending"}`}>
// //                   {service.approved === true ? "Approved" : service.approved === false ? "Rejected" : "Pending"}
// //                 </td>
// //               </tr>
// //             ))
// //           ) : (
// //             <tr>
// //               <td colSpan="7" className="text-center">
// //                 No services found.
// //               </td>
// //             </tr>
// //           )}
// //         </tbody>
// //       </Table>
// //     </Container>
// //   );
// // };

// // export default MyServices;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Table, Container, Alert } from "react-bootstrap";
// import "./MyServices.css"; // Custom CSS file

// const MyServices = () => {
//   const [services, setServices] = useState([]);
//   const [message, setMessage] = useState(null);

//   useEffect(() => {
//     const fetchServices = async () => {
//       try {
//         const accessToken = localStorage.getItem("accessToken");
//         if (!accessToken) {
//           setMessage({ type: "danger", text: "Unauthorized. Please log in." });
//           return;
//         }

//         const response = await axios.get("http://192.168.1.8:8000/api/services/", {
//           headers: { Authorization: `Bearer ${accessToken}` },
//         });

//         setServices(response.data);
//       } catch (error) {
//         setMessage({ type: "danger", text: "Failed to fetch services." });
//         console.error("Error fetching services:", error);
//       }
//     };

//     fetchServices();
//   }, []);

//   return (
//     <Container className="my-services-container">
//       <h2 className="text-center">My Services</h2>
//       {message && <Alert variant={message.type}>{message.text}</Alert>}
//       <Table striped bordered hover responsive className="mt-3">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Admin Service ID</th>
//             <th>Admin Service Name</th>
//             <th>Custom Price ($)</th>
//             <th>Total Price ($)</th>
//             <th>Details</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {services.length > 0 ? (
//             services.map((service) => (
//               <tr key={service.id}>
//                 <td>{service.id}</td>
//                 <td>{service.admin_service_id}</td>
//                 <td>{service.admin_service_name || "N/A"}</td> {/* Display service name */}
//                 <td>{service.custom_price}</td>
//                 <td>{service.total_price || "N/A"}</td>
//                 <td>{service.details}</td>
//                 <td className={`status ${service.approved ? "approved" : "pending"}`}>
//                   {service.approved ? "Approved" : "Pending"}
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="7" className="text-center">
//                 No services found.
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </Table>
//     </Container>
//   );
// };

// export default MyServices;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Container, Alert } from "react-bootstrap";
import "./MyServices.css"; // Custom CSS file
import api from '../../../api/api';


const MyServices = () => {
  const [services, setServices] = useState([]);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        if (!accessToken) {
          setMessage({ type: "danger", text: "Unauthorized. Please log in." });
          return;
        }

        const response = await api.get("/api/services/", {
          headers: { Authorization: `Bearer ${accessToken}` },
        });

        setServices(response.data);
      } catch (error) {
        setMessage({ type: "danger", text: "Failed to fetch services." });
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, []);

  return (
    <Container className="my-services-container">
      <h2 className="text-center">My Services</h2>
      {message && <Alert variant={message.type}>{message.text}</Alert>}
      <Table  bordered hover responsive className="mt-3">
        <thead>
          <tr>
            <th className="table-header">ID</th>
            <th className="table-header">Admin Service ID</th>
            <th className="table-header">Admin Service Name</th>
            <th className="table-header">Custom Price ($)</th>
            <th className="table-header">Total Price ($)</th>
            <th className="table-header">Details</th>
            <th className="table-header">Status</th>
          </tr>
        </thead>
        <tbody>
          {services.length > 0 ? (
            services.map((service) => (
              <tr key={service.id}>
                <td>{service.id}</td>
                <td>{service.admin_service_id}</td>
                <td>{service.admin_service_name || "N/A"}</td>
                <td>{service.custom_price}</td>
                <td>{service.total_price || "N/A"}</td>
                <td>{service.details}</td>
                <td className={`status ${service.approved ? "approved" : "pending"}`}>
                  {service.approved ? "Approved" : "Pending"}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center">
                No services found.
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </Container>
  );
};

export default MyServices;