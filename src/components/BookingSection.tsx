import { MapPin, Globe, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const locations = [
  {
    hospital: "Medcare Hospital",
    location: "Sharjah",
    bookingLink: "https://medcare.okadoc.com/en-ae/doctor/general-surgery/sharjah/osama-saeed-fuad-abuzaid?session_id=81490587-02be-402f-b7a4-556f46a0bb16.5u64-1736805524863t4mp4n",
  },
  {
    hospital: "Bissan Medical Center",
    location: "Sharjah",
    phoneNumber: "+971 6 573 7005",
  },
];

export const BookingSection = () => {
  const handleCall = (phoneNumber: string) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <section id="booking-section" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-medical-50 via-white to-medical-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-medical-900">
            Book a Consultation
          </h2>
          <Button 
            variant="outline" 
            className="border-2 border-medical-500 text-medical-700 hover:bg-medical-50"
          >
            <Globe className="mr-2 h-5 w-5" />
            عربي
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {locations.map((loc) => (
            <Card 
              key={loc.hospital} 
              className="border-2 border-medical-100 hover:border-medical-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl bg-white"
            >
              <CardHeader className="bg-gradient-to-r from-medical-50 to-white">
                <CardTitle className="text-xl text-medical-800 flex items-center gap-2">
                  <span className="text-medical-500">
                    <MapPin className="h-5 w-5" />
                  </span>
                  {loc.hospital}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="text-medical-700 font-medium">
                  {loc.location}
                </div>
                {loc.bookingLink ? (
                  <Button 
                    className="w-full bg-medical-500 hover:bg-medical-600 transform transition-all duration-300 hover:scale-105"
                    onClick={() => window.open(loc.bookingLink, '_blank')}
                  >
                    Book Appointment
                  </Button>
                ) : (
                  <Button 
                    className="w-full bg-medical-500 hover:bg-medical-600 transform transition-all duration-300 hover:scale-105"
                    onClick={() => handleCall(loc.phoneNumber!)}
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Call to Book
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 p-6 bg-medical-50 rounded-xl border border-medical-100 text-center">
          <p className="text-medical-700">
            For urgent consultations or inquiries, please contact our medical offices directly
          </p>
        </div>
      </div>
    </section>
  );
};