
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
import AmeliorationAcoustique from "./pages/AmeliorationAcoustique";
import PCParLyceen from "./pages/PCParLyceen";
import PlanPeintureRavalement from "./pages/PlanPeintureRavalement";
import ElcsAnalyseComplete from "./pages/ElcsAnalyseComplete";
import SectionInternationaleBFI from "./pages/SectionInternationaleBFI";
import BreadcrumbNav from "./components/Breadcrumb";
import BackToTop from "./components/BackToTop";

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
                <Route path="/section-internationale-bfi" element={
                  <>
                    <BreadcrumbNav />
                    <SectionInternationaleBFI />
                    <BackToTop />
                  </>
                } />
                <Route path="/amelioration-acoustique" element={
                  <>
                    <BreadcrumbNav />
                    <AmeliorationAcoustique />
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
                <Route path="/plan-peinture-ravalement" element={
                  <>
                    <BreadcrumbNav />
                    <PlanPeintureRavalement />
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
