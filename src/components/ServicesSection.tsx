import { Stethoscope, Microscope, HeartPulse, Activity } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Laparoscopic Surgery",
    description: "Advanced minimally invasive procedures including cholecystectomy, hernia repair, and colorectal surgery",
    icon: Microscope,
  },
  {
    title: "General Surgery",
    description: "Comprehensive surgical care for various conditions including breast surgery and thyroidectomy",
    icon: Stethoscope,
  },
  {
    title: "Colorectal Surgery",
    description: "Expert treatment of colorectal conditions including cancer, hemorrhoids, and fistulas",
    icon: HeartPulse,
  },
  {
    title: "Gastrointestinal Surgery",
    description: "Specialized procedures including anti-reflux surgery (GERD) and advanced digestive tract treatments",
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