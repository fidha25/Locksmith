// // // import { useState } from "react";
// // // import { motion } from "framer-motion";
// // // import { UserPlus, FileText, Briefcase } from "lucide-react";
// // // import "./LocksmithSteps.css";
// // // import "bootstrap/dist/css/bootstrap.min.css";

// // // const steps = [
// // //   {
// // //     title: "Step 1: Register Your Interest",
// // //     description:
// // //       "Click on the 'Sign Up' button and fill out the online application form. We will ask for basic details such as your:",
// // //     list: [
// // //       "Full Name",
// // //       "Contact Information",
// // //       "Location (City/State)",
// // //       "Locksmith Specialization (<strong> Automotive, Residential, Commercial, or Digital Security </strong>)",
// // //     ],
// // //     icon: UserPlus,
// // //   },
// // //   {
// // //     title: "Step 2: Submit Required Documents",
// // //     description:
// // //       "To ensure that we maintain the highest level of service, you must submit the following:",
// // //     list: [
// // //       "<strong>Locksmith License (if applicable in your state)</strong> – NSW, Victoria, Queensland, and other states may have different licensing rules.",
// // //       "<strong>Police Clearance & Background Check</strong> – Security and trust are our top priorities.",
// // //       "<strong>Valid Driver’s License</strong> – As many locksmith jobs require mobile service, a valid license is necessary.",
// // //       "<strong>Experience Proof (Optional) </strong>– If you have prior experience, submit any relevant work history or certifications.",
// // //     ],
// // //     icon: FileText,
// // //   },
// // //   {
// // //     title: "Step 3: Start Receiving Locksmith Jobs",
// // //     description:
// // //       "Once onboarded, you’ll start receiving service requests from homeowners, businesses, and car owners in need of locksmith assistance. You can <strong>choose the jobs that match your skills and availability.</strong>",
// // //     icon: Briefcase,
// // //   },
// // // ];

// // // export default function LocksmithSteps() {
// // //   const [selectedStep, setSelectedStep] = useState(null);

// // //   return (
// // //     <div className="container locksmith-container">
// // //       <h2 className="fw-bold text-black">HOW TO BECOME A LOCKSMITH WITH US?</h2>
// // //       <p className="subheading">
// // //         Joining our locksmith network is a simple and free process. Follow these
// // //         steps to start your locksmith career in Australia.
// // //       </p>
// // //       <div className="lock-steps-container">
// // //         {steps.map((step, index) => (
// // //           <div
// // //             key={index}
// // //             className="step-wrapper"
// // //             onMouseEnter={() => selectedStep === null && setSelectedStep(index)}
// // //             onMouseLeave={() => selectedStep === index && setSelectedStep(null)}
// // //           >
// // //             <motion.div
// // //               className={`lock-step-card ${selectedStep === index ? "selected" : ""}`}
// // //               initial={{ opacity: 0, y: 20 }}
// // //               animate={{ opacity: 1, y: 0 }}
// // //               transition={{ duration: 0.4, delay: index * 0.2 }}
// // //               onClick={() =>
// // //                 setSelectedStep(selectedStep === index ? null : index)
// // //               }
// // //               whileHover={{ scale: 1.05 }}
// // //             >
// // //               <motion.div
// // //                 className="lock-icon-container"
// // //                 animate={{ scale: selectedStep === index ? 1.2 : 1 }}
// // //                 transition={{ duration: 0.3 }}
// // //               >
// // //                 <step.icon className="lock-icon" />
// // //               </motion.div>
// // //               <h3 className="lock-step-title">{step.title}</h3>
// // //               <p
// // //                 className="lock-step-description"
// // //                 dangerouslySetInnerHTML={{ __html: step.description }}
// // //               ></p>
// // //             </motion.div>
// // //             {(selectedStep === index) && step.list && (
// // //               <div className="details-box">
// // //                 <ul>
// // //                   {step.list.map((item, i) => (
// // //                     <li key={i}>
// // //                       <span dangerouslySetInnerHTML={{ __html: item }}></span>
// // //                     </li>
// // //                   ))}
// // //                 </ul>
// // //               </div>
// // //             )}
// // //           </div>
// // //         ))}
// // //       </div>
// // //       <p className="footer-text text-black">No Application Fees! Signing up is completely FREE!</p>
// // //     </div>
// // //   );
// // // }
// // import { useState } from "react";
// // import { motion } from "framer-motion";
// // import { UserPlus, FileText, Briefcase } from "lucide-react";
// // import "./LocksmithSteps.css";
// // import "bootstrap/dist/css/bootstrap.min.css";

// // const steps = [
// //   {
// //     title: "Step 1: Register Your Interest",
// //     description:
// //       "Click on the 'Sign Up' button and fill out the online application form. We will ask for basic details such as your:",
// //     list: [
// //       "Full Name",
// //       "Contact Information",
// //       "Location (City/State)",
// //       "Locksmith Specialization (<strong> Automotive, Residential, Commercial, or Digital Security </strong>)",
// //     ],
// //     icon: UserPlus,
// //   },
// //   {
// //     title: "Step 2: Submit Required Documents",
// //     description:
// //       "To ensure that we maintain the highest level of service, you must submit the following:",
// //     list: [
// //       "<strong>Locksmith License (if applicable in your state)</strong> – NSW, Victoria, Queensland, and other states may have different licensing rules.",
// //       "<strong>Police Clearance & Background Check</strong> – Security and trust are our top priorities.",
// //       "<strong>Valid Driver’s License</strong> – As many locksmith jobs require mobile service, a valid license is necessary.",
// //       "<strong>Experience Proof (Optional) </strong>– If you have prior experience, submit any relevant work history or certifications.",
// //     ],
// //     icon: FileText,
// //   },
// //   {
// //     title: "Step 3: Start Receiving Locksmith Jobs",
// //     description:
// //       "Once onboarded, you’ll start receiving service requests from homeowners, businesses, and car owners in need of locksmith assistance. You can <strong>choose the jobs that match your skills and availability.</strong>",
// //     icon: Briefcase,
// //   },
// // ];

// // export default function LocksmithSteps() {
// //   const [selectedStep, setSelectedStep] = useState(null);

// //   return (
// //     <div className="container locksmith-container">
// //       <h2 className="fw-bold text-black">HOW TO BECOME A LOCKSMITH WITH US?</h2>
// //       <p className="subheading">
// //         Joining our locksmith network is a simple and free process. Follow these
// //         steps to start your locksmith career in Australia.
// //       </p>
// //       <div className="lock-steps-container">
// //         {steps.map((step, index) => (
// //           <div
// //             key={index}
// //             className="step-wrapper"
// //             onMouseEnter={() => selectedStep === null && setSelectedStep(index)}
// //             onMouseLeave={() => selectedStep === index && setSelectedStep(null)}
// //           >
// //             <motion.div
// //               className={`lock-step-card ${selectedStep === index ? "selected" : ""}`}
// //               initial={{ opacity: 0, y: 20 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.4, delay: index * 0.2 }}
// //               onClick={() =>
// //                 setSelectedStep(selectedStep === index ? null : index)
// //               }
// //               whileHover={{ scale: 1.05 }}
// //             >
// //               <div className="lock-step-content">
// //                 <motion.div
// //                   className="lock-icon-container"
// //                   animate={{ scale: selectedStep === index ? 1.2 : 1 }}
// //                   transition={{ duration: 0.3 }}
// //                 >
// //                   <step.icon className="lock-icon" />
// //                 </motion.div>
// //                 <h3 className="lock-step-title">{step.title}</h3>
// //                 <p
// //                   className="lock-step-description"
// //                   dangerouslySetInnerHTML={{ __html: step.description }}
// //                 ></p>
// //               </div>
// //             </motion.div>
// //             {selectedStep === index && step.list && (
// //               <div className="details-box">
// //                 <ul>
// //                   {step.list.map((item, i) => (
// //                     <li key={i}>
// //                       <span dangerouslySetInnerHTML={{ __html: item }}></span>
// //                     </li>
// //                   ))}
// //                 </ul>
// //               </div>
// //             )}
// //           </div>
// //         ))}
// //       </div>
// //       <p className="footer-text text-black">No Application Fees! Signing up is completely FREE!</p>
// //     </div>
// //   );
// // }
// import { useState } from "react";
// import { motion } from "framer-motion";
// import { UserPlus, FileText, Briefcase } from "lucide-react";
// import "./LocksmithSteps.css";
// import "bootstrap/dist/css/bootstrap.min.css";

// const steps = [
//   {
//     title: "Step 1: Register Your Interest",
//     description:
//       "Click on the 'Sign Up' button and fill out the online application form. We will ask for basic details such as your:",
//     list: [
//       "Full Name",
//       "Contact Information",
//       "Location (City/State)",
//       "Locksmith Specialization (<strong> Automotive, Residential, Commercial, or Digital Security </strong>)",
//     ],
//     icon: UserPlus,
//   },
//   {
//     title: "Step 2: Submit Required Documents",
//     description:
//       "To ensure that we maintain the highest level of service, you must submit the following:",
//     list: [
//       "<strong>Locksmith License (if applicable in your state)</strong> – NSW, Victoria, Queensland, and other states may have different licensing rules.",
//       "<strong>Police Clearance & Background Check</strong> – Security and trust are our top priorities.",
//       "<strong>Valid Driver’s License</strong> – As many locksmith jobs require mobile service, a valid license is necessary.",
//       "<strong>Experience Proof (Optional) </strong>– If you have prior experience, submit any relevant work history or certifications.",
//     ],
//     icon: FileText,
//   },
//   {
//     title: "Step 3: Start Receiving Locksmith Jobs",
//     description:
//       "Once onboarded, you’ll start receiving service requests from homeowners, businesses, and car owners in need of locksmith assistance. You can <strong>choose the jobs that match your skills and availability.</strong>",
//     icon: Briefcase,
//   },
// ];

// export default function LocksmithSteps() {
//   const [selectedStep, setSelectedStep] = useState(null);

//   return (
//     <div className="locksmith-container">
//       <div className="locksmith-header">
//         <h2 className="heading">HOW TO BECOME A LOCKSMITH WITH US?</h2>
//         <p className="subheading">
//           Joining our locksmith network is a simple and free process. Follow these
//           steps to start your locksmith career in Australia.
//         </p>
//       </div>
//       <div className="lock-steps-container">
//         {steps.map((step, index) => (
//           <div
//             key={index}
//             className="step-wrapper"
//             onMouseEnter={() => setSelectedStep(index)}
//             onMouseLeave={() => setSelectedStep(null)}
//           >
//             <motion.div
//               className={`lock-step-card ${selectedStep === index ? "selected" : ""}`}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.4, delay: index * 0.2 }}
//               whileHover={{ scale: 1.02 }}
//             >
//               <div className="lock-step-content">
//                 <motion.div
//                   className="lock-icon-container"
//                   animate={{ scale: selectedStep === index ? 1.2 : 1 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <step.icon className="lock-icon" />
//                 </motion.div>
//                 <h3 className="lock-step-title">{step.title}</h3>
//                 <p
//                   className="lock-step-description"
//                   dangerouslySetInnerHTML={{ __html: step.description }}
//                 ></p>
//                 {selectedStep === index && step.list && (
//                   <motion.div
//                     className="details-box"
//                     initial={{ opacity: 0, height: 0 }}
//                     animate={{ opacity: 1, height: "auto" }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <ul>
//                       {step.list.map((item, i) => (
//                         <li key={i}>
//                           <span dangerouslySetInnerHTML={{ __html: item }}></span>
//                         </li>
//                       ))}
//                     </ul>
//                   </motion.div>
//                 )}
//               </div>
//             </motion.div>
//           </div>
//         ))}
//       </div>
//       <p className="footer-text">No Application Fees! Signing up is completely FREE!</p>
//     </div>
//   );
// }
import { useState } from "react";
import { motion } from "framer-motion";
import { UserPlus, FileText, Briefcase } from "lucide-react";
import "./LocksmithSteps.css";
import "bootstrap/dist/css/bootstrap.min.css";

const steps = [
  {
    title: "Step 1: Register Your Interest",
    description:
      "Click on the 'Sign Up' button and fill out the online application form. We will ask for basic details such as your:",
    list: [
      "Full Name",
      "Contact Information",
      "Location (City/State)",
      "Locksmith Specialization (<strong> Automotive, Residential, Commercial, or Digital Security </strong>)",
    ],
    icon: UserPlus,
  },
  {
    title: "Step 2: Submit Required Documents",
    description:
      "To ensure that we maintain the highest level of service, you must submit the following:",
    list: [
      "<strong>Locksmith License (if applicable in your state)</strong> – NSW, Victoria, Queensland, and other states may have different licensing rules.",
      "<strong>Police Clearance & Background Check</strong> – Security and trust are our top priorities.",
      "<strong>Valid Driver’s License</strong> – As many locksmith jobs require mobile service, a valid license is necessary.",
      "<strong>Experience Proof (Optional) </strong>– If you have prior experience, submit any relevant work history or certifications.",
    ],
    icon: FileText,
  },
  {
    title: "Step 3: Start Receiving Locksmith Jobs",
    description:
      "Once onboarded, you’ll start receiving service requests from homeowners, businesses, and car owners in need of locksmith assistance. You can <strong>choose the jobs that match your skills and availability.</strong>",
    icon: Briefcase,
  },
];

export default function LocksmithSteps() {
  const [selectedStep, setSelectedStep] = useState(null);

  return (
    <div className="locksmith-container">
      <div className="locksmith-header">
        <h2 className="fw-bold">HOW TO BECOME A LOCKSMITH WITH US?</h2>
        <p className="subheading">
          Joining our locksmith network is a simple and free process. Follow these
          steps to start your locksmith career in Australia.
        </p>
      </div>
      <div className="lock-steps-container">
        {steps.map((step, index) => (
          <div
            key={index}
            className="step-wrapper"
            onMouseEnter={() => setSelectedStep(index)}
            onMouseLeave={() => setSelectedStep(null)}
          >
            <motion.div
              className={`lock-step-card ${selectedStep === index ? "selected" : ""}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="lock-step-content">
                <motion.div
                  className="lock-icon-container"
                  animate={{ scale: selectedStep === index ? 1.2 : 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <step.icon className="lock-icon" />
                </motion.div>
                <h3 className="lock-step-title">{step.title}</h3>
                <p
                  className="lock-step-description"
                  dangerouslySetInnerHTML={{ __html: step.description }}
                ></p>
                {selectedStep === index && step.list && (
                  <motion.div
                    className="details-box"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                  >
                    <ul>
                      {step.list.map((item, i) => (
                        <li key={i}>
                          <span dangerouslySetInnerHTML={{ __html: item }}></span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
      <p className="footer-text">No Application Fees! Signing up is completely FREE!</p>
    </div>
  );
}