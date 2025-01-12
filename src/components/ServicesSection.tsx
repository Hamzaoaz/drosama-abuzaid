import { Stethoscope, Microscope, HeartPulse, Activity } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "General Surgery",
    description: "Comprehensive surgical care using advanced minimally invasive techniques",
    icon: Stethoscope,
  },
  {
    title: "Laparoscopic Surgery",
    description: "Modern keyhole surgical procedures for faster recovery",
    icon: Microscope,
  },
  {
    title: "Emergency Care",
    description: "24/7 emergency surgical consultations",
    icon: HeartPulse,
  },
  {
    title: "Preventive Care",
    description: "Regular check-ups and preventive surgical consultations",
    icon: Activity,
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-medical-900 mb-12">
          Specialized Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="border-2 border-medical-100 hover:border-medical-500 transition-colors">
              <CardHeader>
                <service.icon className="h-12 w-12 text-medical-500 mb-4" />
                <CardTitle className="text-xl text-medical-800">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-medical-700">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};