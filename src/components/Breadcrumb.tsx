
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Breadcrumb, 
  BreadcrumbList, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbSeparator,
  BreadcrumbPage
} from "@/components/ui/breadcrumb";
import { Home } from 'lucide-react';

interface RouteMap {
  [key: string]: {
    name: string;
    parent?: string;
  };
}

const routes: RouteMap = {
  "/": { name: "Accueil" },
  "/vision-missions-valeurs": { name: "Vision, Missions et Valeurs", parent: "/" },
  "/diagnostic": { name: "Diagnostic", parent: "/" },
  "/plan-strategique": { name: "Plan Stratégique", parent: "/" },
  "/section-internationale-bfi": { name: "Section Internationale et BFI", parent: "/plan-strategique" },
  "/amelioration-acoustique": { name: "Amélioration Acoustique", parent: "/" },
  "/pc-par-lyceen": { name: "PC par Lycéen", parent: "/" },
  "/plan-peinture-ravalement": { name: "Plan Peinture et Ravalement", parent: "/" },
  "/elcs-analyse-complete": { name: "Analyse Complète ELCS", parent: "/diagnostic" },
};

const BreadcrumbNav = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);
  
  // Si nous sommes sur la page d'accueil, ne pas afficher le fil d'Ariane
  if (pathnames.length === 0) return null;
  
  const currentPath = '/' + pathnames.join('/');
  const currentRoute = routes[currentPath];

  if (!currentRoute) return null;

  // Si la route a un parent, on l'affiche dans le breadcrumb
  const parentPath = currentRoute.parent;
  const parentRoute = parentPath ? routes[parentPath] : null;

  return (
    <div className="bg-gray-50 py-2 px-6 border-b animate-fade-in">
      <Breadcrumb className="max-w-screen-xl mx-auto">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/" className="flex items-center text-french-blue hover:underline">
                <Home className="h-4 w-4 mr-1" />
                Accueil
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          
          {parentRoute && parentPath !== "/" && (
            <>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to={parentPath} className="text-french-blue hover:underline">
                    {parentRoute.name}
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </>
          )}
          
          <BreadcrumbSeparator />
          
          <BreadcrumbItem>
            <BreadcrumbPage>{currentRoute.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default BreadcrumbNav;
