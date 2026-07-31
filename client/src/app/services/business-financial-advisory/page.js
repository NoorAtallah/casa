import BizHero from "@/components/services/business/bizHero";
import BizApproach from "@/components/services/business/bizApproach";
import BizServices from "@/components/services/business/bizServices";
import BizClients from "@/components/services/business/bizClients";
import BizWhyUs from "@/components/services/business/bizWhyUs";
import BizCta from "@/components/services/business/bizCta";

export const metadata = {
  title: "Business & Financial Advisory Dubai | Strategic Consulting UAE | Casa Di Consiglio",
  description:
    "Casa Di Consiglio provides boutique business and financial advisory services in Dubai, helping entrepreneurs, SMEs, and investors improve performance, plan growth, and make better strategic decisions.",
  keywords: [
    "Business Advisory Dubai",
    "Financial Advisory Dubai",
    "Business Consulting UAE",
    "Strategic Advisory Dubai",
    "Business Consultant Dubai",
    "Business Strategy Consulting",
    "Financial Consulting UAE",
    "SME Advisory Dubai",
    "Business Growth Advisory",
    "Financial Planning & Analysis",
    "Business Valuation UAE",
    "Financial Modelling UAE",
    "Corporate Finance Advisory",
    "Investment Advisory UAE",
    "Business Performance Improvement",
    "Strategic Planning Consultant Dubai",
    "Fractional CFO Advisory UAE",
  ],
  alternates: {
    canonical: "/services/business-financial-advisory",
  },
};

export default function BusinessFinancialAdvisoryPage() {
  return (
    <div>
      <BizHero />
      <BizApproach />
      <BizServices />
      <BizClients />
      <BizWhyUs />
      <BizCta />
    </div>
  );
}
