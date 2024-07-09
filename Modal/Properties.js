const mongoose = require('mongoose');
const detailsSchema = require('./detailsSchema');  // Adjust the path as needed

const propertySchema = new mongoose.Schema({
  category: { type: String, required: true },
  title: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  location: { type: String, required: true },
  details: { type: detailsSchema, required: true }
});

const PropertyModel = mongoose.model('PropertyListing', propertySchema);

module.exports = PropertyModel;
