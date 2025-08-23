import { Building2, Globe, Shield, Briefcase, Coins, TrendingUp, Smartphone, Users, CheckCircle, MapPin, Award, Star, ArrowRight } from 'lucide-react';

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
    <section className="relative py-32 bg-gradient-to-br from-zinc-950 via-slate-900 to-zinc-950 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Dynamic Grid */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(rgba(189, 169, 133, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(189, 169, 133, 0.3) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}></div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-[#BDA985] rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/6 w-1 h-1 bg-[#BDA985] rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-2/3 left-1/3 w-1.5 h-1.5 bg-[#BDA985] rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-20 left-32 w-96 h-96 border border-[#BDA985] border-opacity-5 rotate-45"></div>
        <div className="absolute -bottom-48 right-16 w-96 h-96 border border-[#BDA985] border-opacity-10 rotate-12"></div>
        
        {/* Radial Gradient Overlays */}
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-radial from-[#BDA985] from-0% via-transparent via-20% to-transparent opacity-[0.03]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zinc-900 to-zinc-800 backdrop-blur-xl rounded-full border border-[#BDA985] border-opacity-20 mb-8 shadow-2xl">
            <div className="w-2 h-2 bg-[#BDA985] rounded-full mr-3 animate-pulse"></div>
            <span className="text-[#BDA985] font-semibold tracking-wide text-sm uppercase">Company Profile</span>
            <div className="ml-4 px-3 py-1 bg-[#BDA985] bg-opacity-10 rounded-full">
              <span className="text-white text-xs font-bold">GLOBAL</span>
            </div>
          </div>
          
          <h2 className="mb-8">
            <div className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.9] mb-4">
              <span className="block text-white">AREAS OF</span>
              <span className="block bg-gradient-to-r from-[#BDA985] via-[#d4c4a0] to-[#BDA985] bg-clip-text text-transparent">CASA DI CONSIGLIO</span>
            </div>
          </h2>
          
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#BDA985] to-transparent mx-auto mb-8 opacity-60"></div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Left Column - Description */}
          <div className="space-y-8">
            {/* Financial Licensing Card */}
            <div className="relative bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-3xl p-10 border border-zinc-800 hover:border-[#BDA985] hover:border-opacity-50 shadow-2xl hover:shadow-[#BDA985]/10 transition-all duration-500 group overflow-hidden">
              {/* Premium Badge */}
              <div className="absolute top-6 right-6 flex items-center text-[#BDA985] text-xs">
                <Star className="w-3 h-3 mr-1 fill-current" />
                <span className="font-semibold">Premium Service</span>
              </div>

              <h3 className="text-3xl font-bold text-white mb-8 flex items-center group-hover:text-[#BDA985] transition-colors duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-[#BDA985] to-[#d4c4a0] bg-opacity-10 rounded-2xl flex items-center justify-center mr-4 group-hover:bg-opacity-20 transition-all duration-300 group-hover:scale-110">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                Financial Licensing & Compliance
              </h3>
              
              <p className="text-zinc-300 leading-relaxed mb-8 text-lg">
                Assisting companies that practice financial activity in applying and obtaining a license to practice financial activities and marketing financial products by the regulatory authorities in the United Arab Emirates, the Kingdom of Bahrain, the Arab Republic of Egypt and the Republic of Iraq.
              </p>

              <div className="relative bg-gradient-to-r from-zinc-800 to-zinc-900 rounded-2xl p-8 border border-zinc-700">
                <h4 className="font-bold text-[#BDA985] mb-6 text-xl">Our Regulatory Expertise Includes:</h4>
                <div className="space-y-4">
                  <div className="flex items-center group/item">
                    <div className="w-6 h-6 bg-[#BDA985] bg-opacity-20 rounded-full flex items-center justify-center mr-4 group-hover/item:bg-opacity-40 transition-all duration-300">
                      <CheckCircle className="w-4 h-4 text-[#BDA985]" />
                    </div>
                    <span className="text-white font-medium group-hover/item:text-[#BDA985] transition-colors duration-300">License application and acquisition</span>
                  </div>
                  <div className="flex items-center group/item">
                    <div className="w-6 h-6 bg-[#BDA985] bg-opacity-20 rounded-full flex items-center justify-center mr-4 group-hover/item:bg-opacity-40 transition-all duration-300">
                      <CheckCircle className="w-4 h-4 text-[#BDA985]" />
                    </div>
                    <span className="text-white font-medium group-hover/item:text-[#BDA985] transition-colors duration-300">Regulatory compliance management</span>
                  </div>
                  <div className="flex items-center group/item">
                    <div className="w-6 h-6 bg-[#BDA985] bg-opacity-20 rounded-full flex items-center justify-center mr-4 group-hover/item:bg-opacity-40 transition-all duration-300">
                      <CheckCircle className="w-4 h-4 text-[#BDA985]" />
                    </div>
                    <span className="text-white font-medium group-hover/item:text-[#BDA985] transition-colors duration-300">Financial product marketing authorization</span>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-[#BDA985] bg-opacity-5 rotate-45"></div>
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#BDA985] bg-opacity-10 rotate-45"></div>
            </div>

            {/* VARA Card */}
            <div className="relative bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-3xl p-10 border border-zinc-800 hover:border-[#BDA985] hover:border-opacity-50 shadow-2xl hover:shadow-[#BDA985]/10 transition-all duration-500 group overflow-hidden">
              {/* Elite Badge */}
              <div className="absolute top-6 right-6 flex items-center text-[#BDA985] text-xs">
                <Award className="w-3 h-3 mr-1 fill-current" />
                <span className="font-semibold">Elite Service</span>
              </div>

              <h3 className="text-3xl font-bold text-white mb-8 flex items-center group-hover:text-[#BDA985] transition-colors duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-[#BDA985] to-[#d4c4a0] bg-opacity-10 rounded-2xl flex items-center justify-center mr-4 group-hover:bg-opacity-20 transition-all duration-300 group-hover:scale-110">
                  <Building2 className="w-7 h-7 text-white" />
                </div>
                Company Establishment & VARA
              </h3>
              
              <p className="text-zinc-300 leading-relaxed mb-8 text-lg">
                Assistance in establishing companies, in cooperation with licensed entities, in the free zones working in the field of virtual assets and developing technology programs for each of the following entities:
              </p>

              <div className="relative bg-gradient-to-r from-[#BDA985] to-[#d4c4a0] rounded-2xl p-8 text-zinc-900 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-radial from-white to-transparent opacity-10 rounded-full blur-xl"></div>
                <h4 className="font-black text-2xl mb-2">Virtual Assets Regulatory Authority</h4>
                <p className="text-xl font-bold mb-4">(VARA)</p>
                <p className="font-medium opacity-90">Specialized expertise in VARA compliance and virtual asset regulations</p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-[#BDA985] bg-opacity-10 rotate-45"></div>
            </div>
          </div>

          {/* Right Column - Services Grid */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-4xl font-bold text-white mb-4">Financial Services</h3>
              <h4 className="text-2xl font-light text-[#BDA985] mb-8">Portfolio</h4>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {financialServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-2xl p-8 border border-zinc-800 hover:border-[#BDA985] hover:border-opacity-50 shadow-xl hover:shadow-[#BDA985]/10 transition-all duration-500 hover:-translate-y-2"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-[#BDA985] to-[#d4c4a0] bg-opacity-10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-opacity-20 transition-all duration-300 group-hover:scale-110">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-white mb-3 text-lg group-hover:text-[#BDA985] transition-colors duration-300">{service.title}</h4>
                    <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">{service.description}</p>
                    
                    {/* Hover Indicator */}
                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#BDA985] group-hover:w-full transition-all duration-500"></div>
                    
                    {/* Decorative Elements */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#BDA985] bg-opacity-10 rotate-45"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Countries Section */}
        <div className="relative bg-gradient-to-r from-zinc-900 via-zinc-950 to-zinc-900 rounded-3xl p-12 md:p-16 border border-zinc-800 shadow-2xl mb-16 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-8 left-8 w-32 h-32 bg-gradient-radial from-[#BDA985] to-transparent opacity-5 rounded-full blur-xl"></div>
            <div className="absolute bottom-8 right-8 w-24 h-24 bg-gradient-radial from-[#BDA985] to-transparent opacity-10 rounded-full blur-lg"></div>
          </div>

          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#BDA985] to-[#d4c4a0] bg-opacity-10 rounded-full border border-[#BDA985] border-opacity-30 mb-6">
              <MapPin className="w-5 h-5 text-white mr-3" />
              <span className="text-white font-bold text-sm uppercase tracking-wider">Global Coverage</span>
            </div>
            <h3 className="text-4xl font-bold text-white mb-4">Regulatory Authorities</h3>
            <p className="text-zinc-400 text-lg">Operating across four key jurisdictions</p>
          </div>
          
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {countries.map((country, index) => (
              <div
                key={index}
                className="group text-center p-8 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl hover:from-zinc-700 hover:to-zinc-800 transition-all duration-500 border border-zinc-700 hover:border-[#BDA985] hover:border-opacity-50 hover:-translate-y-2"
              >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">{country.flag}</div>
                <h4 className="font-bold text-white mb-2 text-lg group-hover:text-[#BDA985] transition-colors duration-300">{country.name}</h4>
                <p className="text-[#BDA985] font-semibold text-sm tracking-wider">{country.code}</p>
                
                {/* Decorative Line */}
                <div className="w-0 h-0.5 bg-[#BDA985] mx-auto mt-4 group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#BDA985] bg-opacity-5 rotate-45"></div>
          <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#BDA985] bg-opacity-10 rotate-45"></div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button className="group relative overflow-hidden bg-[#BDA985] text-zinc-900 px-12 py-5 rounded-2xl font-bold text-xl uppercase tracking-wide hover:shadow-2xl hover:shadow-[#BDA985]/25 transition-all duration-300 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-r from-[#d4c4a0] to-[#BDA985] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
            <div className="relative flex items-center justify-center">
              Start Your Licensing Journey
              <ArrowRight className="ml-4 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </div>
          </button>
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-1 bg-gradient-to-r from-transparent via-[#BDA985] to-transparent opacity-40"></div>
      </div>
    </section>
  );
}