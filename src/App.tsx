import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ArabicIndex from "./pages/ArabicIndex";
import DetailedAbout from "./pages/DetailedAbout";
import ArabicDetailedAbout from "./pages/ArabicDetailedAbout";
import React from "react";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <h1>Welcome to Dr. Osama Abuzaid's Website</h1>
      <Link to="/about">Learn More About Dr. Osama</Link>
    </div>
  );
};

export default App;

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ar" element={<ArabicIndex />} />
          <Route path="/about" element={<DetailedAbout />} />
          <Route path="/ar/about" element={<ArabicDetailedAbout />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
