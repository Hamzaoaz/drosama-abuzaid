import { useState } from "react";
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

  const sections = isArabic ? [
    { id: "hero-section", label: "الرئيسية" },
    { id: "services-section", label: "خدماتنا المتخصصة" },
    { id: "surgeries-section", label: "الإجراءات الجراحية" },
    { id: "biography-section", label: "السيرة المهنية" },
    { id: "booking-section", label: "حجز موعد" },
  ] : [
    { id: "hero-section", label: "Home" },
    { id: "services-section", label: "Specialized Services" },
    { id: "surgeries-section", label: "Surgical Procedures" },
    { id: "biography-section", label: "Professional Background" },
    { id: "booking-section", label: "Book Appointment" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <div className={`fixed top-4 ${isArabic ? 'left-4' : 'right-4'} z-50`}>
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <Button variant="outline" className="w-full mb-2 bg-white shadow-md">
            {isOpen ? (
              <ChevronUp className="h-4 w-4 mr-2" />
            ) : (
              <ChevronDown className="h-4 w-4 mr-2" />
            )}
            {isArabic ? "فهرس المحتويات" : "Page Index"}
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