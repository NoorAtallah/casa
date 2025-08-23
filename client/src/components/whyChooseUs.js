import { Award, Clock, Users, Shield, Target, Zap, CheckCircle, Star, Globe, HeartHandshake, ArrowRight, Sparkles } from 'lucide-react';

export default function WhyChooseUs() {
  const advantages = [
    {
      icon: Award,
      title: "Regional Expertise",
      description: "Deep understanding of Middle East regulatory landscapes across UAE, Bahrain, Egypt, and Iraq",
      highlight: "15+ Years Experience"
    },
    {
      icon: Shield,
      title: "Comprehensive Compliance",
      description: "End-to-end regulatory guidance ensuring full compliance with local and international standards",
      highlight: "100% Success Rate"
    },
    {
      icon: Zap,
      title: "Fast-Track Processing",
      description: "Streamlined processes and strong regulatory relationships for expedited license approvals",
      highlight: "50% Faster Results"
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "Personal relationship managers and 24/7 support throughout your licensing journey",
      highlight: "Always Available"
    },
    {
      icon: Globe,
      title: "Multi-Jurisdictional",
      description: "Unique capability to handle cross-border licensing and multi-country regulatory strategies",
      highlight: "4 Countries Coverage"
    },
    {
      icon: Target,
      title: "Industry Specialization",
      description: "Focused expertise in fintech, virtual assets, forex, and emerging financial technologies",
      highlight: "VARA Certified"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "Free assessment of your licensing requirements and regulatory roadmap"
    },
    {
      step: "02", 
      title: "Strategy Development",
      description: "Customized compliance strategy tailored to your business model and target markets"
    },
    {
      step: "03",
      title: "Documentation & Filing",
      description: "Complete preparation and submission of all required licensing documentation"
    },
    {
      step: "04",
      title: "Ongoing Support",
      description: "Continuous compliance monitoring and regulatory updates post-licensing"
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
        <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-[#BDA985] rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-[#BDA985] rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-2/3 right-1/6 w-1.5 h-1.5 bg-[#BDA985] rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Geometric Shapes */}
        <div className="absolute -top-48 left-16 w-96 h-96 border border-[#BDA985] border-opacity-5 rotate-45"></div>
        <div className="absolute bottom-32 -right-48 w-96 h-96 border border-[#BDA985] border-opacity-10 rotate-12"></div>
        
        {/* Radial Gradient Overlays */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-[#BDA985] from-0% via-transparent via-20% to-transparent opacity-[0.03]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zinc-900 to-zinc-800 backdrop-blur-xl rounded-full border border-[#BDA985] border-opacity-20 mb-8 shadow-2xl">
            <div className="w-2 h-2 bg-[#BDA985] rounded-full mr-3 animate-pulse"></div>
            <span className="text-[#BDA985] font-semibold tracking-wide text-sm uppercase">Your Trusted Partner</span>
            <div className="ml-4 px-3 py-1 bg-[#BDA985] bg-opacity-10 rounded-full">
              <span className="text-white text-xs font-bold">ELITE</span>
            </div>
          </div>
          
          <h2 className="mb-8">
            <div className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.9] mb-4">
              <span className="block text-white">WHY CHOOSE</span>
              <span className="block bg-gradient-to-r from-[#BDA985] via-[#d4c4a0] to-[#BDA985] bg-clip-text text-transparent">CASA DI CONSIGLIO</span>
            </div>
          </h2>
          
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#BDA985] to-transparent mx-auto mb-8 opacity-60"></div>
          
          <p className="text-xl md:text-2xl text-zinc-300 font-light leading-relaxed max-w-4xl mx-auto">
            Experience the difference of working with the Middle East&apos;s most
            <span className="text-[#BDA985]"> trusted legal and financial</span> licensing specialists
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-3xl p-10 border border-zinc-800 hover:border-[#BDA985] hover:border-opacity-50 shadow-2xl hover:shadow-[#BDA985]/10 transition-all duration-500 hover:-translate-y-3 overflow-hidden"
              >
                {/* Highlight Badge */}
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-[#BDA985] to-[#d4c4a0] text-zinc-900 px-4 py-2 rounded-full text-xs font-bold shadow-lg z-10">
                  {advantage.highlight}
                </div>

                {/* Premium Indicator */}
                <div className="absolute top-6 left-6 flex items-center text-[#BDA985] text-xs">
                  <Star className="w-3 h-3 mr-1 fill-current" />
                  <span className="font-semibold">Premium</span>
                </div>

                {/* Icon */}
                <div className="relative mb-8 mt-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#BDA985] to-[#d4c4a0] bg-opacity-10 rounded-2xl flex items-center justify-center group-hover:bg-opacity-20 transition-all duration-500 group-hover:scale-110">
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#BDA985] to-transparent opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
                </div>

                {/* Content */}
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 group-hover:text-[#BDA985] transition-colors duration-300">
                  {advantage.title}
                </h3>
                
                <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
                  {advantage.description}
                </p>

                {/* Decorative Elements */}
                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-[#BDA985] bg-opacity-5 rotate-45"></div>
                <div className="absolute -top-2 -left-2 w-4 h-4 bg-[#BDA985] bg-opacity-10 rotate-45"></div>
              </div>
            );
          })}
        </div>

        {/* Process Section */}
        <div className="relative bg-gradient-to-r from-zinc-900 via-zinc-950 to-zinc-900 rounded-3xl p-12 md:p-16 mb-20 border border-zinc-800 shadow-2xl overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-8 right-8 w-32 h-32 bg-gradient-radial from-[#BDA985] to-transparent opacity-5 rounded-full blur-xl"></div>
            <div className="absolute bottom-8 left-8 w-24 h-24 bg-gradient-radial from-[#BDA985] to-transparent opacity-10 rounded-full blur-lg"></div>
          </div>

          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#BDA985] to-[#d4c4a0] bg-opacity-10 rounded-full border border-[#BDA985] border-opacity-30 mb-8">
              <Sparkles className="w-5 h-5 text-white mr-3" />
              <span className="text-white font-bold text-sm uppercase tracking-wider">Proven Excellence</span>
            </div>
            
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-[#BDA985]">Proven Process</span>
            </h3>
            <p className="text-zinc-300 text-xl max-w-3xl mx-auto leading-relaxed">
              A streamlined approach that has successfully guided hundreds of companies through complex regulatory requirements
            </p>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="group text-center relative">
                {/* Step Number */}
                <div className="relative w-20 h-20 bg-gradient-to-br from-[#BDA985] to-[#d4c4a0] rounded-2xl flex items-center justify-center mx-auto mb-6 text-zinc-900 font-black text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {step.step}
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#BDA985] to-transparent opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
                </div>
                
                {/* Connector Line (hidden on last item) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-[#BDA985] to-transparent opacity-30 transform translate-x-10"></div>
                )}

                <h4 className="text-xl font-bold text-white mb-4 group-hover:text-[#BDA985] transition-colors duration-300">{step.title}</h4>
                <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#BDA985] bg-opacity-5 rotate-45"></div>
          <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-[#BDA985] bg-opacity-10 rotate-45"></div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="group text-center p-10 bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-2xl border border-zinc-800 hover:border-[#BDA985] hover:border-opacity-50 shadow-xl hover:shadow-[#BDA985]/10 transition-all duration-500 hover:-translate-y-2">
            <div className="text-5xl md:text-6xl font-black text-[#BDA985] mb-4 group-hover:scale-110 transition-transform duration-300">500+</div>
            <div className="text-xl font-bold text-white mb-2 group-hover:text-[#BDA985] transition-colors duration-300">Successful Licenses</div>
            <div className="text-zinc-400 font-light">Across all jurisdictions</div>
          </div>
          
          <div className="group text-center p-10 bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-2xl border border-zinc-800 hover:border-[#BDA985] hover:border-opacity-50 shadow-xl hover:shadow-[#BDA985]/10 transition-all duration-500 hover:-translate-y-2">
            <div className="text-5xl md:text-6xl font-black text-[#BDA985] mb-4 group-hover:scale-110 transition-transform duration-300">98%</div>
            <div className="text-xl font-bold text-white mb-2 group-hover:text-[#BDA985] transition-colors duration-300">Client Satisfaction</div>
            <div className="text-zinc-400 font-light">Based on client feedback</div>
          </div>
          
          <div className="group text-center p-10 bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-2xl border border-zinc-800 hover:border-[#BDA985] hover:border-opacity-50 shadow-xl hover:shadow-[#BDA985]/10 transition-all duration-500 hover:-translate-y-2">
            <div className="text-5xl md:text-6xl font-black text-[#BDA985] mb-4 group-hover:scale-110 transition-transform duration-300">24/7</div>
            <div className="text-xl font-bold text-white mb-2 group-hover:text-[#BDA985] transition-colors duration-300">Expert Support</div>
            <div className="text-zinc-400 font-light">Always here when you need us</div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="relative bg-gradient-to-r from-zinc-900 via-zinc-950 to-zinc-900 rounded-3xl p-12 md:p-16 border border-zinc-800 shadow-2xl overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-[#BDA985] from-0% via-transparent via-30% to-transparent opacity-[0.05]"></div>
          </div>

          <div className="relative text-center">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#BDA985] to-[#d4c4a0] bg-opacity-10 rounded-full border border-[#BDA985] border-opacity-30 mb-8">
              <HeartHandshake className="w-5 h-5 text-white mr-3" />
              <span className="text-white font-bold text-sm uppercase tracking-wider">Ready to Begin</span>
            </div>

            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Start Your <span className="text-[#BDA985]">Licensing Journey</span>
            </h3>
            <p className="text-zinc-300 text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
              Join hundreds of successful companies who trust Casa Di Consiglio for their regulatory needs
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group relative overflow-hidden bg-[#BDA985] text-zinc-900 px-10 py-5 rounded-2xl font-bold text-lg uppercase tracking-wide hover:shadow-2xl hover:shadow-[#BDA985]/25 transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-[#d4c4a0] to-[#BDA985] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
                <div className="relative flex items-center justify-center">
                  <HeartHandshake className="w-6 h-6 mr-3" />
                  Schedule Free Consultation
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </button>
              
              <button className="group border-2 border-[#BDA985] text-[#BDA985] px-10 py-5 rounded-2xl font-bold text-lg uppercase tracking-wide relative overflow-hidden hover:text-zinc-900 transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-[#BDA985] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <div className="relative flex items-center justify-center">
                  <Clock className="w-6 h-6 mr-3" />
                  Get Quote in 24 Hours
                </div>
              </button>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#BDA985] bg-opacity-5 rotate-45"></div>
          <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#BDA985] bg-opacity-10 rotate-45"></div>
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-1 bg-gradient-to-r from-transparent via-[#BDA985] to-transparent opacity-40"></div>
      </div>
    </section>
  );
}