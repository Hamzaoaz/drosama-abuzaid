import { Helmet } from "react-helmet";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { BiographySection } from "@/components/BiographySection";
import { BookingSection } from "@/components/BookingSection";
import { SurgeriesSection } from "@/components/SurgeriesSection";
import { NavigationIndex } from "@/components/NavigationIndex";
import React from "react";

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