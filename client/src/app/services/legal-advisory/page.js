import LegalHero from "@/components/services/legal/legalHero";
import LegalApproach from "@/components/services/legal/legalApproach";
import LegalServices from "@/components/services/legal/legalServices";
import LegalClients from "@/components/services/legal/legalClients";
import LegalWhyUs from "@/components/services/legal/legalWhyUs";
import LegalCta from "@/components/services/legal/legalCta";

export const metadata = {
  title:
    "Legal Advisory Services Dubai | Corporate & Commercial Lawyers UAE | Casa Di Consiglio",
  description:
    "Casa Di Consiglio provides boutique legal advisory services in Dubai, supporting businesses with corporate law, commercial contracts, business structuring, governance, compliance, and strategic legal solutions.",
  keywords: [
    "Legal Advisory Dubai",
    "Legal Consultant Dubai",
    "Corporate Legal Advisory UAE",
    "Commercial Lawyer Dubai",
    "Business Lawyer UAE",
    "Corporate Law UAE",
    "Commercial Contracts UAE",
    "Business Structuring UAE",
    "Corporate Governance UAE",
    "Legal Consultancy Dubai",
    "Contract Review UAE",
    "Regulatory Compliance UAE",
    "Shareholder Agreement UAE",
    "Legal Due Diligence UAE",
    "Business Setup Legal Advice",
    "Corporate Advisory UAE",
  ],
  alternates: {
    canonical: "/services/legal-advisory",
  },
};

export default function LegalAdvisoryPage() {
  return (
    <div>
      <LegalHero />
      <LegalApproach />
      <LegalServices />
      <LegalClients />
      <LegalWhyUs />
      <LegalCta />
    </div>
  );
}
