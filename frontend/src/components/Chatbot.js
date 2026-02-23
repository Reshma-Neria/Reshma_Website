import React, { useState, useRef, useEffect } from 'react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Hello! I'm here to help you learn more about Reshma's services. How can I assist you today?",
      sender: 'bot'
    }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const responses = {
    greeting: [
      "Hello! Nice to meet you! How can I help you today?",
      "Hi there! I'm here to answer any questions about web development and network engineering services.",
      "Welcome! Feel free to ask me anything about Reshma's professional services."
    ],
    services: [
      "Reshma offers comprehensive professional services including:\n\n🌐 Website Development\n• Custom website design and development\n• React and Node.js applications\n• Responsive and modern UI/UX design\n\n💻 Web Application Development\n• Full-stack web applications\n• Database integration and APIs\n• Real-time features and scalability\n\n🔧 Network Engineering\n• Network design and optimization\n• Infrastructure management\n• Network monitoring and troubleshooting\n• Security protocols implementation\n\n📱 Additional Services\n• Responsive design\n• Maintenance and support\n• IT consulting",
      "Services include:\n• Website Development (React, Node.js)\n• Web Application Development (Full-stack)\n• Network Engineering (Design, Optimization, Monitoring)\n• IT Consulting and Support\n\nAll services are tailored to your specific needs!"
    ],
    website: [
      "Website development services include:\n• Custom website design using React and Node.js\n• Responsive, mobile-friendly designs\n• Modern UI/UX principles\n• SEO optimization\n• Fast loading and performance\n• Maintenance and support\n\nPerfect for businesses, portfolios, and landing pages!",
      "I can help you build a professional website that's modern, responsive, and tailored to your business needs."
    ],
    webapp: [
      "Web application development services include:\n• Full-stack web applications\n• Custom features and functionality\n• Database design and integration\n• RESTful APIs\n• Real-time capabilities\n• Scalable architecture\n• User authentication and security\n\nIdeal for businesses needing custom software solutions!",
      "I specialize in building scalable web applications that solve real business problems with modern technology."
    ],
    network: [
      "Network engineering services include:\n• Network design and architecture\n• Infrastructure optimization\n• Network monitoring solutions\n• Troubleshooting and support\n• Security protocol implementation\n• Performance optimization\n• Capacity planning\n• Network documentation\n\nProfessional network engineering for businesses of all sizes!",
      "With extensive experience as a Network Engineer at CTN (Converged Technology Networks), I can help with network design, optimization, and management projects."
    ],
    experience: [
      "Reshma is a Network Operation Support and Inventory Officer at CTN with extensive experience in:\n• Network operations and engineering\n• System support and maintenance\n• Inventory management systems\n• IT infrastructure management\n• Technical documentation\n• Full-stack web development\n• Network troubleshooting\n• Performance optimization",
      "With professional experience in network engineering and IT support, combined with expertise in modern web technologies, Reshma brings a unique blend of technical skills to every project."
    ],
    contact: [
      "You can reach out for services through:\n• Email (available on request)\n• Social media links (check the Contact page)\n• Direct inquiry through this chatbot\n• Download CV from the Home page\n\nReshma typically responds within 24-48 hours and is available for:\n• Website development projects\n• Web application development\n• Network engineering projects\n• IT consulting",
      "For inquiries, please reach out through the contact information provided. Available for freelance projects in web development and network engineering."
    ],
    pricing: [
      "Pricing varies based on project requirements:\n• Websites: Custom quote based on complexity\n• Web Applications: Project-based pricing\n• Network Engineering: Hourly or project-based\n• Maintenance: Monthly packages available\n\nContact directly for a personalized quote tailored to your specific needs!",
      "Pricing is customized based on your project requirements. Reach out to discuss your needs and get a detailed quote."
    ],
    portfolio: [
      "Check out the Projects page to see examples of work including:\n• Full-stack web applications\n• Network monitoring solutions\n• React-based applications\n• Node.js backend systems\n• Network infrastructure projects\n\nAll projects showcase modern development practices and professional design.",
      "Visit the Projects section to see detailed examples of web development and IT projects."
    ],
    cv: [
      "You can download Reshma's CV from the Home page. Look for the 'Download CV' button in the profile section. The CV contains detailed information about experience, skills, and qualifications.",
      "The CV is available for download on the Home page. It includes comprehensive details about professional experience, technical skills, and qualifications."
    ],
    default: [
      "That's a great question! For more specific information, please visit the Projects or Contact page. I'm here to help with general inquiries about web development, web applications, and network engineering services!",
      "I'd be happy to help! For detailed information, feel free to check out the portfolio projects or reach out directly through the Contact page.",
      "Thanks for your interest! For inquiries about websites, web applications, or network engineering, I recommend checking the Projects section or contacting directly for personalized assistance."
    ]
  };

  const getBotResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return responses.greeting[Math.floor(Math.random() * responses.greeting.length)];
    }
    if (lowerMessage.includes('website') && !lowerMessage.includes('application')) {
      return responses.website[Math.floor(Math.random() * responses.website.length)];
    }
    if (lowerMessage.includes('web application') || lowerMessage.includes('webapp') || (lowerMessage.includes('application') && lowerMessage.includes('web'))) {
      return responses.webapp[Math.floor(Math.random() * responses.webapp.length)];
    }
    if (lowerMessage.includes('network') || lowerMessage.includes('infrastructure') || lowerMessage.includes('network engineer')) {
      return responses.network[Math.floor(Math.random() * responses.network.length)];
    }
    if (lowerMessage.includes('service') || lowerMessage.includes('what can you do') || lowerMessage.includes('develop')) {
      return responses.services[Math.floor(Math.random() * responses.services.length)];
    }
    if (lowerMessage.includes('experience') || lowerMessage.includes('background') || lowerMessage.includes('qualification')) {
      return responses.experience[Math.floor(Math.random() * responses.experience.length)];
    }
    if (lowerMessage.includes('contact') || lowerMessage.includes('reach') || lowerMessage.includes('email') || lowerMessage.includes('phone')) {
      return responses.contact[Math.floor(Math.random() * responses.contact.length)];
    }
    if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('rate') || lowerMessage.includes('charge')) {
      return responses.pricing[Math.floor(Math.random() * responses.pricing.length)];
    }
    if (lowerMessage.includes('project') || lowerMessage.includes('portfolio') || lowerMessage.includes('work') || lowerMessage.includes('example')) {
      return responses.portfolio[Math.floor(Math.random() * responses.portfolio.length)];
    }
    if (lowerMessage.includes('cv') || lowerMessage.includes('resume') || lowerMessage.includes('curriculum')) {
      return responses.cv[Math.floor(Math.random() * responses.cv.length)];
    }
    
    return responses.default[Math.floor(Math.random() * responses.default.length)];
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = {
      text: input,
      sender: 'user'
    };

    setMessages([...messages, userMessage]);
    setInput('');

    // Simulate bot thinking
    setTimeout(() => {
      const botMessage = {
        text: getBotResponse(input),
        sender: 'bot'
      };
      setMessages(prev => [...prev, botMessage]);
    }, 500);
  };

  return (
    <>
      {!isOpen && (
        <button 
          className="chatbot-toggle"
          onClick={() => setIsOpen(true)}
          aria-label="Open chatbot"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        </button>
      )}

      {isOpen && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <div>
              <h3>Professional Services Assistant</h3>
              <p>Ask about web dev, apps & network engineering</p>
            </div>
            <button 
              className="chatbot-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close chatbot"
            >
              ×
            </button>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`chatbot-message ${msg.sender}`}>
                <div className="message-content">
                  {msg.text.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < msg.text.split('\n').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <form className="chatbot-input-form" onSubmit={handleSend}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about services..."
              className="chatbot-input"
            />
            <button type="submit" className="chatbot-send-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="22" y1="2" x2="11" y2="13"/>
                <polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;
