
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './StripeOnboarding.css';

// export default function StripeOnboarding() {
//   const [onboardingLink, setOnboardingLink] = useState(null);
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const userRole = localStorage.getItem('userRole');
//     const accessToken = localStorage.getItem('accessToken');

//     if (userRole !== 'locksmith') {
//       setError('Unauthorized access. Only locksmiths can generate a Stripe onboarding link.');
//       return;
//     }

//     const fetchOnboardingLink = async () => {
//       setLoading(true);
//       try {
//         const response = await axios.get('http://192.168.1.8:8000/api/locksmiths/generate_stripe_onboarding_link/', {
//           headers: {
//             Authorization: `Bearer ${accessToken}`,
//           },
//         });
//         setOnboardingLink(response.data.onboarding_url);
//       } catch (err) {
//         setError('Failed to fetch onboarding link. Please try again.');
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchOnboardingLink();
//   }, []);

//   return (
//     <div className="stripe-onboarding-container">
//       <h2 className="stripe-onboarding-title">Stripe Onboarding</h2>
//       {loading && <p className="stripe-onboarding-loading">Loading...</p>}
//       {error && <p className="stripe-onboarding-error">{error}</p>}
//       {onboardingLink && (
//         <button className="stripe-onboarding-button">
//           <a href={onboardingLink} target="_blank" rel="noopener noreferrer">
//             Go Onboard
//           </a>
//         </button>
//       )}
//     </div>
//   );
// }


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './StripeOnboarding.css';

export default function StripeOnboarding() {
  const [onboardingLink, setOnboardingLink] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const userRole = localStorage.getItem('userRole');
    const accessToken = localStorage.getItem('accessToken');

    if (userRole !== 'locksmith') {
      setError('Unauthorized access. Only locksmiths can generate a Stripe onboarding link.');
      return;
    }

    const fetchOnboardingLink = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://192.168.1.8:8000/api/locksmiths/generate_stripe_onboarding_link/', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setOnboardingLink(response.data.onboarding_url);
      } catch (err) {
        setError('Failed to fetch onboarding link. Please try again.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchOnboardingLink();
  }, []);

  return (
    <div className="stripe-onboarding-container">
      <h2 className="stripe-onboarding-title">Stripe Onboarding</h2>
      {loading && <p className="stripe-onboarding-loading">Loading...</p>}
      {error && <p className="stripe-onboarding-error">{error}</p>}
      {onboardingLink && (
        <button className="stripe-onboarding-button">
          <a href={onboardingLink} target="_blank" rel="noopener noreferrer">
            Go Onboard
          </a>
        </button>
      )}
    </div>
  );
}