import { Scale, TrendingUp, Smartphone, ArrowRight, MapPin, Users, Shield, Star, Award } from 'lucide-react';

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
    <section className="relative py-32 bg-gradient-to-br from-zinc-950 via-slate-900 to-zinc-950 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Dynamic Grid */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(rgba(189, 169, 133, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(189, 169, 133, 0.3) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}></div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-[#BDA985] rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/5 w-1 h-1 bg-[#BDA985] rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-[#BDA985] rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Geometric Shapes */}
        <div className="absolute -top-48 right-32 w-96 h-96 border border-[#BDA985] border-opacity-5 rotate-45"></div>
        <div className="absolute bottom-32 -left-48 w-96 h-96 border border-[#BDA985] border-opacity-10 rotate-12"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zinc-900 to-zinc-800 backdrop-blur-xl rounded-full border border-[#BDA985] border-opacity-20 mb-8 shadow-2xl">
            <div className="w-2 h-2 bg-[#BDA985] rounded-full mr-3 animate-pulse"></div>
            <span className="text-[#BDA985] font-semibold tracking-wide text-sm uppercase">Professional Excellence</span>
            <div className="ml-4 px-3 py-1 bg-[#BDA985] bg-opacity-10 rounded-full">
              <span className="text-white text-xs font-bold">ELITE</span>
            </div>
          </div>
          
          <h2 className="mb-8">
            <div className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.9] mb-4">
              <span className="block text-white">WE ARE</span>
              <span className="block bg-gradient-to-r from-[#BDA985] via-[#d4c4a0] to-[#BDA985] bg-clip-text text-transparent">EXPERT IN</span>
            </div>
          </h2>
          
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#BDA985] to-transparent mx-auto mb-8 opacity-60"></div>
          
          <p className="text-xl md:text-2xl text-zinc-300 font-light leading-relaxed max-w-3xl mx-auto">
            Areas Of <span className="text-[#BDA985]">Legal Practice</span> & Strategic Excellence
          </p>
        </div>

        {/* Expertise Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {expertiseAreas.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-2xl p-8 border border-zinc-800 hover:border-[#BDA985] hover:border-opacity-50 shadow-2xl hover:shadow-[#BDA985]/10 transition-all duration-500 hover:-translate-y-3"
              >
                {/* Premium Badge */}
                <div className="absolute top-4 right-4 flex items-center text-[#BDA985] text-xs">
                  <Star className="w-3 h-3 mr-1 fill-current" />
                  <span className="font-semibold">Premium</span>
                </div>

                {/* Icon */}
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#BDA985] to-[#d4c4a0] bg-opacity-10 rounded-2xl flex items-center justify-center group-hover:bg-opacity-20 transition-all duration-500 group-hover:scale-110">
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#BDA985] to-transparent opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 group-hover:text-[#BDA985] transition-colors duration-300">
                  {area.title}
                </h3>

                {/* Description */}
                <p className="text-zinc-400 mb-8 leading-relaxed">
                  {area.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {area.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center group/feature">
                      <div className="w-2 h-2 bg-[#BDA985] rounded-full mr-4 group-hover/feature:scale-150 transition-transform duration-300"></div>
                      <span className="text-zinc-300 font-medium group-hover/feature:text-white transition-colors duration-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Connect Button */}
                <button className="group/btn relative overflow-hidden w-full bg-[#BDA985] text-zinc-900 py-4 px-6 rounded-lg font-bold text-sm uppercase tracking-wide hover:shadow-lg hover:shadow-[#BDA985]/25 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#d4c4a0] to-[#BDA985] translate-x-[-100%] group-hover/btn:translate-x-0 transition-transform duration-300"></div>
                  <div className="relative flex items-center justify-center">
                    Connect to me
                    <ArrowRight className="ml-3 w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-300" />
                  </div>
                </button>

                {/* Decorative Elements */}
                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-[#BDA985] bg-opacity-5 rotate-45"></div>
                <div className="absolute -top-2 -left-2 w-4 h-4 bg-[#BDA985] bg-opacity-10 rotate-45"></div>
              </div>
            );
          })}
        </div>

        {/* Premium Statistics Section */}
        <div className="relative bg-gradient-to-r from-zinc-900 via-zinc-950 to-zinc-900 rounded-3xl p-12 md:p-16 border border-zinc-800 shadow-2xl overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-8 right-8 w-32 h-32 bg-gradient-radial from-[#BDA985] to-transparent opacity-5 rounded-full blur-xl"></div>
            <div className="absolute bottom-8 left-8 w-24 h-24 bg-gradient-radial from-[#BDA985] to-transparent opacity-10 rounded-full blur-lg"></div>
          </div>

          {/* Elite Badge */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#BDA985] to-[#d4c4a0] bg-opacity-10 rounded-full border border-[#BDA985] border-opacity-30">
              <Award className="w-5 h-5 text-white mr-3" />
              <span className="text-white font-bold text-sm uppercase tracking-wider">Global Excellence</span>
            </div>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="group flex flex-col items-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#BDA985] to-[#d4c4a0] bg-opacity-10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-opacity-20 transition-all duration-300 group-hover:scale-110">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-4xl md:text-5xl font-black text-white mb-3 group-hover:text-[#BDA985] transition-colors duration-300">4</h4>
              <h5 className="text-xl font-bold text-[#BDA985] mb-2 uppercase tracking-wide">Countries</h5>
              <p className="text-zinc-400 font-light">UAE, Bahrain, Egypt, Iraq</p>
            </div>
            
            <div className="group flex flex-col items-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#BDA985] to-[#d4c4a0] bg-opacity-10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-opacity-20 transition-all duration-300 group-hover:scale-110">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-4xl md:text-5xl font-black text-white mb-3 group-hover:text-[#BDA985] transition-colors duration-300">15+</h4>
              <h5 className="text-xl font-bold text-[#BDA985] mb-2 uppercase tracking-wide">Expert Team</h5>
              <p className="text-zinc-400 font-light">Qualified Legal & Financial Professionals</p>
            </div>
            
            <div className="group flex flex-col items-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#BDA985] to-[#d4c4a0] bg-opacity-10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-opacity-20 transition-all duration-300 group-hover:scale-110">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-4xl md:text-5xl font-black text-white mb-3 group-hover:text-[#BDA985] transition-colors duration-300">100%</h4>
              <h5 className="text-xl font-bold text-[#BDA985] mb-2 uppercase tracking-wide">Compliance</h5>
              <p className="text-zinc-400 font-light">Regulatory Standards Met</p>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#BDA985] bg-opacity-5 rotate-45"></div>
          <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-[#BDA985] bg-opacity-10 rotate-45"></div>
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-1 bg-gradient-to-r from-transparent via-[#BDA985] to-transparent opacity-40"></div>
      </div>
    </section>
  );
}