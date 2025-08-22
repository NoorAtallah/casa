import { Award, Clock, Users, Shield, Target, Zap, CheckCircle, Star, Globe, HeartHandshake } from 'lucide-react';

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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#bda985] bg-opacity-20 rounded-full text-[#005b4c] text-sm font-medium mb-4">
            <Star className="w-4 h-4 mr-2" />
            Your Trusted Partner
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-[#005b4c] mb-6">
            Why Choose <span className="text-[#bda985]">Casa Di Consiglio</span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-[#bda985] to-[#4b8178] mx-auto mb-8"></div>
          
          <p className="text-xl text-[#4b8178] max-w-3xl mx-auto leading-relaxed">
            Experience the difference of working with the Middle East&apos;s most trusted legal and financial licensing specialists
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white to-[#c3fcf2] bg-opacity-30 rounded-2xl p-8 shadow-lg border border-[#c3fcf2] border-opacity-50 hover:shadow-2xl hover:border-[#bda985] transition-all duration-300 hover:-translate-y-1"
              >
                {/* Highlight Badge */}
                <div className="absolute -top-3 -right-3 bg-[#bda985] text-[#005b4c] px-3 py-1 rounded-full text-xs font-bold shadow-md">
                  {advantage.highlight}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-[#005b4c] to-[#4b8178] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-[#c3fcf2]" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[#005b4c] mb-4 group-hover:text-[#4b8178] transition-colors duration-300">
                  {advantage.title}
                </h3>
                
                <p className="text-[#4b8178] leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Process Section */}
        <div className="bg-gradient-to-br from-[#005b4c] to-[#4b8178] rounded-3xl p-8 md:p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-[#c3fcf2] mb-4">
              Our Proven Process
            </h3>
            <p className="text-[#c3fcf2] opacity-90 text-lg max-w-2xl mx-auto">
              A streamlined approach that has successfully guided hundreds of companies through complex regulatory requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                {/* Step Number */}
                <div className="w-16 h-16 bg-[#bda985] rounded-full flex items-center justify-center mx-auto mb-4 text-[#005b4c] font-bold text-xl">
                  {step.step}
                </div>
                
                {/* Connector Line (hidden on last item) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-[#bda985] opacity-50 transform translate-x-8"></div>
                )}

                <h4 className="text-lg font-semibold text-[#c3fcf2] mb-3">{step.title}</h4>
                <p className="text-[#c3fcf2] opacity-80 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 bg-[#c3fcf2] bg-opacity-30 rounded-xl">
            <div className="text-4xl font-bold text-[#005b4c] mb-2">500+</div>
            <div className="text-[#4b8178] font-medium">Successful Licenses</div>
            <div className="text-[#4b8178] text-sm opacity-75">Across all jurisdictions</div>
          </div>
          
          <div className="text-center p-6 bg-[#c3fcf2] bg-opacity-30 rounded-xl">
            <div className="text-4xl font-bold text-[#005b4c] mb-2">98%</div>
            <div className="text-[#4b8178] font-medium">Client Satisfaction</div>
            <div className="text-[#4b8178] text-sm opacity-75">Based on client feedback</div>
          </div>
          
          <div className="text-center p-6 bg-[#c3fcf2] bg-opacity-30 rounded-xl">
            <div className="text-4xl font-bold text-[#005b4c] mb-2">24/7</div>
            <div className="text-[#4b8178] font-medium">Expert Support</div>
            <div className="text-[#4b8178] text-sm opacity-75">Always here when you need us</div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center bg-gradient-to-r from-[#bda985] to-[#4b8178] rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Start Your Licensing Journey?
          </h3>
          <p className="text-white opacity-90 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful companies who trust Casa Di Consiglio for their regulatory needs
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#005b4c] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#c3fcf2] transition-all duration-300 shadow-lg hover:scale-105 flex items-center justify-center">
              <HeartHandshake className="w-5 h-5 mr-2" />
              Schedule Free Consultation
            </button>
            
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#005b4c] transition-all duration-300 flex items-center justify-center">
              <Clock className="w-5 h-5 mr-2" />
              Get Quote in 24 Hours
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}