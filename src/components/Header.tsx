
import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <div className="w-12 h-12 bg-school-primary rounded-full flex items-center justify-center text-white font-bold text-xl mr-3">
            ES
          </div>
          <h1 className="text-2xl font-bold text-school-primary">Excellence School</h1>
        </div>
        
        <nav className="flex flex-wrap justify-center gap-2 md:gap-6">
          <a href="#home" className="px-3 py-2 text-school-primary hover:text-school-secondary transition-colors">
            Home
          </a>
          <a href="#about" className="px-3 py-2 text-school-primary hover:text-school-secondary transition-colors">
            About
          </a>
          <a href="#faculty" className="px-3 py-2 text-school-primary hover:text-school-secondary transition-colors">
            Faculty
          </a>
          <a href="#alumni" className="px-3 py-2 text-school-primary hover:text-school-secondary transition-colors">
            Alumni
          </a>
          <a href="#admission" className="px-3 py-2 text-school-primary hover:text-school-secondary transition-colors">
            Admission
          </a>
          <a href="#contact" className="px-3 py-2 text-school-primary hover:text-school-secondary transition-colors">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
