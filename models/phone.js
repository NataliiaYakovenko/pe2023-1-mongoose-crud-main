const mongoose = require('mongoose');
const { validate } = require('./post');

const phoneSchema = new mongoose.Schema(
  {
    brand: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.ObjectId,
      ref: 'User',
    },
    dateProduction: {
      type: Date,
      required: true,
      validate: {
        validator: (value) => {
          if (value <= new Date()) {
            return true;
          }
          return false;
        },
      },
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Phone = mongoose.model('Phone', phoneSchema);
module.exports = Phone;
