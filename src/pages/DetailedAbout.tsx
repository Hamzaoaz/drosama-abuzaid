import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Award, GraduationCap, BookOpen, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DetailedAbout = () => {
  const navigate = useNavigate();

  const certificates = [
    {
      title: "Member of Royal College of Surgeons (MRCS)",
      institution: "Royal College of Surgeons, UK",
      year: "2005",
      description: "Fellowship certification in surgical practice"
    },
    {
      title: "Jordanian Board of General Surgery",
      institution: "Jordan Medical Council",
      year: "2003",
      description: "Specialist certification in general surgery"
    },
    {
      title: "MBBS",
      institution: "Jordan University of Science and Technology",
      year: "1998",
      description: "Bachelor of Medicine, Bachelor of Surgery"
    }
  ];

  const achievements = [
    "20+ years of surgical experience",
    "Over 1000+ successful laparoscopic procedures",
    "Clinical Assistant Professor at University of Sharjah",
    "Programme Director at Islamic Hospital, Amman",
    "Advanced training in minimally invasive surgical techniques"
  ];

  return (
    <>
      <Helmet>
        <title>About Dr. Osama Saeed Abuzaid - Detailed Profile</title>
      </Helmet>
      
      <main className="min-h-screen bg-gradient-to-b from-medical-50 to-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <Button 
              variant="outline" 
              onClick={() => navigate('/')}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
            <Button 
              variant="outline" 
              onClick={() => navigate('/ar/about')}
              className="flex items-center gap-2"
            >
              <Globe className="h-4 w-4" />
              العربية
            </Button>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-40 h-40 mx-auto relative mb-6">
                <img
                  src="/lovable-uploads/bb2df379-2661-4c76-8b20-6884932129ee.png"
                  alt="Dr. Osama Saeed Abuzaid"
                  className="rounded-full w-full h-full object-cover border-4 border-medical-100 shadow-xl"
                />
              </div>
              <h1 className="text-4xl font-bold text-medical-900 mb-4">
                Dr. Osama Saeed Abuzaid
              </h1>
              <p className="text-xl text-medical-700">
                Consultant General, Laparoscopic & Colo-proctology Surgeon
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-medical-100">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="h-6 w-6 text-medical-600" />
                  <h2 className="text-2xl font-semibold text-medical-900">Certificates</h2>
                </div>
                <div className="space-y-4">
                  {certificates.map((cert, index) => (
                    <div key={index} className="border-l-4 border-medical-500 pl-4">
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
                  <h2 className="text-2xl font-semibold text-medical-900">Achievements</h2>
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
                <h2 className="text-2xl font-semibold text-medical-900">Professional Summary</h2>
              </div>
              <div className="space-y-4 text-medical-700">
                <p>
                  Dr. Osama Abuzaid brings over two decades of expertise in General and Laparoscopic Surgery. His journey spans multiple prestigious institutions across Jordan, the UK, and the UAE, where he has consistently demonstrated excellence in surgical care and medical education.
                </p>
                <p>
                  As a member of the Royal College of Surgeons (MRCS), UK, and with extensive training in Laparoscopic & Colorectal Surgery, Dr. Abuzaid combines surgical expertise with a commitment to patient care. His approach to surgery emphasizes minimally invasive techniques, ensuring faster recovery times and better outcomes for patients.
                </p>
                <p>
                  In addition to his clinical work, Dr. Abuzaid is actively involved in medical education as a Clinical Assistant Professor at the University of Sharjah, contributing to the development of the next generation of medical professionals. His commitment to excellence in both patient care and medical education makes him a respected figure in the surgical community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default DetailedAbout;