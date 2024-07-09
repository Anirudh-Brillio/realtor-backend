const mongoose = require('mongoose');

const detailsSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  size: { type: String, required: true },
  bedrooms: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  year_built: { type: Number, required: true },
  amenities: { type: [String], required: true },
  description: { type: String, required: true },
  nearby_schools: { type: [String], required: true },
  transportation: { type: String, required: true },
  photos: { type: [String], required: true }
});

module.exports = detailsSchema;
