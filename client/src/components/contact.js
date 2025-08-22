import { Phone, MapPin, Mail, Clock, MessageCircle, Navigation, Building, Globe, Users, ArrowRight } from 'lucide-react';

export default function ContactUs() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us Directly",
      primary: "+971 56 385 8532",
      secondary: "Available 24/7 for urgent matters",
      action: "tel:+971563858532",
      actionText: "Call Now",
      color: "from-[#005b4c] to-[#4b8178]"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Business",
      primary: "+971 56 385 8532",
      secondary: "Fast response via WhatsApp",
      action: "https://wa.me/971563858532",
      actionText: "Message Us",
      color: "from-[#4b8178] to-[#bda985]"
    },
    {
      icon: Mail,
      title: "Email Consultation",
      primary: "info@casadiconsiglio.com",
      secondary: "Detailed inquiries and documents",
      action: "mailto:info@casadiconsiglio.com",
      actionText: "Send Email",
      color: "from-[#bda985] to-[#005b4c]"
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
    <section className="py-20 bg-gradient-to-br from-[#005b4c] via-[#4b8178] to-[#005b4c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#bda985] rounded-full text-[#005b4c] text-sm font-medium mb-4">
            <Users className="w-4 h-4 mr-2" />
            Get In Touch
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-[#c3fcf2] mb-6">
            Contact <span className="text-[#bda985]">Casa Di Consiglio</span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-[#bda985] to-[#c3fcf2] mx-auto mb-8"></div>
          
          <p className="text-xl text-[#c3fcf2] opacity-90 max-w-3xl mx-auto leading-relaxed">
            Ready to start your legal and financial journey? Reach out to our expert team today
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <div
                key={index}
                className="bg-white bg-opacity-95 backdrop-blur-lg rounded-2xl p-8 border border-[#c3fcf2] border-opacity-30 hover:bg-opacity-100 transition-all duration-300 group shadow-lg"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-[#005b4c] mb-3">{method.title}</h3>
                <p className="text-2xl font-bold text-[#4b8178] mb-2">{method.primary}</p>
                <p className="text-[#005b4c] text-sm mb-6">{method.secondary}</p>
                
                <a
                  href={method.action}
                  className="inline-flex items-center bg-[#bda985] text-[#005b4c] px-6 py-3 rounded-lg font-semibold hover:bg-[#c3fcf2] transition-all duration-300 group"
                  target={method.title === "WhatsApp Business" ? "_blank" : "_self"}
                  rel={method.title === "WhatsApp Business" ? "noopener noreferrer" : ""}
                >
                  {method.actionText}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Office Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Office Details */}
          <div className="bg-white bg-opacity-95 backdrop-blur-lg rounded-2xl p-8 border border-[#c3fcf2] border-opacity-30 shadow-lg">
            <h3 className="text-2xl font-bold text-[#005b4c] mb-8 flex items-center">
              <MapPin className="w-6 h-6 mr-3 text-[#bda985]" />
              Our Office Location
            </h3>
            
            <div className="space-y-6">
              {officeInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-[#bda985] bg-opacity-20 rounded-lg flex items-center justify-center mt-1">
                      <IconComponent className="w-5 h-5 text-[#bda985]" />
                    </div>
                    <div>
                      <p className="text-[#4b8178] text-sm">{info.label}</p>
                      <p className="text-[#005b4c] font-semibold">{info.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 p-4 bg-[#bda985] bg-opacity-20 rounded-lg">
              <p className="text-[#005b4c] text-sm font-medium mb-2">Complete Address:</p>
              <p className="text-[#005b4c] font-semibold text-sm leading-relaxed">
                Zone E, First floor, Sharjah Book Authority Bldg, Al Zahia - Office # F13 - تجارية مويلح - الزاهية - الشارقة - United Arab Emirates
              </p>
            </div>

            <button className="w-full mt-6 bg-[#bda985] text-[#005b4c] py-3 rounded-lg font-semibold hover:bg-[#c3fcf2] transition-colors duration-300">
              Get Directions
            </button>
          </div>

          {/* Business Hours */}
          <div className="bg-white bg-opacity-95 backdrop-blur-lg rounded-2xl p-8 border border-[#c3fcf2] border-opacity-30 shadow-lg">
            <h3 className="text-2xl font-bold text-[#005b4c] mb-8 flex items-center">
              <Clock className="w-6 h-6 mr-3 text-[#bda985]" />
              Business Hours
            </h3>
            
            <div className="space-y-4 mb-8">
              {businessHours.map((schedule, index) => (
                <div key={index} className="flex justify-between items-center py-3 border-b border-[#c3fcf2] border-opacity-40">
                  <span className="text-[#005b4c] font-medium">{schedule.day}</span>
                  <span className="text-[#4b8178] font-semibold">{schedule.hours}</span>
                </div>
              ))}
            </div>

            <div className="bg-[#bda985] bg-opacity-20 rounded-lg p-4 mb-6">
              <h4 className="text-[#005b4c] font-semibold mb-2">Emergency & Urgent Matters</h4>
              <p className="text-[#005b4c] text-sm">
                For urgent legal and financial matters, we provide 24/7 emergency consultation services. Call our main number for immediate assistance.
              </p>
            </div>

            <div className="text-center">
              <p className="text-[#4b8178] text-sm mb-4">
                Prefer to visit our office?
              </p>
              <button className="bg-[#005b4c] text-[#c3fcf2] px-6 py-3 rounded-lg font-semibold hover:bg-[#4b8178] transition-all duration-300 border border-[#005b4c]">
                Schedule Office Visit
              </button>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white bg-opacity-95 backdrop-blur-lg rounded-xl p-6 border border-[#c3fcf2] border-opacity-30 shadow-lg">
            <div className="text-3xl font-bold text-[#005b4c] mb-2"> 24h</div>
            <div className="text-[#4b8178] text-sm">Response Time</div>
          </div>
          
          <div className="bg-white bg-opacity-95 backdrop-blur-lg rounded-xl p-6 border border-[#c3fcf2] border-opacity-30 shadow-lg">
            <div className="text-3xl font-bold text-[#005b4c] mb-2">24/7</div>
            <div className="text-[#4b8178] text-sm">Emergency Support</div>
          </div>
          
          <div className="bg-white bg-opacity-95 backdrop-blur-lg rounded-xl p-6 border border-[#c3fcf2] border-opacity-30 shadow-lg">
            <div className="text-3xl font-bold text-[#005b4c] mb-2">4</div>
            <div className="text-[#4b8178] text-sm">Countries Served</div>
          </div>
          
          <div className="bg-white bg-opacity-95 backdrop-blur-lg rounded-xl p-6 border border-[#c3fcf2] border-opacity-30 shadow-lg">
            <div className="text-3xl font-bold text-[#005b4c] mb-2">15+</div>
            <div className="text-[#4b8178] text-sm">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
}