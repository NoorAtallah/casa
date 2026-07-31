import ServicesHero from "@/components/services/servicesHero";
import PracticeAreaBlocks from "@/components/services/practiceAreaBlocks";
import CasaDifference from "@/components/services/casaDifference";
import ServicesCta from "@/components/services/servicesCta";

export const metadata = {
  title:
    "Advisory Services in Dubai | Legal, Business & Financial Advisory | Casa Di Consiglio",
  description:
    "Explore Casa Di Consiglio's advisory services in Dubai, including legal advisory, business consulting, financial advisory, and professional learning solutions designed to help businesses make better decisions.",
  keywords: [
    "Advisory Services Dubai",
    "Business Advisory Dubai",
    "Legal Advisory Dubai",
    "Financial Advisory Dubai",
    "Consulting Services UAE",
    "Boutique Advisory Firm UAE",
    "Business Consultant Dubai",
    "Corporate Advisory UAE",
    "Strategic Advisory Services",
    "Business Strategy Consulting",
    "Corporate Legal Advisory",
    "Financial Consulting UAE",
    "Business Planning Advisory",
    "Investment Advisory UAE",
    "Professional Training Dubai",
  ],
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <div>
      <ServicesHero />
      <PracticeAreaBlocks />
      <CasaDifference />
      <ServicesCta />
    </div>
  );
}
