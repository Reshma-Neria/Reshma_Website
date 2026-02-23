import React from 'react';

// Artwork Components
const PortfolioArtwork = () => (
  <div className="artwork-container portfolio-art">
    <div className="browser-window">
      <div className="browser-header">
        <div className="browser-dots">
          <span></span><span></span><span></span>
        </div>
      </div>
      <div className="browser-content">
        <div className="code-lines">
          <div className="code-line"></div>
          <div className="code-line"></div>
          <div className="code-line"></div>
          <div className="code-line short"></div>
        </div>
      </div>
    </div>
    <div className="floating-elements">
      <div className="float-element float-1"></div>
      <div className="float-element float-2"></div>
      <div className="float-element float-3"></div>
    </div>
  </div>
);

const NetworkDashboardArtwork = () => (
  <div className="artwork-container network-art">
    <div className="network-nodes">
      <div className="node node-1"></div>
      <div className="node node-2"></div>
      <div className="node node-3"></div>
      <div className="node node-4"></div>
      <div className="node node-5"></div>
      <div className="connection-line line-1"></div>
      <div className="connection-line line-2"></div>
      <div className="connection-line line-3"></div>
      <div className="connection-line line-4"></div>
    </div>
    <div className="chart-bars">
      <div className="bar bar-1"></div>
      <div className="bar bar-2"></div>
      <div className="bar bar-3"></div>
      <div className="bar bar-4"></div>
    </div>
  </div>
);

const InventoryArtwork = () => (
  <div className="artwork-container inventory-art">
    <div className="inventory-grid">
      <div className="inventory-box box-1">
        <div className="box-label"></div>
      </div>
      <div className="inventory-box box-2">
        <div className="box-label"></div>
      </div>
      <div className="inventory-box box-3">
        <div className="box-label"></div>
      </div>
      <div className="inventory-box box-4">
        <div className="box-label"></div>
      </div>
    </div>
    <div className="scan-line"></div>
  </div>
);

const TicketSystemArtwork = () => (
  <div className="artwork-container ticket-art">
    <div className="tickets-stack">
      <div className="ticket ticket-1">
        <div className="ticket-header"></div>
        <div className="ticket-body"></div>
      </div>
      <div className="ticket ticket-2">
        <div className="ticket-header"></div>
        <div className="ticket-body"></div>
      </div>
      <div className="ticket ticket-3">
        <div className="ticket-header"></div>
        <div className="ticket-body"></div>
      </div>
    </div>
    <div className="notification-badge"></div>
  </div>
);

const NetworkInfrastructureArtwork = () => (
  <div className="artwork-container infrastructure-art">
    <div className="infrastructure-topology">
      <div className="topology-node core-node"></div>
      <div className="topology-node edge-node-1"></div>
      <div className="topology-node edge-node-2"></div>
      <div className="topology-node edge-node-3"></div>
      <div className="topology-node edge-node-4"></div>
      <div className="topology-connection conn-1"></div>
      <div className="topology-connection conn-2"></div>
      <div className="topology-connection conn-3"></div>
      <div className="topology-connection conn-4"></div>
    </div>
    <div className="signal-waves">
      <div className="wave wave-1"></div>
      <div className="wave wave-2"></div>
      <div className="wave wave-3"></div>
    </div>
  </div>
);

const Projects = () => {

  const itProjects = [
    {
      title: "Professional Portfolio Website",
      description: "A modern, responsive portfolio website built with React and Node.js. Features include dynamic routing, component-based architecture, and a clean, professional design. This project demonstrates full-stack development capabilities with a focus on user experience and modern web technologies.",
      technologies: ["React", "Node.js", "Express", "CSS3", "JavaScript"],
      features: ["Responsive Design", "Dynamic Routing", "Component Architecture", "RESTful API", "Modern UI/UX"]
    },
    {
      title: "Network Monitoring Dashboard",
      description: "A comprehensive network monitoring system developed to track network performance, analyze metrics, and generate real-time reports. Built with modern web technologies to provide IT professionals with actionable insights into network operations.",
      technologies: ["React", "Node.js", "WebSocket", "Chart.js", "RESTful API"],
      features: ["Real-time Monitoring", "Performance Analytics", "Report Generation", "Alert System", "Data Visualization"]
    },
    {
      title: "Inventory Management System",
      description: "A full-featured inventory management application designed to streamline inventory tracking, organization, and reporting. Features include barcode scanning, automated alerts, and comprehensive reporting capabilities.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Material-UI"],
      features: ["Inventory Tracking", "Automated Reports", "Search & Filter", "Category Management", "Data Export"]
    },
    {
      title: "IT Support Ticket System",
      description: "A web-based ticketing system for managing IT support requests. Allows users to create, track, and resolve support tickets with features like priority levels, status tracking, and automated notifications.",
      technologies: ["React", "Node.js", "Express", "Socket.io", "JWT Authentication"],
      features: ["Ticket Management", "Real-time Updates", "Priority System", "User Authentication", "Email Notifications"]
    },
    {
      title: "Network Infrastructure Design & Optimization",
      description: "Professional network engineering project involving network architecture design, infrastructure optimization, and performance tuning. Includes network monitoring, security implementation, and capacity planning for enterprise-level solutions.",
      technologies: ["Network Design", "Infrastructure Management", "Security Protocols", "Performance Optimization"],
      features: ["Network Architecture", "Security Implementation", "Performance Monitoring", "Capacity Planning", "Documentation"]
    }
  ];

  return (
    <div className="section">
      <h2 className="section-title">IT & Web Development Projects</h2>
      
      <div className="projects-intro fade-in">
        <p>Explore my portfolio of IT, web development, and network engineering projects. Each project demonstrates expertise in modern web technologies, 
        network infrastructure, problem-solving, and creating solutions that make a difference. I'm available for website development, 
        web application development, and network engineering projects - let's build something amazing together!</p>
      </div>

      <div className="projects-creative">
        {itProjects.map((project, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div 
              key={idx} 
              className={`project-item-creative ${isEven ? 'project-left' : 'project-right'}`}
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              <div className="project-number-creative">0{idx + 1}</div>
              
              {/* Project Artwork - positioned on the free space side */}
              <div className={`project-artwork ${isEven ? 'artwork-right' : 'artwork-left'}`}>
                {idx === 0 && <PortfolioArtwork />}
                {idx === 1 && <NetworkDashboardArtwork />}
                {idx === 2 && <InventoryArtwork />}
                {idx === 3 && <TicketSystemArtwork />}
                {idx === 4 && <NetworkInfrastructureArtwork />}
              </div>
              
              <div className="project-content-creative">
                <h3 className="project-title-creative">{project.title}</h3>
                <p className="project-description-creative">{project.description}</p>
                
                <div className="project-tech-creative">
                  <span className="tech-label">Technologies</span>
                  <div className="tech-tags-creative">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="tech-tag-creative">{tech}</span>
                    ))}
                  </div>
                </div>
                
                <div className="project-features-creative">
                  <span className="features-label">Key Features</span>
                  <ul className="features-list-creative">
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;

