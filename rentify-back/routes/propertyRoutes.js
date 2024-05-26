const express = require('express');
const {
  createProperty,
  getPropertiesBySeller,
  getAllProperties,
  updateProperty,
  deleteProperty,
  getFilteredProperties,
} = require('../controllers/propertyController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/').post(protect, createProperty).get(getAllProperties);
router.route('/seller/:sellerId').get(protect, getPropertiesBySeller);
router.route('/filter').post(getFilteredProperties);
router.route('/:id').put(protect, updateProperty).delete(protect, deleteProperty);

module.exports = router;
