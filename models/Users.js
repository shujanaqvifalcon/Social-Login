/**
 * User schema
 * @author Yousuf Kalim
 */
const mongoose = require('mongoose');

// Schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    method:String,
    role: {
      type: String,
      enum: ['user'],
      default: 'user',
    },
    photo: String,
  },
  {
    timestamps: true,
  },
);

// Model
module.exports = mongoose.model('users', userSchema);
