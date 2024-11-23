import React from 'react';
import { FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p>&copy; 2024 Prashant Lonikar. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="https://www.linkedin.com/in/prashant-lonikar/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/prashant-lonikar" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FaGithub size={24} />
          </a>
          <a href="https://youtube.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FaYoutube size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;