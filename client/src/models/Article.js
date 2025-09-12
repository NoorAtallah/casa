// models/Article.js
import mongoose from 'mongoose';

const ArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
    maxlength: [200, 'Title cannot be more than 200 characters']
  },
  slug: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true
    // Remove 'required: true' since it will be auto-generated
  },
  excerpt: {
    type: String,
    required: [true, 'Excerpt is required'],
    trim: true,
    maxlength: [500, 'Excerpt cannot be more than 500 characters']
  },
  content: {
    type: String,
    required: [true, 'Content is required']
  },
  author: {
    type: String,
    required: [true, 'Author is required'],
    trim: true
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: ['Corporate Law', 'Banking & Finance', 'Private Client', 'Family Law', 'Tax Law', 'Healthcare Law', 'Legal Updates', 'News'],
    default: 'Legal Updates'
  },
  tags: [{
    type: String,
    trim: true
  }],
  featuredImage: {
    type: String,
    default: ''
  },
  status: {
    type: String,
    enum: ['draft', 'published', 'archived'],
    default: 'draft'
  },
  publishedAt: {
    type: Date,
    default: null
  },
  readingTime: {
    type: Number,
    default: 0
  },
  views: {
    type: Number,
    default: 0
  },
  metaTitle: {
    type: String,
    trim: true,
    maxlength: [60, 'Meta title cannot be more than 60 characters']
  },
  metaDescription: {
    type: String,
    trim: true,
    maxlength: [160, 'Meta description cannot be more than 160 characters']
  },
  featured: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

// Create index for search functionality
ArticleSchema.index({ title: 'text', content: 'text', excerpt: 'text' });
ArticleSchema.index({ slug: 1 }); // Index for slug lookups

// Function to generate unique slug
async function generateUniqueSlug(title, articleId = null) {
  let baseSlug = title
    .toLowerCase()
    .replace(/[^a-zA-Z0-9 ]/g, '')
    .replace(/\s+/g, '-')
    .trim();
  
  let slug = baseSlug;
  let counter = 1;
  
  // Check if slug exists (excluding current article if updating)
  while (true) {
    const query = { slug };
    if (articleId) {
      query._id = { $ne: articleId };
    }
    
    const existingArticle = await mongoose.models.Article.findOne(query);
    if (!existingArticle) {
      break;
    }
    
    slug = `${baseSlug}-${counter}`;
    counter++;
  }
  
  return slug;
}

// Pre-save middleware to generate slug and calculate reading time
ArticleSchema.pre('save', async function(next) {
  try {
    // Generate slug if title is modified or new document
    if (this.isModified('title') || this.isNew) {
      this.slug = await generateUniqueSlug(this.title, this._id);
    }
    
    // Calculate reading time if content is modified
    if (this.isModified('content')) {
      const wordCount = this.content.split(/\s+/).length;
      this.readingTime = Math.ceil(wordCount / 200);
    }
    
    // Set publishedAt when status changes to published
    if (this.isModified('status') && this.status === 'published' && !this.publishedAt) {
      this.publishedAt = new Date();
    }
    
    next();
  } catch (error) {
    next(error);
  }
});

// Pre-update middleware for findOneAndUpdate operations
ArticleSchema.pre('findOneAndUpdate', async function(next) {
  try {
    const update = this.getUpdate();
    
    // If title is being updated, generate new slug
    if (update.title || update.$set?.title) {
      const newTitle = update.title || update.$set.title;
      const articleId = this.getQuery()._id;
      const newSlug = await generateUniqueSlug(newTitle, articleId);
      
      if (update.$set) {
        update.$set.slug = newSlug;
      } else {
        update.slug = newSlug;
      }
    }
    
    // Calculate reading time if content is being updated
    if (update.content || update.$set?.content) {
      const newContent = update.content || update.$set.content;
      const wordCount = newContent.split(/\s+/).length;
      const readingTime = Math.ceil(wordCount / 200);
      
      if (update.$set) {
        update.$set.readingTime = readingTime;
      } else {
        update.readingTime = readingTime;
      }
    }
    
    // Set publishedAt when status changes to published
    const newStatus = update.status || update.$set?.status;
    if (newStatus === 'published') {
      const article = await this.model.findOne(this.getQuery());
      if (!article.publishedAt) {
        if (update.$set) {
          update.$set.publishedAt = new Date();
        } else {
          update.publishedAt = new Date();
        }
      }
    }
    
    next();
  } catch (error) {
    next(error);
  }
});

// Static method to get published articles
ArticleSchema.statics.getPublished = function() {
  return this.find({ status: 'published' })
    .sort({ publishedAt: -1 });
};

// Static method to get featured articles
ArticleSchema.statics.getFeatured = function() {
  return this.find({ status: 'published', featured: true })
    .sort({ publishedAt: -1 })
    .limit(5);
};

// Static method to find by slug
ArticleSchema.statics.findBySlug = function(slug) {
  return this.findOne({ slug });
};

// Instance method to increment views
ArticleSchema.methods.incrementViews = function() {
  this.views += 1;
  return this.save();
};

export default mongoose.models.Article || mongoose.model('Article', ArticleSchema);