
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import "./FAQ.css"; // Import external CSS

const faqs = [
  { question: " Are locksmith prices higher after normal business hours?", answer: "Yes, emergency locksmith services may have slightly higher charges after regular hours, on weekends, or during holidays. This is due to the urgency of the service and availability of our technicians. However, we always provide a price estimate before starting any work so you know what to expect." },
  { question: "Where can I find more details about your services?", answer: "You can explore our website for details on <strong>lock replacements, security system installations, car key duplication</strong>, and other services. If you have specific questions, our customer support team is happy to assist." },
  { question: "Can a locksmith open any lock?", answer: "Yes, our locksmiths are trained to open all types of locks, including <strong>residential door locks, commercial security locks, car locks, and digital keypads</strong. We use professional tools to unlock doors safely without damaging the lock or door frame." },
  { question: "How much does a locksmith service cost?", answer: "The cost depends on the service you need. A simple <strong>key duplication or lock repair</strong> is usually affordable, while <strong>advanced security installations</strong> or <strong>emergency lockout assistance</strong> may cost more. Contact us for a quote based on your needs." },
  { question: "Do you provide locksmith services in my city?", answer: "Yes! We serve customers in <strong>Brisbane, Canberra, Sydney, Melbourne, Adelaide, and Perth</strong>. Our team is available for <strong>residential, commercial, and automotive locksmith services </strong>across these areas." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="fw-bold">FREQUENTLY ASKED QUESTIONS

      </h2>
     
      <div className="faq-grid">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-card">
            <button
              className={`faq-question ${openIndex === index ? "active" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              {openIndex === index ? <ChevronUp /> : <ChevronDown />}
            </button>
            <div
  className={`faq-answer ${openIndex === index ? "show" : ""}`}
  dangerouslySetInnerHTML={{ __html: faq.answer }}
></div>
          </div>
        ))}
      </div>
    </div>
  );
}
