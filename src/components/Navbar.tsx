
import React from 'react';
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

interface NavbarProps {
  showLogo?: boolean;
}

const Navbar = ({ showLogo = false }: NavbarProps) => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  // Function to determine if a link is active
  const isActive = (path: string) => {
    return currentPath === path;
  };

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
        
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="space-x-2">
            <NavigationMenuItem>
              <Link to="/">
                <NavigationMenuLink 
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "font-raleway transition-colors duration-200",
                    isActive('/') ? "bg-french-blue text-white" : "hover:bg-blue-50 hover:text-french-blue"
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
                    "font-raleway transition-colors duration-200",
                    isActive('/vision-missions-valeurs') ? "bg-french-blue text-white" : "hover:bg-blue-50 hover:text-french-blue"
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
                    "font-raleway transition-colors duration-200",
                    isActive('/diagnostic') ? "bg-french-blue text-white" : "hover:bg-blue-50 hover:text-french-blue"
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
                    "font-raleway transition-colors duration-200",
                    isActive('/plan-strategique') ? "bg-french-blue text-white" : "hover:bg-blue-50 hover:text-french-blue"
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
