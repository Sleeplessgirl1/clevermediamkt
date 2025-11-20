import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import AboutUs from "./pages/AboutUs";
import SocialMedia from "./pages/services/SocialMedia";
import Branding from "./pages/services/Branding";
import ContentCreation from "./pages/services/ContentCreation";
import Photography from "./pages/services/Photography";
import WebSites from "./pages/services/WebSites";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/servicios/redes-sociales" element={<SocialMedia />} />
          <Route path="/servicios/branding" element={<Branding />} />
          <Route path="/servicios/contenido-ugc" element={<ContentCreation />} />
          <Route path="/servicios/fotografia" element={<Photography />} />
          <Route path="/servicios/sitios-web" element={<WebSites />} />
          <Route path="/sobre-nosotros" element={<AboutUs />} />
          <Route path="/cursos" element={<Courses />} />
          <Route path="/contacto" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
