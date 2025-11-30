import Image from "next/image";
import Hero from "@/components/hero";
import ExpertiseSection from "@/components/areaOfExperties";
import CompanyProfile from "@/components/about";
import WhyChooseUs from "@/components/whyChooseUs";
import ContactUs from "@/components/contact";
import FlowSpanishAnnouncementSection from "@/components/collaborationSection";
export default function Home() {
  return (
   <div>
      <Hero />
      <ExpertiseSection />
      {/* <WhyChooseUs /> */}
      <FlowSpanishAnnouncementSection />
      {/* <ContactUs /> */}
      {/* <CompanyProfile /> */}

   </div>
  );
}
