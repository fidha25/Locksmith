
// import React, { useState, useEffect } from 'react'; 
// import { Link, useNavigate, useLocation } from 'react-router-dom';
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import Button from 'react-bootstrap/Button';
// import Dropdown from 'react-bootstrap/Dropdown';
// import './Navbar.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

// export default function NavBar() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const username = localStorage.getItem('username');
//   const isAuthenticated = !!localStorage.getItem('accessToken');
//   const userRole = localStorage.getItem('userRole');

//   const handleLogout = () => {
//     localStorage.removeItem('accessToken');
//     localStorage.removeItem('refreshToken');
//     localStorage.removeItem('userRole');
//     localStorage.removeItem('username');
//     navigate('/');
//   };

//   const [navHeight, setNavHeight] = useState(window.innerWidth <= 768 ? 150 : 90);

//   useEffect(() => {
//     const handleResize = () => {
//       setNavHeight(window.innerWidth <= 768 ? 150 : 90);
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <>
//       {/* Welcome message for small and medium devices */}
//       {isAuthenticated && (
//         <div className="d-lg-none welcome-message">
//           <div className="container text-end">
//             Welcome, {username}
//           </div>
//         </div>
//       )}

//       <Navbar 
//         className="custom-navbar-bg" 
//         expand="lg"
//         style={{
//           backgroundImage: "url('/images/dark-grey-bg.webp')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//           padding: "4px 0",
//           height: `${navHeight}px`,
//         }}
//       >
//         <Container>
//           <Navbar.Brand as={Link} to="/">
//             <img
//               alt="Logo"
//               src="images/logo.webp"
//               width="40"
//               height="40"
//               className="d-inline-block align-top logo"
//             />
//           </Navbar.Brand>
//           <Navbar.Toggle className='toggle-button' aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapse-overlay">
            
//             {!isAuthenticated || userRole !== 'locksmith' ? (
//               <Nav className="custom-nav mx-auto text-center">
//                 <Nav.Link as={Link} to="/" className={`me-lg-3 fw-bold text-light ${location.pathname === '/' ? 'active' : ''}`}>Home</Nav.Link>
//                 <Nav.Link as={Link} to="/about-us" className={`me-lg-3 fw-bold text-light ${location.pathname === '/about-us' ? 'active' : ''}`}>About Us</Nav.Link>
//                 <Nav.Link as={Link} to="/services" className={`me-lg-3 fw-bold text-light ${location.pathname === '/services' ? 'active' : ''}`}>Services</Nav.Link>
//                 <Nav.Link as={Link} to="/careers" className={`me-lg-3 fw-bold text-light ${location.pathname === '/careers' ? 'active' : ''}`}>Careers</Nav.Link>
//                 <Nav.Link as={Link} to="/contact-us" className={`me-lg-3 fw-bold text-light ${location.pathname === '/contact-us' ? 'active' : ''}`}>Contact Us</Nav.Link>
//               </Nav>
//             ) : (
//               <Nav className="mx-auto text-center"></Nav>
//             )}

//             <Nav className="ms-lg-auto d-flex flex-column flex-lg-row align-items-center">
//               {isAuthenticated ? (
//                 <>
//                   {/* Hide the welcome message on small and medium devices */}
//                   <Nav.Link className="me-lg-3 fw-bold text-light d-none d-lg-block">Welcome, {username}</Nav.Link>
//                   {userRole === 'customer' && (
//                     <>
//                       <Button as={Link} to="/mybookings" className="action-btn my-2 my-lg-0">Bookings</Button>
//                       <Button as={Link} to="/update-profile" className="action-btn my-2 my-lg-0">Profile</Button>
//                     </>
//                   )}
//                   <Button className="logout-action-btn my-2 my-lg-0" onClick={handleLogout}>Logout</Button>
//                 </>
//               ) : (
//                 <>
//                   <Dropdown className="my-2 my-lg-0">
//                     <Dropdown.Toggle as={Button} className="drop-action-btn">Login</Dropdown.Toggle>
//                     <Dropdown.Menu>
//                       <Dropdown.Item as={Link} to="/login?role=customer">User</Dropdown.Item>
//                       <Dropdown.Item as={Link} to="/login?role=locksmith">Locksmith</Dropdown.Item>
//                     </Dropdown.Menu>
//                   </Dropdown>
//                   <Button as={Link} to="/signup" className="action-btn my-2 my-lg-0">Locksmith SignUp</Button>
//                 </>
//               )}
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </>
//   );
// }
import React, { useState, useEffect } from 'react'; 
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import api from '../../api/api'; // Import the api instance

export default function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const username = localStorage.getItem('username');
  const isAuthenticated = !!localStorage.getItem('accessToken');
  const userRole = localStorage.getItem('userRole');

  const handleLogout = async () => {
    const refreshToken = localStorage.getItem('refreshToken');
    console.log('Refresh Token:', refreshToken); // Log the refresh token
  
    if (!refreshToken) {
      alert('No refresh token found. Please log in again.');
      navigate('/login');
      return;
    }
  
    try {
      const response = await api.post(
        '/logout/',
        { refresh: refreshToken },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        }
      );
  
      alert(response.data.message || 'Logout successful!');
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('userRole');
      localStorage.removeItem('username');
      navigate('/');
    } catch (err) {
      console.error('Error:', err);
      console.error('Error Response:', err.response?.data); // Log the full error response
      alert(err.response?.data?.message || 'Logout failed. Please try again.');
    }
  };

  const [navHeight, setNavHeight] = useState(window.innerWidth <= 768 ? 150 : 90);

  useEffect(() => {
    const handleResize = () => {
      setNavHeight(window.innerWidth <= 768 ? 150 : 90);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Welcome message for small and medium devices */}
      {isAuthenticated && (
        <div className="d-lg-none welcome-message">
          <div className="container text-end">
            Welcome, {username}
          </div>
        </div>
      )}

      <Navbar 
        className="custom-navbar-bg" 
        expand="lg"
        style={{
          backgroundImage: "url('/images/dark-grey-bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          padding: "4px 0",
          height: `${navHeight}px`,
        }}
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              alt="Logo"
              src="images/logo.webp"
              width="40"
              height="40"
              className="d-inline-block align-top logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle className='toggle-button' aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapse-overlay">
            
            {!isAuthenticated || userRole !== 'locksmith' ? (
              <Nav className="custom-nav mx-auto text-center">
                <Nav.Link as={Link} to="/" className={`me-lg-3 fw-bold text-light ${location.pathname === '/' ? 'active' : ''}`}>Home</Nav.Link>
                <Nav.Link as={Link} to="/about-us" className={`me-lg-3 fw-bold text-light ${location.pathname === '/about-us' ? 'active' : ''}`}>About Us</Nav.Link>
                <Nav.Link as={Link} to="/services" className={`me-lg-3 fw-bold text-light ${location.pathname === '/services' ? 'active' : ''}`}>Services</Nav.Link>
                <Nav.Link as={Link} to="/careers" className={`me-lg-3 fw-bold text-light ${location.pathname === '/careers' ? 'active' : ''}`}>Careers</Nav.Link>
                <Nav.Link as={Link} to="/contact-us" className={`me-lg-3 fw-bold text-light ${location.pathname === '/contact-us' ? 'active' : ''}`}>Contact Us</Nav.Link>
              </Nav>
            ) : (
              <Nav className="mx-auto text-center"></Nav>
            )}

            <Nav className="ms-lg-auto d-flex flex-column flex-lg-row align-items-center">
              {isAuthenticated ? (
                <>
                  {/* Hide the welcome message on small and medium devices */}
                  <Nav.Link className="me-lg-3 fw-bold text-light d-none d-lg-block">Welcome, {username}</Nav.Link>
                  {userRole === 'customer' && (
                    <>
                      <Button as={Link} to="/mybookings" className="action-btn my-2 my-lg-0">Bookings</Button>
                      <Button as={Link} to="/update-profile" className="action-btn my-2 my-lg-0">Profile</Button>
                    </>
                  )}
                  <Button className="logout-action-btn my-2 my-lg-0" onClick={handleLogout}>Logout</Button>
                </>
              ) : (
                <>
                  <Dropdown className="my-2 my-lg-0">
                    <Dropdown.Toggle as={Button} className="drop-action-btn">Login</Dropdown.Toggle>
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
    </>
  );
}