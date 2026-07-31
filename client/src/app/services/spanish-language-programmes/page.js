import AcademyHero from "@/components/services/academy/academyHero";
import Instructor from "@/components/services/academy/instructor";
import WhySpanish from "@/components/services/academy/whySpanish";
import Programmes from "@/components/services/academy/programmes";
import LearningApproach from "@/components/services/academy/learningApproach";
import AcademyClients from "@/components/services/academy/academyClients";
import AcademyCta from "@/components/services/academy/academyCta";

export const metadata = {
  title: "Spanish Language Courses Dubai | Business Spanish Training UAE | Casa Academy",
  description:
    "Casa Academy provides Spanish language programmes in Dubai for individuals and professionals, offering practical Spanish courses designed for communication, business, and international connections.",
  keywords: [
    "Spanish Courses Dubai",
    "Spanish Language Classes Dubai",
    "Spanish Language Training Dubai",
    "Learn Spanish Dubai",
    "Business Spanish Dubai",
    "Spanish Lessons UAE",
    "Corporate Spanish Training",
    "Spanish Teacher Dubai",
    "Professional Language Training",
    "Language Courses Dubai",
    "Spanish Classes UAE",
    "Learn Spanish for Business",
    "Spanish Communication Skills",
  ],
  alternates: {
    canonical: "/services/spanish-language-programmes",
  },
};

export default function SpanishLanguageProgrammesPage() {
  return (
    <div>
      <AcademyHero />
      <Instructor />
      <WhySpanish />
      <Programmes />
      <LearningApproach />
      <AcademyClients />
      <AcademyCta />
    </div>
  );
}
