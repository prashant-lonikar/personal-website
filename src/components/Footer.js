import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <p>&copy; 2024 Your Name. All rights reserved.</p>
        <div className="space-x-4">
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">LinkedIn</a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">GitHub</a>
          <a href="https://youtube.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">YouTube</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;