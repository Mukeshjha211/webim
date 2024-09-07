import React from "react";
import "./HeroSection.css"; // Importing your CSS file
import logoImage from "../images/webim.png";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Left side: Headline and CTA */}
        <div className="hero-content">
          <h1 className="hero-title">
            Elevate Your Online Presence with a Custom Portfolio!
          </h1>
          <p className="hero-subtitle">
            Choose from our curated templates and build a stunning portfolio
            that sets you apart. Perfect for students, freelancers, and
            professionals!
          </p>
          <button className="hero-cta">Get Started Today</button>
        </div>

        {/* Right side: Image or mockup */}
        <div className="hero-image">
          <img src={logoImage} alt="Portfolio Mockup" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
