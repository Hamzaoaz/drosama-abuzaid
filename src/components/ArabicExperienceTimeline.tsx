import { Building2, MapPin } from "lucide-react";

const experiences = [
  {
    title: "أستاذ مساعد",
    organization: "جامعة الشارقة",
    location: "الشارقة، الإمارات",
    logo: "/lovable-uploads/uos-logo.png"
  },
  {
    title: "استشاري جراحة",
    organization: "مستشفى إن إم سي الملكي",
    location: "الشارقة، الإمارات",
    logo: "/lovable-uploads/nmc-logo.png"
  },
  {
    title: "استشاري جراحة",
    organization: "المستشفى السعودي الألماني",
    location: "دبي، الإمارات",
    logo: "/lovable-uploads/sgh-logo.png"
  },
  {
    title: "جراح عام ومنظار وجراحة القولون والمستقيم",
    organization: "المستشفى الإسلامي",
    location: "الأردن",
    logo: "/lovable-uploads/ih-logo.png"
  },
  {
    title: "اختصاصي مقيم",
    organization: "مستشفى دونكاستر الملكي",
    location: "المملكة المتحدة",
    logo: "/lovable-uploads/dri-logo.png"
  },
  {
    title: "اختصاصي مقيم في الجراحة العامة وجراحة المنظار والقولون والمستقيم",
    organization: "مستشفى روذرهام العام - هيئة الخدمات الصحية الوطنية",
    location: "المملكة المتحدة",
    logo: "/lovable-uploads/nhs-logo.png"
  }
];

export const ArabicExperienceTimeline = () => {
  return (
    <div id="experience" className="py-12" dir="rtl">
      <h2 className="text-3xl font-bold text-medical-900 mb-8 text-center">
        المسيرة المهنية
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
              <div className="absolute w-4 h-4 bg-medical-500 rounded-full -right-[7px] top-8"></div>
            </div>
            <div className="w-1/2"></div>
          </div>
        ))}
      </div>
    </div>
  );
};