import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto">
        <h1 className="text-2xl">Slava Portofolio</h1>
        <nav>
          <a href="#about" className="mr-4">About</a>
          <a href="#projects" className="mr-4">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
