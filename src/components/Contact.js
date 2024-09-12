import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="contact-title">Get in Touch</h2>
        <p className="contact-description">
          Want to get in touch? You can reach out to us directly via our social
          media channels. Just click on the icons below to connect with us!
        </p>
        <div className="contact-links">
          <a
            href="https://www.instagram.com/webim__/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link instagram"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
              alt="Instagram"
              className="contact-icon"
            />
            Instagram
          </a>
          <a
            href="https://x.com/Webim__"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link twitter"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Twitter_X.png/512px-Twitter_X.png?20230729154337"
              alt="Twitter"
              className="contact-icon"
            />
            Twitter
          </a>
          <a
            href="https://www.linkedin.com/in/webim-im-aa3453327/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link linkedin"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
              alt="LinkedIn"
              className="contact-icon"
            />
            LinkedIn
          </a>
          {/* <a
            href="https://www.facebook.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link facebook"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
              alt="Facebook"
              className="contact-icon"
            />
            Facebook
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
