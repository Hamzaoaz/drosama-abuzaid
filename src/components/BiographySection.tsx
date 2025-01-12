import { GraduationCap, Award, Clock, Building2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const BiographySection = () => {
  const qualifications = [
    {
      title: "Education",
      icon: GraduationCap,
      items: [
        "MBBS - Jordan University of Science and Technology",
        "Higher Specialization in General Surgery",
        "Jordanian Board of General Surgery Certification",
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
        "Clinical Assistant Professor, University of Sharjah"
      ]
    },
    {
      title: "Hospital Affiliations",
      icon: Building2,
      items: [
        "Medcare Hospital Sharjah",
        "NMC Royal Hospital, Sharjah",
        "Saudi German Hospital, Dubai",
        "Rotherham General Hospital NHS, UK"
      ]
    },
    {
      title: "Specializations",
      icon: Award,
      items: [
        "Advanced Laparoscopic Surgery",
        "Colorectal Surgery",
        "General Surgery",
        "Gastrointestinal Surgery"
      ]
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-medical-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-medical-900">Professional Background</h2>
          <p className="mt-4 text-lg text-medical-700">Two decades of surgical excellence and academic contribution</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {qualifications.map((qual) => (
            <Card key={qual.title} className="border-2 border-medical-100 hover:border-medical-500 transition-colors">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="p-2 bg-medical-100 rounded-lg">
                  <qual.icon className="h-6 w-6 text-medical-600" />
                </div>
                <CardTitle className="text-xl text-medical-800">{qual.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {qual.items.map((item, index) => (
                    <li key={index} className="text-medical-700 flex items-center gap-2">
                      <span className="w-2 h-2 bg-medical-500 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 p-8 bg-white rounded-lg shadow-lg border border-medical-100">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <img
              src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
              alt="Professional medical setting"
              className="w-full md:w-1/3 rounded-lg object-cover h-64"
            />
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-medical-900 mb-4">About Dr. Osama Saeed Abuzaid</h3>
              <p className="text-medical-700 mb-4">
                Dr. Abuzaid brings over two decades of expertise in General and Laparoscopic Surgery. His journey spans multiple prestigious institutions across Jordan, the UK, and the UAE, where he has consistently demonstrated excellence in surgical care and medical education.
              </p>
              <p className="text-medical-700">
                As a member of the Royal College of Surgeons (MRCS), UK, and with extensive training in Laparoscopic & Colorectal Surgery, Dr. Abuzaid combines surgical expertise with a commitment to patient care. He is fluent in both Arabic and English, ensuring clear communication with his diverse patient base.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};