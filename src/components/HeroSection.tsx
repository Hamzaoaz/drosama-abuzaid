import { Button } from "@/components/ui/button";
import { Calendar, Award, Star, GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const HeroSection = () => {
  const achievements = [
    {
      icon: <Award className="h-5 w-5" />,
      text: "MRCS, UK"
    },
    {
      icon: <Star className="h-5 w-5" />,
      text: "20+ Years Experience"
    },
    {
      icon: <GraduationCap className="h-5 w-5" />,
      text: "Clinical Professor"
    }
  ];

  return (
    <section className="relative bg-medical-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center animate-fadeIn">
          <div className="mb-8 relative inline-block">
            <div className="w-48 h-48 relative mb-6">
              <div className="absolute inset-0 bg-medical-500 rounded-full opacity-10 animate-pulse"></div>
              <img
                src="/lovable-uploads/bb2df379-2661-4c76-8b20-6884932129ee.png"
                alt="Dr. Osama Saeed Abuzaid"
                className="rounded-full w-full h-full object-cover border-4 border-medical-100 shadow-xl"
              />
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-medical-900 mb-6">
            Dr. Osama Saeed Abuzaid
          </h1>
          <p className="text-xl sm:text-2xl text-medical-800 mb-4">
            Consultant General Surgeon
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md border border-medical-100 hover:border-medical-500 transition-colors"
              >
                <span className="text-medical-500">{achievement.icon}</span>
                <span className="text-medical-800 font-medium">{achievement.text}</span>
              </div>
            ))}
          </div>
          
          <p className="text-lg text-medical-700 mb-8">
            Member of the Royal College of Surgeons (MRCS), UK with over 20 years of experience in General and Laparoscopic Surgery
          </p>
          
          <Button className="bg-medical-500 hover:bg-medical-600 text-white" size="lg">
            <Calendar className="mr-2 h-5 w-5" />
            Book Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};