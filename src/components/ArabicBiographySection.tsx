import { GraduationCap, Award, Clock, Building2, ArrowLeft } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const qualifications = [
  {
    title: "التعليم",
    icon: GraduationCap,
    items: [
      "بكالوريوس الطب والجراحة - جامعة العلوم والتكنولوجيا الأردنية",
      "تخصص عالي في الجراحة العامة",
      "البورد الأردني في الجراحة العامة",
      "زمالة الكلية الملكية للجراحين - المملكة المتحدة"
    ]
  },
  {
    title: "الخبرة",
    icon: Clock,
    items: [
      "خبرة سريرية تزيد عن 20 عاماً",
      "زمالة في جراحة المنظار والقولون والمستقيم - المملكة المتحدة",
      "مدير البرنامج في المستشفى الإسلامي، عمان",
      "أستاذ سريري - جامعة الشارقة",
      (navigate) => (
        <div key="past-experience" className="mt-2">
          <Button
            variant="link"
            onClick={() => navigate('/ar/about#experience')}
            className="text-medical-600 hover:text-medical-700 p-0 h-auto font-normal"
          >
            عرض الخبرات السابقة ←
          </Button>
        </div>
      )
    ]
  },
  {
    title: "العضويات والتراخيص",
    icon: Building2,
    items: [
      "المجلس الطبي العام - المملكة المتحدة، رقم GMC: 6074460",
      "نقابة الأطباء الأردنية",
      "وزارة الصحة الأردنية - رقم الترخيص: 10011/761",
      "الجمعية الأردنية للجراحة",
      "جمعية الإمارات الطبية",
      "جمعية الإمارات للجراحة العامة",
      "وزارة الصحة الإماراتية - رقم الترخيص: D70048",
    ]
  },
  {
    title: "التخصصات",
    icon: Award,
    items: [
      "جراحة المنظار المتقدمة",
      "جراحة القولون والمستقيم",
      "جراحة الثدي",
      "جراحة الغدة الدرقية",
      "الجراحة العامة",
      "جراحة الفتق",
      "جراحة الجهاز الهضمي"
    ]
  }
];

export const ArabicBiographySection = () => {
  const navigate = useNavigate();
  
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-medical-50 to-white" dir="rtl">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="mb-8 relative">
            <div className="w-48 h-48 mx-auto relative">
              <div className="absolute inset-0 bg-medical-500 rounded-full opacity-10 animate-pulse"></div>
              <img
                src="/lovable-uploads/bb2df379-2661-4c76-8b20-6884932129ee.png"
                alt="د. أسامة سعيد أبو زيد"
                className="rounded-full w-full h-full object-cover border-4 border-medical-100 shadow-xl"
              />
            </div>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-medical-500 text-white px-6 py-2 rounded-full shadow-lg">
                <span className="text-sm font-semibold">خبرة +20 عاماً</span>
              </div>
            </div>
          </div>
          <h2 className="text-4xl font-bold text-medical-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-medical-800 to-medical-600">
            التميز المهني
          </h2>
          <p className="text-xl text-medical-700 max-w-2xl mx-auto">
            يجمع بين التميز الأكاديمي والخبرة الجراحية الواسعة لتقديم رعاية استثنائية للمرضى
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
                      <span className="group-hover:text-medical-900 transition-colors">
                        {typeof item === 'function' ? item(navigate) : item}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button
            onClick={() => navigate('/ar/about')}
            className="bg-medical-600 hover:bg-medical-700 text-white"
          >
            المزيد عن د. أبو زيد
            <ArrowLeft className="mr-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};