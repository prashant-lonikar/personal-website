import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-800 text-white">
      <nav className="container mx-auto px-4 py-4">
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link to="/about" className="hover:text-gray-300">About</Link></li>
          <li><Link to="/publications" className="hover:text-gray-300">Publications</Link></li>
          <li><Link to="/blog" className="hover:text-gray-300">Blog</Link></li>
          <li><Link to="/projects" className="hover:text-gray-300">Projects</Link></li>
          <li><Link to="/media" className="hover:text-gray-300">Media</Link></li>
          <li><Link to="/awards" className="hover:text-gray-300">Awards</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;