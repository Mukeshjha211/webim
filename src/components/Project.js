import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Project.css";

const templates = [
  {
    id: 1,
    name: "Minimalist Pro",
    image: "https://via.placeholder.com/300x200?text=Minimalist+Pro",
    features: ["Responsive Design", "Clean Layout", "Easy Customization"],
    category: "minimalist",
  },
  {
    id: 2,
    name: "Creative Spark",
    image: "https://via.placeholder.com/300x200?text=Creative+Spark",
    features: ["Modern Design", "Dynamic Animations", "Interactive Elements"],
    category: "creative",
  },
  // Add more dummy templates if needed
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
              <Link to={`/portfolio/${template.id}`} className="cta-button">
                View Demo
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGallery;
