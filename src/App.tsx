import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import MedicinePage from "./pages/MedicinePage";
import ToursPage from "./pages/ToursPage";
import CustomTripsPage from "./pages/CustomTripsPage";
import LogisticsPage from "./pages/LogisticsPage";
import PricingPage from "./pages/PricingPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/medicina" element={<MedicinePage />} />
            <Route path="/experiencias" element={<ToursPage />} />
            <Route path="/viajes-personalizados" element={<CustomTripsPage />} />
            <Route path="/logistica" element={<LogisticsPage />} />
            <Route path="/tarifas" element={<PricingPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
