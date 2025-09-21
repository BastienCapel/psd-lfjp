
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
import Logo from './navigation/Logo';
import MobileMenu from './navigation/MobileMenu';
import DesktopMenu from './navigation/DesktopMenu';

interface NavbarProps {
  showLogo?: boolean;
}

const Navbar = ({ showLogo = false }: NavbarProps) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Ajout d'un effet pour détecter le défilement de la page
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Fonction pour déterminer si un lien est actif
  const isActive = (path: string) => {
    return currentPath === path;
  };

  // Fonction pour ouvrir/fermer le menu mobile
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const mobileMenuId = 'mobile-menu';

  return (
    <header
      className={cn(
        "bg-white border-b border-gray-200 py-4 px-6 sticky top-0 z-50 transition-all duration-300",
        isScrolled ? "shadow-md py-2" : ""
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Logo showLogo={showLogo} />
        
        {/* Menu hamburger pour mobile */}
        <button
          className="md:hidden p-2 rounded-md text-french-blue hover:bg-blue-50"
          onClick={toggleMobileMenu}
          aria-label="Menu Navigation"
          aria-expanded={mobileMenuOpen}
          aria-controls={mobileMenuId}
        >
          <Menu size={24} />
        </button>

        {/* Menu mobile */}
        <MobileMenu
          id={mobileMenuId}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          isActive={isActive}
        />
        
        {/* Menu desktop */}
        <DesktopMenu isActive={isActive} />
      </div>
    </header>
  );
};

export default Navbar;
