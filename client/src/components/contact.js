import { Phone, MapPin, Mail, Clock, MessageCircle, Navigation, Building, Globe, Users, ArrowRight, Star, Award, Sparkles } from 'lucide-react';

export default function ContactUs() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us Directly",
      primary: "+971 56 385 8532",
      secondary: "Available 24/7 for urgent matters",
      action: "tel:+971563858532",
      actionText: "Call Now",
      color: "from-[#BDA985] to-[#d4c4a0]"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Business",
      primary: "+971 56 385 8532",
      secondary: "Fast response via WhatsApp",
      action: "https://wa.me/971563858532",
      actionText: "Message Us",
      color: "from-[#d4c4a0] to-[#BDA985]"
    },
    {
      icon: Mail,
      title: "Email Consultation",
      primary: "info@casadiconsiglio.com",
      secondary: "Detailed inquiries and documents",
      action: "mailto:info@casadiconsiglio.com",
      actionText: "Send Email",
      color: "from-[#BDA985] to-[#d4c4a0]"
    }
  ];

  const officeInfo = [
    {
      icon: Building,
      label: "Building",
      value: "Sharjah Book Authority Building"
    },
    {
      icon: Navigation,
      label: "Floor & Office",
      value: "Zone E, First Floor, Office # F13"
    },
    {
      icon: MapPin,
      label: "Area",
      value: "Al Zahia, Muwailih Commercial"
    },
    {
      icon: Globe,
      label: "City & Country",
      value: "Sharjah, United Arab Emirates"
    }
  ];

  const businessHours = [
    { day: "Sunday - Thursday", hours: "9:00 AM - 6:00 PM" },
    { day: "Friday", hours: "2:00 PM - 6:00 PM" },
    { day: "Saturday", hours: "By Appointment" }
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
        <div className="absolute top-1/4 left-1/5 w-2 h-2 bg-[#BDA985] rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-[#BDA985] rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-2/3 left-1/3 w-1.5 h-1.5 bg-[#BDA985] rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-20 right-32 w-96 h-96 border border-[#BDA985] border-opacity-5 rotate-45"></div>
        <div className="absolute -bottom-48 left-16 w-96 h-96 border border-[#BDA985] border-opacity-10 rotate-12"></div>
        
        {/* Radial Gradient Overlays */}
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-radial from-[#BDA985] from-0% via-transparent via-20% to-transparent opacity-[0.03]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zinc-900 to-zinc-800 backdrop-blur-xl rounded-full border border-[#BDA985] border-opacity-20 mb-8 shadow-2xl">
            <div className="w-2 h-2 bg-[#BDA985] rounded-full mr-3 animate-pulse"></div>
            <span className="text-[#BDA985] font-semibold tracking-wide text-sm uppercase">Get In Touch</span>
            <div className="ml-4 px-3 py-1 bg-[#BDA985] bg-opacity-10 rounded-full">
              <span className="text-white text-xs font-bold">24/7</span>
            </div>
          </div>
          
          <h2 className="mb-8">
            <div className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.9] mb-4">
              <span className="block text-white">CONTACT</span>
              <span className="block bg-gradient-to-r from-[#BDA985] via-[#d4c4a0] to-[#BDA985] bg-clip-text text-transparent">CASA DI CONSIGLIO</span>
            </div>
          </h2>
          
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#BDA985] to-transparent mx-auto mb-8 opacity-60"></div>
          
          <p className="text-xl md:text-2xl text-zinc-300 font-light leading-relaxed max-w-4xl mx-auto">
            Ready to start your <span className="text-[#BDA985]">legal and financial journey?</span> Reach out to our expert team today
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-3xl p-10 border border-zinc-800 hover:border-[#BDA985] hover:border-opacity-50 shadow-2xl hover:shadow-[#BDA985]/10 transition-all duration-500 hover:-translate-y-3 overflow-hidden"
              >
                {/* Premium Badge */}
                <div className="absolute top-6 right-6 flex items-center text-[#BDA985] text-xs">
                  <Star className="w-3 h-3 mr-1 fill-current" />
                  <span className="font-semibold">Premium</span>
                </div>

                <div className="relative mb-8">
                  <div className={`w-20 h-20 bg-gradient-to-br ${method.color} bg-opacity-10 rounded-2xl flex items-center justify-center group-hover:bg-opacity-20 transition-all duration-500 group-hover:scale-110`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#BDA985] to-transparent opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#BDA985] transition-colors duration-300">{method.title}</h3>
                <p className="text-3xl font-black text-[#BDA985] mb-3">{method.primary}</p>
                <p className="text-zinc-400 mb-8 leading-relaxed">{method.secondary}</p>
                
                <a
                  href={method.action}
                  className="group/btn relative overflow-hidden inline-flex items-center bg-[#BDA985] text-zinc-900 px-8 py-4 rounded-2xl font-bold text-lg uppercase tracking-wide hover:shadow-lg hover:shadow-[#BDA985]/25 transition-all duration-300 hover:scale-105"
                  target={method.title === "WhatsApp Business" ? "_blank" : "_self"}
                  rel={method.title === "WhatsApp Business" ? "noopener noreferrer" : ""}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#d4c4a0] to-[#BDA985] translate-x-[-100%] group-hover/btn:translate-x-0 transition-transform duration-300"></div>
                  <span className="relative flex items-center">
                    {method.actionText}
                    <ArrowRight className="ml-3 w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-300" />
                  </span>
                </a>

                {/* Decorative Elements */}
                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-[#BDA985] bg-opacity-5 rotate-45"></div>
                <div className="absolute -top-2 -left-2 w-4 h-4 bg-[#BDA985] bg-opacity-10 rotate-45"></div>
              </div>
            );
          })}
        </div>

        {/* Office Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Office Details */}
          <div className="relative bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-3xl p-10 border border-zinc-800 hover:border-[#BDA985] hover:border-opacity-50 shadow-2xl hover:shadow-[#BDA985]/10 transition-all duration-500 overflow-hidden">
            {/* Elite Badge */}
            <div className="absolute top-6 right-6 flex items-center text-[#BDA985] text-xs">
              <Award className="w-3 h-3 mr-1 fill-current" />
              <span className="font-semibold">Elite Location</span>
            </div>

            <h3 className="text-3xl font-bold text-white mb-8 flex items-center hover:text-[#BDA985] transition-colors duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-[#BDA985] to-[#d4c4a0] bg-opacity-10 rounded-2xl flex items-center justify-center mr-4 hover:bg-opacity-20 transition-all duration-300">
                <MapPin className="w-7 h-7 text-white" />
              </div>
              Our Office Location
            </h3>
            
            <div className="space-y-6 mb-8">
              {officeInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="group/item flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#BDA985] to-[#d4c4a0] bg-opacity-10 rounded-2xl flex items-center justify-center mt-1 group-hover/item:bg-opacity-20 transition-all duration-300">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-zinc-400 text-sm mb-1">{info.label}</p>
                      <p className="text-white font-bold text-lg group-hover/item:text-[#BDA985] transition-colors duration-300">{info.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="relative bg-gradient-to-r from-zinc-800 to-zinc-900 rounded-2xl p-6 mb-8 border border-zinc-700">
              <p className="text-[#BDA985] font-bold mb-3">Complete Address:</p>
              <p className="text-white leading-relaxed">
                Zone E, First floor, Sharjah Book Authority Bldg, Al Zahia - Office # F13 - تجارية مويلح - الزاهية - الشارقة - United Arab Emirates
              </p>
            </div>

            <button className="group relative overflow-hidden w-full bg-[#BDA985] text-zinc-900 py-4 rounded-2xl font-bold text-lg uppercase tracking-wide hover:shadow-lg hover:shadow-[#BDA985]/25 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-[#d4c4a0] to-[#BDA985] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></div>
              <span className="relative">Get Directions</span>
            </button>

            {/* Decorative Elements */}
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-[#BDA985] bg-opacity-10 rotate-45"></div>
          </div>

          {/* Business Hours */}
          <div className="relative bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-3xl p-10 border border-zinc-800 hover:border-[#BDA985] hover:border-opacity-50 shadow-2xl hover:shadow-[#BDA985]/10 transition-all duration-500 overflow-hidden">
            {/* Premium Badge */}
            <div className="absolute top-6 right-6 flex items-center text-[#BDA985] text-xs">
              <Sparkles className="w-3 h-3 mr-1 fill-current" />
              <span className="font-semibold">Always Open</span>
            </div>

            <h3 className="text-3xl font-bold text-white mb-8 flex items-center hover:text-[#BDA985] transition-colors duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-[#BDA985] to-[#d4c4a0] bg-opacity-10 rounded-2xl flex items-center justify-center mr-4 hover:bg-opacity-20 transition-all duration-300">
                <Clock className="w-7 h-7 text-white" />
              </div>
              Business Hours
            </h3>
            
            <div className="space-y-4 mb-8">
              {businessHours.map((schedule, index) => (
                <div key={index} className="group/schedule flex justify-between items-center py-4 border-b border-zinc-700">
                  <span className="text-white font-medium group-hover/schedule:text-[#BDA985] transition-colors duration-300">{schedule.day}</span>
                  <span className="text-[#BDA985] font-bold">{schedule.hours}</span>
                </div>
              ))}
            </div>

            <div className="relative bg-gradient-to-r from-zinc-800 to-zinc-900 rounded-2xl p-6 mb-8 border border-zinc-700">
              <h4 className="text-[#BDA985] font-bold mb-3 text-lg">Emergency & Urgent Matters</h4>
              <p className="text-white leading-relaxed">
                For urgent legal and financial matters, we provide 24/7 emergency consultation services. Call our main number for immediate assistance.
              </p>
            </div>

            <div className="text-center">
              <p className="text-zinc-400 mb-4">
                Prefer to visit our office?
              </p>
              <button className="group border-2 border-[#BDA985] text-[#BDA985] px-8 py-4 rounded-2xl font-bold text-lg uppercase tracking-wide relative overflow-hidden hover:text-zinc-900 transition-all duration-300">
                <div className="absolute inset-0 bg-[#BDA985] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <span className="relative">Schedule Office Visit</span>
              </button>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#BDA985] bg-opacity-10 rotate-45"></div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="group text-center p-8 bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-2xl border border-zinc-800 hover:border-[#BDA985] hover:border-opacity-50 shadow-xl hover:shadow-[#BDA985]/10 transition-all duration-500 hover:-translate-y-2">
            <div className="text-4xl font-black text-[#BDA985] mb-3 group-hover:scale-110 transition-transform duration-300">24h</div>
            <div className="text-white font-semibold group-hover:text-[#BDA985] transition-colors duration-300">Response Time</div>
          </div>
          
          <div className="group text-center p-8 bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-2xl border border-zinc-800 hover:border-[#BDA985] hover:border-opacity-50 shadow-xl hover:shadow-[#BDA985]/10 transition-all duration-500 hover:-translate-y-2">
            <div className="text-4xl font-black text-[#BDA985] mb-3 group-hover:scale-110 transition-transform duration-300">24/7</div>
            <div className="text-white font-semibold group-hover:text-[#BDA985] transition-colors duration-300">Emergency Support</div>
          </div>
          
          <div className="group text-center p-8 bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-2xl border border-zinc-800 hover:border-[#BDA985] hover:border-opacity-50 shadow-xl hover:shadow-[#BDA985]/10 transition-all duration-500 hover:-translate-y-2">
            <div className="text-4xl font-black text-[#BDA985] mb-3 group-hover:scale-110 transition-transform duration-300">4</div>
            <div className="text-white font-semibold group-hover:text-[#BDA985] transition-colors duration-300">Countries Served</div>
          </div>
          
          <div className="group text-center p-8 bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-2xl border border-zinc-800 hover:border-[#BDA985] hover:border-opacity-50 shadow-xl hover:shadow-[#BDA985]/10 transition-all duration-500 hover:-translate-y-2">
            <div className="text-4xl font-black text-[#BDA985] mb-3 group-hover:scale-110 transition-transform duration-300">15+</div>
            <div className="text-white font-semibold group-hover:text-[#BDA985] transition-colors duration-300">Years Experience</div>
          </div>
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-1 bg-gradient-to-r from-transparent via-[#BDA985] to-transparent opacity-40"></div>
      </div>
    </section>
  );
}