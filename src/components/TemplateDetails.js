import React from 'react';
import { useParams } from 'react-router-dom';
import './TemplateDetails.css';

// Real data for testing
const templateData = [
  {
    id: 1,
    name: "Mukesh Jha's Portfolio",
    image: "https://mukeshjha.netlify.app/images/thumbnail.jpg", // Replace with real image URL if available
    features: ["Responsive Design", "Modern Layout", "Professional Style"],
    customization: ["Color Schemes", "Fonts", "Layout Options"],
    price: "$75", // Adjust pricing if needed
    testimonials: [
      "Great template! Easy to customize and looks professional.",
      "Perfect for my portfolio. The responsive design is excellent."
    ]
  },
  {
    id: 2,
    name: "Ishwar Sharma's Portfolio",
    image: "https://ishwarsharma.netlify.app/images/thumbnail.jpg", // Replace with real image URL if available
    features: ["Creative Animations", "Interactive Layout", "Custom Design"],
    customization: ["Color Schemes", "Fonts", "Animations"],
    price: "$100", // Adjust pricing if needed
    testimonials: [
      "Amazing design! The animations really make my portfolio stand out.",
      "Love the interactive elements. Highly recommend this template."
    ]
  },
  {
    id: 3,
    name: "Aniket Singh's Portfolio",
    image: "https://aniketsinghjaat.netlify.app/images/thumbnail.jpg", // Replace with real image URL if available
    features: ["Minimalist Design", "Fast Performance", "SEO Optimized"],
    customization: ["Color Schemes", "Fonts", "Layout Options"],
    price: "$85", // Adjust pricing if needed
    testimonials: [
      "A clean and effective design. Ideal for a minimalist approach.",
      "The performance is outstanding. Highly satisfied with this template."
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
