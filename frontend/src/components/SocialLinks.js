import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa';

const SocialLinks = () => {
  const socialAccounts = [
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/reshma-neria-phakamisa-3388a9346/',
      color: '#0077b5'
    },
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/Reshma-Neria',
      color: '#333'
    },
    {
      name: 'Instagram',
      icon: FaInstagram,
      url: 'https://www.instagram.com/reshma_phakamisa?igsh=MWhmZzRleWI2djloOA==',
      color: '#e4405f'
    },
    {
      name: 'Facebook',
      icon: FaFacebook,
      url: '#', // Add your Facebook URL when available
      color: '#1877f2'
    },
    {
      name: 'Email',
      icon: FaEnvelope,
      url: 'mailto:megandigital49@gmail.com',
      color: '#ea4335'
    }
  ];

  return (
    <div className="social-links">
      <h3>Connect With Me</h3>
      <div className="social-icons">
        {socialAccounts.map((social, idx) => {
          const IconComponent = social.icon;
          return (
            <a
              key={idx}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              style={{ '--social-color': social.color }}
              title={social.name}
            >
              <IconComponent className="social-icon-svg" />
              <span className="social-name">{social.name}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SocialLinks;

