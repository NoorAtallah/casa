// components/AdminDashboard.js
'use client';
import { useState, useEffect } from 'react';
import { 
  LogOut, 
  Users, 
  FileText, 
  Mail, 
  Settings, 
  BarChart3, 
  Shield,
  Home
} from 'lucide-react';
import ArticleManagement from './ArticleManagement';
export default function AdminDashboard({ onLogout }) {
  const [activeTab, setActiveTab] = useState('overview');
useEffect(() => {
    // Hide nav and footer when admin dashboard mounts
    const navbar = document.querySelector('nav'); // Adjust selector as needed
    const footer = document.querySelector('footer'); // Adjust selector as needed
    
    if (navbar) navbar.style.display = 'none';
    if (footer) footer.style.display = 'none';

    // Show them again when component unmounts
    return () => {
      if (navbar) navbar.style.display = '';
      if (footer) footer.style.display = '';
    };
  }, []);
  const menuItems = [
    { id: 'overview', label: 'Overview', icon: Home },
    // { id: 'users', label: 'Users', icon: Users },
    // { id: 'documents', label: 'Documents', icon: FileText },
    // { id: 'messages', label: 'Messages', icon: Mail },
    // { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    // { id: 'settings', label: 'Settings', icon: Settings },
    { id: 'articles', label: 'Articles', icon: FileText },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Dashboard Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="flex items-center space-x-3">
                  <Users className="w-8 h-8 text-blue-400" />
                  <div>
                    <p className="text-gray-400 text-sm">Total Users</p>
                    <p className="text-2xl font-bold text-white">1,234</p>
                  </div>
                </div>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="flex items-center space-x-3">
                  <FileText className="w-8 h-8 text-green-400" />
                  <div>
                    <p className="text-gray-400 text-sm">Documents</p>
                    <p className="text-2xl font-bold text-white">567</p>
                  </div>
                </div>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="flex items-center space-x-3">
                  <Mail className="w-8 h-8 text-yellow-400" />
                  <div>
                    <p className="text-gray-400 text-sm">Messages</p>
                    <p className="text-2xl font-bold text-white">89</p>
                  </div>
                </div>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="flex items-center space-x-3">
                  <BarChart3 className="w-8 h-8 text-purple-400" />
                  <div>
                    <p className="text-gray-400 text-sm">Analytics</p>
                    <p className="text-2xl font-bold text-white">+12%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'users':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">User Management</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <p className="text-gray-400">User management features will be implemented here.</p>
            </div>
          </div>
        );
      case 'documents':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Document Management</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <p className="text-gray-400">Document management features will be implemented here.</p>
            </div>
          </div>
        );
      case 'messages':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Messages</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <p className="text-gray-400">Message management features will be implemented here.</p>
            </div>
          </div>
        );
      case 'analytics':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Analytics</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <p className="text-gray-400">Analytics dashboard will be implemented here.</p>
            </div>
          </div>
        );
      case 'settings':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Settings</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <p className="text-gray-400">Settings panel will be implemented here.</p>
            </div>
          </div>
        );
        case 'articles':
  return <ArticleManagement />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <Shield className="w-8 h-8 text-emerald-400" />
              <h1 className="text-xl font-bold text-white">Casa Di Consiglio Admin</h1>
            </div>
            <button
              onClick={onLogout}
              className="flex items-center space-x-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-200"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 min-h-screen bg-slate-800/30 border-r border-slate-700">
          <nav className="p-6">
            <ul className="space-y-2">
              {menuItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
                        activeTab === item.id
                          ? 'bg-emerald-600 text-white'
                          : 'text-gray-400 hover:text-white hover:bg-slate-700/50'
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                      <span>{item.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}