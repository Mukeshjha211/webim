import React from "react";
import "./HowItWorks.css";

const steps = [
  {
    step: 1,
    title: "Choose a Template",
    description: "Browse through our collection of portfolio templates and select one that fits your style and needs.",
    icon: "https://via.placeholder.com/50x50?text=1"
  },
  {
    step: 2,
    title: "Customize It",
    description: "Customize the selected template with your information, images, and preferences.",
    icon: "https://via.placeholder.com/50x50?text=2"
  },
  {
    step: 3,
    title: "Submit & Pay",
    description: "Submit your customization request and proceed with the payment.",
    icon: "https://via.placeholder.com/50x50?text=3"
  },
  {
    step: 4,
    title: "Get Your Portfolio Delivered",
    description: "Receive your customized portfolio and review it. Make any final adjustments if needed.",
    icon: "https://via.placeholder.com/50x50?text=4"
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
