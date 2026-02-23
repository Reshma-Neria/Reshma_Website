import React, { useState } from 'react';
import SocialLinks from './SocialLinks';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, this would send the form data to a backend
    alert('Thank you for your inquiry! I will get back to you within 24-48 hours.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'Reshma_Phakamisa_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="section">
      <h2 className="section-title">Get In Touch</h2>
      
      <div className="contact-hero fade-in">
        <h2>Ready to Start Your Project?</h2>
        <p>
          I'm available for professional services! Whether you need a website, web application, 
          network engineering services, or IT consulting, I'm here to help bring your vision to life.
        </p>
      </div>

      <div className="contact-container">
        <div className="contact-form-section">
          <h3>Send Me a Message</h3>
          <p>Fill out the form below and I'll get back to you as soon as possible!</p>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Service Type *</label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              >
                <option value="">Select a service</option>
                <option value="website-development">Website Development</option>
                <option value="web-application">Web Application Development</option>
                <option value="network-engineering">Network Engineering</option>
                <option value="it-consulting">IT Consulting</option>
                <option value="maintenance">Maintenance & Support</option>
                <option value="other">Other Inquiry</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
              />
            </div>
            <button type="submit" className="btn btn-primary btn-large">
              Send Message
            </button>
          </form>
        </div>

        <div className="contact-info-section">
          <h3>Contact Information</h3>
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="currentColor"/>
                </svg>
              </div>
              <div>
                <strong>Email</strong>
                <p><a href="mailto:megandigital49@gmail.com" style={{ color: '#6C91BF', textDecoration: 'none' }}>megandigital49@gmail.com</a></p>
                <p style={{ fontSize: '0.9rem', color: '#B0BEC5', marginTop: '0.5rem' }}>
                  For all service inquiries
                </p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6H12L10 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8C22 6.9 21.1 6 20 6ZM20 18H4V8H20V18Z" fill="currentColor"/>
                </svg>
              </div>
              <div>
                <strong>Current Position</strong>
                <p>Network Operation Support and Inventory Officer</p>
                <p style={{ fontSize: '0.9rem', color: '#B0BEC5' }}>CTN (Converged Technology Networks)</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="currentColor"/>
                </svg>
              </div>
              <div>
                <strong>Services Offered</strong>
                <p>Website & Web App Development</p>
                <p style={{ fontSize: '0.9rem', color: '#B0BEC5' }}>
                  Network Engineering & IT Consulting
                </p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12.5 7H11V13L16.25 16.15L17 14.92L12.5 12.25V7Z" fill="currentColor"/>
                </svg>
              </div>
              <div>
                <strong>Response Time</strong>
                <p>Typically within 24-48 hours</p>
                <p style={{ fontSize: '0.9rem', color: '#B0BEC5' }}>
                  For all service inquiries
                </p>
              </div>
            </div>
          </div>

          <div className="availability-box">
            <h4>Available For:</h4>
            <ul>
              <li>✅ Website Development Projects</li>
              <li>✅ Web Application Development</li>
              <li>✅ Network Engineering Projects</li>
              <li>✅ Network Design & Optimization</li>
              <li>✅ IT Consulting & Technical Advice</li>
              <li>✅ Maintenance & Support Services</li>
            </ul>
          </div>

          <div className="cv-download-box">
            <h4>📄 Download CV</h4>
            <p>Get detailed information about experience, skills, and qualifications</p>
            <button onClick={handleDownloadCV} className="btn btn-secondary">
              Download CV
            </button>
          </div>
        </div>
      </div>

      <SocialLinks />
    </div>
  );
};

export default Contact;
