// app/admin/page.js
'use client';
import { useState, useEffect } from 'react';
import AdminPasswordGate from '../../components/AdminPasswordGate';
import AdminLogin from '../../components/AdminLogin';
import AdminDashboard from '../../components/AdminDashboard';

export default function AdminPage() {
  const [accessGranted, setAccessGranted] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user already has access and is logged in
    const hasAccess = sessionStorage.getItem('adminAccess') === 'true';
    const isLoggedIn = sessionStorage.getItem('adminLoggedIn') === 'true';
    
    setAccessGranted(hasAccess);
    setLoggedIn(isLoggedIn);
    setIsLoading(false);
  }, []);

  const handlePasswordCorrect = () => {
    setAccessGranted(true);
  };

  const handleLoginSuccess = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('adminAccess');
    sessionStorage.removeItem('adminLoggedIn');
    sessionStorage.removeItem('adminToken');
    setAccessGranted(false);
    setLoggedIn(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
      </div>
    );
  }

  // Show password gate first
  if (!accessGranted) {
    return <AdminPasswordGate onPasswordCorrect={handlePasswordCorrect} />;
  }

  // Show login form after password is correct
  if (!loggedIn) {
    return <AdminLogin onLoginSuccess={handleLoginSuccess} />;
  }

  // Show admin dashboard after successful login
  return <AdminDashboard onLogout={handleLogout} />;
}