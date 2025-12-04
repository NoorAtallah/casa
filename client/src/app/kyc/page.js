'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Building2, FileText, Phone, Mail, MapPin, CheckCircle, AlertCircle, User, DollarSign, ArrowRight, ArrowLeft, Upload, File } from 'lucide-react';
import KYCAdminGate from '@/components/kycGate';

export default function KYCForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [submissionId, setSubmissionId] = useState('');
  const [formData, setFormData] = useState({
    // Step 1 - Customer Information
    legalName: '',
    legalStructure: [],
    natureOfBusiness: '',
    placeOfEstablishment: '',
    dateOfEstablishment: '',
    
    // Step 2 - Financial & License Information
    annualTurnover: [],
    tradeLicenseNumber: '',
    tradeLicenseExpiry: '',
    taxRegistrationNumber: '',
    
    // Step 3 - Address & Contact Information
    businessAddress: '',
    emirates: [],
    country: 'United Arab Emirates',
    emailAddress: '',
    businessPhoneNumber: '',
    
    // Step 4 - Beneficial Ownership
    realBeneficiary: '',
    
    // Step 5 - Document Uploads
    passportInfoPage: null,
    tradeLicenseDocument: null,
    emiratesId: null,
    isResident: false
  });

  const [uploadedFiles, setUploadedFiles] = useState({
    passportInfoPage: null,
    tradeLicenseDocument: null,
    emiratesId: null
  });

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [validationErrors, setValidationErrors] = useState([]);

  // Check if user is already authenticated from sessionStorage
  useEffect(() => {
    const hasAccess = sessionStorage.getItem('kycAdminAccess');
    if (hasAccess === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  // If not authenticated, show the gate
  if (!isAuthenticated) {
    return <KYCAdminGate onPasswordCorrect={() => setIsAuthenticated(true)} />;
  }
  
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      if (name === 'isResident') {
        setFormData(prev => ({
          ...prev,
          isResident: checked
        }));
      } else {
        setFormData(prev => {
          const currentArray = prev[name] || [];
          if (checked) {
            return { ...prev, [name]: [...currentArray, value] };
          } else {
            return { ...prev, [name]: currentArray.filter(item => item !== value) };
          }
        });
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleFileChange = (e, fieldName) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type
      const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'];
      if (!validTypes.includes(file.type)) {
        alert('Please upload only JPG, PNG, or PDF files');
        return;
      }
      
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('File size must be less than 5MB');
        return;
      }

      setUploadedFiles(prev => ({
        ...prev,
        [fieldName]: file
      }));

      setFormData(prev => ({
        ...prev,
        [fieldName]: file
      }));
    }
  };

  const removeFile = (fieldName) => {
    setUploadedFiles(prev => ({
      ...prev,
      [fieldName]: null
    }));
    
    setFormData(prev => ({
      ...prev,
      [fieldName]: null
    }));
  };

  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    setValidationErrors([]);
    
    try {
      // Create FormData for file uploads
      const submitData = new FormData();
      
      // Append all form fields
      Object.keys(formData).forEach(key => {
        if (key === 'legalStructure' || key === 'annualTurnover' || key === 'emirates') {
          submitData.append(key, JSON.stringify(formData[key]));
        } else if (key === 'passportInfoPage' || key === 'tradeLicenseDocument' || key === 'emiratesId') {
          if (formData[key]) {
            submitData.append(key, formData[key]);
          }
        } else {
          submitData.append(key, formData[key]);
        }
      });

      const response = await fetch('/api/kyc/submit', {
        method: 'POST',
        body: submitData,
      });

      const result = await response.json();

      if (result.success) {
        setSubmissionId(result.data.id);
        setSubmitted(true);
        sessionStorage.setItem('kycSubmissionId', result.data.id);
        
        // Reset form after 5 seconds
        setTimeout(() => {
          setSubmitted(false);
          setCurrentStep(1);
          setSubmissionId('');
          setUploadedFiles({
            passportInfoPage: null,
            tradeLicenseDocument: null,
            emiratesId: null
          });
          setFormData({
            legalName: '',
            legalStructure: [],
            natureOfBusiness: '',
            placeOfEstablishment: '',
            dateOfEstablishment: '',
            annualTurnover: [],
            tradeLicenseNumber: '',
            tradeLicenseExpiry: '',
            taxRegistrationNumber: '',
            businessAddress: '',
            emirates: [],
            country: 'United Arab Emirates',
            emailAddress: '',
            businessPhoneNumber: '',
            realBeneficiary: '',
            passportInfoPage: null,
            tradeLicenseDocument: null,
            emiratesId: null,
            isResident: false
          });
        }, 5000);
      } else {
        setSubmitError(result.message || 'Failed to submit KYC form');
        if (result.errors && Array.isArray(result.errors)) {
          setValidationErrors(result.errors);
        }
      }
    } catch (error) {
      console.error('KYC submission error:', error);
      setSubmitError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Options from the PDF
  const legalStructureOptions = [
    'Sole Establishment',
    'Limited Liability Company',
    'Partnership',
    'Free Zone Company',
    'Civil Company',
    'Branch Office of Foreign Company',
    'Others'
  ];

  const annualTurnoverOptions = [
    '< AED 10 Million',
    'Between AED 10 Million & 50 Million',
    'Between AED 50 Million & 100 Million',
    '> AED 100 Million'
  ];

  const emiratesOptions = [
    'Abu Dhabi',
    'Dubai',
    'Sharjah',
    'Ajman',
    'Umm Al Quwain',
    'Ras Al Khaimah',
    'Fujairah'
  ];

  const realBeneficiaryOptions = ['Yes', 'No'];

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const stepVariants = {
    hidden: { x: 300, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: {
      x: -300,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  const steps = [
    { number: 1, title: 'Customer Information', icon: User },
    { number: 2, title: 'Financial & License Info', icon: DollarSign },
    { number: 3, title: 'Address & Contact', icon: MapPin },
    { number: 4, title: 'Beneficial Ownership', icon: AlertCircle },
    { number: 5, title: 'Document Upload', icon: Upload }
  ];

  // Validation functions for each step
  const validateStep1 = () => {
    return formData.legalName && 
           formData.legalStructure.length > 0 && 
           formData.natureOfBusiness && 
           formData.placeOfEstablishment && 
           formData.dateOfEstablishment;
  };

  const validateStep2 = () => {
    return formData.annualTurnover.length > 0 && 
           formData.tradeLicenseNumber && 
           formData.tradeLicenseExpiry;
  };

  const validateStep3 = () => {
    return formData.businessAddress && 
           formData.emirates.length > 0 && 
           formData.country && 
           formData.emailAddress && 
           formData.businessPhoneNumber;
  };

  const validateStep4 = () => {
    return formData.realBeneficiary;
  };

  const validateStep5 = () => {
    // Passport info page is required
    return uploadedFiles.passportInfoPage !== null;
  };

  const canProceed = () => {
    switch(currentStep) {
      case 1: return validateStep1();
      case 2: return validateStep2();
      case 3: return validateStep3();
      case 4: return validateStep4();
      case 5: return validateStep5();
      default: return false;
    }
  };

  if (submitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center p-6"
      >
        <div 
          className="text-center p-12 rounded-3xl shadow-2xl max-w-md w-full"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.95), rgba(189,169,133,0.1))',
            border: '2px solid rgba(189,169,133,0.3)'
          }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
            style={{ background: 'rgba(189,169,133,0.2)' }}
          >
            <CheckCircle className="w-10 h-10" style={{ color: '#bda985' }} />
          </motion.div>
          <h2 className="text-2xl font-bold text-black mb-4">KYC Form Submitted Successfully!</h2>
          <p className="text-gray-600 mb-6">Thank you for providing your information. Our team will review your submission shortly.</p>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 3 }}
              className="h-2 rounded-full"
              style={{ background: 'linear-gradient(90deg, #bda985, #d4c4a0)' }}
            />
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12 px-6"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            background: `radial-gradient(circle at 25% 25%, #bda985 2px, transparent 2px),
                        radial-gradient(circle at 75% 75%, #bda985 1px, transparent 1px)`,
            backgroundSize: '50px 50px, 25px 25px'
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          {/* Company Header Info */}
          <div 
            className="p-6 rounded-2xl mb-8 border-2"
            style={{
              background: 'linear-gradient(135deg, rgba(189,169,133,0.1), rgba(255,255,255,0.8))',
              borderColor: '#bda985'
            }}
          >
            <div className="text-right text-sm text-gray-600 mb-4">
              <div>United Arab Emirates - Sharjah</div>
              <div>SPC - Office # F13</div>
              <div>Tel 00971563858532</div>
              <div>info@casadiconsiglio.com</div>
              <div>www.casadiconsiglio.com</div>
            </div>
            
            <div className="flex items-center justify-center mb-6">
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center mr-4"
                style={{ background: 'rgba(189,169,133,0.15)' }}
              >
                <FileText className="w-8 h-8" style={{ color: '#bda985' }} />
              </div>
              <div className="text-left">
                <h1 className="text-4xl font-black text-black">
                  Know Your <span style={{ color: '#bda985' }}>Customer (KYC)</span>
                </h1>
                <p className="text-lg text-gray-600">Customer Information Form</p>
              </div>
            </div>
          </div>

          {/* Progress Steps */}
          <div className="flex justify-center mb-8 overflow-x-auto">
            <div className="flex items-center space-x-2 md:space-x-4">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                const isActive = currentStep === step.number;
                const isCompleted = currentStep > step.number;
                
                return (
                  <div key={step.number} className="flex items-center">
                    <motion.div 
                      className="flex flex-col items-center"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div 
                        className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                          isActive 
                            ? 'border-[#bda985] bg-[#bda985] text-white' 
                            : isCompleted 
                              ? 'border-green-500 bg-green-500 text-white'
                              : 'border-gray-300 bg-white text-gray-400'
                        }`}
                      >
                        {isCompleted ? (
                          <CheckCircle className="w-6 h-6" />
                        ) : (
                          <IconComponent className="w-6 h-6" />
                        )}
                      </div>
                      <span className={`text-xs mt-2 font-medium hidden md:block ${
                        isActive ? 'text-[#bda985]' : isCompleted ? 'text-green-600' : 'text-gray-400'
                      }`}>
                        {step.title}
                      </span>
                    </motion.div>
                    
                    {index < steps.length - 1 && (
                      <div 
                        className={`w-4 md:w-8 h-0.5 mx-1 md:mx-2 transition-all duration-300 ${
                          currentStep > step.number ? 'bg-green-500' : 'bg-gray-300'
                        }`} 
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.form 
          variants={itemVariants}
          onSubmit={currentStep === 5 ? handleSubmit : (e) => { e.preventDefault(); nextStep(); }}
          className="rounded-3xl shadow-2xl overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.95), rgba(189,169,133,0.05))',
            border: '2px solid rgba(189,169,133,0.2)'
          }}
        >
          <div className="p-8 md:p-12">
            
            {/* Step 1: Customer Information */}
            {currentStep === 1 && (
              <motion.div
                key="step1"
                variants={stepVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="flex items-center mb-8">
                  <User className="w-6 h-6 mr-3" style={{ color: '#bda985' }} />
                  <h2 className="text-2xl font-bold text-black">Customer Information</h2>
                </div>
                
                <div className="space-y-6">
                  {/* Legal Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Legal Name *
                    </label>
                    <input
                      type="text"
                      name="legalName"
                      value={formData.legalName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#bda985] focus:outline-none transition-colors duration-300 bg-white/70"
                      placeholder="Enter the legal name of the entity"
                    />
                  </div>

                  {/* Legal Structure - Multiple Selection */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-4">
                      Legal Structure * (Select all that apply)
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {legalStructureOptions.map(option => (
                        <label key={option} className="flex items-center p-3 rounded-lg border-2 border-gray-200 hover:border-[#bda985] transition-colors cursor-pointer">
                          <input
                            type="checkbox"
                            name="legalStructure"
                            value={option}
                            checked={formData.legalStructure.includes(option)}
                            onChange={handleInputChange}
                            className="mr-3 w-5 h-5 text-[#bda985] border-2 border-gray-300 rounded focus:ring-[#bda985]"
                          />
                          <span className="text-sm font-medium text-gray-700">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Nature of Business */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nature of Business *
                    </label>
                    <textarea
                      name="natureOfBusiness"
                      value={formData.natureOfBusiness}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#bda985] focus:outline-none transition-colors duration-300 bg-white/70 resize-none"
                      placeholder="Describe the main business activities and services"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Place of Establishment */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Place of Establishment *
                      </label>
                      <input
                        type="text"
                        name="placeOfEstablishment"
                        value={formData.placeOfEstablishment}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#bda985] focus:outline-none transition-colors duration-300 bg-white/70"
                        placeholder="Where was the business entity established"
                      />
                    </div>

                    {/* Date of Establishment */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Date of Establishment *
                      </label>
                      <input
                        type="date"
                        name="dateOfEstablishment"
                        value={formData.dateOfEstablishment}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#bda985] focus:outline-none transition-colors duration-300 bg-white/70"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 2: Financial & License Information */}
            {currentStep === 2 && (
              <motion.div
                key="step2"
                variants={stepVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="flex items-center mb-8">
                  <DollarSign className="w-6 h-6 mr-3" style={{ color: '#bda985' }} />
                  <h2 className="text-2xl font-bold text-black">Financial & License Information</h2>
                </div>
                
                <div className="space-y-8">
                  {/* Annual Turnover */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-4">
                      Annual Turnover * (Select all that apply)
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {annualTurnoverOptions.map(option => (
                        <label key={option} className="flex items-center p-4 rounded-lg border-2 border-gray-200 hover:border-[#bda985] transition-colors cursor-pointer">
                          <input
                            type="checkbox"
                            name="annualTurnover"
                            value={option}
                            checked={formData.annualTurnover.includes(option)}
                            onChange={handleInputChange}
                            className="mr-3 w-5 h-5 text-[#bda985] border-2 border-gray-300 rounded focus:ring-[#bda985]"
                          />
                          <span className="text-sm font-medium text-gray-700">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* License Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Trade License Number *
                      </label>
                      <input
                        type="text"
                        name="tradeLicenseNumber"
                        value={formData.tradeLicenseNumber}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#bda985] focus:outline-none transition-colors duration-300 bg-white/70"
                        placeholder="Enter trade license number"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Trade License Expiry *
                      </label>
                      <input
                        type="date"
                        name="tradeLicenseExpiry"
                        value={formData.tradeLicenseExpiry}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#bda985] focus:outline-none transition-colors duration-300 bg-white/70"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Tax Registration Number
                    </label>
                    <input
                      type="text"
                      name="taxRegistrationNumber"
                      value={formData.taxRegistrationNumber}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#bda985] focus:outline-none transition-colors duration-300 bg-white/70"
                      placeholder="Enter tax registration number (if applicable)"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 3: Address & Contact Information */}
            {currentStep === 3 && (
              <motion.div
                key="step3"
                variants={stepVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="flex items-center mb-8">
                  <MapPin className="w-6 h-6 mr-3" style={{ color: '#bda985' }} />
                  <h2 className="text-2xl font-bold text-black">Address & Contact Information</h2>
                </div>
                
                <div className="space-y-6">
                  {/* Business Address */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Business Address *
                    </label>
                    <textarea
                      name="businessAddress"
                      value={formData.businessAddress}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#bda985] focus:outline-none transition-colors duration-300 bg-white/70 resize-none"
                      placeholder="Enter complete business address including building, street, area details"
                    />
                  </div>

                  {/* Emirates - Multiple Selection */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-4">
                      Emirates * (Select all applicable locations)
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {emiratesOptions.map(option => (
                        <label key={option} className="flex items-center p-3 rounded-lg border-2 border-gray-200 hover:border-[#bda985] transition-colors cursor-pointer">
                          <input
                            type="checkbox"
                            name="emirates"
                            value={option}
                            checked={formData.emirates.includes(option)}
                            onChange={handleInputChange}
                            className="mr-2 w-4 h-4 text-[#bda985] border-2 border-gray-300 rounded focus:ring-[#bda985]"
                          />
                          <span className="text-sm font-medium text-gray-700">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Country */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Country *
                    </label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      required
                      className="w-full md:w-1/2 px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#bda985] focus:outline-none transition-colors duration-300 bg-white/70"
                      placeholder="Enter country"
                    />
                  </div>

                  {/* Contact Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="emailAddress"
                        value={formData.emailAddress}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#bda985] focus:outline-none transition-colors duration-300 bg-white/70"
                        placeholder="Enter official business email address"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Business Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="businessPhoneNumber"
                        value={formData.businessPhoneNumber}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#bda985] focus:outline-none transition-colors duration-300 bg-white/70"
                        placeholder="Enter business contact number with country code"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 4: Beneficial Ownership */}
            {currentStep === 4 && (
              <motion.div
                key="step4"
                variants={stepVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="flex items-center mb-8">
                  <AlertCircle className="w-6 h-6 mr-3" style={{ color: '#bda985' }} />
                  <h2 className="text-2xl font-bold text-black">Beneficial Ownership</h2>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-4">
                    Is the Business entity a real beneficiary? *
                  </label>
                  <p className="text-xs text-gray-600 mb-6">
                    A real beneficiary is a natural person who ultimately owns or controls the business entity or on whose behalf transactions are conducted.
                  </p>
                  <div className="grid grid-cols-2 gap-4 max-w-md">
                    {realBeneficiaryOptions.map(option => (
                      <label key={option} className="flex items-center p-4 rounded-lg border-2 border-gray-200 hover:border-[#bda985] transition-colors cursor-pointer">
                        <input
                          type="radio"
                          name="realBeneficiary"
                          value={option}
                          checked={formData.realBeneficiary === option}
                          onChange={handleInputChange}
                          required
                          className="mr-3 w-5 h-5 text-[#bda985] border-2 border-gray-300 focus:ring-[#bda985]"
                        />
                        <span className="text-lg font-medium text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 5: Document Upload */}
            {currentStep === 5 && (
              <motion.div
                key="step5"
                variants={stepVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="flex items-center mb-8">
                  <Upload className="w-6 h-6 mr-3" style={{ color: '#bda985' }} />
                  <h2 className="text-2xl font-bold text-black">Required Documents</h2>
                </div>
                
                <div className="space-y-6">
                  <p className="text-sm text-gray-600 mb-6">
                    Please upload clear, legible copies of the required documents. Accepted formats: JPG, PNG, or PDF (max 5MB per file)
                  </p>

                  {/* Passport Info Page - Required */}
                  <div 
                    className="p-6 rounded-xl border-2 border-gray-200 hover:border-[#bda985] transition-colors"
                    style={{ background: 'rgba(189,169,133,0.05)' }}
                  >
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Passport Information Page * <span className="text-red-500">(Required)</span>
                    </label>
                    <p className="text-xs text-gray-600 mb-4">
                      Upload a clear photo of the passport information page showing personal details
                    </p>
                    
                    {!uploadedFiles.passportInfoPage ? (
                      <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-[#bda985] transition-colors">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <Upload className="w-8 h-8 mb-2 text-gray-400" />
                          <p className="text-sm text-gray-600">Click to upload passport info page</p>
                        </div>
                        <input
                          type="file"
                          className="hidden"
                          accept="image/jpeg,image/jpg,image/png,application/pdf"
                          onChange={(e) => handleFileChange(e, 'passportInfoPage')}
                        />
                      </label>
                    ) : (
                      <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                        <div className="flex items-center">
                          <File className="w-5 h-5 mr-3 text-green-600" />
                          <span className="text-sm font-medium text-gray-700">{uploadedFiles.passportInfoPage.name}</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFile('passportInfoPage')}
                          className="text-red-500 hover:text-red-700 font-medium text-sm"
                        >
                          Remove
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Trade License Document - Optional */}
                  <div 
                    className="p-6 rounded-xl border-2 border-gray-200 hover:border-[#bda985] transition-colors"
                    style={{ background: 'rgba(189,169,133,0.05)' }}
                  >
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Trade License Document <span className="text-gray-500">(Optional)</span>
                    </label>
                    <p className="text-xs text-gray-600 mb-4">
                      Upload a copy of your company's trade license if available
                    </p>
                    
                    {!uploadedFiles.tradeLicenseDocument ? (
                      <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-[#bda985] transition-colors">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <Upload className="w-8 h-8 mb-2 text-gray-400" />
                          <p className="text-sm text-gray-600">Click to upload trade license</p>
                        </div>
                        <input
                          type="file"
                          className="hidden"
                          accept="image/jpeg,image/jpg,image/png,application/pdf"
                          onChange={(e) => handleFileChange(e, 'tradeLicenseDocument')}
                        />
                      </label>
                    ) : (
                      <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                        <div className="flex items-center">
                          <File className="w-5 h-5 mr-3 text-green-600" />
                          <span className="text-sm font-medium text-gray-700">{uploadedFiles.tradeLicenseDocument.name}</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFile('tradeLicenseDocument')}
                          className="text-red-500 hover:text-red-700 font-medium text-sm"
                        >
                          Remove
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Emirates ID - Optional for Residents */}
                  <div 
                    className="p-6 rounded-xl border-2 border-gray-200 hover:border-[#bda985] transition-colors"
                    style={{ background: 'rgba(189,169,133,0.05)' }}
                  >
                    <label className="flex items-center mb-4">
                      <input
                        type="checkbox"
                        name="isResident"
                        checked={formData.isResident}
                        onChange={handleInputChange}
                        className="mr-3 w-5 h-5 text-[#bda985] border-2 border-gray-300 rounded focus:ring-[#bda985]"
                      />
                      <span className="text-sm font-semibold text-gray-700">
                        I am a UAE Resident
                      </span>
                    </label>

                    {formData.isResident && (
                      <>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                          Emirates ID <span className="text-gray-500">(For UAE Residents)</span>
                        </label>
                        <p className="text-xs text-gray-600 mb-4">
                          Upload a clear photo of both sides of your Emirates ID
                        </p>
                        
                        {!uploadedFiles.emiratesId ? (
                          <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-[#bda985] transition-colors">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                              <Upload className="w-8 h-8 mb-2 text-gray-400" />
                              <p className="text-sm text-gray-600">Click to upload Emirates ID</p>
                            </div>
                            <input
                              type="file"
                              className="hidden"
                              accept="image/jpeg,image/jpg,image/png,application/pdf"
                              onChange={(e) => handleFileChange(e, 'emiratesId')}
                            />
                          </label>
                        ) : (
                          <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                            <div className="flex items-center">
                              <File className="w-5 h-5 mr-3 text-green-600" />
                              <span className="text-sm font-medium text-gray-700">{uploadedFiles.emiratesId.name}</span>
                            </div>
                            <button
                              type="button"
                              onClick={() => removeFile('emiratesId')}
                              className="text-red-500 hover:text-red-700 font-medium text-sm"
                            >
                              Remove
                            </button>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Error Messages */}
            {submitError && (
              <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                <p className="text-red-700 text-sm font-medium">{submitError}</p>
                {validationErrors.length > 0 && (
                  <ul className="mt-2 list-disc list-inside text-red-600 text-sm">
                    {validationErrors.map((error, index) => (
                      <li key={index}>{error}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-12">
              {/* Previous Button */}
              {currentStep > 1 && (
                <motion.button
                  type="button"
                  onClick={prevStep}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center px-8 py-3 rounded-xl font-medium text-gray-700 border-2 border-gray-300 hover:border-gray-400 transition-all duration-300"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Previous
                </motion.button>
              )}

              {/* Next/Submit Button */}
              <motion.button
                type="submit"
                disabled={!canProceed() || isSubmitting}
                whileHover={{ scale: canProceed() ? 1.02 : 1 }}
                whileTap={{ scale: canProceed() ? 0.98 : 1 }}
                className={`flex items-center px-8 py-3 rounded-xl font-bold transition-all duration-300 shadow-lg ${
                  currentStep === 1 ? 'ml-auto' : ''
                } disabled:opacity-50 disabled:cursor-not-allowed`}
                style={{
                  background: canProceed() && !isSubmitting
                    ? 'linear-gradient(135deg, #bda985, #d4c4a0)'
                    : 'linear-gradient(135deg, #9ca3af, #6b7280)',
                  color: '#000000'
                }}
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin mr-2"></div>
                    Submitting...
                  </div>
                ) : currentStep === 5 ? (
                  'Submit KYC Form'
                ) : (
                  <>
                    Next
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </motion.button>
            </div>

            {/* Progress Indicator */}
            <div className="mt-8 text-center">
              <div className="text-sm text-gray-600 mb-2">
                Step {currentStep} of {steps.length}
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <motion.div
                  className="h-2 rounded-full transition-all duration-500"
                  style={{
                    width: `${(currentStep / steps.length) * 100}%`,
                    background: 'linear-gradient(90deg, #bda985, #d4c4a0)'
                  }}
                />
              </div>
            </div>
          </div>
        </motion.form>

        {/* Footer */}
        <motion.div variants={itemVariants} className="text-center mt-12">
          <div 
            className="p-6 rounded-2xl border-2"
            style={{
              background: 'rgba(189,169,133,0.1)',
              borderColor: 'rgba(189,169,133,0.3)'
            }}
          >
            <p className="text-gray-700 text-sm mb-3">
              <strong>CONFIDENTIALITY NOTICE:</strong> All information provided in this KYC form will be kept strictly confidential and used solely for regulatory compliance and client onboarding purposes in accordance with UAE laws and regulations.
            </p>
            <div className="flex items-center justify-center space-x-4 text-xs text-gray-600">
              <span className="font-semibold">Casa Di Consiglio FZC-LLC</span>
              <span>•</span>
              <span>Registration No. 4202724.01 SPC</span>
              <span>•</span>
              <span>Sharjah, UAE</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}