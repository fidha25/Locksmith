
// // import React from 'react';
// // import { Link, useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory
// // import Container from 'react-bootstrap/Container';
// // import Navbar from 'react-bootstrap/Navbar';
// // import Nav from 'react-bootstrap/Nav';
// // import NavDropdown from 'react-bootstrap/NavDropdown';
// // import Button from 'react-bootstrap/Button';
// // import './Navbar.css';
// // import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// // export default function NavBar() {
// //   const navigate = useNavigate(); // Initialize useNavigate
// //   const username = localStorage.getItem('username'); // Get username from local storage
// //   const isAuthenticated = !!localStorage.getItem('accessToken'); // Check if user is authenticated

// //   const handleLogout = () => {
// //     // Clear local storage
// //     localStorage.removeItem('accessToken');
// //     localStorage.removeItem('refreshToken');
// //     localStorage.removeItem('userRole');
// //     localStorage.removeItem('username');

// //     // Redirect to home page
// //     navigate('/'); // Use navigate instead of history.push
// //   };

// //   return (
// //     <Navbar className="custom-navbar-bg" expand="lg">
// //       <Container>
// //         {/* Brand Logo */}
// //         <Navbar.Brand as={Link} to="/">
// //           <img
// //             alt=""
// //             src="images/man.png"
// //             width="40"
// //             height="40"
// //             className="d-inline-block align-top"
// //           />{' '}
// //           <span style={{ fontSize: '24px', fontWeight: 'bold' }}>LockQuick</span>
// //         </Navbar.Brand>

// //         {/* Toggle Button for Mobile */}
// //         <Navbar.Toggle aria-controls="basic-navbar-nav" />

// //         {/* Navbar Content */}
// //         <Navbar.Collapse id="basic-navbar-nav">
// //           {/* Centered Nav Items */}
// //           <Nav className="mx-auto">
// //             <Nav.Link as={Link} to="/" className="me-3 fw-bold">Home</Nav.Link>
// //             <Nav.Link as={Link} to="/about-us" className="me-3 fw-bold">About Us</Nav.Link>

// //             <NavDropdown title="Services" id="basic-nav-dropdown" className="me-3 fw-bold">
// //               <NavDropdown.Item as={Link} to="/services">All Services</NavDropdown.Item>
// //               <NavDropdown.Divider />
// //               <NavDropdown.Item as={Link} to="/contact-us">Contact Support</NavDropdown.Item>
// //             </NavDropdown>

// //             <Nav.Link as={Link} to="/contact-us" className="me-3 fw-bold">Contact Us</Nav.Link>
// //           </Nav>

// //           {/* Right-Aligned Login/Logout and Signup Buttons */}
// //           <Nav className="ms-auto">
// //             {isAuthenticated ? (
// //               <>
// //                 {/* Welcome Message */}
// //                 <Nav.Link className="me-3 fw-bold">Welcome, {username}</Nav.Link>

// //                 {/* Logout Button */}
// //                 <Button className="ms-2 login-btn" onClick={handleLogout}>Logout</Button>
// //               </>
// //             ) : (
// //               <>
// //                 {/* Login Button */}
// //                 <Link to="/login">
// //                   <Button className="ms-2 login-btn">Login</Button>
// //                 </Link>

// //                 {/* LockSmith SignUp Button */}
// //                 <Link to="/signup">
// //                   <Button className="ms-2 login-btn">LockSmith SignUp</Button>
// //                 </Link>

// //                 {/* User SignUp Button */}
// //                 <Link to="/usersignup">
// //                   <Button className="ms-2 login-btn">User SignUp</Button>
// //                 </Link>
// //               </>
// //             )}
// //           </Nav>
// //         </Navbar.Collapse>
// //       </Container>
// //     </Navbar>
// //   );
// // }


import React from 'react'; 
import { Link, useNavigate } from 'react-router-dom'; 
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavBar() {
  const navigate = useNavigate();
  const username = localStorage.getItem('username');
  const isAuthenticated = !!localStorage.getItem('accessToken');
  const userRole = localStorage.getItem('userRole');

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('userRole');
    localStorage.removeItem('username');
    navigate('/');
  };

  return (
    <Navbar className="custom-navbar-bg" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            alt=""
            src="images/man.png"
            width="40"
            height="40"
            className="d-inline-block align-top"
          />{' '}
          <span style={{ fontSize: '24px', fontWeight: 'bold' }}>LockQuick</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/" className="me-3 fw-bold">Home</Nav.Link>
            <Nav.Link as={Link} to="/about-us" className="me-3 fw-bold">About Us</Nav.Link>
            <NavDropdown title="Services" id="basic-nav-dropdown" className="me-3 fw-bold">
              <NavDropdown.Item as={Link} to="/services">All Services</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/contact-us">Contact Support</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/contact-us" className="me-3 fw-bold">Contact Us</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            {isAuthenticated ? (
              <>
                {userRole === 'locksmith' && (
                  <>
                    <Button as={Link} to="/create-service" className="ms-2 locksmith-btn">Create Service</Button>
                    {/* <Button as={Link} to="/my-services" className="ms-2 locksmith-btn">My Services</Button> */}
                  </>
                )}
                <Nav.Link className="me-3 fw-bold">Welcome, {username}</Nav.Link>
                <Button className="ms-2 login-btn" onClick={handleLogout}>Logout</Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button className="ms-2 login-btn">Login</Button>
                </Link>
                <Link to="/signup">
                  <Button className="ms-2 login-btn">LockSmith SignUp</Button>
                </Link>
                <Link to="/usersignup">
                  <Button className="ms-2 login-btn">User SignUp</Button>
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
// import React from 'react'; 
// import { Link } from 'react-router-dom'; 
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Button from 'react-bootstrap/Button';
// import '../../utils/auth'; // Correct path to auth.js

// import { handleLogout } from '../../utils/auth'; // Import handleLogout function

// export default function NavBar() {
//   const username = localStorage.getItem('username');
//   const isAuthenticated = !!localStorage.getItem('accessToken');
//   const userRole = localStorage.getItem('userRole');

//   return (
//     <Navbar className="custom-navbar-bg" expand="lg">
//       <Container>
//         <Navbar.Brand as={Link} to="/">
//           <img
//             alt=""
//             src="images/man.png"
//             width="40"
//             height="40"
//             className="d-inline-block align-top"
//           />{' '}
//           <span style={{ fontSize: '24px', fontWeight: 'bold' }}>LockQuick</span>
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="mx-auto">
//             <Nav.Link as={Link} to="/" className="me-3 fw-bold">Home</Nav.Link>
//             <Nav.Link as={Link} to="/about-us" className="me-3 fw-bold">About Us</Nav.Link>
//             <NavDropdown title="Services" id="basic-nav-dropdown" className="me-3 fw-bold">
//               <NavDropdown.Item as={Link} to="/services">All Services</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item as={Link} to="/contact-us">Contact Support</NavDropdown.Item>
//             </NavDropdown>
//             <Nav.Link as={Link} to="/contact-us" className="me-3 fw-bold">Contact Us</Nav.Link>
//           </Nav>
//           <Nav className="ms-auto">
//             {isAuthenticated ? (
//               <>
//                 {userRole === 'locksmith' && (
//                   <>
//                     <Button as={Link} to="/create-service" className="ms-2 locksmith-btn">Create Service</Button>
//                   </>
//                 )}
//                 <Nav.Link className="me-3 fw-bold">Welcome, {username}</Nav.Link>
//                 <Button className="ms-2 login-btn" onClick={handleLogout}>Logout</Button>
//               </>
//             ) : (
//               <>
//                 <Link to="/login">
//                   <Button className="ms-2 login-btn">Login</Button>
//                 </Link>
//                 <Link to="/signup">
//                   <Button className="ms-2 login-btn">LockSmith SignUp</Button>
//                 </Link>
//                 <Link to="/usersignup">
//                   <Button className="ms-2 login-btn">User SignUp</Button>
//                 </Link>
//               </>
//             )}
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }
