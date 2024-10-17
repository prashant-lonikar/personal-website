import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-gray-800 text-white">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">Your Name</Link>
          <button onClick={toggleMenu} className="md:hidden">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
          <ul className="hidden md:flex space-x-4">
            <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
            <li><Link to="/about" className="hover:text-gray-300">About</Link></li>
            <li><Link to="/publications" className="hover:text-gray-300">Publications</Link></li>
            <li><Link to="/blog" className="hover:text-gray-300">Blog</Link></li>
            <li><Link to="/projects" className="hover:text-gray-300">Projects</Link></li>
            <li><Link to="/media" className="hover:text-gray-300">Media</Link></li>
            <li><Link to="/awards" className="hover:text-gray-300">Awards</Link></li>
          </ul>
        </div>
        {isOpen && (
          <ul className="md:hidden mt-4 space-y-2">
            <li><Link to="/" className="block hover:text-gray-300" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/about" className="block hover:text-gray-300" onClick={toggleMenu}>About</Link></li>
            <li><Link to="/publications" className="block hover:text-gray-300" onClick={toggleMenu}>Publications</Link></li>
            <li><Link to="/blog" className="block hover:text-gray-300" onClick={toggleMenu}>Blog</Link></li>
            <li><Link to="/projects" className="block hover:text-gray-300" onClick={toggleMenu}>Projects</Link></li>
            <li><Link to="/media" className="block hover:text-gray-300" onClick={toggleMenu}>Media</Link></li>
            <li><Link to="/awards" className="block hover:text-gray-300" onClick={toggleMenu}>Awards</Link></li>
          </ul>
        )}
      </nav>
    </header>
  );
}

export default Header;