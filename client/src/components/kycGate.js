'use client';

import React, { useState } from 'react';
import { Eye, EyeOff, Lock, Shield, FileText, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function KYCAdminGate({ onPasswordCorrect }) {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [rateLimitInfo, setRateLimitInfo] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setRateLimitInfo(null);

    try {
      const response = await fetch('/api/admin/verify-kyc-access', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (data.success) {
        // Store in sessionStorage to remember during the session
        sessionStorage.setItem('kycAdminAccess', 'true');
        onPasswordCorrect();
      } else if (response.status === 429) {
        // Handle rate limiting
        setRateLimitInfo({
          timeLeft: data.timeLeft,
          message: data.message
        });
        setPassword('');
      } else {
        // Handle other errors
        if (data.attemptsLeft !== undefined) {
          setError(`Incorrect KYC access password. ${data.attemptsLeft} attempts remaining.`);
        } else {
          setError(data.message || 'Incorrect KYC access password. Please try again.');
        }
        setPassword('');
      }
    } catch (error) {
      setError('An error occurred while verifying KYC access. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          background: `radial-gradient(circle at 25% 25%, #bda985 2px, transparent 2px),
                      radial-gradient(circle at 75% 75%, #bda985 1px, transparent 1px)`,
          backgroundSize: '50px 50px, 25px 25px'
        }}
      />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-md"
      >
        {/* Header with Company Branding */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6"
            style={{ background: 'rgba(189,169,133,0.15)' }}
          >
            <div className="relative">
              <FileText className="w-10 h-10" style={{ color: '#bda985' }} />
              <Shield className="w-5 h-5 text-red-400 absolute -top-1 -right-1" />
            </div>
          </motion.div>
          
          <h1 className="text-3xl font-bold text-black mb-2">
            KYC Form <span style={{ color: '#bda985' }}>Access</span>
          </h1>
          <p className="text-gray-600">Administrative access required</p>
          
          {/* Company Info */}
          <div className="mt-4 text-xs text-gray-500">
            <div>Casa Di Consiglio FZC-LLC</div>
            <div>Sharjah Publishing City, UAE</div>
          </div>
        </div>

        {/* Password Form */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="rounded-3xl shadow-2xl overflow-hidden border-2"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.95), rgba(189,169,133,0.05))',
            borderColor: 'rgba(189,169,133,0.2)'
          }}
        >
          <div className="p-8">
            <div className="text-center mb-6">
              <div 
                className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-3"
                style={{ background: 'rgba(189,169,133,0.15)' }}
              >
                <Lock className="w-6 h-6" style={{ color: '#bda985' }} />
              </div>
              <h2 className="text-xl font-semibold text-black">Secure Access Required</h2>
              <p className="text-gray-600 text-sm mt-1">Enter your administrative credentials</p>
            </div>

            <div className="space-y-6">
              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                  KYC Access Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSubmit(e)}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#bda985] focus:outline-none transition-all duration-300 bg-white/70 text-black placeholder-gray-400"
                    placeholder="Enter KYC access password"
                    required
                    autoComplete="off"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-50 border-2 border-red-200 rounded-xl p-3 text-red-600 text-sm"
                >
                  <div className="flex items-start space-x-2">
                    <Shield className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>{error}</span>
                  </div>
                </motion.div>
              )}

              {rateLimitInfo && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-orange-50 border-2 border-orange-200 rounded-xl p-4 text-orange-600 text-sm"
                >
                  <div className="flex items-start space-x-2">
                    <Shield className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold mb-1">Access Temporarily Restricted</div>
                      <div className="text-xs leading-relaxed">
                        {rateLimitInfo.message}
                      </div>
                      <div className="mt-2 text-xs text-orange-500">
                        Please wait before attempting again. This security measure protects sensitive KYC data.
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              <motion.button
                type="button"
                onClick={handleSubmit}
                disabled={isLoading || !password.trim() || rateLimitInfo}
                whileHover={{ scale: !isLoading && password.trim() ? 1.02 : 1 }}
                whileTap={{ scale: !isLoading && password.trim() ? 0.98 : 1 }}
                className="w-full font-semibold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  background: !isLoading && password.trim() && !rateLimitInfo
                    ? 'linear-gradient(135deg, #bda985, #d4c4a0)'
                    : 'linear-gradient(135deg, #9ca3af, #6b7280)',
                  color: '#000000'
                }}
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                    <span>Verifying Access...</span>
                  </>
                ) : (
                  <>
                    <Lock className="w-5 h-5" />
                    <span>Access KYC Form</span>
                  </>
                )}
              </motion.button>
            </div>

            <div className="mt-6 text-center">
              <p className="text-xs text-gray-500 leading-relaxed">
                This form contains sensitive customer information protected under UAE data protection laws. 
                Unauthorized access is strictly prohibited.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Security Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 text-center"
        >
          <div 
            className="p-4 rounded-2xl border-2"
            style={{
              background: 'rgba(189,169,133,0.08)',
              borderColor: 'rgba(189,169,133,0.2)'
            }}
          >
            <div className="flex items-center justify-center mb-2">
              <Building2 className="w-4 h-4 mr-2" style={{ color: '#bda985' }} />
              <span className="text-sm font-semibold text-gray-700">Know Your Customer (KYC) Portal</span>
            </div>
            <p className="text-xs text-gray-600">
              Authorized personnel only • All access attempts are logged
            </p>
          </div>
        </motion.div>

        {/* Demo Information */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-4 text-center"
        >
          <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-3">
            <p className="text-xs text-blue-600">
              <strong>Demo Password:</strong> kyc-admin-2025
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}