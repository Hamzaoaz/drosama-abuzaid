import { Building2, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Assistant Professor",
    organization: "The University of Sharjah",
    location: "Sharjah, UAE",
    logo: "/lovable-uploads/uos-logo.png"
  },
  {
    title: "Consultant Surgeon",
    organization: "The NMC Royal Hospital",
    location: "Sharjah, UAE",
    logo: "/lovable-uploads/nmc-logo.png"
  },
  {
    title: "Consultant Surgeon",
    organization: "The Saudi German Hospital",
    location: "Dubai, UAE",
    logo: "/lovable-uploads/sgh-logo.png"
  },
  {
    title: "General Laparoscopic and Colorectal surgeon",
    organization: "The Islamic Hospital",
    location: "Jordan",
    logo: "/lovable-uploads/ih-logo.png"
  },
  {
    title: "Specialist Registrar",
    organization: "The Doncaster Royal Infirmary",
    location: "United Kingdom",
    logo: "/lovable-uploads/dri-logo.png"
  },
  {
    title: "Specialist Registrar in General Surgery and Laparoscopic Colorectal Surgery",
    organization: "The Rotherham General Hospital NHS Foundation Trust",
    location: "United Kingdom",
    logo: "/lovable-uploads/nhs-logo.png"
  }
];

export const ExperienceTimeline = () => {
  return (
    <div id="experience" className="py-12">
      <h2 className="text-3xl font-bold text-medical-900 mb-8 text-center">
        Professional Journey
      </h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`flex items-start gap-6 ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            <div className="w-1/2 flex justify-center">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-medical-100 transform hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-medical-50 rounded-lg flex items-center justify-center">
                    <Building2 className="w-8 h-8 text-medical-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-medical-900">{exp.title}</h3>
                    <p className="text-medical-700">{exp.organization}</p>
                    <div className="flex items-center gap-2 mt-2 text-medical-600">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-px h-full bg-medical-200 relative">
              <div className="absolute w-4 h-4 bg-medical-500 rounded-full -left-[7px] top-8"></div>
            </div>
            <div className="w-1/2"></div>
          </div>
        ))}
      </div>
    </div>
  );
};