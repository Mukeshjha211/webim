import React from "react";
import "./HowItWorks.css";

const steps = [
  {
    step: 1,
    title: "Select Your Template",
    description: "Explore our curated collection of elegant portfolio templates and choose the one that best represents your style and objectives.",
    icon: "https://via.placeholder.com/50x50?text=1"
  },
  {
    step: 2,
    title: "Reach Out to Us",
    description: "Send us a message with your selected template and any specific requirements or preferences you may have.",
    icon: "https://via.placeholder.com/50x50?text=2"
  },
  {
    step: 3,
    title: "Provide Your Details",
    description: "Share the essential information, images, and content you want included in your portfolio to ensure it aligns with your vision.",
    icon: "https://via.placeholder.com/50x50?text=3"
  },
  {
    step: 4,
    title: "Receive Your Customized Portfolio",
    description: "Review your tailored portfolio once it's ready. We offer the flexibility for final tweaks to perfect it to your satisfaction.",
    icon: "https://via.placeholder.com/50x50?text=4"
  },
  {
    step: 5,
    title: "Complete Your Payment",
    description: "Finalize the process by making the payment to officially confirm your order and proceed with the delivery.",
    icon: "https://via.placeholder.com/50x50?text=5"
  },
  {
    step: 6,
    title: "Secure a Custom Domain",
    description: "Enhance your online presence with a custom domain, ensuring your portfolio stands out and is easy to remember.",
    icon: "https://via.placeholder.com/50x50?text=6"
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="how-it-works-section">
      <div className="container">
        <h2 className="how-it-works-title">How It Works</h2>
        <div className="steps">
          {steps.map((step) => (
            <div key={step.step} className="step">
              <img src={step.icon} alt={`Step ${step.step}`} className="step-icon" />
              <div className="step-content">
                <h3 className="step-title">Step {step.step}: {step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
