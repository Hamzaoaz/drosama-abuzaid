import { MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const locations = [
  {
    hospital: "Mediclinic City Hospital",
    location: "Dubai Healthcare City",
    bookingLink: "#",
  },
  {
    hospital: "Saudi German Hospital",
    location: "Dubai",
    bookingLink: "#",
  },
  {
    hospital: "Canadian Specialist Hospital",
    location: "Dubai",
    bookingLink: "#",
  },
];

export const BookingSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-medical-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-medical-900 mb-12">
          Book a Consultation
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((loc) => (
            <Card key={loc.hospital} className="border-2 border-medical-100">
              <CardHeader>
                <CardTitle className="text-xl text-medical-800">{loc.hospital}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center text-medical-700">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>{loc.location}</span>
                </div>
                <Button className="w-full bg-medical-500 hover:bg-medical-600">
                  Book Appointment
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};