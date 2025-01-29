import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Award, GraduationCap, BookOpen, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";
import React from "react";
import { ArabicExperienceTimeline } from "@/components/ArabicExperienceTimeline";

const ArabicDetailedAbout = () => {
  const navigate = useNavigate();

  const certificates = [
    {
      title: "زمالة الكلية الملكية للجراحين",
      institution: "الكلية الملكية للجراحين، المملكة المتحدة",
      year: "٢٠٠٥",
      description: "شهادة الزمالة في الممارسة الجراحية",
    },
    {
      title: "البورد الأردني في الجراحة العامة",
      institution: "المجلس الطبي الأردني",
      year: "٢٠٠٣",
      description: "شهادة التخصص في الجراحة العامة",
    },
    {
      title: "بكالوريوس الطب والجراحة",
      institution: "جامعة العلوم والتكنولوجيا الأردنية",
      year: "١٩٩٨",
      description: "شهادة البكالوريوس في الطب والجراحة",
    },
  ];

  const achievements = [
    "خبرة جراحية تزيد عن ٢٠ عاماً",
    "أكثر من ٧٠٠٠ عملية و إجراء منظار ناجحة",
    "أستاذ مساعد سريري في جامعة الشارقة",
    "مدير البرنامج في المستشفى الإسلامي، عمان",
    "تدريب متقدم في تقنيات الجراحة قليلة التوغل",
  ];

  return (
    <>
      <Helmet>
        <title>نبذة عن د. أسامة سعيد أبو زيد - الملف التفصيلي</title>
      </Helmet>

      <main className="min-h-screen bg-gradient-to-b from-medical-50 to-white py-12" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <Button
              variant="outline"
              onClick={() => navigate("/ar")}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              العودة للرئيسية
            </Button>
            <Button
              variant="outline"
              onClick={() => navigate("/about")}
              className="flex items-center gap-2"
            >
              <Globe className="h-4 w-4" />
              English
            </Button>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-40 h-40 mx-auto relative mb-6">
                <img
                  src="/lovable-uploads/bb2df379-2661-4c76-8b20-6884932129ee.png"
                  alt="د. أسامة سعيد أبو زيد"
                  className="rounded-full w-full h-full object-cover border-4 border-medical-100 shadow-xl"
                />
              </div>
              <h1 className="text-4xl font-bold text-medical-900 mb-4">د. أسامة سعيد أبو زيد</h1>
              <p className="text-xl text-medical-700">استشاري الجراحة العامة والمنظار والمستقيم</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-medical-100">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="h-6 w-6 text-medical-600" />
                  <h2 className="text-2xl font-semibold text-medical-900">الشهادات</h2>
                </div>
                <div className="space-y-4">
                  {certificates.map((cert, index) => (
                    <div key={index} className="border-r-4 border-medical-500 pr-4">
                      <h3 className="font-semibold text-medical-800">{cert.title}</h3>
                      <p className="text-medical-600">{cert.institution}</p>
                      <p className="text-sm text-medical-500">{cert.year}</p>
                      <p className="text-medical-700 mt-1">{cert.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-medical-100">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="h-6 w-6 text-medical-600" />
                  <h2 className="text-2xl font-semibold text-medical-900">الإنجازات</h2>
                </div>
                <ul className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-medical-500 rounded-full" />
                      <span className="text-medical-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-medical-100 mb-12">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="h-6 w-6 text-medical-600" />
                <h2 className="text-2xl font-semibold text-medical-900">الملف المهني</h2>
              </div>
              <div className="space-y-4 text-medical-700">
                <p>
                  يمتلك الدكتور أسامة أبو زيد خبرة تزيد عن عشرين عاماً في مجال الجراحة العامة وجراحة المنظار والقولون والمستقيم. تمتد
                  مسيرته المهنية عبر العديد من المؤسسات المرموقة.
                </p>
                <p>
                  كعضو في الكلية الملكية للجراحين و زميل في الجراحة في المملكة المتحدة، يجمع الدكتور أبو زيد بين الخبرة الجراحية والالتزام برعاية المرضى.
                </p>
                <p>
                  بالإضافة إلى عمله السريري، يشارك الدكتور أبو زيد بنشاط في التعليم الطبي كأستاذ سريري.
                </p>
              </div>
            </div>
            
            <ArabicExperienceTimeline />
          </div>
        </div>
      </main>
    </>
  );
};

export default ArabicDetailedAbout;
