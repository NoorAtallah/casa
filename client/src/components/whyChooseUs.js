import Link from 'next/link';
import { Users, Layers, Wrench, HeartHandshake, ArrowRight, Sparkles, Search, BarChart3, Lightbulb, Handshake, Rocket, Building2, Home, TrendingUp, Network, Globe2, Briefcase, Star } from 'lucide-react';

export default function WhyChooseUs() {
  const advantages = [
    {
      icon: Users,
      title: "Personalised Attention",
      description: "Every client works directly with experienced advisors who understand their business and priorities."
    },
    {
      icon: Layers,
      title: "Multidisciplinary Expertise",
      description: "We integrate legal, business, and financial perspectives to provide comprehensive advice rather than isolated solutions."
    },
    {
      icon: Wrench,
      title: "Practical Solutions",
      description: "Our recommendations are commercially focused, actionable, and designed to create measurable value."
    },
    {
      icon: HeartHandshake,
      title: "Long-Term Relationships",
      description: "We believe the strongest advisory relationships are built on trust, transparency, and a genuine commitment to our clients' success."
    }
  ];

  const processSteps = [
    {
      step: "01",
      icon: Search,
      title: "Understand",
      description: "We begin by understanding your objectives, business environment, challenges, and long-term ambitions before offering recommendations."
    },
    {
      step: "02",
      icon: BarChart3,
      title: "Analyse",
      description: "Our multidisciplinary approach considers the legal, commercial, financial, and operational implications of every decision to ensure nothing is overlooked."
    },
    {
      step: "03",
      icon: Lightbulb,
      title: "Advise",
      description: "We provide clear, practical, and tailored recommendations that help you make informed decisions with confidence."
    },
    {
      step: "04",
      icon: Handshake,
      title: "Partner",
      description: "Our relationship extends beyond advice. We remain alongside our clients, providing ongoing support as businesses evolve and new opportunities emerge."
    }
  ];

  const clientTypes = [
    { icon: Lightbulb, label: "Entrepreneurs" },
    { icon: Rocket, label: "Start-ups" },
    { icon: Building2, label: "Small & Medium Enterprises (SMEs)" },
    { icon: Home, label: "Family-Owned Businesses" },
    { icon: TrendingUp, label: "Investors" },
    { icon: Network, label: "Corporate Groups" },
    { icon: Globe2, label: "International Businesses Entering the UAE" },
    { icon: Briefcase, label: "Professional Services Firms" }
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
            <span className="text-[#BDA985] font-semibold tracking-wide text-sm uppercase">Why Casa Di Consiglio</span>
            <div className="ml-4 px-3 py-1 bg-[#BDA985] bg-opacity-10 rounded-full">
              <span className="text-white text-xs font-bold">BOUTIQUE</span>
            </div>
          </div>

          <h2 className="mb-8">
            <div className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] mb-4">
              <span className="block text-white">Boutique by Choice.</span>
              <span className="block bg-gradient-to-r from-[#BDA985] via-[#d4c4a0] to-[#BDA985] bg-clip-text text-transparent">Trusted by Clients.</span>
            </div>
          </h2>

          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#BDA985] to-transparent mx-auto mb-8 opacity-60"></div>

          <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed max-w-4xl mx-auto">
            Our boutique model allows us to deliver the personalised service, strategic thinking, and responsiveness that larger firms often struggle to provide.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-3xl p-10 border border-zinc-800 hover:border-[#BDA985] hover:border-opacity-50 shadow-2xl hover:shadow-[#BDA985]/10 transition-all duration-500 hover:-translate-y-3 overflow-hidden"
              >
                {/* Index Marker */}
                <div className="absolute top-8 right-10 text-5xl font-black text-[#BDA985] opacity-10">
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Icon */}
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#BDA985] to-[#d4c4a0] bg-opacity-10 rounded-2xl flex items-center justify-center group-hover:bg-opacity-20 transition-all duration-500 group-hover:scale-110">
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#BDA985] to-transparent opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
                </div>

                {/* Content */}
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 group-hover:text-[#BDA985] transition-colors duration-300">
                  {advantage.title}
                </h3>

                <p className="text-zinc-400 text-lg leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
                  {advantage.description}
                </p>

                {/* Decorative Elements */}
                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-[#BDA985] bg-opacity-5 rotate-45"></div>
                <div className="absolute -top-2 -left-2 w-4 h-4 bg-[#BDA985] bg-opacity-10 rotate-45"></div>
              </div>
            );
          })}
        </div>

        {/* The Casa Approach */}
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
              <span className="text-white font-bold text-sm uppercase tracking-wider">The Casa Approach</span>
            </div>

            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Better Decisions Begin with <span className="text-[#BDA985]">Better Advice</span>
            </h3>
            <p className="text-zinc-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Every client engagement follows a structured advisory approach designed to deliver practical, informed, and commercially focused outcomes.
            </p>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const StepIcon = step.icon;
              return (
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

                  <div className="flex items-center justify-center mb-4">
                    <StepIcon className="w-5 h-5 text-[#BDA985] mr-2" />
                    <h4 className="text-xl font-bold text-white group-hover:text-[#BDA985] transition-colors duration-300">{step.title}</h4>
                  </div>
                  <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">{step.description}</p>
                </div>
              );
            })}
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#BDA985] bg-opacity-5 rotate-45"></div>
          <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-[#BDA985] bg-opacity-10 rotate-45"></div>
        </div>

        {/* Who We Support */}
        <div className="mb-20">
          <div className="text-center mb-14">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#BDA985] to-[#d4c4a0] bg-opacity-10 rounded-full border border-[#BDA985] border-opacity-30 mb-8">
              <Star className="w-5 h-5 text-white mr-3 fill-current" />
              <span className="text-white font-bold text-sm uppercase tracking-wider">Who We Support</span>
            </div>

            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Advising Businesses Through <span className="text-[#BDA985]">Every Stage of Growth</span>
            </h3>
            <p className="text-zinc-300 text-lg md:text-xl">Casa Di Consiglio proudly supports:</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {clientTypes.map((client, index) => {
              const ClientIcon = client.icon;
              return (
                <div
                  key={index}
                  className="group flex items-center gap-4 p-6 bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-2xl border border-zinc-800 hover:border-[#BDA985] hover:border-opacity-50 shadow-xl hover:shadow-[#BDA985]/10 transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="w-12 h-12 shrink-0 bg-[#BDA985] bg-opacity-10 rounded-xl flex items-center justify-center group-hover:bg-opacity-20 transition-all duration-300 group-hover:scale-110">
                    <ClientIcon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-white font-semibold leading-snug group-hover:text-[#BDA985] transition-colors duration-300">
                    {client.label}
                  </span>
                </div>
              );
            })}
          </div>

          <p className="text-zinc-300 text-lg md:text-xl font-light leading-relaxed max-w-5xl mx-auto text-center">
            Whether you are establishing a new venture, expanding internationally, restructuring your organisation, or seeking ongoing strategic advice, Casa Di Consiglio provides the insight and expertise to help you make confident business decisions.
          </p>
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
              <span className="text-white font-bold text-sm uppercase tracking-wider">Let&apos;s Start the Conversation</span>
            </div>

            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 max-w-4xl mx-auto leading-tight">
              Every Important Business Decision Starts with the <span className="text-[#BDA985]">Right Advice.</span>
            </h3>

            <div className="text-zinc-300 text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed space-y-5">
              <p>
                Whether you require legal guidance, business strategy, financial advisory, or professional learning solutions, Casa Di Consiglio is ready to support your next step.
              </p>
              <p>
                Partner with a boutique consulting and advisory firm committed to helping you make better decisions with confidence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <button className="group relative overflow-hidden bg-[#BDA985] text-zinc-900 px-10 py-5 rounded-2xl font-bold text-lg uppercase tracking-wide hover:shadow-2xl hover:shadow-[#BDA985]/25 transition-all duration-300 hover:scale-105 w-full sm:w-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#d4c4a0] to-[#BDA985] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
                  <div className="relative flex items-center justify-center">
                    <HeartHandshake className="w-6 h-6 mr-3" />
                    Schedule Your Consultation Today
                    <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </button>
              </Link>

              <Link href="/services">
                <button className="group border-2 border-[#BDA985] text-[#BDA985] px-10 py-5 rounded-2xl font-bold text-lg uppercase tracking-wide relative overflow-hidden hover:text-zinc-900 transition-all duration-300 hover:scale-105 w-full sm:w-auto">
                  <div className="absolute inset-0 bg-[#BDA985] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  <div className="relative flex items-center justify-center">
                    <Layers className="w-6 h-6 mr-3" />
                    Explore Our Practice Areas
                  </div>
                </button>
              </Link>
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
