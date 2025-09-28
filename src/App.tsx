
import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import VisionMissionsValeurs from "./pages/VisionMissionsValeurs";
import Diagnostic from "./pages/Diagnostic";
import ElcsAnalyseComplete from "./pages/ElcsAnalyseComplete";
import PlanStrategique from "./pages/PlanStrategique";
import CurriculumSoftSkills from "./pages/CurriculumSoftSkills";
import SectionInternationaleBFI from "./pages/SectionInternationaleBFI";
import PCParLyceen from "./pages/PCParLyceen";
import MecenatNumerique from "./pages/MecenatNumerique";
import ConstructionCantine from "./pages/ConstructionCantine";
import ProtocolePHARE from "./pages/ProtocolePHARE";
import PlanMaintenanceStrategique from "./pages/PlanMaintenanceStrategique";
import MediationEntrePairs from "./pages/MediationEntrePairs";
import PolitiqueE3D from "./pages/PolitiqueE3D";
import ValorisationErreurPerseverance from "./pages/ValorisationErreurPerseverance";
import BreadcrumbNav from "./components/Breadcrumb";
import BackToTop from "./components/BackToTop";
import ScrollToTop from "./components/ScrollToTop";

// Créer l'instance QueryClient en dehors du composant pour éviter les recréations
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

const pageRoutes: Array<{ path: string; Component: React.ComponentType }> = [
  { path: "/vision-missions-valeurs", Component: VisionMissionsValeurs },
  { path: "/diagnostic", Component: Diagnostic },
  { path: "/elcs-analyse-complete", Component: ElcsAnalyseComplete },
  { path: "/plan-strategique", Component: PlanStrategique },
  { path: "/curriculum-soft-skills", Component: CurriculumSoftSkills },
  { path: "/section-internationale-bfi", Component: SectionInternationaleBFI },
  { path: "/pc-par-lyceen", Component: PCParLyceen },
  { path: "/mecenat-numerique", Component: MecenatNumerique },
  { path: "/construction-cantine", Component: ConstructionCantine },
  { path: "/protocole-phare", Component: ProtocolePHARE },
  { path: "/plan-maintenance-strategique", Component: PlanMaintenanceStrategique },
  { path: "/mediation-entre-pairs", Component: MediationEntrePairs },
  { path: "/politique-e3d", Component: PolitiqueE3D },
  { path: "/valorisation-erreur-perseverance", Component: ValorisationErreurPerseverance },
];

const App = () => {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <div className="flex flex-col min-h-screen">
              <Routes>
                <Route path="/" element={<Index />} />
                {pageRoutes.map(({ path, Component }) => (
                  <Route
                    key={path}
                    path={path}
                    element={
                      <>
                        <BreadcrumbNav />
                        <Component />
                        <BackToTop />
                      </>
                    }
                  />
                ))}
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;
