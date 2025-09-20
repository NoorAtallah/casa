'use client';
import { useState, useEffect } from 'react';
import { 
  Eye, 
  Edit,
  Search, 
  Filter,
  Calendar,
  Building2,
  FileText,
  Save,
  X,
  Check,
  AlertTriangle,
  Clock,
  XCircle,
  Download,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

export default function KYCManagement() {
  const [kycForms, setKycForms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedKyc, setSelectedKyc] = useState(null);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [emirateFilter, setEmirateFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [statusCounts, setStatusCounts] = useState({});

  const emirates = [
    'Abu Dhabi', 'Dubai', 'Sharjah', 'Ajman', 
    'Umm Al Quwain', 'Ras Al Khaimah', 'Fujairah'
  ];

  const [reviewData, setReviewData] = useState({
    reviewStatus: '',
    reviewNotes: ''
  });

  useEffect(() => {
    fetchKycForms();
  }, [currentPage, statusFilter, emirateFilter, searchTerm]);
const handleExport = () => {
  const token = sessionStorage.getItem('adminToken');
  const kycAuth = sessionStorage.getItem('kycAdminAccess');
  
  const params = new URLSearchParams({
    ...(statusFilter !== 'all' && { status: statusFilter }),
    ...(emirateFilter !== 'all' && { emirate: emirateFilter }),
    format: 'csv'
  });

  // Create a fetch request instead of window.open to include headers
  const headers = {
    ...(token && { 'Authorization': `Bearer ${token}` }),
    ...(kycAuth && { 'x-kyc-auth': 'authorized' })
  };

  fetch(`/api/admin/kyc/export?${params}`, { headers })
    .then(response => response.blob())
    .then(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `kyc_export_${new Date().toISOString().split('T')[0]}.csv`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    })
    .catch(error => console.error('Export failed:', error));
};
  const fetchKycForms = async () => {
    try {
      setLoading(true);
      const token = sessionStorage.getItem('adminToken');
      const kycAuth = sessionStorage.getItem('kycAdminAccess');
      
      const params = new URLSearchParams({
        page: currentPage,
        limit: 10,
        ...(statusFilter !== 'all' && { status: statusFilter }),
        ...(emirateFilter !== 'all' && { emirate: emirateFilter }),
        ...(searchTerm && { search: searchTerm })
      });

      const headers = {
        ...(token && { 'Authorization': `Bearer ${token}` }),
        ...(kycAuth && { 'x-kyc-auth': 'authorized' })
      };

      const response = await fetch(`/api/admin/kyc?${params}`, { headers });

      if (response.ok) {
        const data = await response.json();
        setKycForms(data.data.kycForms);
        setTotalPages(data.data.pagination.pages);
        setStatusCounts(data.data.statusCounts);
      }
    } catch (error) {
      console.error('Error fetching KYC forms:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchKycDetails = async (id) => {
    try {
      const token = sessionStorage.getItem('adminToken');
      const kycAuth = sessionStorage.getItem('kycAdminAccess');
      
      const headers = {
        ...(token && { 'Authorization': `Bearer ${token}` }),
        ...(kycAuth && { 'x-kyc-auth': 'authorized' })
      };

      const response = await fetch(
        `/api/admin/kyc/${id}?includeMetadata=true&includeFlags=true`, 
        { headers }
      );

      if (response.ok) {
        const data = await response.json();
        setSelectedKyc(data.data);
        setShowDetails(true);
      }
    } catch (error) {
      console.error('Error fetching KYC details:', error);
    }
  };

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = sessionStorage.getItem('adminToken');
      const kycAuth = sessionStorage.getItem('kycAdminAccess');
      
      const headers = {
        'Content-Type': 'application/json',
        ...(token && { 'Authorization': `Bearer ${token}` }),
        ...(kycAuth && { 'x-kyc-auth': 'authorized' })
      };

      const response = await fetch(`/api/admin/kyc/${selectedKyc._id}`, {
        method: 'PUT',
        headers,
        body: JSON.stringify(reviewData)
      });

      if (response.ok) {
        setShowReviewForm(false);
        setReviewData({ reviewStatus: '', reviewNotes: '' });
        fetchKycForms();
        if (selectedKyc) {
          fetchKycDetails(selectedKyc._id);
        }
      }
    } catch (error) {
      console.error('Error updating KYC review:', error);
    }
  };

  const handleReviewChange = (e) => {
    const { name, value } = e.target;
    setReviewData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const getStatusBadge = (status) => {
    const badges = {
      pending: 'bg-yellow-100 text-yellow-800 border border-yellow-300',
      under_review: 'bg-blue-100 text-blue-800 border border-blue-300',
      approved: 'bg-green-100 text-green-800 border border-green-300',
      rejected: 'bg-red-100 text-red-800 border border-red-300',
      requires_update: 'bg-orange-100 text-orange-800 border border-orange-300'
    };
    return badges[status] || badges.pending;
  };

  const getStatusIcon = (status) => {
    const icons = {
      pending: <Clock className="w-4 h-4" />,
      under_review: <Eye className="w-4 h-4" />,
      approved: <Check className="w-4 h-4" />,
      rejected: <XCircle className="w-4 h-4" />,
      requires_update: <AlertTriangle className="w-4 h-4" />
    };
    return icons[status] || icons.pending;
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (showDetails && selectedKyc) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => {
                setShowDetails(false);
                setSelectedKyc(null);
              }}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
            >
              <X className="w-4 h-4" />
              <span>Back to List</span>
            </button>
            <h2 className="text-2xl font-bold text-white">KYC Details - {selectedKyc.legalName}</h2>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => {
                setReviewData({
                  reviewStatus: selectedKyc.reviewStatus,
                  reviewNotes: selectedKyc.reviewNotes || ''
                });
                setShowReviewForm(true);
              }}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              <Edit className="w-4 h-4" />
              <span>Update Review</span>
            </button>
          </div>
        </div>

        {showReviewForm && (
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <form onSubmit={handleReviewSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Review Status</label>
                  <select
                    name="reviewStatus"
                    value={reviewData.reviewStatus}
                    onChange={handleReviewChange}
                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select Status</option>
                    <option value="pending">Pending</option>
                    <option value="under_review">Under Review</option>
                    <option value="approved">Approved</option>
                    <option value="rejected">Rejected</option>
                    <option value="requires_update">Requires Update</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Review Notes</label>
                <textarea
                  name="reviewNotes"
                  value={reviewData.reviewNotes}
                  onChange={handleReviewChange}
                  rows="4"
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Add review notes..."
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setShowReviewForm(false)}
                  className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                >
                  <Save className="w-4 h-4" />
                  <span>Update Review</span>
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Company Information */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Building2 className="w-5 h-5 mr-2" />
                Company Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-400">Legal Name:</span>
                  <p className="text-white font-medium">{selectedKyc.legalName}</p>
                </div>
                <div>
                  <span className="text-gray-400">Legal Structure:</span>
                  <p className="text-white">{selectedKyc.legalStructure?.join(', ')}</p>
                </div>
                <div className="md:col-span-2">
                  <span className="text-gray-400">Nature of Business:</span>
                  <p className="text-white">{selectedKyc.natureOfBusiness}</p>
                </div>
                <div>
                  <span className="text-gray-400">Place of Establishment:</span>
                  <p className="text-white">{selectedKyc.placeOfEstablishment}</p>
                </div>
                <div>
                  <span className="text-gray-400">Date of Establishment:</span>
                  <p className="text-white">{formatDate(selectedKyc.dateOfEstablishment)}</p>
                </div>
              </div>
            </div>

            {/* Financial & License Information */}
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <FileText className="w-5 h-5 mr-2" />
                Financial & License Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-400">Annual Turnover:</span>
                  <p className="text-white">{selectedKyc.annualTurnover?.join(', ')}</p>
                </div>
                <div>
                  <span className="text-gray-400">Trade License Number:</span>
                  <p className="text-white font-mono">{selectedKyc.tradeLicenseNumber}</p>
                </div>
                <div>
                  <span className="text-gray-400">License Expiry:</span>
                  <p className={`font-medium ${selectedKyc.isExpiring ? 'text-orange-400' : 'text-white'}`}>
                    {formatDate(selectedKyc.tradeLicenseExpiry)}
                    {selectedKyc.isExpiring && (
                      <span className="ml-2 text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">
                        Expires in {selectedKyc.daysUntilExpiry} days
                      </span>
                    )}
                  </p>
                </div>
                {selectedKyc.taxRegistrationNumber && (
                  <div>
                    <span className="text-gray-400">Tax Registration:</span>
                    <p className="text-white font-mono">{selectedKyc.taxRegistrationNumber}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                Contact Information
              </h3>
              <div className="space-y-4 text-sm">
                <div>
                  <span className="text-gray-400">Business Address:</span>
                  <p className="text-white">{selectedKyc.businessAddress}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <span className="text-gray-400">Emirates:</span>
                    <p className="text-white">{selectedKyc.emirates?.join(', ')}</p>
                  </div>
                  <div>
                    <span className="text-gray-400">Country:</span>
                    <p className="text-white">{selectedKyc.country}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-gray-400" />
                    <a href={`mailto:${selectedKyc.emailAddress}`} className="text-blue-400 hover:text-blue-300">
                      {selectedKyc.emailAddress}
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-gray-400" />
                    <a href={`tel:${selectedKyc.businessPhoneNumber}`} className="text-blue-400 hover:text-blue-300">
                      {selectedKyc.businessPhoneNumber}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Status & Review Panel */}
          <div className="space-y-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h3 className="text-lg font-semibold text-white mb-4">Review Status</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  {getStatusIcon(selectedKyc.reviewStatus)}
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusBadge(selectedKyc.reviewStatus)}`}>
                    {selectedKyc.reviewStatus?.replace('_', ' ').toUpperCase()}
                  </span>
                </div>
                
                <div className="text-sm">
                  <span className="text-gray-400">Submitted:</span>
                  <p className="text-white">{formatDate(selectedKyc.submissionMetadata?.submittedAt)}</p>
                </div>
                
                {selectedKyc.reviewedAt && (
                  <div className="text-sm">
                    <span className="text-gray-400">Last Reviewed:</span>
                    <p className="text-white">{formatDate(selectedKyc.reviewedAt)}</p>
                  </div>
                )}
                
                <div className="text-sm">
                  <span className="text-gray-400">Real Beneficiary:</span>
                  <p className="text-white font-medium">{selectedKyc.realBeneficiary}</p>
                </div>
              </div>
            </div>

            {selectedKyc.reviewNotes && (
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-lg font-semibold text-white mb-4">Review Notes</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{selectedKyc.reviewNotes}</p>
              </div>
            )}

            {selectedKyc.complianceFlags?.length > 0 && (
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2 text-orange-400" />
                  Compliance Flags
                </h3>
                <div className="space-y-2">
                  {selectedKyc.complianceFlags.map((flag, index) => (
                    <div key={index} className="bg-orange-100 border border-orange-300 rounded-lg p-3">
                      <div className="text-sm font-medium text-orange-800">{flag.flag}</div>
                      <div className="text-xs text-orange-600">{flag.reason}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">KYC Management</h2>
          <p className="text-gray-400 text-sm mt-1">Manage customer KYC forms and compliance</p>
        </div>
        <div className="flex space-x-2">
        <button
  onClick={handleExport}
  className="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
>
  <Download className="w-4 h-4" />
  <span>Export</span>
</button>

        </div>
      </div>

      {/* Status Overview */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {Object.entries({
          pending: { label: 'Pending', color: 'yellow', icon: Clock },
          under_review: { label: 'Under Review', color: 'blue', icon: Eye },
          approved: { label: 'Approved', color: 'green', icon: Check },
          rejected: { label: 'Rejected', color: 'red', icon: XCircle },
          requires_update: { label: 'Needs Update', color: 'orange', icon: AlertTriangle }
        }).map(([status, config]) => {
          const IconComponent = config.icon;
          const count = statusCounts[status] || 0;
          return (
            <div key={status} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">{config.label}</p>
                  <p className="text-2xl font-bold text-white">{count}</p>
                </div>
                <IconComponent className={`w-8 h-8 text-${config.color}-400`} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Filters */}
      <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search KYC forms..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Status</option>
            <option value="pending">Pending</option>
            <option value="under_review">Under Review</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
            <option value="requires_update">Requires Update</option>
          </select>
          <select
            value={emirateFilter}
            onChange={(e) => setEmirateFilter(e.target.value)}
            className="px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Emirates</option>
            {emirates.map(emirate => (
              <option key={emirate} value={emirate}>{emirate}</option>
            ))}
          </select>
        </div>
      </div>

      {/* KYC Forms List */}
      {loading ? (
        <div className="flex justify-center py-8">
          <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-700/50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Company</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">License</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Emirates</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Submitted</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700">
                {kycForms.map((kyc) => (
                  <tr key={kyc._id} className="hover:bg-slate-700/30">
                    <td className="px-6 py-4">
                      <div>
                        <div className="text-sm font-medium text-white">{kyc.legalName}</div>
                        <div className="text-sm text-gray-400">{kyc.emailAddress}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-300 font-mono">{kyc.tradeLicenseNumber}</div>
                      <div className="text-xs text-gray-400">
                        Expires: {formatDate(kyc.tradeLicenseExpiry)}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(kyc.reviewStatus)}
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusBadge(kyc.reviewStatus)}`}>
                          {kyc.reviewStatus?.replace('_', ' ')}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-300">
                      {kyc.emirates?.join(', ')}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-300">
                      {formatDate(kyc.submissionMetadata?.submittedAt)}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <button
                        onClick={() => fetchKycDetails(kyc._id)}
                        className="text-blue-400 hover:text-blue-300 flex items-center space-x-1"
                      >
                        <Eye className="w-4 h-4" />
                        <span>View</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center space-x-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-3 py-1 rounded-lg ${
                currentPage === page
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}