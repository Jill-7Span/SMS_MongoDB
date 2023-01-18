const mongoose = require("mongoose");
const { Schema } = mongoose;

const businessModel = new mongoose.Schema({
  firstName: {
    type: String,
    min: [3, 'first name must be greater than 3 letters'],
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    min: [3, 'first name must be greater than 3 letters'],
    required: true,
    trim: true,
  },
  contactNumber: {
    type: Number,
    required: true,
    // unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    // unique: true,
    trim: true,
  },
  password: {
    type: String,
    require: true,
    trim: true,
    select: false,
  },
  city: {
    type: String,
    required: true,
    trim: true,
  },
  state: {
    type: String,
    required: true,
    trim: true,
  },
  country: {
    type: String,
    required: true,
    trim: true,
  },
  company: {
    type: String,
    required: true,
    trim: true,
  },
  date: {
    type: Date,
    default: Date.now
  },
}, { 
  timestamps: { createdAt: true, updatedAt: false } 
},{
    versionKey: false
});
const BusinessModel = mongoose.model("business", businessModel);

module.exports = BusinessModel;