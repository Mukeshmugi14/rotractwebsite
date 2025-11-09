import React, { useState } from 'react';
import { Page } from '../types';
import { NAV_LINKS, LOGO_URL } from '../constants';

interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (page: Page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-dark-navy/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 shadow-lg">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => handleNavClick('Home')}>
           <img src={LOGO_URL} alt="Rotaract Club of Chennai Radiance Risers Logo" className="h-12 w-auto" />
          <span className="text-lg font-bold text-light-slate">Radiance Risers</span>
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 items-center">
          {NAV_LINKS.map(link => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.name)}
              className={`text-sm font-medium transition-colors duration-300 ${
                currentPage === link.name ? 'text-rotary-yellow' : 'text-light-slate hover:text-rotary-yellow'
              }`}
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-light-slate focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Nav */}
      {isMenuOpen && (
        <nav className="md:hidden bg-light-navy">
          <ul className="flex flex-col items-center py-4">
            {NAV_LINKS.map(link => (
              <li key={link.name} className="w-full text-center">
                <button
                  onClick={() => handleNavClick(link.name)}
                  className={`block py-3 w-full text-lg ${
                    currentPage === link.name ? 'text-rotary-yellow bg-dark-navy' : 'text-light-slate hover:bg-dark-navy/50'
                  }`}
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;