'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Globe, Clock, Building2, Star, ArrowRight, ExternalLink, Users, Shield, Award, CheckCircle } from 'lucide-react';

export default function ContactUsPage() {
  const [hoveredContact, setHoveredContact] = useState(null);
  const [hoveredHour, setHoveredHour] = useState(null);

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us Directly",
      primary: "+971 56 385 8532",
      description: "Speak with our legal experts for immediate consultation and professional guidance",
      action: "tel:+971563858532",
      actionText: "Call Now",
      color: "#bda985",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTjet5BT4TWsObBvaRtaBH9ZHUmezEPdnp4g&s"
    },
    {
      icon: Mail,
      title: "Email Consultation",
      primary: "info@casadiconsiglio.com",
      description: "Get detailed responses to your inquiries with comprehensive legal analysis",
      action: "mailto:info@casadiconsiglio.com",
      actionText: "Send Email",
      color: "#bda985",
      image: "https://www.findlaw.com/static/c/images/images/c_scale,w_822/f_auto,q_auto/v1629704059/aemwp-prod/content/dam/content/original-images/gavel_on_laptop_legal_tech_GI/gavel_on_laptop_legal_tech_GI.jpg?_i=AA"
    },
    {
      icon: ExternalLink,
      title: "WhatsApp Direct",
      primary: "+971 56 385 8532",
      description: "Quick consultations and immediate responses for urgent legal matters",
      action: "https://wa.me/971563858532",
      actionText: "Message Us",
      color: "#25D366",
      image: "https://cdn.prod.website-files.com/66efa862351a8bef3b48cb70/6836e145141b4ea755448a59_Blog_%20Whatsapp%20Chatbot%20for%20Law%20Firms.webp"
    }
  ];

  const coverageAreas = [
      { 
      country: "United Arab Emirates", 
      flag: "🇦🇪",
      description: "Primary headquarters and operations"
    },
    { 
      country: "Hashemite Kingdom of Jordan", 
      flag: "🇯🇴",
      description: "Primary operations and regional headquarters"
    },
    { 
      country: "Kingdom of Spain", 
      flag: "🇪🇸",
      description: "International legal services and EU representation"
    }
  ];

  const businessHours = [
    { 
      days: "Monday - Thursday", 
      time: "9 AM - 6 PM", 
      status: "Regular Hours",
      icon: Clock,
      description: "Full consultation services available"
    },
    { 
      days: "Friday - Sunday", 
      time: "By Appointment", 
      status: "Appointment Only",
      icon: Clock,
      description: "Emergency consultations available"
    }
  ];

  const officeFeatures = [
    "Modern legal facilities",
    "Private consultation rooms",
    "Digital documentation systems",
    "Multilingual support services"
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.section 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative py-16 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden"
    >
      {/* Advanced Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/50 to-transparent" />
        
        {/* Geometric Patterns */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            background: `radial-gradient(circle at 25% 25%, #bda985 2px, transparent 2px),
                        radial-gradient(circle at 75% 75%, #bda985 1px, transparent 1px)`,
            backgroundSize: '50px 50px, 25px 25px'
          }}
        />

        {/* Floating Elements */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${10 + (i * 12)}%`,
              top: `${15 + (i * 8)}%`,
              width: `${20 + i * 5}px`,
              height: `${20 + i * 5}px`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 6 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3
            }}
          >
            <div 
              className="w-full h-full rounded-full"
              style={{
                background: `linear-gradient(45deg, rgba(189,169,133,0.2), transparent)`,
                filter: 'blur(1px)'
              }}
            />
          </motion.div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div 
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider backdrop-blur-md border-2 transition-all duration-500 hover:scale-105 shadow-xl mb-8"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.9), rgba(189,169,133,0.1))',
              borderColor: '#bda985',
              color: '#000000',
              boxShadow: '0 10px 40px rgba(189,169,133,0.2)'
            }}
          >
            Get In Touch
          </motion.div>
          
          <motion.div className="relative mb-12">
            {/* Hero Image */}
            <div className="relative h-64 md:h-80 lg:h-96 mb-8 rounded-3xl overflow-hidden shadow-2xl">
              <motion.img
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2 }}
                src="https://images.squarespace-cdn.com/content/v1/5f99f1a1d69e7061a6cf3a6d/1609187810276-90G1CD3S8HP5XNR10XRJ/CoverImageDubuissonLawOffices.jpg"
                alt="Contact Casa Di Consiglio"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-4">
                    <span className="block">CONTACT</span>
                    <span className="block" style={{ color: '#bda985' }}>US</span>
                  </h1>
                  <p className="text-xl md:text-2xl font-light">
                    Ready to discuss your legal needs?
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Methods with Images */}
        <motion.div 
          variants={containerVariants}
          className="mb-24"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-black mb-6">
              REACH OUR <span style={{ color: '#bda985' }}>EXPERTS</span>
            </h2>
            <p className="text-lg text-gray-700 font-light max-w-2xl mx-auto">
              Multiple ways to connect with our professional legal team
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <motion.div 
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                  onHoverStart={() => setHoveredContact(index)}
                  onHoverEnd={() => setHoveredContact(null)}
                  className="group rounded-2xl overflow-hidden shadow-xl"
                  style={{
                    background: 'rgba(255,255,255,0.95)',
                    border: '1px solid rgba(189,169,133,0.2)',
                    boxShadow: hoveredContact === index 
                      ? '0 20px 40px rgba(189,169,133,0.2)' 
                      : '0 10px 30px rgba(189,169,133,0.1)'
                  }}
                >
                  {/* Image Header */}
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      variants={imageVariants}
                      whileHover="hover"
                      src={method.image}
                      alt={method.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center backdrop-blur-sm"
                        style={{ background: 'rgba(189,169,133,0.9)' }}
                      >
                        <IconComponent className="w-6 h-6 text-black" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-black group-hover:text-[#bda985] transition-colors duration-300 mb-3">
                      {method.title}
                    </h3>
                    <p className="text-lg font-semibold text-black mb-3">
                      {method.primary}
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6 text-sm">
                      {method.description}
                    </p>

                    <motion.a
                      href={method.action}
                      target={method.action.startsWith('http') ? '_blank' : '_self'}
                      rel={method.action.startsWith('http') ? 'noopener noreferrer' : ''}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center px-6 py-3 rounded-xl font-bold text-sm uppercase tracking-wide transition-all duration-300 shadow-lg"
                      style={{
                        background: method.color,
                        color: method.color === '#25D366' ? '#ffffff' : '#000000'
                      }}
                    >
                      {method.actionText}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </motion.a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Office Location & Coverage */}
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24"
        >
          {/* Office Location */}
          <motion.div 
            variants={itemVariants}
            className="rounded-2xl overflow-hidden shadow-2xl"
            style={{
              background: 'rgba(255,255,255,0.95)',
              border: '1px solid rgba(189,169,133,0.2)'
            }}
          >
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mr-4"
                  style={{ background: 'rgba(189,169,133,0.15)' }}
                >
                  <MapPin className="w-6 h-6" style={{color: '#bda985'}} />
                </div>
                <h2 className="text-2xl font-bold text-black">Our Office</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg text-black mb-3">Casa Di Consiglio FZC-LLC</h3>
                  <div className="text-gray-700 leading-relaxed mb-6">
                    <p>Zone E, First Floor, Office # F13</p>
                    <p>Sharjah Book Authority Building</p>
                    <p>Sharjah Publishing City Free Zone</p>
                    <p>Al Zahia, Sharjah, UAE</p>
                  </div>
                  
                  <div 
                    className="p-4 rounded-lg mb-6"
                    style={{ background: 'rgba(189,169,133,0.1)' }}
                  >
                    <div className="flex items-center mb-2">
                      <Building2 className="w-4 h-4 mr-2" style={{color: '#bda985'}} />
                      <span className="font-semibold text-sm" style={{color: '#bda985'}}>Registration Details</span>
                    </div>
                    <p className="text-gray-700 text-sm">Reg. No. 4202724.01 SPC</p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {officeFeatures.map((feature, index) => (
                      <motion.div 
                        key={index}
                        className="flex items-center"
                        whileHover={{ x: 4 }}
                      >
                        <CheckCircle className="w-3 h-3 mr-2 flex-shrink-0" style={{color: '#bda985'}} />
                        <span className="text-xs text-gray-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  <motion.a
                    href="https://goo.gl/maps/u8XdabiXNPMapq3L7?g_st=aw"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 shadow-lg"
                    style={{
                      background: 'linear-gradient(135deg, #bda985, #d4c4a0)',
                      color: '#000000'
                    }}
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    View on Google Maps
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </motion.a>
                </div>
              </div>
            </div>

            {/* Embedded Map */}
            <div className="h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.7234567890123!2d55.5234567890123!3d25.3234567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE5JzI0LjQiTiA1NcKwMzEnMjQuNCJF!5e0!3m2!1sen!2sae!4v1234567890123!5m2!1sen!2sae"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Casa Di Consiglio Office Location"
              ></iframe>
            </div>
          </motion.div>

          {/* Coverage Areas - Updated for Jordan and Spain */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div 
              className="p-8 rounded-2xl shadow-2xl"
              style={{
                background: 'rgba(255,255,255,0.95)',
                border: '1px solid rgba(189,169,133,0.2)'
              }}
            >
              <div className="flex items-center mb-8">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mr-4"
                  style={{ background: 'rgba(189,169,133,0.15)' }}
                >
                  <Globe className="w-6 h-6" style={{color: '#bda985'}} />
                </div>
                <h2 className="text-2xl font-bold text-black">Coverage Areas</h2>
              </div>

              <div className="space-y-4">
                {coverageAreas.map((area, index) => (
                  <motion.div 
                    key={index}
                    className="group p-4 rounded-xl transition-all duration-300"
                    style={{
                      background: 'linear-gradient(135deg, rgba(189,169,133,0.1), rgba(255,255,255,0.5))',
                      border: '1px solid rgba(189,169,133,0.2)'
                    }}
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: '0 8px 25px rgba(189,169,133,0.15)'
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">{area.flag}</span>
                        <div>
                          <h3 className="font-bold text-black group-hover:text-[#bda985] transition-colors duration-300">
                            {area.country}
                          </h3>
                          <p className="text-sm text-gray-600">{area.description}</p>
                        </div>
                      </div>
                      <div className="w-3 h-3 rounded-full" style={{background: '#bda985'}} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Business Hours - Updated for Jordan and Spain Times */}
        <motion.div 
          variants={containerVariants}
          className="mb-20"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-black mb-6">
              BUSINESS <span style={{ color: '#bda985' }}>HOURS</span>
            </h2>
            <p className="text-lg text-gray-700 font-light max-w-2xl mx-auto">
              Our availability for consultations and legal services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {businessHours.map((schedule, index) => {
              const IconComponent = schedule.icon;
              return (
                <motion.div 
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                  onHoverStart={() => setHoveredHour(index)}
                  onHoverEnd={() => setHoveredHour(null)}
                  className="text-center p-8 rounded-2xl transition-all duration-300 shadow-xl"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.95), rgba(189,169,133,0.05))',
                    border: '2px solid rgba(189,169,133,0.2)',
                    boxShadow: hoveredHour === index 
                      ? '0 20px 40px rgba(189,169,133,0.2)' 
                      : '0 10px 30px rgba(189,169,133,0.1)',
                    borderColor: hoveredHour === index ? '#bda985' : 'rgba(189,169,133,0.2)'
                  }}
                >
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-2xl mr-2">{schedule.flag}</span>
                    <div 
                      className="w-12 h-12 rounded-2xl flex items-center justify-center"
                      style={{ background: 'rgba(189,169,133,0.15)' }}
                    >
                      <IconComponent className="w-6 h-6" style={{color: '#bda985'}} />
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-black mb-2 text-sm">{schedule.location}</h3>
                  <h4 className="font-semibold text-black mb-3 text-base">{schedule.days}</h4>
                  <p className="text-2xl font-bold mb-3" style={{color: '#bda985'}}>{schedule.time}</p>
                  <p className="text-sm text-gray-600 mb-4">{schedule.description}</p>
                  <span 
                    className="inline-block text-xs px-4 py-2 rounded-full font-medium"
                    style={{
                      background: 'rgba(189,169,133,0.2)',
                      color: '#000000'
                    }}
                  >
                    {schedule.status}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
}