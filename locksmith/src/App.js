
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import NavBar from './components/Navbar/Navbar';
// import AboutUs from './Pages/AboutUs';
// import ContactUs from './Pages/ContactUs';
// import Services from './Pages/Services';
// import Home from './Pages/Home';
// import Signup from './components/Login/Signup';
// import UserSignup from './components/Login/UserSignup';
// import Login from './components/Login/Login';
// import LockSmithForm from './components/LockSmithForm/LockSmithForm';
// import CreateService from './components/Services copy/CreateServices/CreateServices';
// import './App.css';
// import SnowFallBg from './components/SnowFallBg/SnowFallBg';
// import WaitingForApproval from './components/WaitingForApproval/WaitingForApproval';
// import Footer from './components/Footer/Footer';
// import LockDashboard from './components/LockDasboard/LockDashboard';
// import ResidentialService from './components/DetailedServices/Services/ResidentialService';
// import CommercialService from './components/DetailedServices/Services/CommercialService';
// import AutomotiveService from './components/DetailedServices/Services/AutomotiveService';
// import SmartLockService from './components/DetailedServices/Services/SmartLockService';
// import EmergencyService from './components/DetailedServices/Services/EmergencyService';
// import Automotive from './components/DetailedServices/Services/Automotive';
// import Residential from './components/DetailedServices/Services/Residential';
// import Commercial from './components/DetailedServices/Services/Commercial';
// import Emergency from './components/DetailedServices/Services/Emergency';
// import SmartLock from './components/DetailedServices/Services/SmartLock';
// import Careers from './Pages/Careers';
// import CreateStripeAccount from './components/CreateStripeAccount/CreateStripeAccount';
// import StripeOnboarding from './components/StripeOnboarding/StripeOnboarding';
// import MyBookings from './components/MyBookings/MyBookings';
// import UserProfile from './components/UserProfile/UserProfile';
// import ConfirmPayment from './components/DetailedServices/Services/ConfirmPayment';
// import SuccessPayment from './components/SuccessPayment/SuccessPayment';
// import FAQ from './components/FAQ/FAQ';
// import ContactUsOne from './components/ContactUsOne/ContactUsOne';



// function App() {
//   return (
//     <Router>
//       <NavBar /> 
//       {/* <SnowFallBg/> */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about-us" element={<AboutUs />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/careers" element={<Careers />} />

//         <Route path="/contact-us" element={<ContactUs />} />
//         <Route path="/signup" element={<Signup />} /> {/* Route for the Login component */}
//         <Route path="/usersignup" element={<UserSignup />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/mybookings" element={<MyBookings />} />    
//         <Route path="/update-profile" element={<UserProfile />} />
//         <Route path="/confirm-payment" element={<ConfirmPayment />} />
//         <Route path="/success-payment" element={<SuccessPayment/>} />
//         <Route path="/locksmith" element={<LockSmithForm />} />
//         <Route path="/create-service" element={<CreateService/>} />
//         <Route path="/waiting-for-approval" element={<WaitingForApproval />} />
//         <Route path="/create-stripe" element={<CreateStripeAccount />} />
//         <Route path="/stripe-onboard" element={<StripeOnboarding />} />
//         <Route path="/lock-dashboard" element={<LockDashboard />} />


//         <Route path="/residential-service" element={<ResidentialService />} />
//         <Route path="/automotive-service" element={<AutomotiveService />} />
//         <Route path="/commercial-service" element={<CommercialService />} />
//         <Route path="/emergency-service" element={<EmergencyService />} />
//         <Route path="/smart-lock-service" element={<SmartLockService/>} />

//         <Route path="/residential" element={<Residential />} />
//         <Route path="/automotive" element={<Automotive/>} />
//         <Route path="/commercial" element={<Commercial />} />
//         <Route path="/emergency" element={<Emergency/>} />
//         <Route path="/smart-lock" element={<SmartLock/>} />

//         <Route path="/faq" element={<FAQ/>} />
//         <Route path="/contact-support" element={<ContactUsOne/>} />


//       </Routes>
//       <Footer/>
//     </Router>
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
import CreateService from './components/Services copy/CreateServices/CreateServices';
import './App.css';
import WaitingForApproval from './components/WaitingForApproval/WaitingForApproval';
import Footer from './components/Footer/Footer';
import LockDashboard from './components/LockDasboard/LockDashboard';
import ResidentialService from './components/DetailedServices/Services/ResidentialService';
import CommercialService from './components/DetailedServices/Services/CommercialService';
import AutomotiveService from './components/DetailedServices/Services/AutomotiveService';
import SmartLockService from './components/DetailedServices/Services/SmartLockService';
import EmergencyService from './components/DetailedServices/Services/EmergencyService';
import Automotive from './components/DetailedServices/Services/Automotive';
import Residential from './components/DetailedServices/Services/Residential';
import Commercial from './components/DetailedServices/Services/Commercial';
import Emergency from './components/DetailedServices/Services/Emergency';
import SmartLock from './components/DetailedServices/Services/SmartLock';
import Careers from './Pages/Careers';
import CreateStripeAccount from './components/CreateStripeAccount/CreateStripeAccount';
import StripeOnboarding from './components/StripeOnboarding/StripeOnboarding';
import MyBookings from './components/MyBookings/MyBookings';
import UserProfile from './components/UserProfile/UserProfile';
import ConfirmPayment from './components/DetailedServices/Services/ConfirmPayment';
import SuccessPayment from './components/SuccessPayment/SuccessPayment';
import FAQ from './components/FAQ/FAQ';
import ContactUsOne from './components/ContactUsOne/ContactUsOne';
import NotFound from './components/NotFound/NotFound';


function App() {
  return (
    <Router>
      <NavBar /> 
      {/* <SnowFallBg/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/usersignup" element={<UserSignup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mybookings" element={<MyBookings />} />    
        <Route path="/update-profile" element={<UserProfile />} />
        <Route path="/confirm-payment" element={<ConfirmPayment />} />
        <Route path="/success-payment" element={<SuccessPayment/>} />
        <Route path="/locksmith" element={<LockSmithForm />} />
        <Route path="/create-service" element={<CreateService/>} />
        <Route path="/waiting-for-approval" element={<WaitingForApproval />} />
        <Route path="/create-stripe" element={<CreateStripeAccount />} />
        <Route path="/stripe-onboard" element={<StripeOnboarding />} />
        <Route path="/lock-dashboard" element={<LockDashboard />} />
        <Route path="/residential-service" element={<ResidentialService />} />
        <Route path="/automotive-service" element={<AutomotiveService />} />
        <Route path="/commercial-service" element={<CommercialService />} />
        <Route path="/emergency-service" element={<EmergencyService />} />
        <Route path="/smart-lock-service" element={<SmartLockService/>} />
        <Route path="/residential" element={<Residential />} />
        <Route path="/automotive" element={<Automotive/>} />
        <Route path="/commercial" element={<Commercial />} />
        <Route path="/emergency" element={<Emergency/>} />
        <Route path="/smart-lock" element={<SmartLock/>} />
        <Route path="/faq" element={<FAQ/>} />
        <Route path="/contact-support" element={<ContactUsOne/>} />
        <Route path="*" element={<NotFound />} />
        {/* <Route path="*" element={<SuccessPayment />} /> */}

      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
