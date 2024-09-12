import React, { useState } from "react";
import "./Project.css";

// Template data
const templates = [
  {
    id: 1,
    name: "Mukesh Jha's Portfolio",
    image: "https://via.placeholder.com/300x200?text=Mukesh+Jha",
    features: ["Responsive Design", "Modern Layout", "Professional Style"],
    category: "professional",
    demoLink: "https://mukeshjha.netlify.app/",
    previewLink: "https://mukeshjha.netlify.app/"
  },
  {
    id: 2,
    name: "Ishwar Sharma's Portfolio",
    image: "https://via.placeholder.com/300x200?text=Ishwar+Sharma",
    features: ["Creative Animations", "Interactive Layout", "Custom Design"],
    category: "creative",
    demoLink: "https://ishwarsharma.netlify.app/",
    previewLink: "https://ishwarsharma.netlify.app/"
  },
  {
    id: 3,
    name: "Aniket Singh's Portfolio",
    image: "https://via.placeholder.com/300x200?text=Aniket+Singh",
    features: ["Minimalist Design", "Fast Performance", "SEO Optimized"],
    category: "minimalist",
    demoLink: "https://aniketsinghjaat.netlify.app/",
    previewLink: "https://aniketsinghjaat.netlify.app/"
  }
];

const categories = ["all", "creative", "minimalist", "professional"];

const PortfolioGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  const filteredTemplates = templates.filter(template => 
    (selectedCategory === "all" || template.category === selectedCategory) &&
    template.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openModal = (template) => {
    setLoading(true);
    setSelectedTemplate(template);
  };

  const closeModal = () => {
    setSelectedTemplate(null);
  };

  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <section id="portfolio-gallery" className="portfolio-gallery">
      <div className="container">
        <h2 className="gallery-title">Browse Our Templates</h2>

        {/* Search Input */}
        {/* <div className="search-container">
          <input
            type="text"
            placeholder="Search Templates..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div> */}

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
              <button
                className="cta-button"
                onClick={() => openModal(template)}
              >
                View Demo
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for preview */}
      {selectedTemplate && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            {loading && <div className="spinner"></div>}
            <iframe
              src={selectedTemplate.previewLink}
              title={selectedTemplate.name}
              className="iframe-preview"
              onLoad={handleLoad}
            ></iframe>
            <h3>{selectedTemplate.name}</h3>
            <ul>
              {selectedTemplate.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <a href={selectedTemplate.demoLink} className="cta-button" target="_blank" rel="noopener noreferrer">
              View Live Demo
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioGallery;
