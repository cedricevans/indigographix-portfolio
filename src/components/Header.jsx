import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-[#0A2342] text-white px-6 py-4 flex justify-between items-center shadow-md z-50 relative">
      <h1 className="text-lg font-bold text-[#FFD700]">IndigoGraphix</h1>

      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-6 text-sm">
        <Link to="/" className="hover:text-[#FFD700] transition">Home</Link>
        <Link to="/about" className="hover:text-[#FFD700] transition">About</Link>
        <Link to="/works" className="hover:text-[#FFD700] transition">Portfolio</Link>
        <Link to="/contact" className="hover:text-[#FFD700] transition">Contact</Link>
      </nav>

      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white"
      >
        {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
      </button>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#13294B] py-4 px-6 space-y-3 md:hidden">
          <Link to="/" onClick={handleLinkClick} className="block text-white hover:text-[#FFD700]">Home</Link>
          <Link to="/about" onClick={handleLinkClick} className="block text-white hover:text-[#FFD700]">About</Link>
          <Link to="/works" onClick={handleLinkClick} className="block text-white hover:text-[#FFD700]">Portfolio</Link>
          <Link to="/contact" onClick={handleLinkClick} className="block text-white hover:text-[#FFD700]">Contact</Link>
        </div>
      )}
    </header>
  );
}
