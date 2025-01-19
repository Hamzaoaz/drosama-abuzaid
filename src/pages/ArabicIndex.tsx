import { Helmet } from "react-helmet";
import { ArabicHeroSection } from "@/components/ArabicHeroSection";
import { ArabicServicesSection } from "@/components/ArabicServicesSection";
import { ArabicBiographySection } from "@/components/ArabicBiographySection";
import { ArabicBookingSection } from "@/components/ArabicBookingSection";
import { ArabicSurgeriesSection } from "@/components/ArabicSurgeriesSection";
import { NavigationIndex } from "@/components/NavigationIndex";

const ArabicIndex = () => {
  return (
    <>
      <Helmet>
        <title>د. أسامة سعيد أبو زيد - استشاري الجراحة العامة في الإمارات</title>
        <meta 
          name="description" 
          content="د. أسامة سعيد أبو زيد استشاري الجراحة العامة في الإمارات، متخصص في الجراحة بالمنظار وجراحة القولون والمستقيم مع خبرة تزيد عن 20 عاماً" 
        />
      </Helmet>
      <main className="min-h-screen" dir="rtl">
        <NavigationIndex isArabic />
        <div id="hero-section"><ArabicHeroSection /></div>
        <div id="services-section"><ArabicServicesSection /></div>
        <div id="surgeries-section"><ArabicSurgeriesSection /></div>
        <div id="biography-section"><ArabicBiographySection /></div>
        <div id="booking-section"><ArabicBookingSection /></div>
      </main>
    </>
  );
};

export default ArabicIndex;