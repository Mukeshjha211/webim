import React from "react";
import "./AboutUs.css";

const testimonials = [
  {
    name: "Mukesh Jha",
    role: "Full Stack Developer",
    feedback: "Webim transformed my portfolio into a masterpiece! Their attention to detail and creativity made my work stand out in a highly competitive field. The project was delivered on time, and the support was exceptional. I couldn’t be happier with the results!"
  },
  {
    name: "Aniket Singh",
    role: "Web3 Enthusiast",
    feedback: "The team at Webim exceeded my expectations. They provided a sleek, professional portfolio that perfectly captures my vision in the Web3 space. The whole process was seamless, and their quick turnaround was impressive. I highly recommend Webim for anyone looking to elevate their professional presence."
  },
  {
    name: "Ishwar Sharma",
    role: "Marketing Specialist",
    feedback: "I was blown away by the quality of my new portfolio. Webim’s design expertise and personalized approach resulted in a portfolio that not only looks great but also effectively showcases my skills and achievements. Their dedication to client satisfaction is truly commendable."
  },
];

const AboutUs = () => {
  return (
    <section id="about-us" className="about-us-section">
      <div className="container">
        <div className="about-content">
          <h2 className="about-title">About Us</h2>
          <p className="about-description">
            At Webim, we are dedicated to helping students and professionals build impressive and impactful portfolios. Our team combines creativity with technical expertise to deliver high-quality, affordable solutions tailored to your unique needs. With a passion for design and a commitment to excellence, we ensure that every portfolio we create is not just visually stunning but also highly functional and effective.
          </p>
        </div>
        <div className="why-choose-us">
          <h3 className="why-title">Why Choose Us?</h3>
          <ul className="why-list">
            <li>**Affordable Pricing:** Get exceptional portfolios at student-friendly rates without compromising quality.</li>
            <li>**Professional Design:** Experience modern, elegant templates that make a memorable impression.</li>
            <li>**Fast Turnaround:** Receive a polished portfolio quickly, ensuring you meet your deadlines with ease.</li>
            <li>**Customizable Options:** Enjoy tailored solutions that perfectly align with your personal style and requirements.</li>
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
