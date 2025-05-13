
import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-white border-b border-gray-200 py-4 px-6 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="flex flex-col items-start">
            <h1 className="text-xl font-playfair font-bold text-french-blue">Lycée Français Jacques Prévert</h1>
            <p className="text-xs text-gray-600">Sénégal - Petite Côte</p>
          </div>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#vision" className="text-gray-700 hover:text-french-blue font-raleway">Vision</a>
          <a href="#missions" className="text-gray-700 hover:text-french-blue font-raleway">Missions</a>
          <a href="#valeurs" className="text-gray-700 hover:text-french-blue font-raleway">Valeurs</a>
          <a href="#psd" className="text-gray-700 hover:text-french-blue font-raleway">Plan Stratégique</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
