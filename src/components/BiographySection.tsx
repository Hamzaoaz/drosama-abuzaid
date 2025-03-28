import { GraduationCap, Award, Clock, Building2, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const BiographySection = () => {
  const navigate = useNavigate();
  
  const qualifications = [
    {
      title: "Education",
      icon: GraduationCap,
      items: [
        "MBBS - Jordan University of Science and Technology (JUST)",
        "Higher Specialization in General Surgery (JUST)",
        "Jordanian Board in General Surgery Certification",
        "UK Fellowship Training",
        "Member of Royal College of Surgeons (MRCS), UK"
      ]
    },
    {
      title: "Experience",
      icon: Clock,
      items: [
        "20+ years of clinical experience",
        "Fellowship in Laparoscopic & Colorectal Surgery, UK",
        "Programme Director at Islamic Hospital, Amman",
        "Clinical Adjunct Professor, University of Sharjah",
        <div key="past-experience" className="mt-2">
          <Button
            variant="link"
            onClick={() => navigate('/about#experience')}
            className="text-medical-600 hover:text-medical-700 p-0 h-auto font-normal"
          >
            View Past Experience →
          </Button>
        </div>
      ]
    },
    {
      title: "Memberships & Licensure",
      icon: Building2,
      items: [
        "General Medical Council-UK, GMC Number: 6074460",
        "Jordan Medical Association",
        "Jordanian Ministry of Health-License Number:10011/761",
        "Jordanian Surgical Society",
        "Emirates Medical Association",
        "Emirates General Surgery Society",
        "Ministry of Health UAE-License number: D70048",
      ]
    },
    {
      title: "Specializations",
      icon: Award,
      items: [
        "Advanced Laparoscopic Surgery",
        "Colorectal Surgery",
        "General Surgery",
        "Gastrointestinal Surgery",
        "Hernia Surgery",
        "Thyroid Surgery",
        "Breast Surgery"
      ]
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-medical-50 to-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="mb-8 relative">
            <div className="w-48 h-48 mx-auto relative">
              <div className="absolute inset-0 bg-medical-500 rounded-full opacity-10 animate-pulse"></div>
              <img
                src="/lovable-uploads/bb2df379-2661-4c76-8b20-6884932129ee.png"
                alt="Dr. Osama Saeed Abuzaid"
                className="rounded-full w-full h-full object-cover border-4 border-medical-100 shadow-xl"
              />
            </div>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-medical-500 text-white px-6 py-2 rounded-full shadow-lg">
                <span className="text-sm font-semibold">20+ Years Experience</span>
              </div>
            </div>
          </div>
          <h2 className="text-4xl font-bold text-medical-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-medical-800 to-medical-600">
            Professional Excellence
          </h2>
          <p className="text-xl text-medical-700 max-w-2xl mx-auto">
            Combining academic distinction with extensive surgical expertise to deliver exceptional patient care
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {qualifications.map((qual) => (
            <Card key={qual.title} className="border-2 border-medical-100 hover:border-medical-500 transition-colors duration-300 transform hover:-translate-y-1">
              <CardHeader className="flex flex-row items-center gap-4 bg-medical-50 rounded-t-lg">
                <div className="p-3 bg-white rounded-lg shadow-md">
                  <qual.icon className="h-6 w-6 text-medical-600" />
                </div>
                <CardTitle className="text-xl text-medical-800">{qual.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {qual.items.map((item, index) => (
                    <li key={index} className="text-medical-700 flex items-center gap-3 group">
                      <span className="w-2 h-2 bg-medical-500 rounded-full group-hover:scale-125 transition-transform" />
                      <span className="group-hover:text-medical-900 transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button
            onClick={() => navigate('/about')}
            className="bg-medical-600 hover:bg-medical-700 text-white"
          >
            Learn More About Dr. Abuzaid
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};
