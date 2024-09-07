import React from "react";
import "./Pricing.css";

const pricingPlans = [
  {
    plan: "Basic",
    price: "$50",
    features: [
      "One-page portfolio template",
      "Basic customization (text and images)",
      "Mobile-friendly design",
      "1 year of hosting (optional)",
    ],
  },
  {
    plan: "Standard",
    price: "$100",
    features: [
      "Multi-page portfolio template",
      "Advanced customization options",
      "SEO optimization",
      "1 year of hosting included",
      "Additional design revisions",
    ],
  },
  {
    plan: "Premium",
    price: "$150",
    features: [
      "Custom portfolio template",
      "Comprehensive customization",
      "SEO optimization",
      "1 year of hosting included",
      "Priority support",
      "Additional design revisions",
    ],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="pricing-section">
      <div className="container">
        <h2 className="pricing-title">Our Pricing Plans</h2>
        <div className="pricing-table">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="pricing-card">
              <h3 className="pricing-plan">{plan.plan}</h3>
              <p className="pricing-price">{plan.price}</p>
              <ul className="pricing-features">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <a href="#" className="cta-button">
                Choose Plan
              </a>
            </div>
          ))}
        </div>
        <div className="pricing-discounts">
          <p>
            <strong>Student Discount:</strong> Get 20% off with a valid student
            ID!
          </p>
          <p>
            <strong>Bulk Offer:</strong> Contact us for group discounts on 5 or
            more portfolios.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
