import React from 'react';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import DesktopNavItem from './DesktopNavItem';
import { cn } from '@/lib/utils';

interface DesktopMenuProps {
  isActive: (path: string) => boolean;
}

const DesktopMenu = ({ isActive }: DesktopMenuProps) => {
  const isPlanStrategiqueActive = isActive('/plan-strategique');

  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList className="space-x-2">
        <DesktopNavItem to="/" isActive={isActive('/')}>
          Accueil
        </DesktopNavItem>

        <DesktopNavItem to="/vision-missions-valeurs" isActive={isActive('/vision-missions-valeurs')}>
          Vision & Valeurs
        </DesktopNavItem>

        <DesktopNavItem to="/diagnostic" isActive={isActive('/diagnostic')}>
          Diagnostic
        </DesktopNavItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={cn(
              "font-raleway transition-colors duration-200",
              isPlanStrategiqueActive
                ? 'bg-french-blue text-white data-[state=open]:bg-french-blue data-[state=open]:text-white'
                : 'hover:bg-blue-50 hover:text-french-blue'
            )}
          >
            Plan Stratégique
          </NavigationMenuTrigger>
          <NavigationMenuContent className="rounded-xl border border-blue-100 bg-white p-4 shadow-lg">
            <div className="grid w-[280px] gap-3">
              <NavigationMenuLink asChild>
                <Link
                  to="/plan-strategique"
                  className="block rounded-lg border border-transparent bg-white px-4 py-3 text-sm font-semibold text-slate-800 transition hover:border-french-blue/40 hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-french-blue"
                >
                  Vue d'ensemble du plan
                </Link>
              </NavigationMenuLink>

              <NavigationMenuLink asChild>
                <Link
                  to="/plan-strategique/reussite-citoyenne"
                  className="block rounded-lg border border-transparent bg-blue-50/70 px-4 py-3 text-sm font-semibold text-french-blue transition hover:border-french-blue/50 hover:bg-blue-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-french-blue"
                >
                  Axe 4 – Réussite citoyenne
                  <span className="mt-1 block text-xs font-normal text-slate-600">
                    Former des citoyens libres, responsables et solidaires
                  </span>
                </Link>
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default DesktopMenu;
