// // // import React from 'react'; 
// // // import { Link, useNavigate } from 'react-router-dom'; 
// // // import Container from 'react-bootstrap/Container';
// // // import Navbar from 'react-bootstrap/Navbar';
// // // import Nav from 'react-bootstrap/Nav';
// // // import NavDropdown from 'react-bootstrap/NavDropdown';
// // // import Button from 'react-bootstrap/Button';
// // // import './Navbar.css';
// // // import 'bootstrap/dist/css/bootstrap.min.css';

// // // export default function NavBar() {
// // //   const navigate = useNavigate();
// // //   const username = localStorage.getItem('username');
// // //   const isAuthenticated = !!localStorage.getItem('accessToken');
// // //   const userRole = localStorage.getItem('userRole');

// // //   const handleLogout = () => {
// // //     localStorage.removeItem('accessToken');
// // //     localStorage.removeItem('refreshToken');
// // //     localStorage.removeItem('userRole');
// // //     localStorage.removeItem('username');
// // //     navigate('/');
// // //   };

// // //   return (
// // //     <Navbar className="custom-navbar-bg" expand="lg">
// // //       <Container>
// // //         <Navbar.Brand as={Link} to="/">
// // //           <img
// // //             alt=""
// // //             src="images/man.png"
// // //             width="40"
// // //             height="40"
// // //             className="d-inline-block align-top"
// // //           />{' '}
// // //           <span style={{ fontSize: '24px', fontWeight: 'bold' }}>LockQuick</span>
// // //         </Navbar.Brand>
// // //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
// // //         <Navbar.Collapse id="basic-navbar-nav">
// // //           <Nav className="mx-auto">
// // //             <Nav.Link as={Link} to="/" className="me-3 fw-bold">Home</Nav.Link>
// // //             <Nav.Link as={Link} to="/about-us" className="me-3 fw-bold">About Us</Nav.Link>
// // //             <NavDropdown title="Services" id="basic-nav-dropdown" className="me-3 fw-bold">
// // //               <NavDropdown.Item as={Link} to="/services">Residential</NavDropdown.Item>
// // //               <NavDropdown.Item as={Link} to="/services">Commercial</NavDropdown.Item>
// // //               <NavDropdown.Item as={Link} to="/services">Automotive</NavDropdown.Item>
// // //               <NavDropdown.Divider />
// // //               <NavDropdown.Item as={Link} to="/services">All Services</NavDropdown.Item>
// // //             </NavDropdown>
// // //             <Nav.Link as={Link} to="/contact-us" className="me-3 fw-bold">Contact Us</Nav.Link>
// // //           </Nav>
// // //           <Nav className="ms-auto">
// // //             {isAuthenticated ? (
// // //               <>
// // //                 {userRole === 'locksmith' && (
// // //                   <>
// // //                     <Button as={Link} to="/create-service" className="ms-2 locksmith-btn">Create Service</Button>
// // //                     {/* <Button as={Link} to="/my-services" className="ms-2 locksmith-btn">My Services</Button> */}
// // //                   </>
// // //                 )}
// // //                 <Nav.Link className="me-3 fw-bold">Welcome, {username}</Nav.Link>
// // //                 <Button className="ms-2 login-btn" onClick={handleLogout}>Logout</Button>
// // //               </>
// // //             ) : (
// // //               <>
// // //                 <Link to="/login">
// // //                   <Button className="ms-2 login-btn" variant='dark'>Login</Button>
// // //                 </Link>
// // //                 <Link to="/signup">
// // //                   <Button className="ms-2 login-btn" variant='dark'>LockSmith SignUp</Button>
// // //                 </Link>
// // //                 <Link to="/usersignup">
// // //                   <Button className="ms-2 login-btn" variant='dark'>User SignUp</Button>
// // //                 </Link>
// // //               </>
// // //             )}
// // //           </Nav>
// // //         </Navbar.Collapse>
// // //       </Container>
// // //     </Navbar>
// // //   );
// // // }




import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
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
            src="images/logo.webp"
            width="40"
            height="40"
            className="d-inline-block align-top logo"
          />{' '}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="custom-nav mx-auto text-center">
            <Nav.Link as={Link} to="/" className="me-lg-3 fw-bold">Home</Nav.Link>
            <Nav.Link as={Link} to="/about-us" className="me-lg-3 fw-bold">About Us</Nav.Link>
            <NavDropdown title="Services" id="basic-nav-dropdown" className="me-lg-3 fw-bold">
              <NavDropdown.Item as={Link} to="/services">Residential</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services">Commercial</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services">Automotive</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/services">All Services</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/contact-us" className="me-lg-3 fw-bold">Contact Us</Nav.Link>
          </Nav>
          <Nav className="ms-lg-auto d-flex flex-column flex-lg-row align-items-center">
            {isAuthenticated ? (
              <>
                {userRole === 'locksmith' && (
                  <Button as={Link} to="/create-service" className="action-btn my-2 my-lg-0">
                    Create Service
                  </Button>
                )}
                <Nav.Link className="me-lg-3 fw-bold">Welcome, {username}</Nav.Link>
                <Button className="action-btn my-2 my-lg-0" onClick={handleLogout}>Logout</Button>
              </>
            ) : (
              <>
                <Dropdown className="my-2 my-lg-0">
                  <Dropdown.Toggle as={Button} className="action-btn">
                    Login
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item as={Link} to="/login">User</Dropdown.Item>
                    <Dropdown.Item as={Link} to="/login">Locksmith</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Button as={Link} to="/signup" className="action-btn my-2 my-lg-0">Locksmith SignUp</Button>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}