const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  seller: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  place: { type: String, required: true },
  area: { type: String, required: true },
  bedrooms: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  nearbyHospitals: { type: String },
  nearbyColleges: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const Property = mongoose.model('Property', propertySchema);
module.exports = Property;
