import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative bg-medical-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center animate-fadeIn">
          <h1 className="text-4xl sm:text-5xl font-bold text-medical-900 mb-6">
            Dr. John Smith
          </h1>
          <p className="text-xl sm:text-2xl text-medical-800 mb-4">
            Consultant General Surgeon
          </p>
          <p className="text-lg text-medical-700 mb-8">
            Specialized in minimally invasive surgery with over 15 years of experience in UAE
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