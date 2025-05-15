
import React from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  showLogo?: boolean;
}

const Navbar = ({ showLogo = false }: NavbarProps) => {
  return (
    <header className="bg-white border-b border-gray-200 py-4 px-6 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          {showLogo && (
            <img src="https://i.imgur.com/0YmGlXO.png" alt="LFJP Logo" className="h-14 w-auto" />
          )}
          <div className="flex flex-col items-start">
            <h1 className="text-xl font-playfair font-bold text-french-blue">Lycée Français Jacques Prévert</h1>
            <p className="text-xs text-gray-600">Sénégal - Petite Côte</p>
          </div>
        </div>
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-700 hover:text-french-blue font-raleway">Accueil</Link>
          <Link to="/vision-missions-valeurs" className="text-gray-700 hover:text-french-blue font-raleway">Vision & Valeurs</Link>
          <Link to="/diagnostique" className="text-gray-700 hover:text-french-blue font-raleway">Diagnostique</Link>
          <Link to="/plan-strategique" className="text-gray-700 hover:text-french-blue font-raleway">Plan Stratégique</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
