import React from "react";
import "./AboutUs.css";

const testimonials = [
  {
    name: "Jane Doe",
    role: "Design Student",
    feedback: "Webim helped me build a stunning portfolio that truly stands out. The process was smooth and the results were exactly what I wanted!"
  },
  {
    name: "John Smith",
    role: "Engineering Student",
    feedback: "The team at Webim was fantastic! They provided me with a professional and functional portfolio quickly. Highly recommended!"
  },
  // Add more testimonials if needed
];

const AboutUs = () => {
  return (
    <section id="about-us" className="about-us-section">
      <div className="container">
        <div className="about-content">
          <h2 className="about-title">Us</h2>
          <p className="about-description">
            At Webim, we are dedicated to helping students build impressive and professional portfolios. Our team is committed to delivering high-quality and affordable solutions that cater to your unique needs. With years of experience and a passion for design, we ensure that every portfolio we create is not just visually appealing but also functional and effective.
          </p>
        </div>
        <div className="why-choose-us">
          <h3 className="why-title">Why Choose Us?</h3>
          <ul className="why-list">
            <li>Affordable Pricing: Quality portfolios at student-friendly prices.</li>
            <li>Professional Design: Modern and sleek templates that make a lasting impression.</li>
            <li>Fast Turnaround: Get your portfolio ready quickly without compromising quality.</li>
            <li>Customizable Options: Tailor your portfolio to your exact preferences and needs.</li>
          </ul>
        </div>
        <div className="testimonials">
          <h3 className="testimonials-title">What Our Clients Say</h3>
          <div className="testimonials-list">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <p className="testimonial-feedback">"{testimonial.feedback}"</p>
                <p className="testimonial-name">- {testimonial.name}, {testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
