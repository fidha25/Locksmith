

// import React, { useRef, useEffect, useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fa1, fa2, fa3, fa4, fa5, fa6 } from '@fortawesome/free-solid-svg-icons';
// import './HowWeWork.css';

// const HowWeWork = () => {
//   const steps = [
//     { id: 1, icon: fa1, text: 'Search for a locksmith in your area.' },
//     { id: 2, icon: fa2, text: 'Check reviews and ratings of locksmiths.' },
//     { id: 3, icon: fa3, text: 'Select a locksmith and request a booking.' },
//     { id: 4, icon: fa4, text: 'Confirm the details and receive a quote.' },
//     { id: 5, icon: fa5, text: 'Locksmith arrives and performs the service.' },
//     { id: 6, icon: fa6, text: 'Make payment and leave a review.' },
//   ];

//   const carouselRef = useRef(null);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const scrollToCard = (index) => {
//     if (carouselRef.current) {
//       const card = carouselRef.current.children[index];
//       const scrollPosition = card.offsetLeft - carouselRef.current.offsetLeft;

//       carouselRef.current.scrollTo({
//         left: scrollPosition,
//         behavior: 'smooth',
//       });
//       setCurrentIndex(index);
//     }
//   };

//   const handleNext = () => {
//     const nextIndex = (currentIndex + 1) % steps.length;
//     scrollToCard(nextIndex);
//   };

//   const handlePrev = () => {
//     const prevIndex = (currentIndex - 1 + steps.length) % steps.length;
//     scrollToCard(prevIndex);
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       handleNext();
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [currentIndex]);

//   return (
//     <div className="container text-center">
//       <h2 className="fw-bold">How We Work</h2>
//       <h4 >Our Process</h4>

//       <div className="position-relative mt-4">
//         <button className="carousel-control-prev" onClick={handlePrev}>&#10094;</button>
//         <div className="d-flex overflow-hidden carousel-container" ref={carouselRef}>
//           {steps.map((step) => (
//             <div key={step.id} className={`card step-card mx-2 ${isMobile ? 'full-width-card' : ''}`}>
//               <div className="card-body">
//                 <FontAwesomeIcon icon={step.icon} size="3x" className="step-icon" />
//                 <p className="card-text mt-3">{step.text}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//         <button className="carousel-control-next" onClick={handleNext}>&#10095;</button>
//       </div>
//     </div>
//   );
// };

// export default HowWeWork;
import React, { useRef, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fa1, fa2, fa3, fa4, fa5 } from '@fortawesome/free-solid-svg-icons';
import './HowWeWork.css';

const HowWeWork = () => {
  const steps = [
    { id: 1, icon: fa1, heading: 'Make a Booking', text: 'Contact us for immediate assistance.' },
    { id: 2, icon: fa2, heading: 'Confirm the Details', text: 'Receive a quick estimate for the service.' },
    { id: 3, icon: fa3, heading: 'Locksmith Arrives ', text: 'Our expert locksmith reaches your location promptly.' },
    { id: 4, icon: fa4, heading: 'Service Execution ', text: 'Your lock or key issue is resolved efficiently.' },
    { id: 5, icon: fa5, heading: 'Payment & Review ', text: 'Secure your property and leave feedback.' },
  ];

  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToCard = (index) => {
    if (carouselRef.current) {
      const card = carouselRef.current.children[index];
      const scrollPosition = card.offsetLeft - carouselRef.current.offsetLeft;

      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      });
      setCurrentIndex(index);
    }
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % steps.length;
    scrollToCard(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + steps.length) % steps.length;
    scrollToCard(prevIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="container text-center">
      <h2 className="fw-bold">HOW WE WORK</h2>
      <h4 className='fw-bold'>Our Process</h4>

      <div className="position-relative mt-4">
        <button className="carousel-control-prev" onClick={handlePrev}>&#10094;</button>
        <div className="d-flex overflow-hidden carousel-container" ref={carouselRef}>
          {steps.map((step) => (
            <div key={step.id} className={`card step-card mx-2 ${isMobile ? 'full-width-card' : ''}`}>
              <div className="card-body">
                <FontAwesomeIcon icon={step.icon} size="3x" className="step-icon" />
                <h5 className="fw-bold mt-3">{step.heading}</h5>
                <p className="card-text mt-2">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-next" onClick={handleNext}>&#10095;</button>
      </div>
    </div>
  );
};

export default HowWeWork;