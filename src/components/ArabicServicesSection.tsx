import { Stethoscope, Microscope, HeartPulse, Activity } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "جراحة المنظار",
    description: "إجراءات متقدمة بالحد الأدنى من التدخل الجراحي تشمل استئصال المرارة وإصلاح الفتق وجراحة القولون والمستقيم",
    icon: Microscope,
  },
  {
    title: "الجراحة العامة",
    description: "رعاية جراحية شاملة لمختلف الحالات بما في ذلك جراحة الثدي واستئصال الغدة الدرقية",
    icon: Stethoscope,
  },
  {
    title: "جراحة القولون والمستقيم",
    description: "علاج متخصص لحالات القولون والمستقيم بما في ذلك السرطان والبواسير والناسور",
    icon: HeartPulse,
  },
  {
    title: "جراحة الجهاز الهضمي",
    description: "إجراءات متخصصة تشمل جراحة الارتجاع المعدي المريئي وعلاجات الجهاز الهضمي المتقدمة",
    icon: Activity,
  },
];

export const ArabicServicesSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" dir="rtl">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-medical-900 mb-12">
          خدماتنا المتخصصة
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