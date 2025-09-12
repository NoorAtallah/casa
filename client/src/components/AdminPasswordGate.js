// components/AdminPasswordGate.js
'use client';
import { useState } from 'react';
import { Eye, EyeOff, Lock, Shield } from 'lucide-react';

export default function AdminPasswordGate({ onPasswordCorrect }) {
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
      const response = await fetch('/api/admin/verify-access', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (data.success) {
        // Store in sessionStorage to remember during the session
        sessionStorage.setItem('adminAccess', 'true');
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
          setError(`Incorrect access password. ${data.attemptsLeft} attempts remaining.`);
        } else {
          setError(data.message || 'Incorrect access password. Please try again.');
        }
        setPassword('');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />
      
      <div className="relative">
        {/* Security Warning */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500/20 rounded-full mb-4">
            <Shield className="w-8 h-8 text-red-400" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Restricted Access</h1>
          <p className="text-gray-400">Administrative access requires authorization</p>
        </div>

        {/* Password Form */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 w-full max-w-md shadow-2xl">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-full mb-3">
              <Lock className="w-6 h-6 text-blue-400" />
            </div>
            <h2 className="text-xl font-semibold text-white">Enter Access Code</h2>
            <p className="text-gray-400 text-sm mt-1">Provide the administrative access password</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                Access Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter access password"
                  required
                  autoComplete="off"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {error && (
              <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-3 text-red-400 text-sm">
                {error}
              </div>
            )}

            {rateLimitInfo && (
              <div className="bg-orange-500/20 border border-orange-500/50 rounded-lg p-4 text-orange-400 text-sm">
                <div className="flex items-start space-x-2">
                  <Shield className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold mb-1">Access Temporarily Restricted</div>
                    <div className="text-xs leading-relaxed">
                      {rateLimitInfo.message}
                    </div>
                    <div className="mt-2 text-xs text-orange-300">
                      Please wait before attempting again. This security measure protects against unauthorized access attempts.
                    </div>
                  </div>
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading || !password.trim() || rateLimitInfo}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Verifying...</span>
                </>
              ) : (
                <>
                  <Lock className="w-5 h-5" />
                  <span>Verify Access</span>
                </>
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">
              This is a secure administrative area. Unauthorized access is prohibited.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}