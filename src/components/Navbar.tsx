
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';

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

  return (
    <header 
      className={cn(
        "bg-white border-b border-gray-200 py-4 px-6 sticky top-0 z-50 transition-all duration-300",
        isScrolled ? "shadow-md py-2" : ""
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          {showLogo && (
            <img 
              src="https://i.imgur.com/0YmGlXO.png" 
              alt="LFJP Logo" 
              className="h-14 w-auto transition-transform duration-300 hover:scale-105" 
            />
          )}
          <div className="flex flex-col items-start">
            <h1 className="text-xl font-playfair font-bold text-french-blue">Lycée Français Jacques Prévert</h1>
            <p className="text-xs text-gray-600">Sénégal - Petite Côte</p>
          </div>
        </div>
        
        {/* Menu hamburger pour mobile */}
        <button 
          className="md:hidden p-2 rounded-md text-french-blue hover:bg-blue-50"
          onClick={toggleMobileMenu}
          aria-label="Menu Navigation"
        >
          <Menu size={24} />
        </button>
        
        {/* Menu mobile */}
        <div className={cn(
          "fixed inset-y-0 right-0 transform w-64 bg-white shadow-xl z-50 transition-transform duration-300 ease-in-out md:hidden",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}>
          <div className="flex flex-col h-full pt-16 px-4">
            <button 
              className="absolute top-4 right-4 p-2 rounded-full text-french-blue hover:bg-blue-50"
              onClick={toggleMobileMenu}
              aria-label="Fermer menu"
            >
              &times;
            </button>
            
            <Link 
              to="/" 
              className={cn(
                "py-3 px-4 mb-1 rounded-md font-medium transition-colors",
                isActive('/') ? "bg-french-blue text-white" : "hover:bg-blue-50 text-french-blue"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              Accueil
            </Link>
            
            <Link 
              to="/vision-missions-valeurs" 
              className={cn(
                "py-3 px-4 mb-1 rounded-md font-medium transition-colors",
                isActive('/vision-missions-valeurs') ? "bg-french-blue text-white" : "hover:bg-blue-50 text-french-blue"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              Vision & Valeurs
            </Link>
            
            <Link 
              to="/diagnostic" 
              className={cn(
                "py-3 px-4 mb-1 rounded-md font-medium transition-colors",
                isActive('/diagnostic') ? "bg-french-blue text-white" : "hover:bg-blue-50 text-french-blue"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              Diagnostic
            </Link>
            
            <Link 
              to="/plan-strategique" 
              className={cn(
                "py-3 px-4 mb-1 rounded-md font-medium transition-colors",
                isActive('/plan-strategique') ? "bg-french-blue text-white" : "hover:bg-blue-50 text-french-blue"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              Plan Stratégique
            </Link>
          </div>
        </div>
        
        {/* Menu desktop */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="space-x-2">
            <NavigationMenuItem>
              <Link to="/">
                <NavigationMenuLink 
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "font-raleway transition-colors duration-200 relative",
                    isActive('/') ? "bg-french-blue text-white" : "hover:bg-blue-50 hover:text-french-blue",
                    isActive('/') ? "after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-1/2 after:h-0.5 after:bg-white" : ""
                  )}
                >
                  Accueil
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to="/vision-missions-valeurs">
                <NavigationMenuLink 
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "font-raleway transition-colors duration-200 relative",
                    isActive('/vision-missions-valeurs') ? "bg-french-blue text-white" : "hover:bg-blue-50 hover:text-french-blue",
                    isActive('/vision-missions-valeurs') ? "after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-1/2 after:h-0.5 after:bg-white" : ""
                  )}
                >
                  Vision & Valeurs
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to="/diagnostic">
                <NavigationMenuLink 
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "font-raleway transition-colors duration-200 relative",
                    isActive('/diagnostic') ? "bg-french-blue text-white" : "hover:bg-blue-50 hover:text-french-blue",
                    isActive('/diagnostic') ? "after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-1/2 after:h-0.5 after:bg-white" : ""
                  )}
                >
                  Diagnostic
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to="/plan-strategique">
                <NavigationMenuLink 
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "font-raleway transition-colors duration-200 relative",
                    isActive('/plan-strategique') ? "bg-french-blue text-white" : "hover:bg-blue-50 hover:text-french-blue",
                    isActive('/plan-strategique') ? "after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-1/2 after:h-0.5 after:bg-white" : ""
                  )}
                >
                  Plan Stratégique
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};

export default Navbar;
