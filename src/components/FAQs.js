import React, { useState } from 'react';
import './FAQs.css';

const faqs = [
  {
    question: "What customization options are available?",
    answer: "We offer a range of customization options including color schemes, fonts, and layout modifications. You can select your preferences during the order process."
  },
  {
    question: "How do I make a payment?",
    answer: "Payments can be made through various methods including credit/debit cards and PayPal. Detailed instructions will be provided at checkout."
  },
  {
    question: "What is the delivery time for my portfolio?",
    answer: "Delivery time depends on the complexity of the customization. Typically, it ranges from 3 to 7 business days. We'll provide an estimated delivery time after you place your order."
  },
  {
    question: "Can I request revisions?",
    answer: "Yes, we offer a certain number of revisions as part of our service. Please refer to our revision policy for more details."
  },
  {
    question: "How can I contact support?",
    answer: "You can reach out to our support team via email at support@webim.com or through our contact form available on the website."
  }
];

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="faqs-section">
      <div className="container">
        <h2 className="faqs-title">Frequently Asked Questions</h2>
        <div className="faqs-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                className="faq-question"
                onClick={() => toggleIndex(index)}
              >
                {faq.question}
              </button>
              <div
                className={`faq-answer ${activeIndex === index ? 'show' : ''}`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
