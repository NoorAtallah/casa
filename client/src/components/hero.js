import { ArrowRight, Shield, Scale, Gavel, FileText, Award, Building, Phone, Mail, Star, Users, Globe, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-zinc-950 via-slate-900 to-zinc-950 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Dynamic Grid */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(rgba(189, 169, 133, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(189, 169, 133, 0.3) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}></div>
        
        {/* Floating Legal Elements */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#BDA985] rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-[#BDA985] rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/6 w-1.5 h-1.5 bg-[#BDA985] rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Sophisticated Geometric Shapes */}
        <div className="absolute top-20 right-32 w-96 h-96 border border-[#BDA985] border-opacity-5 rotate-45 rounded-none"></div>
        <div className="absolute -top-48 -right-48 w-96 h-96 border border-[#BDA985] border-opacity-10 rotate-12"></div>
        <div className="absolute bottom-32 left-16 w-64 h-64 border border-[#BDA985] border-opacity-5 rotate-[30deg]"></div>
        
        {/* Radial Gradient Overlays */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-[#BDA985] from-0% via-transparent via-20% to-transparent opacity-[0.03]"></div>
      </div>

      <div className="relative max-w-8xl mx-auto px-6 lg:px-12 py-24">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-16 items-center min-h-screen">
          
          {/* Left Column - Hero Content */}
          <div className="xl:col-span-7 text-center xl:text-left">
            {/* Elite Badge */}
            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zinc-900 to-zinc-800 backdrop-blur-xl rounded-full border border-[#BDA985] border-opacity-20 mb-12 shadow-2xl">
              <div className="w-2 h-2 bg-[#BDA985] rounded-full mr-3 animate-pulse"></div>
              <span className="text-[#BDA985] font-semibold tracking-wide text-sm uppercase">Premier Legal Practice</span>
              <div className="ml-4 px-3 py-1 bg-[#BDA985] bg-opacity-10 rounded-full">
                <span className="text-white text-xs font-bold">EST. 2009</span>
              </div>
            </div>

            {/* Powerful Headline */}
            <h1 className="mb-8">
              <div className="text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] mb-4">
                <span className="block text-white">LEGAL</span>
                <span className="block bg-gradient-to-r from-[#BDA985] via-[#d4c4a0] to-[#BDA985] bg-clip-text text-transparent">MASTERY</span>
              </div>
              <div className="text-2xl md:text-3xl font-light text-zinc-400 tracking-wide">
                Redefined for the Modern Era
              </div>
            </h1>

            {/* Compelling Subtext */}
            <p className="text-xl md:text-2xl text-zinc-300 font-light leading-relaxed mb-12 max-w-3xl">
              Where sophisticated legal strategy meets uncompromising excellence. 
              <span className="text-[#BDA985]"> Defending your interests</span> across the most complex 
              legal landscapes in the Middle East.
            </p>

            {/* Premium Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 mb-16">
              <button className="group relative overflow-hidden bg-[#BDA985] text-zinc-900 px-12 py-5 font-bold text-lg uppercase tracking-wide transition-all duration-500 hover:shadow-2xl hover:shadow-[#BDA985]/25">
                <div className="absolute inset-0 bg-gradient-to-r from-[#d4c4a0] to-[#BDA985] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
                <div className="relative flex items-center justify-center">
                  <Gavel className="mr-3 w-6 h-6" />
                  Secure Consultation
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </button>
              
              <button className="group border-2 border-[#BDA985] text-[#BDA985] px-12 py-5 font-bold text-lg uppercase tracking-wide relative overflow-hidden transition-all duration-300 hover:text-zinc-900">
                <div className="absolute inset-0 bg-[#BDA985] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <div className="relative flex items-center justify-center">
                  <FileText className="mr-3 w-6 h-6" />
                  Case Analysis
                </div>
              </button>
            </div>

            {/* Elite Statistics */}
            <div className="grid grid-cols-3 gap-12 pt-12 border-t border-zinc-800">
              <div className="text-center group">
                <div className="text-5xl md:text-6xl font-black text-[#BDA985] mb-3 group-hover:scale-110 transition-transform duration-300">500+</div>
                <div className="text-zinc-500 font-semibold uppercase tracking-widest text-sm">Victories</div>
              </div>
              <div className="text-center group">
                <div className="text-5xl md:text-6xl font-black text-[#BDA985] mb-3 group-hover:scale-110 transition-transform duration-300">4</div>
                <div className="text-zinc-500 font-semibold uppercase tracking-widest text-sm">Markets</div>
              </div>
              <div className="text-center group">
                <div className="text-5xl md:text-6xl font-black text-[#BDA985] mb-3 group-hover:scale-110 transition-transform duration-300">15+</div>
                <div className="text-zinc-500 font-semibold uppercase tracking-widest text-sm">Years</div>
              </div>
            </div>
          </div>

          {/* Right Column - Interactive Service Showcase */}
          <div className="xl:col-span-5 relative">
            {/* Main Service Card */}
            <div className="relative bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="p-8 border-b border-zinc-800 bg-gradient-to-r from-zinc-900 to-zinc-800">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[#BDA985] bg-opacity-10 rounded-full flex items-center justify-center mr-4">
                      <Scale className="w-6 h-6 text-[#BDA985]" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Legal Excellence</h3>
                  </div>
                  <div className="flex items-center text-[#BDA985] text-sm">
                    <Star className="w-4 h-4 mr-1 fill-current" />
                    <span className="font-semibold">Premium Tier</span>
                  </div>
                </div>
                
                <p className="text-zinc-400 leading-relaxed">
                  Unparalleled legal representation across multiple jurisdictions with a track record of success.
                </p>
              </div>

              {/* Service Areas */}
              <div className="p-8 space-y-6">
                <div className="group relative p-6 border border-zinc-800 hover:border-[#BDA985] hover:border-opacity-50 transition-all duration-300 hover:bg-zinc-800 hover:bg-opacity-30 cursor-pointer">
                  <div className="flex items-start">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#BDA985] to-[#d4c4a0] bg-opacity-10 rounded-full flex items-center justify-center mr-5 group-hover:bg-opacity-20 transition-all duration-300">
                      <Building className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#BDA985] transition-colors duration-300">
                        Corporate Law & M&A
                      </h4>
                      <p className="text-zinc-400 leading-relaxed text-sm">
                        Strategic counsel for complex corporate transactions, mergers, and acquisitions across the region.
                      </p>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#BDA985] group-hover:w-full transition-all duration-500"></div>
                </div>

                <div className="group relative p-6 border border-zinc-800 hover:border-[#BDA985] hover:border-opacity-50 transition-all duration-300 hover:bg-zinc-800 hover:bg-opacity-30 cursor-pointer">
                  <div className="flex items-start">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#BDA985] to-[#d4c4a0] bg-opacity-10 rounded-full flex items-center justify-center mr-5 group-hover:bg-opacity-20 transition-all duration-300">
                      <Shield className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#BDA985] transition-colors duration-300">
                        High-Stakes Litigation
                      </h4>
                      <p className="text-zinc-400 leading-relaxed text-sm">
                        Aggressive representation in complex commercial disputes and regulatory enforcement matters.
                      </p>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#BDA985] group-hover:w-full transition-all duration-500"></div>
                </div>

                <div className="group relative p-6 border border-zinc-800 hover:border-[#BDA985] hover:border-opacity-50 transition-all duration-300 hover:bg-zinc-800 hover:bg-opacity-30 cursor-pointer">
                  <div className="flex items-start">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#BDA985] to-[#d4c4a0] bg-opacity-10 rounded-full flex items-center justify-center mr-5 group-hover:bg-opacity-20 transition-all duration-300">
                      <Globe className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#BDA985] transition-colors duration-300">
                        Cross-Border Regulatory
                      </h4>
                      <p className="text-zinc-400 leading-relaxed text-sm">
                        Navigating complex regulatory frameworks across UAE, Bahrain, Egypt, and Iraq.
                      </p>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#BDA985] group-hover:w-full transition-all duration-500"></div>
                </div>
              </div>

              {/* Contact Action */}
              <div className="p-8 bg-gradient-to-r from-zinc-950 to-zinc-900 border-t border-zinc-800">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Award className="w-5 h-5 text-[#BDA985] mr-3" />
                    <span className="text-white font-semibold">Ready to Begin?</span>
                  </div>
                  <div className="flex items-center text-[#BDA985] text-sm">
                    <Users className="w-4 h-4 mr-2" />
                    <span>24/7 Available</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <button className="group relative overflow-hidden bg-[#BDA985] text-zinc-900 py-4 px-6 font-bold text-sm uppercase tracking-wide hover:shadow-lg hover:shadow-[#BDA985]/25 transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#d4c4a0] to-[#BDA985] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></div>
                    <div className="relative flex items-center justify-center">
                      <Phone className="w-4 h-4 mr-2" />
                      Call
                    </div>
                  </button>
                  
                  <button className="group border border-[#BDA985] text-[#BDA985] py-4 px-6 font-bold text-sm uppercase tracking-wide relative overflow-hidden hover:text-zinc-900 transition-all duration-300">
                    <div className="absolute inset-0 bg-[#BDA985] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    <div className="relative flex items-center justify-center">
                      <Mail className="w-4 h-4 mr-2" />
                      Email
                    </div>
                  </button>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#BDA985] bg-opacity-10 rotate-45"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-[#BDA985] bg-opacity-5 rotate-45"></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-radial from-[#BDA985] via-[#BDA985] to-transparent opacity-5 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-radial from-[#BDA985] via-[#BDA985] to-transparent opacity-10 rounded-full blur-lg" style={{animationDelay: '2s'}}></div>
          </div>
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-1 bg-gradient-to-r from-transparent via-[#BDA985] to-transparent opacity-60"></div>
        <div className="h-px bg-gradient-to-r from-transparent via-[#BDA985] to-transparent opacity-30"></div>
      </div>
    </div>
  );
}