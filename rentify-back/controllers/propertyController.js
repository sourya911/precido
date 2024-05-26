const Property = require('../models/Property');

exports.createProperty = async (req, res) => {
  const { place, area, bedrooms, bathrooms, nearbyHospitals, nearbyColleges } = req.body;

  try {
    const property = new Property({
      seller: req.user._id,
      place,
      area,
      bedrooms,
      bathrooms,
      nearbyHospitals,
      nearbyColleges,
    });
    await property.save();
    res.status(201).json(property);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getPropertiesBySeller = async (req, res) => {
  try {
    const properties = await Property.find({ seller: req.params.sellerId });
    res.json(properties);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllProperties = async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateProperty = async (req, res) => {
  const { place, area, bedrooms, bathrooms, nearbyHospitals, nearbyColleges } = req.body;

  try {
    const property = await Property.findById(req.params.id);
    if (!property) return res.status(404).json({ message: 'Property not found' });

    if (property.seller.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    property.place = place || property.place;
    property.area = area || property.area;
    property.bedrooms = bedrooms || property.bedrooms;
    property.bathrooms = bathrooms || property.bathrooms;
    property.nearbyHospitals = nearbyHospitals || property.nearbyHospitals;
    property.nearbyColleges = nearbyColleges || property.nearbyColleges;

    const updatedProperty = await property.save();
    res.json(updatedProperty);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteProperty = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property) return res.status(404).json({ message: 'Property not found' });

    if (property.seller.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    await property.remove();
    res.json({ message: 'Property removed' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getFilteredProperties = async (req, res) => {
  const filters = req.body;

  try {
    const properties = await Property.find(filters);
    res.json(properties);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
