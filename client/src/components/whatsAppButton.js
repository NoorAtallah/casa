'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa6';
import { X, MessageCircle } from 'lucide-react';

const WhatsAppFloatingButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // WhatsApp number and message
  const whatsappNumber = "971563858532";
  const defaultMessage = "Hello! I'm interested in your services. Can you help me?";

  // Handle WhatsApp click
  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  // Auto-show tooltip on first load
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
      // Auto-hide after 3 seconds
      setTimeout(() => setShowTooltip(false), 3000);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 10 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 10 }}
            className="absolute bottom-16 right-0 mb-2"
          >
            <div className="bg-white text-gray-800 px-4 py-3 rounded-lg shadow-lg border max-w-xs relative">
              <button
                onClick={() => setShowTooltip(false)}
                className="absolute -top-2 -right-2 bg-gray-200 hover:bg-gray-300 rounded-full p-1 transition-colors"
              >
                <X className="w-3 h-3" />
              </button>
              <div className="flex items-start space-x-2">
                <MessageCircle className="w-4 h-4 text-[#25D366] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium">Need Help?</p>
                  <p className="text-xs text-gray-600">Chat with us on WhatsApp!</p>
                </div>
              </div>
              {/* Arrow pointing to button */}
              <div className="absolute -bottom-1 right-6 w-2 h-2 bg-white border-r border-b border-gray-200 transform rotate-45"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main WhatsApp Button */}
      <motion.button
        onClick={handleWhatsAppClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="relative group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ 
          type: "spring", 
          stiffness: 260, 
          damping: 20,
          delay: 0.5 
        }}
      >
        {/* Pulse Animation */}
        <motion.div
          className="absolute inset-0 bg-[#25D366] rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 0, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Button Background */}
        <div className="relative w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group-hover:bg-[#128C7E]">
          {/* WhatsApp Icon */}
          <FaWhatsapp className="w-7 h-7 text-white" />
          
          {/* Online indicator */}
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 border-2 border-white rounded-full">
            <motion.div
              className="w-full h-full bg-green-500 rounded-full"
              animate={{
                scale: [1, 0.8, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </div>
      </motion.button>

      {/* Floating notification badge */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        className="absolute -top-2 -left-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold shadow-lg"
      >
        1
      </motion.div>
    </div>
  );
};

export default WhatsAppFloatingButton;