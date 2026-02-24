import React, { useState, useEffect, useRef } from 'react';
import SocialLinks from './SocialLinks';

const Home = () => {
  const [activeService, setActiveService] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const educationRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const header = document.querySelector('.header');
      if (header) {
        if (window.scrollY > 50) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-in, .education-item');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'Reshma_Phakamisa_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const toggleService = (index) => {
    setActiveService(activeService === index ? null : index);
  };

  return (
    <div className="home">
      <div className="profile-section" style={{ backgroundImage: 'url(/graduation.jpeg)' }}>
        <div className="profile-image-container">
          <img 
            src="/profile.jpg" 
            alt="Reshma Phakamisa" 
            className="profile-image"
            onError={(e) => {
              // Try alternative image paths
              if (e.target.src.includes('profile.jpg')) {
                e.target.src = '/reshima.png';
              } else {
                e.target.src = 'https://via.placeholder.com/400';
              }
            }}
          />
        </div>
        <div className="profile-info">
          <h1>Reshma Phakamisa</h1>
          <h2>Cyber Security Specialist | Full Stack Developer | Network Engineer | System Administrator</h2>
          <div className="role-badge">
            <span>Network Operation Support and Inventory Officer at CTN</span>
          </div>
          <p>
            I'm a dedicated IT professional with expertise in cyber security, full-stack development, network engineering, and system administration. 
            Currently working full-time at CTN (Converged Technology Networks) as a Network Operation Support and Inventory Officer, 
            I combine my professional experience in network engineering, security, and system administration with modern web development skills to deliver exceptional digital solutions.
          </p>
         
          <div className="cta-buttons">
            <button onClick={handleDownloadCV} className="btn btn-primary btn-cv">
              📄 Download CV
            </button>
            <a href="/contact" className="btn btn-secondary">
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      <div className="education-section">
        <h2 className="section-title">Education & Certifications</h2>
        <div className="education-timeline" ref={educationRef}>
          <div className="education-item fade-in">
            <div className="education-header">
              <span className="education-year">2020-2025</span>
              <h3>Bachelor's Degree in Computer Systems and Security</h3>
            </div>
            <p className="education-institution">Malawi University of Science and Technology</p>
            <p className="education-details">Specialized in computer systems, network security, and cybersecurity protocols. Comprehensive study of secure system design, threat analysis, and security implementation.</p>
          </div>
          <div className="education-item fade-in">
            <div className="education-header">
              <span className="education-year">2024</span>
              <h3>Mobile App Development Certificate</h3>
            </div>
            <p className="education-institution">Women in Tech</p>
            <p className="education-details">Certified in mobile application development, covering modern mobile development frameworks, UI/UX design for mobile platforms, and cross-platform development.</p>
          </div>
        </div>
      </div>

      <div className="skills-section-professional">
        <h2 className="skills-title-professional">Technical Skills & Expertise</h2>
        <div className="skills-scroll-container">
          <div className="skills-professional-grid skills-auto-scroll">
          <div className="skill-professional-item">
            <h3>Cyber Security</h3>
            <div className="skill-tech-list">
              <span>Security Protocols</span>
              <span>Threat Analysis</span>
              <span>Vulnerability Assessment</span>
              <span>Network Security</span>
              <span>Data Protection</span>
              <span>Security Audits</span>
              <span>Risk Management</span>
            </div>
          </div>

          <div className="skill-professional-item">
            <h3>Frontend Development</h3>
            <div className="skill-tech-list">
              <span>React</span>
              <span>JavaScript (ES6+)</span>
              <span>HTML5</span>
              <span>CSS3</span>
              <span>Responsive Design</span>
              <span>UI/UX Design</span>
              <span>Component Architecture</span>
            </div>
          </div>

          <div className="skill-professional-item">
            <h3>Backend Development</h3>
            <div className="skill-tech-list">
              <span>Node.js</span>
              <span>Express.js</span>
              <span>RESTful APIs</span>
              <span>Database Integration</span>
              <span>Authentication</span>
              <span>API Design</span>
              <span>Server-side Logic</span>
            </div>
          </div>

          <div className="skill-professional-item">
            <h3>Network Engineering</h3>
            <div className="skill-tech-list">
              <span>Network Design</span>
              <span>Infrastructure Management</span>
              <span>Network Monitoring</span>
              <span>Troubleshooting</span>
              <span>Performance Optimization</span>
              <span>Capacity Planning</span>
              <span>Security Protocols</span>
            </div>
          </div>

          <div className="skill-professional-item">
            <h3>System Administration</h3>
            <div className="skill-tech-list">
              <span>Server Management</span>
              <span>System Support</span>
              <span>System Monitoring</span>
              <span>IT Infrastructure</span>
              <span>Process Optimization</span>
              <span>Technical Documentation</span>
              <span>Inventory Management</span>
            </div>
          </div>

          <div className="skill-professional-item">
            <h3>Full-Stack Development</h3>
            <div className="skill-tech-list">
              <span>End-to-end Applications</span>
              <span>Database Design</span>
              <span>Real-time Applications</span>
              <span>Microservices</span>
              <span>Cloud Integration</span>
              <span>Scalable Architecture</span>
              <span>API Development</span>
            </div>
          </div>
          
          {/* Duplicate for seamless scroll */}
          <div className="skill-professional-item">
            <h3>Cyber Security</h3>
            <div className="skill-tech-list">
              <span>Security Protocols</span>
              <span>Threat Analysis</span>
              <span>Vulnerability Assessment</span>
              <span>Network Security</span>
              <span>Data Protection</span>
              <span>Security Audits</span>
              <span>Risk Management</span>
            </div>
          </div>

          <div className="skill-professional-item">
            <h3>Frontend Development</h3>
            <div className="skill-tech-list">
              <span>React</span>
              <span>JavaScript (ES6+)</span>
              <span>HTML5</span>
              <span>CSS3</span>
              <span>Responsive Design</span>
              <span>UI/UX Design</span>
              <span>Component Architecture</span>
            </div>
          </div>

          <div className="skill-professional-item">
            <h3>Backend Development</h3>
            <div className="skill-tech-list">
              <span>Node.js</span>
              <span>Express.js</span>
              <span>RESTful APIs</span>
              <span>Database Integration</span>
              <span>Authentication</span>
              <span>API Design</span>
              <span>Server-side Logic</span>
            </div>
          </div>
        </div>
        </div>
      </div>

      <div className="services-section">
        <h2 className="section-title">Professional Services</h2>
        <div className="services-accordion">
          {[
            { title: 'Website Development', desc: 'Build modern, responsive websites tailored to your business needs using React and Node.js. Perfect for portfolios, business sites, and landing pages.' },
            { title: 'Web Application Development', desc: 'Create custom web applications with full-stack capabilities, databases, APIs, and real-time features. Scalable solutions for businesses of all sizes.' },
            { title: 'Cyber Security', desc: 'Comprehensive cyber security solutions including threat analysis, vulnerability assessments, security implementation, and risk management. Protect your digital assets.' },
            { title: 'Network Engineering', desc: 'Professional network design, infrastructure optimization, monitoring solutions, and network troubleshooting. Expert network engineering services.' },
            { title: 'System Administration', desc: 'Expert system administration services including server management, system monitoring, infrastructure optimization, and technical support.' },
            { title: 'Responsive Design', desc: 'Mobile-first, responsive designs that work perfectly on all devices and screen sizes. Modern UI/UX principles for optimal user experience.' },
            { title: 'Maintenance & Support', desc: 'Ongoing support, updates, and maintenance to keep your websites, applications, and network infrastructure running smoothly.' },
            { title: 'IT Consulting', desc: 'Expert IT consulting services for network optimization, system architecture, technical strategy, and infrastructure planning.' }
          ].map((service, index) => (
            <div 
              key={index} 
              className={`service-item ${activeService === index ? 'active' : ''}`}
              onClick={() => toggleService(index)}
            >
              <div className="service-header">
                <h3>{service.title}</h3>
                <span className="service-icon">▸</span>
              </div>
              <div className="service-content">
                {service.desc}
              </div>
            </div>
          ))}
        </div>
        
      </div>

      {/* Personal Life Section */}
      <div className="personal-life-section">
        <h2 className="section-title">Beyond the Code</h2>
        <p className="personal-intro fade-in">
          While I'm passionate about network engineering and technology, I believe in maintaining a balanced life. 
          Here's a glimpse into who I am beyond my professional work.
        </p>

        {/* Network Engineering - Current Role */}
        <div className="personal-item fade-in">
          <div className="personal-content">
            <h3>Network Engineer</h3>
            <p>
              Currently working as a Network Engineer, I'm deeply involved in designing, implementing, and maintaining 
              network infrastructure. This role allows me to combine my technical expertise with problem-solving skills 
              to ensure reliable and secure network operations. Every day brings new challenges and opportunities to learn 
              and grow in this dynamic field.
            </p>
          </div>
          <div className="personal-photos">
            <div className="photo-item">
              <img src="/network.jpeg" alt="Network Engineering" onError={(e) => e.target.style.display = 'none'} />
            </div>
            <div className="photo-item">
              <img src="/network2.jpeg" alt="Network Infrastructure" onError={(e) => e.target.style.display = 'none'} />
            </div>
          </div>
        </div>

        {/* Yoga Section */}
        <div className="personal-item fade-in yoga-section">
          <div className="personal-content">
            <h3>Yoga for Wellness</h3>
            <p>
              Yoga is an essential part of my life, providing mental clarity, body relaxation, and flexibility. 
              In the fast-paced world of technology, taking time for mindfulness and physical wellness is crucial. 
              Yoga helps me maintain balance, reduce stress, and stay focused both personally and professionally. 
              It's my sanctuary for mental health and physical well-being.
            </p>
          </div>
          <div className="personal-photos yoga-photos">
            <div className="photo-item yoga-photo-1">
              <img src="/resh-yoga.jpeg" alt="Yoga Practice" onError={(e) => e.target.style.display = 'none'} />
            </div>
            <div className="photo-item yoga-photo-2">
              <img src="/resh-yoga2.jpeg" alt="Yoga Wellness" onError={(e) => e.target.style.display = 'none'} />
            </div>
          </div>
        </div>

        {/* Movies Section */}
        <div className="personal-item fade-in movies-section">
          <div className="personal-content">
            <h3>Movie Enthusiast</h3>
            <p>
              I enjoy watching movies as a way to unwind and explore different narratives. My favorite genres include 
              mysterious thrillers that keep me on the edge of my seat, action-packed adventures that get my adrenaline 
              pumping, and comedy films that bring laughter and joy. Movies are a great way to relax after a long day 
              of coding and network troubleshooting.
            </p>
          </div>
          <div className="personal-photos movies-photos">
            <div className="photo-item movie-photo">
              <img src="/movies.png" alt="Movie Collection" onError={(e) => e.target.style.display = 'none'} />
            </div>
          </div>
        </div>

        {/* Conferences & Learning */}
        <div className="personal-item fade-in">
          <div className="personal-content">
            <h3>Continuous Learning & Industry Conferences</h3>
            <p>
              I'm passionate about expanding my knowledge and staying current with the latest trends in the IT industry. 
              Attending conferences is one of my favorite ways to learn from industry leaders, network with peers, and 
              discover new technologies and methodologies. These events provide invaluable insights that I bring back to 
              my work, helping me grow both personally and professionally.
            </p>
          </div>
          <div className="personal-photos">
            <div className="photo-item photo-large">
              <img src="/macra.jpeg" alt="IT Industry Conference" onError={(e) => e.target.style.display = 'none'} />
            </div>
          </div>
        </div>
      </div>

      <SocialLinks />
    </div>
  );
};

export default Home;
