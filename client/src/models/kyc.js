// models/KYCForm.js
import mongoose from 'mongoose';

const kycFormSchema = new mongoose.Schema({
  // Step 1 - Customer Information
  legalName: {
    type: String,
    trim: true
  },
  
  legalStructure: [{
    type: String
  }],
  
  natureOfBusiness: {
    type: String,
    trim: true
  },
  
  placeOfEstablishment: {
    type: String,
    trim: true
  },
  
  dateOfEstablishment: {
    type: Date
  },

  // Step 2 - Financial & License Information
  annualTurnover: [{
    type: String
  }],
  
  tradeLicenseNumber: {
    type: String,
    trim: true
  },
  
  tradeLicenseExpiry: {
    type: Date
  },
  
  taxRegistrationNumber: {
    type: String,
    trim: true
  },

  // Step 3 - Address & Contact Information
  businessAddress: {
    type: String,
    trim: true
  },
  
  emirates: [{
    type: String
  }],
  
  country: {
    type: String,
    trim: true,
    default: 'United Arab Emirates'
  },
  
  emailAddress: {
    type: String,
    trim: true,
    lowercase: true
  },
  
  businessPhoneNumber: {
    type: String,
    trim: true
  },

  // Step 4 - Beneficial Ownership
  realBeneficiary: {
    type: String
  },

  // Step 5 - Required Documents Upload
  passportInfoPage: {
    filename: String,
    originalName: String,
    mimeType: String,
    size: Number,
    uploadedAt: {
      type: Date,
      default: Date.now
    },
    url: String,
    required: {
      type: Boolean,
      default: true
    }
  },

  tradeLicenseDocument: {
    filename: String,
    originalName: String,
    mimeType: String,
    size: Number,
    uploadedAt: {
      type: Date,
      default: Date.now
    },
    url: String,
    required: {
      type: Boolean,
      default: false
    }
  },

  emiratesId: {
    filename: String,
    originalName: String,
    mimeType: String,
    size: Number,
    uploadedAt: {
      type: Date,
      default: Date.now
    },
    url: String,
    required: {
      type: Boolean,
      default: false
    },
    isResident: {
      type: Boolean,
      default: false
    }
  },

  // Additional metadata
  submissionMetadata: {
    submittedAt: {
      type: Date,
      default: Date.now
    },
    submittedBy: {
      type: String,
      trim: true
    },
    ipAddress: {
      type: String,
      trim: true
    },
    userAgent: {
      type: String,
      trim: true
    },
    formVersion: {
      type: String,
      default: '1.0'
    }
  },

  // Review and compliance
  reviewStatus: {
    type: String,
    default: 'pending'
  },
  
  reviewedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  
  reviewedAt: {
    type: Date
  },
  
  reviewNotes: {
    type: String,
    trim: true
  },

  // Compliance flags
  complianceFlags: [{
    flag: String,
    reason: String,
    flaggedAt: {
      type: Date,
      default: Date.now
    },
    flaggedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    resolved: {
      type: Boolean,
      default: false
    }
  }],

  // Document attachments (additional documents)
  attachments: [{
    filename: String,
    originalName: String,
    mimeType: String,
    size: Number,
    uploadedAt: {
      type: Date,
      default: Date.now
    },
    documentType: String
  }],

  // Data retention and privacy
  dataRetentionDate: {
    type: Date,
    default: function() {
      const date = new Date();
      date.setFullYear(date.getFullYear() + 7);
      return date;
    }
  },
  
  consentGiven: {
    type: Boolean,
    default: true
  },
  
  consentTimestamp: {
    type: Date,
    default: Date.now
  }

}, {
  timestamps: true,
  collection: 'kyc_forms'
});

// Basic indexes for performance
kycFormSchema.index({ tradeLicenseNumber: 1 });
kycFormSchema.index({ emailAddress: 1 });
kycFormSchema.index({ reviewStatus: 1 });
kycFormSchema.index({ 'submissionMetadata.submittedAt': -1 });

// Simple pre-save cleanup
kycFormSchema.pre('save', function(next) {
  // Basic phone number cleanup
  if (this.businessPhoneNumber) {
    this.businessPhoneNumber = this.businessPhoneNumber.replace(/\s+/g, ' ').trim();
  }
  next();
});

// Instance methods
kycFormSchema.methods.toPublicJSON = function() {
  const obj = this.toObject();
  delete obj.submissionMetadata.ipAddress;
  delete obj.submissionMetadata.userAgent;
  return obj;
};

kycFormSchema.methods.hasRequiredDocuments = function() {
  return !!(this.passportInfoPage && this.passportInfoPage.filename);
};

// Static methods
kycFormSchema.statics.findByStatus = function(status) {
  return this.find({ reviewStatus: status });
};

// Virtual for company info
kycFormSchema.virtual('companyInfo').get(function() {
  return {
    name: this.legalName,
    address: this.businessAddress,
    emirate: this.emirates ? this.emirates.join(', ') : '',
    country: this.country,
    license: this.tradeLicenseNumber
  };
});

// Virtual for document completion status
kycFormSchema.virtual('documentsStatus').get(function() {
  return {
    passportInfoPage: !!(this.passportInfoPage && this.passportInfoPage.filename),
    tradeLicenseDocument: !!(this.tradeLicenseDocument && this.tradeLicenseDocument.filename),
    emiratesId: !!(this.emiratesId && this.emiratesId.filename),
    allRequiredUploaded: !!(this.passportInfoPage && this.passportInfoPage.filename)
  };
});

// Export the model
const KYCForm = mongoose.models.KYCForm || mongoose.model('KYCForm', kycFormSchema);

export default KYCForm;