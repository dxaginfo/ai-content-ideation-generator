const mongoose = require('mongoose');

const ideaSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    title: {
      type: String,
      required: [true, 'Please add a title'],
    },
    description: {
      type: String,
      required: [true, 'Please add a description'],
    },
    contentType: {
      type: String,
      required: [true, 'Please specify content type'],
      enum: ['blog', 'social', 'video'],
    },
    keywords: [String],
    categories: [String],
    isSaved: {
      type: Boolean,
      default: false,
    },
    isScheduled: {
      type: Boolean,
      default: false,
    },
    scheduledDate: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Idea', ideaSchema);
