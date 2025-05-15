
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
import BreadcrumbNav from "./components/Breadcrumb";
import BackToTop from "./components/BackToTop";

const App = () => {
  // Créer une nouvelle instance de QueryClient à chaque rendu du composant
  const queryClient = new QueryClient();

  return (
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
              <Route path="/plan-strategique" element={
                <>
                  <BreadcrumbNav />
                  <PlanStrategique />
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
  );
};

export default App;
