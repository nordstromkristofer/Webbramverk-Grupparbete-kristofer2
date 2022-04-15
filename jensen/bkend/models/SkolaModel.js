const mongoose = require('mongoose');

const SkolSchema = new mongoose.Schema({
  text: {
    type: String
  },
  teacha: {
    type: String
  },
  ort: {
    type: String
  },
  utb1: {
    type: String
  },
  utb2: {
    type: String
  },
  utb3: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Skola', SkolSchema);