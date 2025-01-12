import { Helmet } from "react-helmet";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { BookingSection } from "@/components/BookingSection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Dr. John Smith - Consultant General Surgeon in UAE</title>
        <meta name="description" content="Dr. John Smith is a highly experienced consultant general surgeon in UAE, specializing in minimally invasive surgery with over 15 years of experience." />
        <meta name="keywords" content="general surgeon UAE, consultant surgeon Dubai, laparoscopic surgery UAE, minimally invasive surgery Dubai" />
      </Helmet>
      <main className="min-h-screen">
        <HeroSection />
        <ServicesSection />
        <BookingSection />
      </main>
    </>
  );
};

export default Index;