import React, { useState } from 'react';

interface HeaderPropsI {
  title: string;
}

const Header = ({ title }: HeaderPropsI) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <header>
      <div className="logo">
        <h1>{title}</h1>
      </div>
      <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
        ☰
      </button>
      <nav className={isMenuOpen ? 'open' : ''}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;