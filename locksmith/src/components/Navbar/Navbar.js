
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
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
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapse-overlay">
          
          {/* Show full navbar for regular users */}
          {!isAuthenticated || userRole !== 'locksmith' ? (
            <Nav className="custom-nav mx-auto text-center">
              <Nav.Link as={Link} to="/" className="me-lg-3 fw-bold">Home</Nav.Link>
              <Nav.Link as={Link} to="/about-us" className="me-lg-3 fw-bold">About Us</Nav.Link>
              <Nav.Link as={Link} to="/services" className="me-lg-3 fw-bold">Services</Nav.Link>
              <Nav.Link as={Link} to="/contact-us" className="me-lg-3 fw-bold">Contact Us</Nav.Link>
            </Nav>
          ) : (
            <Nav className="mx-auto text-center"></Nav> // Empty navbar for locksmith
          )}

          <Nav className="ms-lg-auto d-flex flex-column flex-lg-row align-items-center">
            {isAuthenticated ? (
              <>
                <Nav.Link className="me-lg-3 fw-bold">Welcome, {username}</Nav.Link>
                <Button className="action-btn my-2 my-lg-0" onClick={handleLogout}>Logout</Button>
              </>
            ) : (
              <>
                <Dropdown className="my-2 my-lg-0">
                  <Dropdown.Toggle as={Button} className="action-btn">
                    Login
                  </Dropdown.Toggle>
                  {/* <Dropdown.Menu>
                    <Dropdown.Item as={Link} to="/login">User</Dropdown.Item>
                    <Dropdown.Item as={Link} to="/login">Locksmith</Dropdown.Item>
                  </Dropdown.Menu> */}
                  <Dropdown.Menu>
  <Dropdown.Item as={Link} to="/login?role=customer">User</Dropdown.Item>
  <Dropdown.Item as={Link} to="/login?role=locksmith">Locksmith</Dropdown.Item>
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