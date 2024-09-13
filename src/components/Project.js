import React, { useState } from "react";
import "./Project.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Template data
const templates = [
  {
    id: 1,
    name: "Mukesh Jha's Portfolio",
    image: "https://via.placeholder.com/300x200?text=Mukesh+Jha",
    features: ["Responsive Design", "Modern Layout", "Professional Style"],
    category: "professional",
    demoLink: "https://mukeshjha.netlify.app/",
    previewLink: "https://mukeshjha.netlify.app/",
  },
  {
    id: 2,
    name: "Ishwar Sharma's Portfolio",
    image: "https://via.placeholder.com/300x200?text=Ishwar+Sharma",
    features: ["Creative Animations", "Interactive Layout", "Custom Design"],
    category: "creative",
    demoLink: "https://ishwarsharma.netlify.app/",
    previewLink: "https://ishwarsharma.netlify.app/",
  },
  {
    id: 3,
    name: "Aniket Singh's Portfolio",
    image: "https://via.placeholder.com/300x200?text=Aniket+Singh",
    features: ["Minimalist Design", "Fast Performance", "SEO Optimized"],
    category: "minimalist",
    demoLink: "https://aniketsinghjaat.netlify.app/",
    previewLink: "https://aniketsinghjaat.netlify.app/",
  },
];

const categories = ["all", "creative", "minimalist", "professional"];

const PortfolioGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [contactMethod, setContactMethod] = useState(false); // Updated to false
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  const filteredTemplates = templates.filter(
    (template) =>
      (selectedCategory === "all" || template.category === selectedCategory) &&
      template.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openModal = (template) => {
    setLoading(true);
    setSelectedTemplate(template);
  };

  const closeModal = () => {
    setSelectedTemplate(null);
    setContactMethod(false); // Reset contact method when modal is closed
  };

  const handleLoad = () => {
    setLoading(false);
  };

  const handleSelectTemplate = () => {
    // Show contact method options and hide the "View Live Demo" button
    setContactMethod(true);
  };

  const handleContactClick = (platform) => {
    const templateData = {
      templateName: selectedTemplate.name,
      templateId: selectedTemplate.id,
    };

    // Redirect to chat with default message and template data
    const chatLinks = {
      facebook: `https://www.instagram.com/webim__/?message=Interested in ${templateData.templateName} template with ID ${templateData.templateId}`,
      twitter: `https://twitter.com/Webim__?text=Interested in ${templateData.templateName} template with ID ${templateData.templateId}`,
      linkedin: `https://www.linkedin.com/in/webim-im-aa3453327?message=Interested in ${templateData.templateName} template with ID ${templateData.templateId}`,
    };

    window.location.href = chatLinks[platform];
  };

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
            <span className="close" onClick={closeModal}>
              &times;
            </span>
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
            {!contactMethod ? (
              <>
                <button
                  className="select-button"
                  onClick={handleSelectTemplate}
                >
                  Select This Template
                </button>
                <a
                  href={selectedTemplate.demoLink}
                  className="cta-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Live Demo
                </a>
              </>
            ) : (
              <div className="contact-modal">
                <div className="contact-modal-content">
                  <h3>How would you like to contact us?</h3>
                  <div className="social-options">
                    <button
                      className="social-button"
                      onClick={() => handleContactClick("facebook")}
                    >
                      <i className="fab fa-instagram"></i>
                      <span className="sr-only">Instagram</span>
                    </button>
                    <button
                      className="social-button"
                      onClick={() => handleContactClick("twitter")}
                    >
                      <i className="fab fa-twitter"></i>
                      <span className="sr-only">Twitter</span>
                    </button>
                    <button
                      className="social-button"
                      onClick={() => handleContactClick("linkedin")}
                    >
                      <i className="fab fa-linkedin-in"></i>
                      <span className="sr-only">LinkedIn</span>
                    </button>
                  </div>
                  <button
                    className="close-modal"
                    onClick={() => setContactMethod(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioGallery;
