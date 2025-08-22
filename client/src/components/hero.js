import { ArrowRight, Shield, TrendingUp, Users, CheckCircle } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-[#c3fcf2] via-[#4b8178] to-[#005b4c] min-h-screen flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23005b4c' fill-opacity='0.4'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-[#bda985] bg-opacity-20 backdrop-blur-sm rounded-full text-[#005b4c] text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Trusted Legal & Financial Partners
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Expert <span className="text-[#bda985]">Legal</span> &{' '}
              <span className="text-[#bda985]">Financial</span> Solutions
            </h1>

            {/* Subheading */}
            <p className="text-xl text-[#c3fcf2] mb-8 leading-relaxed max-w-2xl">
              Navigate complex legal frameworks and maximize your financial potential with our comprehensive consulting services across the UAE, Bahrain, Egypt, and Iraq.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-[#bda985] text-[#005b4c] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#c3fcf2] hover:scale-105 transition-all duration-300 shadow-xl flex items-center justify-center">
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              
              <button className="border-2 border-[#c3fcf2] text-[#c3fcf2] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#c3fcf2] hover:text-[#005b4c] transition-all duration-300 flex items-center justify-center">
                Our Services
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#bda985] mb-1">500+</div>
                <div className="text-[#c3fcf2] text-sm">Clients Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#bda985] mb-1">4</div>
                <div className="text-[#c3fcf2] text-sm">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#bda985] mb-1">15+</div>
                <div className="text-[#c3fcf2] text-sm">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Column - Features/Services */}
          <div className="relative">
            {/* Main Card */}
            <div className="bg-white bg-opacity-95 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-[#c3fcf2] border-opacity-30">
              <h3 className="text-2xl font-bold text-[#005b4c] mb-6">Our Core Services</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-[#bda985] rounded-full p-2 mt-1">
                    <CheckCircle className="w-4 h-4 text-[#005b4c]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#005b4c] mb-1">Legal Consultation & Licensing</h4>
                    <p className="text-[#4b8178] text-sm">Complete legal guidance for business formation and regulatory compliance</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-[#bda985] rounded-full p-2 mt-1">
                    <TrendingUp className="w-4 h-4 text-[#005b4c]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#005b4c] mb-1">Financial Advisory & Trading</h4>
                    <p className="text-[#4b8178] text-sm">Forex trading, asset management, and investment portfolio optimization</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-[#bda985] rounded-full p-2 mt-1">
                    <Users className="w-4 h-4 text-[#005b4c]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#005b4c] mb-1">Educational Programs</h4>
                    <p className="text-[#4b8178] text-sm">Professional courses and one-on-one training sessions</p>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="mt-8 p-4 bg-[#005b4c] bg-opacity-10 rounded-lg border border-[#bda985] border-opacity-40">
                <h4 className="font-semibold text-[#005b4c] mb-2">Ready to Get Started?</h4>
                <p className="text-[#4b8178] text-sm mb-3">Contact us today and take the first step toward success.</p>
                <button className="w-full bg-[#bda985] text-[#005b4c] py-2 rounded-lg font-medium hover:bg-[#4b8178] hover:text-white transition-colors duration-200">
                  Get in Touch
                </button>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#bda985] bg-opacity-20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#c3fcf2] bg-opacity-10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full h-20">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
}