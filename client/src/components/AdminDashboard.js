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
  Home,
  Eye,
  EyeOff,
  Copy,
  ExternalLink,
  Server,
  AtSign
} from 'lucide-react';
import ArticleManagement from './ArticleManagement';
import KYCManagement from './kycManagement';
export default function AdminDashboard({ onLogout = () => console.log('Logout clicked') }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [visiblePasswords, setVisiblePasswords] = useState({});
  const [copyFeedback, setCopyFeedback] = useState({});
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);
  const [promptPassword, setPromptPassword] = useState('');
  const [pendingAccountId, setPendingAccountId] = useState(null);
  const [passwordError, setPasswordError] = useState('');

  // Set your master password here - in production, this should come from a secure source
  const MASTER_PASSWORD = 'admin123';

  useEffect(() => {
    // Hide nav and footer when admin dashboard mounts
    const navbar = document.querySelector('nav');
    const footer = document.querySelector('footer');
    
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
    { id: 'accounts', label: 'Accounts', icon: Users },
    { id: 'articles', label: 'Articles', icon: FileText },
    { id: 'kyc', label: 'KYC Forms', icon: FileText },

  ];

  const accounts = [
    {
      id: 1,
      name: 'cPanel',
      url: 'https://cpanel.casadiconsiglio.com:2083',
      username: 'casa',
      password: 'C@5a1010Dia',
      type: 'server',
      description: 'Web hosting control panel'
    },
    {
      id: 2,
      name: 'Webmail - Dr.Dia',
      url: 'https://webmail.casadiconsiglio.com:2096',
      username: 'dia@casadiconsiglio.com',
      password: 'Kali@if0',
      type: 'email',
      description: 'Email account for d.abufannas'
    },
    {
      id: 3,
      name: 'Webmail - info',
      url: 'https://webmail.casadiconsiglio.com:2096',
      username: 'info@casadiconsiglio.com',
      password: '$casa@1991',
      type: 'email',
      description: 'Main info email account'
    },
    {
      id: 4,
      name: 'Webmail - ar.abdelhamid',
      url: 'https://webmail.casadiconsiglio.com:2096',
      username: 'ar.abdelhamid@casadiconsiglio.com',
      password: 'Yhy2ONsyHFA]',
      type: 'email',
      description: 'Email account for ar.abdelhamid'
    }
  ];

  const togglePasswordVisibility = (accountId) => {
    // If password is currently visible, hide it without prompt
    if (visiblePasswords[accountId]) {
      setVisiblePasswords(prev => ({
        ...prev,
        [accountId]: false
      }));
    } else {
      // If password is hidden, show prompt to reveal it
      setPendingAccountId(accountId);
      setShowPasswordPrompt(true);
      setPromptPassword('');
      setPasswordError('');
    }
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (promptPassword === MASTER_PASSWORD) {
      setVisiblePasswords(prev => ({
        ...prev,
        [pendingAccountId]: true
      }));
      setShowPasswordPrompt(false);
      setPendingAccountId(null);
      setPromptPassword('');
      setPasswordError('');
    } else {
      setPasswordError('Incorrect password. Please try again.');
      setPromptPassword('');
    }
  };

  const handlePasswordCancel = () => {
    setShowPasswordPrompt(false);
    setPendingAccountId(null);
    setPromptPassword('');
    setPasswordError('');
  };

  const copyToClipboard = async (text, accountId, type) => {
    try {
      await navigator.clipboard.writeText(text);
      const key = `${accountId}-${type}`;
      setCopyFeedback(prev => ({ ...prev, [key]: true }));
      setTimeout(() => {
        setCopyFeedback(prev => ({ ...prev, [key]: false }));
      }, 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

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
      case 'accounts':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Account Management</h2>
              <div className="bg-yellow-600/20 border border-yellow-600/30 rounded-lg p-3">
                <p className="text-yellow-400 text-sm flex items-center">
                  <Shield className="w-4 h-4 mr-2" />
                  Sensitive Information - Handle with Care
                </p>
              </div>
            </div>
            
            <div className="grid gap-6">
              {accounts.map((account) => (
                <div key={account.id} className="bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        {account.type === 'server' ? (
                          <Server className="w-6 h-6 text-blue-400" />
                        ) : (
                          <AtSign className="w-6 h-6 text-green-400" />
                        )}
                        <div>
                          <h3 className="text-lg font-semibold text-white">{account.name}</h3>
                          <p className="text-sm text-gray-400">{account.description}</p>
                        </div>
                      </div>
                      <a
                        href={account.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-3 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors duration-200 text-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Open</span>
                      </a>
                    </div>
                    
                    <div className="space-y-4">
                      {/* URL */}
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400">URL</label>
                        <div className="flex items-center space-x-2">
                          <div className="flex-1 bg-slate-700/50 rounded-lg p-3">
                            <code className="text-white text-sm">{account.url}</code>
                          </div>
                          <button
                            onClick={() => copyToClipboard(account.url, account.id, 'url')}
                            className="p-2 bg-slate-700 hover:bg-slate-600 text-gray-300 hover:text-white rounded-lg transition-colors duration-200"
                            title="Copy URL"
                          >
                            <Copy className="w-4 h-4" />
                          </button>
                          {copyFeedback[`${account.id}-url`] && (
                            <span className="text-green-400 text-sm">Copied!</span>
                          )}
                        </div>
                      </div>

                      {/* Username */}
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400">Username</label>
                        <div className="flex items-center space-x-2">
                          <div className="flex-1 bg-slate-700/50 rounded-lg p-3">
                            <code className="text-white text-sm">{account.username}</code>
                          </div>
                          <button
                            onClick={() => copyToClipboard(account.username, account.id, 'username')}
                            className="p-2 bg-slate-700 hover:bg-slate-600 text-gray-300 hover:text-white rounded-lg transition-colors duration-200"
                            title="Copy Username"
                          >
                            <Copy className="w-4 h-4" />
                          </button>
                          {copyFeedback[`${account.id}-username`] && (
                            <span className="text-green-400 text-sm">Copied!</span>
                          )}
                        </div>
                      </div>

                      {/* Password */}
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400">Password</label>
                        <div className="flex items-center space-x-2">
                          <div className="flex-1 bg-slate-700/50 rounded-lg p-3">
                            <code className="text-white text-sm">
                              {visiblePasswords[account.id] ? account.password : '•'.repeat(account.password.length)}
                            </code>
                          </div>
                          <button
                            onClick={() => togglePasswordVisibility(account.id)}
                            className="p-2 bg-slate-700 hover:bg-slate-600 text-gray-300 hover:text-white rounded-lg transition-colors duration-200"
                            title={visiblePasswords[account.id] ? "Hide Password" : "Show Password"}
                          >
                            {visiblePasswords[account.id] ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                          <button
                            onClick={() => copyToClipboard(account.password, account.id, 'password')}
                            className="p-2 bg-slate-700 hover:bg-slate-600 text-gray-300 hover:text-white rounded-lg transition-colors duration-200"
                            title="Copy Password"
                          >
                            <Copy className="w-4 h-4" />
                          </button>
                          {copyFeedback[`${account.id}-password`] && (
                            <span className="text-green-400 text-sm">Copied!</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Security Notice */}
            <div className="bg-red-600/10 border border-red-600/30 rounded-xl p-6">
              <div className="flex items-start space-x-3">
                <Shield className="w-6 h-6 text-red-400 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-red-400 mb-2">Security Recommendations</h3>
                  <ul className="text-red-300 text-sm space-y-1">
                    <li>• Store these credentials in a secure password manager</li>
                    <li>• Enable two-factor authentication where possible</li>
                    <li>• Regularly update passwords</li>
                    <li>• Limit access to this admin panel</li>
                    <li>• Monitor account activity regularly</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      case 'articles':
        return <ArticleManagement />;
     
          case 'kyc':
        return <KYCManagement />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Password Prompt Modal */}
      {showPasswordPrompt && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-slate-800 rounded-xl p-6 w-96 border border-slate-700">
            <h3 className="text-lg font-semibold text-white mb-4">Security Verification</h3>
            <p className="text-gray-400 mb-4">Enter the master password to view sensitive credentials.</p>
            
            <form onSubmit={handlePasswordSubmit}>
              <div className="space-y-4">
                <div>
                  <input
                    type="password"
                    value={promptPassword}
                    onChange={(e) => setPromptPassword(e.target.value)}
                    placeholder="Master password"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    autoFocus
                  />
                  {passwordError && (
                    <p className="text-red-400 text-sm mt-2">{passwordError}</p>
                  )}
                </div>
                
                <div className="flex space-x-3">
                  <button
                    type="submit"
                    className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-4 rounded-lg transition-colors duration-200"
                  >
                    Verify
                  </button>
                  <button
                    type="button"
                    onClick={handlePasswordCancel}
                    className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-3 px-4 rounded-lg transition-colors duration-200"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

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