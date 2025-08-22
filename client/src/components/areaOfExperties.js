import { Scale, TrendingUp, Smartphone, ArrowRight, MapPin, Users, Shield } from 'lucide-react';

export default function ExpertiseSection() {
  const expertiseAreas = [
    {
      icon: Scale,
      title: "Legal Advice Middle East",
      description: "Casadiconsiglio believes in providing legal and judicial aid for all. The economic and social circumstances must not preclude anyone to get easy access to justice. We are here to help in all legal consultation.",
      features: ["Business Formation", "Regulatory Compliance", "Contract Law", "Dispute Resolution"]
    },
    {
      icon: TrendingUp,
      title: "Legal Financial Advice",
      description: "Casadiconsiglio provides you so many opportunities – to travel, relax, socialise, progress your career…and to advance your financial standing. We assist, you probably lack the time, inclination or knowledge to handle your (likely complex) finances alone.",
      features: ["Investment Planning", "Asset Management", "Financial Structuring", "Risk Assessment"]
    },
    {
      icon: Smartphone,
      title: "E-Market Advice",
      description: "Casadiconsiglio identifying a client's financial goals and then working to accomplish those goals via portfolio management—buying and managing stocks, bonds and funds. Creating e-wallets and every electronic market solution.",
      features: ["Digital Wallets", "Cryptocurrency", "Online Trading", "Fintech Solutions"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#c3fcf2] rounded-full text-[#005b4c] text-sm font-medium mb-4">
            <Shield className="w-4 h-4 mr-2" />
            Professional Excellence
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-[#005b4c] mb-6">
            WE ARE EXPERT IN
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-[#bda985] to-[#4b8178] mx-auto mb-6"></div>
          
          <p className="text-xl text-[#4b8178] max-w-3xl mx-auto leading-relaxed">
            Areas Of Legal Practice
          </p>
        </div>

        {/* Expertise Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg border border-[#c3fcf2] border-opacity-30 hover:shadow-2xl hover:border-[#bda985] transition-all duration-300 hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-[#bda985] to-[#4b8178] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-[#005b4c] mb-4 group-hover:text-[#4b8178] transition-colors duration-300">
                  {area.title}
                </h3>

                {/* Description */}
                <p className="text-[#4b8178] mb-6 leading-relaxed text-sm">
                  {area.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {area.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-[#bda985] rounded-full mr-3"></div>
                      <span className="text-[#005b4c]">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Connect Button */}
                <button className="w-full bg-[#005b4c] text-[#c3fcf2] py-3 px-6 rounded-lg font-semibold hover:bg-[#bda985] hover:text-[#005b4c] transition-all duration-300 flex items-center justify-center group">
                  Connect to me
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Bottom Statistics */}
        <div className="mt-20 bg-gradient-to-r from-[#005b4c] to-[#4b8178] rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <MapPin className="w-12 h-12 text-[#bda985] mb-4" />
              <h4 className="text-3xl font-bold text-[#c3fcf2] mb-2">4 Countries</h4>
              <p className="text-[#c3fcf2] opacity-80">UAE, Bahrain, Egypt, Iraq</p>
            </div>
            
            <div className="flex flex-col items-center">
              <Users className="w-12 h-12 text-[#bda985] mb-4" />
              <h4 className="text-3xl font-bold text-[#c3fcf2] mb-2">Expert Team</h4>
              <p className="text-[#c3fcf2] opacity-80">Qualified Legal & Financial Professionals</p>
            </div>
            
            <div className="flex flex-col items-center">
              <Shield className="w-12 h-12 text-[#bda985] mb-4" />
              <h4 className="text-3xl font-bold text-[#c3fcf2] mb-2">Full Compliance</h4>
              <p className="text-[#c3fcf2] opacity-80">Regulatory Standards Met</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}