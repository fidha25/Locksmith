// import logo from './logo.svg';
// import 'bootstrap/dist/css/bootstrap.min.css';

// import '@fortawesome/fontawesome-free/css/all.min.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import NavBar from './components/Navbar/Navbar';
// import AboutUs from './Pages/AboutUs';
// import ContactUs from './Pages/ContactUs';
// import Services from './Pages/Services';
// import Home from './Pages/Home';
// import './App.css';
// import SignUpLogin from './Pages/SignUpLogin';

// function App() {
//   return (
//     <Router>
//     <NavBar />
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/about-us" element={<AboutUs />} />
//       <Route path="/services" element={<Services />} />
//       <Route path="/contact-us" element={<ContactUs />} />
//       <Route path="/login" element={<SignUpLogin/>} />
//     </Routes>
//   </Router>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar/Navbar';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import Services from './Pages/Services';
import Home from './Pages/Home';
import Signup from './components/Login/Signup';
import UserSignup from './components/Login/UserSignup';
import Login from './components/Login/Login';
import LockSmithForm from './components/LockSmithForm/LockSmithForm';
import CreateService from './components/CreateServices/CreateServices';
import './App.css';

function App() {
  return (
    <Router>
      <NavBar /> {/* Navbar will be visible on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/signup" element={<Signup />} /> {/* Route for the Login component */}
        <Route path="/usersignup" element={<UserSignup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/locksmith" element={<LockSmithForm />} />
        <Route path="/create-service" element={<CreateService/>} />



      </Routes>
    </Router>
  );
}

export default App;