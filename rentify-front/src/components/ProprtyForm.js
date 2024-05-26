import React, { useState } from 'react';
import { createProperty } from '../api/property';

const PropertyForm = ({ token }) => {
  const [formData, setFormData] = useState({
    place: '',
    area: '',
    bedrooms: 0,
    bathrooms: 0,
    nearbyHospitals: '',
    nearbyColleges: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createProperty(formData, token);
    } catch (error) {
      console.error('Error creating property:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      <div className="mb-3">
        <label htmlFor="place" className="form-label">Place</label>
        <input type="text" className="form-control" id="place" name="place" value={formData.place} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="area" className="form-label">Area</label>
        <input type="text" className="form-control" id="area" name="area" value={formData.area} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="bedrooms" className="form-label">Bedrooms</label>
        <input type="number" className="form-control" id="bedrooms" name="bedrooms" value={formData.bedrooms} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="bathrooms" className="form-label">Bathrooms</label>
        <input type="number" className="form-control" id="bathrooms" name="bathrooms" value={formData.bathrooms} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="nearbyHospitals" className="form-label">Nearby Hospitals</label>
        <input type="text" className="form-control" id="nearbyHospitals" name="nearbyHospitals" value={formData.nearbyHospitals} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="nearbyColleges" className="form-label">Nearby Colleges</label>
        <input type="text" className="form-control" id="nearbyColleges" name="nearbyColleges" value={formData.nearbyColleges} onChange={handleChange} />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default PropertyForm;
