import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>
          © 2024{' '}
          <a 
            href="https://lyvena.xyz" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-blue-300 transition-colors"
          >
            Lyvena.
          </a>
          {' '}All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;