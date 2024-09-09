import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Project.css"; // Ensure you have some styling here

const templates = [
  {
    id: 1,
    name: "Mukesh Jha's Portfolio",
    image: "https://via.placeholder.com/300x200?text=Mukesh+Jha", // Replace with real image if available
    features: ["Responsive Design", "Modern Layout", "Professional Style"],
    category: "professional",
    demoLink: "https://mukeshjha.netlify.app/", // Add the real demo link
  },
  {
    id: 2,
    name: "Ishwar Sharma's Portfolio",
    image: "https://via.placeholder.com/300x200?text=Ishwar+Sharma", // Replace with real image if available
    features: ["Creative Animations", "Interactive Layout", "Custom Design"],
    category: "creative",
    demoLink: "https://ishwarsharma.netlify.app/", // Add the real demo link
  },
  {
    id: 3,
    name: "Aniket Singh's Portfolio",
    image: "https://via.placeholder.com/300x200?text=Aniket+Singh", // Replace with real image if available
    features: ["Minimalist Design", "Fast Performance", "SEO Optimized"],
    category: "minimalist",
    demoLink: "https://aniketsinghjaat.netlify.app/", // Add the real demo link
  },
];

const categories = ["all", "creative", "minimalist", "professional"];

const PortfolioGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredTemplates =
    selectedCategory === "all"
      ? templates
      : templates.filter((template) => template.category === selectedCategory);

  return (
    <section id="portfolio-gallery" className="portfolio-gallery">
      <div className="container">
        <h2 className="gallery-title">Browse Our Templates</h2>

        {/* Filter buttons */}
        <div className="filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-button ${
                selectedCategory === category ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Template cards */}
        <div className="templates">
          {filteredTemplates.map((template) => (
            <div key={template.id} className="template-card">
              <img
                src={template.image}
                alt={template.name}
                className="template-image"
              />
              <h3 className="template-name">{template.name}</h3>
              <ul className="template-features">
                {template.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>

              {/* View Demo button */}
              <a href={template.demoLink} className="cta-button" target="_blank" rel="noopener noreferrer">
                View Demo
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGallery;
