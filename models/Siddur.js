const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SiddurSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  tags: {
    type: [String],
    required: true
  },
  text: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Tweet = mongoose.model('siddur', SiddurSchema);