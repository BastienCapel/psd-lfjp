
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/vision-missions-valeurs" element={<VisionMissionsValeurs />} />
          <Route path="/diagnostic" element={<Diagnostic />} />
          <Route path="/plan-strategique" element={<PlanStrategique />} />
          <Route path="/amelioration-acoustique" element={<AmeliorationAcoustique />} />
          <Route path="/pc-par-lyceen" element={<PCParLyceen />} />
          <Route path="/plan-peinture-ravalement" element={<PlanPeintureRavalement />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
