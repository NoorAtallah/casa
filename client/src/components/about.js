import { Building2, Globe, Shield, Briefcase, Coins, TrendingUp, Smartphone, Users, CheckCircle, MapPin } from 'lucide-react';

export default function CompanyProfile() {
  const financialServices = [
    {
      icon: TrendingUp,
      title: "Forex & Financial Derivatives",
      description: "Expert guidance in forex trading and complex financial instruments"
    },
    {
      icon: Globe,
      title: "Global Markets Trading",
      description: "Access and navigation of international trading platforms"
    },
    {
      icon: Briefcase,
      title: "Financial Consulting",
      description: "Definition, promotion and comprehensive financial advisory"
    },
    {
      icon: Shield,
      title: "Asset Management",
      description: "Professional portfolio management and investment strategies"
    },
    {
      icon: Smartphone,
      title: "Electronic Money Transfer",
      description: "Secure digital payment solutions and money transfer services"
    },
    {
      icon: Coins,
      title: "Digital Wallets & Virtual Assets",
      description: "E-wallet creation and virtual asset broker services"
    }
  ];

  const countries = [
    { name: "United Arab Emirates", flag: "🇦🇪", code: "UAE" },
    { name: "Kingdom of Bahrain", flag: "🇧🇭", code: "BHR" },
    { name: "Arab Republic of Egypt", flag: "🇪🇬", code: "EGY" },
    { name: "Republic of Iraq", flag: "🇮🇶", code: "IRQ" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#c3fcf2] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#005b4c] rounded-full text-[#c3fcf2] text-sm font-medium mb-4">
            <Building2 className="w-4 h-4 mr-2" />
            Company Profile
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-[#005b4c] mb-6">
            Areas Of <span className="text-[#bda985]">Casa Di Consiglio</span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-[#bda985] to-[#4b8178] mx-auto mb-8"></div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Description */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#c3fcf2] border-opacity-50">
              <h3 className="text-2xl font-bold text-[#005b4c] mb-6 flex items-center">
                <Shield className="w-6 h-6 mr-3 text-[#bda985]" />
                Financial Licensing & Compliance
              </h3>
              
              <p className="text-[#4b8178] leading-relaxed mb-6">
                Assisting companies that practice financial activity in applying and obtaining a license to practice financial activities and marketing financial products by the regulatory authorities in the United Arab Emirates, the Kingdom of Bahrain, the Arab Republic of Egypt and the Republic of Iraq.
              </p>

              <div className="bg-[#c3fcf2] bg-opacity-30 rounded-lg p-4">
                <h4 className="font-semibold text-[#005b4c] mb-2">Our Regulatory Expertise Includes:</h4>
                <div className="text-sm text-[#4b8178] space-y-1">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-[#bda985]" />
                    License application and acquisition
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-[#bda985]" />
                    Regulatory compliance management
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-[#bda985]" />
                    Financial product marketing authorization
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#c3fcf2] border-opacity-50">
              <h3 className="text-2xl font-bold text-[#005b4c] mb-6 flex items-center">
                <Building2 className="w-6 h-6 mr-3 text-[#bda985]" />
                Company Establishment & VARA
              </h3>
              
              <p className="text-[#4b8178] leading-relaxed mb-6">
                Assistance in establishing companies, in cooperation with licensed entities, in the free zones working in the field of virtual assets and developing technology programs for each of the following entities:
              </p>

              <div className="bg-gradient-to-r from-[#bda985] to-[#4b8178] rounded-lg p-6 text-white">
                <h4 className="font-bold text-xl mb-2">Virtual Assets Regulatory Authority</h4>
                <p className="text-lg font-semibold">(VARA)</p>
                <p className="text-sm opacity-90 mt-2">Specialized expertise in VARA compliance and virtual asset regulations</p>
              </div>
            </div>
          </div>

          {/* Right Column - Services Grid */}
          <div>
            <h3 className="text-2xl font-bold text-[#005b4c] mb-8">Financial Services Portfolio</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {financialServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-md border border-[#c3fcf2] border-opacity-30 hover:shadow-lg hover:border-[#bda985] transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-[#bda985] to-[#4b8178] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-[#005b4c] mb-2 text-sm">{service.title}</h4>
                    <p className="text-[#4b8178] text-xs leading-relaxed">{service.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Countries Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#c3fcf2] border-opacity-50">
          <h3 className="text-2xl font-bold text-[#005b4c] mb-8 text-center flex items-center justify-center">
            <MapPin className="w-6 h-6 mr-3 text-[#bda985]" />
            Regulatory Authorities Coverage
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {countries.map((country, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gradient-to-br from-[#c3fcf2] to-[#4b8178] bg-opacity-10 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-[#bda985] border-opacity-20"
              >
                <div className="text-4xl mb-3">{country.flag}</div>
                <h4 className="font-semibold text-[#005b4c] mb-1 text-sm">{country.name}</h4>
                <p className="text-[#4b8178] text-xs font-medium">{country.code}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button className="bg-[#005b4c] text-[#c3fcf2] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#bda985] hover:text-[#005b4c] transition-all duration-300 shadow-xl hover:scale-105">
            Start Your Licensing Journey
          </button>
        </div>
      </div>
    </section>
  );
}