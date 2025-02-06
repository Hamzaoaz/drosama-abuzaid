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
        <title>Dr. Osama Abuzaid - Consultant General, Laparoscopic, and Colo-proctologist Surgeon in UAE | د. أسامة أبو زيد - است </title>
        <meta 
          name="description" 
          content="Dr. Osama Abuzaid is a highly experienced consultant general surgeon in UAE, specializing in laparoscopic and colorectal surgery with over 20 years of experience.
          .الدكتور أسامة أبو زيد هو استشاري جراحة عامة  بخبرة كبيرة في دولة الإمارات العربية المتحدة، متخصص في جراحة المناظير وجراحة القولون والمستقيم مع أكثر من 20 عامًا من الخبرة." 
        />
        <meta 
          name="keywords" 
          content="general surgeon UAE, consultant surgeon Sharjah, laparoscopic surgery UAE, colorectal surgery Sharjah, Medcare Hospital
    Osama Abuzaid, osama abuzaid, osama abozaid, usama abuzaid, usama abuzeid, usama abozeid, osama abu zaid, osama abo zaid, general surgeon Dubai, best general surgeon in UAE, laparoscopic surgery Dubai, gallbladder removal specialist, hernia surgery UAE, appendix removal expert, colonoscopy Dubai, digestive health surgery, thyroid surgery UAE, hemorrhoid treatment, varicose vein surgery, weight loss surgery Dubai, bariatric surgery specialist, stomach pain treatment, abdominal swelling diagnosis, rectal bleeding treatment, colorectal surgery expert, scar revision surgery, minimally invasive surgery, gastrointestinal surgery Dubai, emergency appendectomy UAE, post-surgical care tips, surgical consultations online, digestive tract surgeries Dubai, obesity surgery UAE, hernia repair surgery Dubai, affordable general surgeon, breast lump removal, gallstones treatment, anal fissure surgery UAE, abdominal pain diagnosis, intestinal blockage surgery, laparoscopic cholecystectomy, post-operative care Dubai, specialist in digestive surgeries, gastrointestinal cancer surgery, general surgery clinic Dubai, stomach ulcer surgery UAE, digestive health Dubai, anal fistula treatment, weight loss surgery consultation UAE, hernia treatment Dubai,
    ، ، اسام{ ابوزيد، اسامه ابوزيد، اسامة أبو زيد، أسامة ابوزيد، اسامة ابو زيد، الشارقة، جراح عام دبي, أفضل جراح في الإمارات, جراحة المناظير في دبي, استئصال المرارة بالإمارات, جراحة الفتق دبي, علاج البواسير, عملية الزائدة الدودية, جراحة الجهاز الهضمي, جراحة الغدة الدرقية دبي, علاج ألم المعدة, تشخيص انتفاخ البطن, علاج نزيف المستقيم, جراحة القولون والمستقيم, إزالة الندبات جراحياً, الجراحة الطارئة, استشارة الجراح العام, علاج البطن المنتفخ, أفضل عيادة للجراحة, عملية استئصال الزائدة الطارئة, تنظير القولون, عمليات فقدان الوزن, الجراحات التنظيرية, جراحة الأورام في دبي, علاج دوالي الساقين, جراحة السمنة, إصلاح الفتق بالمنظار, استئصال المرارة دبي, علاج حصوات المرارة, إزالة كتل الثدي,
" 
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
