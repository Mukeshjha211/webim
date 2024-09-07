import React from 'react';
import { useParams } from 'react-router-dom';
import './TemplateDetails.css';

// Dummy data for testing
const templateData = [
  {
    id: 1,
    name: "Minimalist Pro",
    image: "https://via.placeholder.com/1200x600?text=Minimalist+Pro+Demo",
    features: ["Responsive Design", "Clean Layout", "Easy Customization"],
    customization: ["Color Schemes", "Fonts", "Layout Options"],
    price: "$75",
    testimonials: [
      "Great template! Easy to customize and looks professional.",
      "Perfect for my portfolio. The responsive design is excellent."
    ]
  },
  {
    id: 2,
    name: "Creative Spark",
    image: "https://via.placeholder.com/1200x600?text=Creative+Spark+Demo",
    features: ["Modern Design", "Dynamic Animations", "Interactive Elements"],
    customization: ["Color Schemes", "Fonts", "Animations"],
    price: "$100",
    testimonials: [
      "Amazing design! The animations really make my portfolio stand out.",
      "Love the interactive elements. Highly recommend this template."
    ]
  }
];

const TemplateDetails = () => {
  const { id } = useParams(); // Get the template ID from the URL
  const template = templateData.find(t => t.id === parseInt(id));

  if (!template) {
    return <div>Template not found</div>;
  }

  return (
    <section id="template-details" className="template-details">
      <div className="container">
        <h1 className="template-title">{template.name}</h1>
        <div className="template-demo">
          <img src={template.image} alt={`${template.name} Demo`} />
        </div>
        <div className="template-info">
          <h2>Features</h2>
          <ul className="template-features">
            {template.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <h2>Customization Options</h2>
          <ul className="template-customization">
            {template.customization.map((option, index) => (
              <li key={index}>{option}</li>
            ))}
          </ul>
          <h2>Pricing</h2>
          <p className="template-price">{template.price}</p>
          <button className="cta-button">Choose This Template</button>
          <h2>Testimonials</h2>
          <ul className="template-testimonials">
            {template.testimonials.map((testimonial, index) => (
              <li key={index}>"{testimonial}"</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TemplateDetails;
