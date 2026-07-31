import Hero from "@/components/hero";
import WelcomeSection from "@/components/welcomeSection";
import ExpertiseSection from "@/components/areaOfExperties";
import WhyChooseUs from "@/components/whyChooseUs";
import FlowSpanishAnnouncementSection from "@/components/collaborationSection";

export const metadata = {
  title: "Boutique Consulting & Advisory Firm in Dubai | Casa Di Consiglio",
  description:
    "Casa Di Consiglio is a boutique consulting and advisory firm in Dubai providing legal advisory, business & financial advisory, and professional learning solutions to help businesses, entrepreneurs, and investors make better decisions with confidence.",
  keywords: [
    "Boutique Consulting Firm Dubai",
    "Boutique Advisory Firm UAE",
    "Business Advisory Dubai",
    "Legal Advisory Dubai",
    "Financial Advisory Dubai",
    "Business Consultant Dubai",
    "Corporate Advisory UAE",
    "Legal Consultancy UAE",
    "Business Strategy Consulting",
    "Financial Consulting UAE",
    "Corporate Governance",
    "Business Planning",
    "Investment Advisory",
    "Business Structuring",
    "Commercial Contracts",
    "Professional Learning",
    "Spanish Language Courses Dubai",
  ],
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <div>
      <Hero />
      <WelcomeSection />
      <ExpertiseSection />
      <WhyChooseUs />
      {/* <FlowSpanishAnnouncementSection /> */}
    </div>
  );
}
