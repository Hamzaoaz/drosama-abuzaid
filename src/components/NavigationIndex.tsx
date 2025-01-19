import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface NavigationIndexProps {
  isArabic?: boolean;
}

export const NavigationIndex = ({ isArabic = false }: NavigationIndexProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("hero-section");

  const sections = isArabic ? [
    { id: "hero-section", label: "الرئيسية", buttonText: "الرئيسية" },
    { id: "services-section", label: "خدماتنا المتخصصة", buttonText: "الخدمات" },
    { id: "surgeries-section", label: "الإجراءات الجراحية", buttonText: "الجراحة" },
    { id: "biography-section", label: "السيرة المهنية", buttonText: "السيرة" },
    { id: "booking-section", label: "حجز موعد", buttonText: "الحجز" },
  ] : [
    { id: "hero-section", label: "Home", buttonText: "Home" },
    { id: "services-section", label: "Specialized Services", buttonText: "Services" },
    { id: "surgeries-section", label: "Surgical Procedures", buttonText: "Procedures" },
    { id: "biography-section", label: "Professional Background", buttonText: "Biography" },
    { id: "booking-section", label: "Book Appointment", buttonText: "Booking" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const getCurrentSectionLabel = () => {
    const section = sections.find(s => s.id === currentSection);
    return section ? section.buttonText : sections[0].buttonText;
  };

  return (
    <div className={`fixed top-4 ${isArabic ? 'right-4' : 'left-4'} z-50`}>
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <Button variant="outline" className="w-full mb-2 bg-white shadow-md">
            {isOpen ? (
              <ChevronUp className="h-4 w-4 mr-2" />
            ) : (
              <ChevronDown className="h-4 w-4 mr-2" />
            )}
            {getCurrentSectionLabel()}
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="bg-white rounded-lg shadow-lg p-2">
          <div className="space-y-2">
            {sections.map((section) => (
              <Button
                key={section.id}
                variant="ghost"
                className="w-full justify-start"
                onClick={() => scrollToSection(section.id)}
              >
                {section.label}
              </Button>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};