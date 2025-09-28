
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
import PlanStrategique from "./pages/PlanStrategique";
import PCParLyceen from "./pages/PCParLyceen";
import ConstructionCantine from "./pages/ConstructionCantine";
import ProtocolePHARE from "./pages/ProtocolePHARE";
import ElcsAnalyseComplete from "./pages/ElcsAnalyseComplete";
import CurriculumSoftSkills from "./pages/CurriculumSoftSkills";
import SectionInternationaleBFI from "./pages/SectionInternationaleBFI";
import PlanMaintenanceStrategique from "./pages/PlanMaintenanceStrategique";
import MediationEntrePairs from "./pages/MediationEntrePairs";
import PolitiqueE3D from "./pages/PolitiqueE3D";
import MecenatNumerique from "./pages/MecenatNumerique";
import ValorisationErreur from "./pages/ValorisationErreur";
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
                <Route path="/vision-missions-valeurs" element={
                  <>
                    <BreadcrumbNav />
                    <VisionMissionsValeurs />
                    <BackToTop />
                  </>
                } />
                <Route path="/diagnostic" element={
                  <>
                    <BreadcrumbNav />
                    <Diagnostic />
                    <BackToTop />
                  </>
                } />
                <Route path="/elcs-analyse-complete" element={
                  <>
                    <BreadcrumbNav />
                    <ElcsAnalyseComplete />
                    <BackToTop />
                  </>
                } />
                <Route path="/plan-strategique" element={
                  <>
                    <BreadcrumbNav />
                    <PlanStrategique />
                    <BackToTop />
                  </>
                } />
                <Route path="/curriculum-soft-skills" element={
                  <>
                    <BreadcrumbNav />
                    <CurriculumSoftSkills />
                    <BackToTop />
                  </>
                } />
                <Route path="/section-internationale-bfi" element={
                  <>
                    <BreadcrumbNav />
                    <SectionInternationaleBFI />
                    <BackToTop />
                  </>
                } />
                <Route path="/pc-par-lyceen" element={
                  <>
                    <BreadcrumbNav />
                    <PCParLyceen />
                    <BackToTop />
                  </>
                } />
                <Route path="/mecenat-numerique" element={
                  <>
                    <BreadcrumbNav />
                    <MecenatNumerique />
                    <BackToTop />
                  </>
                } />
                <Route path="/construction-cantine" element={
                  <>
                    <BreadcrumbNav />
                    <ConstructionCantine />
                    <BackToTop />
                  </>
                } />
                <Route path="/protocole-phare" element={
                  <>
                    <BreadcrumbNav />
                    <ProtocolePHARE />
                    <BackToTop />
                  </>
                 } />
                <Route path="/plan-maintenance-strategique" element={
                  <>
                    <BreadcrumbNav />
                    <PlanMaintenanceStrategique />
                    <BackToTop />
                  </>
                } />
                <Route path="/valorisation-erreur-perseverance" element={
                  <>
                    <BreadcrumbNav />
                    <ValorisationErreur />
                    <BackToTop />
                  </>
                } />
                <Route path="/mediation-entre-pairs" element={
                  <>
                    <BreadcrumbNav />
                    <MediationEntrePairs />
                    <BackToTop />
                  </>
                } />
                <Route path="/politique-e3d" element={
                  <>
                    <BreadcrumbNav />
                    <PolitiqueE3D />
                    <BackToTop />
                  </>
                } />
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
