import { Helmet } from "react-helmet";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { BiographySection } from "@/components/BiographySection";
import { BookingSection } from "@/components/BookingSection";
import { SurgeriesSection } from "@/components/SurgeriesSection";
import { NavigationIndex } from "@/components/NavigationIndex";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App"; // English home page
import ArabicIndex from "./pages/ArabicIndex"; // Arabic home page
import AboutPage from "./pages/DetailedAbout"; // English About page
import ArabicAboutPage from "./pages/ArabicDetailedAbout"; // Arabic About page

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* English Home Page */}
        <Route path="/" element={<App />} />

        {/* Arabic Home Page */}
        <Route path="/ar" element={<ArabicIndex />} />

        {/* English About Page */}
        <Route path="/about" element={<AboutPage />} />

        {/* Arabic About Page */}
        <Route path="/ar/about" element={<ArabicAboutPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);


const Index = () => {
  return (
    <>
      <Helmet>
        <title>Dr. Osama Saeed Abuzaid - Consultant General, Laparoscopic, and Coloproctologist Surgeon in UAE</title>
        <meta 
          name="description" 
          content="Dr. Osama Saeed Abuzaid is a highly experienced consultant general surgeon in UAE, specializing in laparoscopic and colorectal surgery with over 20 years of experience." 
        />
        <meta 
          name="keywords" 
          content="general surgeon UAE, consultant surgeon Sharjah, laparoscopic surgery UAE, colorectal surgery Sharjah, Medcare Hospital" 
        />
      </Helmet>
      <main className="min-h-screen">
        <NavigationIndex />
        <div id="hero-section"><HeroSection /></div>
        <div id="services-section"><ServicesSection /></div>
        <div id="surgeries-section"><SurgeriesSection /></div>
        <div id="biography-section"><BiographySection /></div>
        <div id="booking-section"><BookingSection /></div>
      </main>
    </>
  );
};

export default Index;
