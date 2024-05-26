import React, { useState } from 'react';
import { addProperty } from '../api/property';

const PropertyForm = ({ setProperties }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: ''
  });

  const { title, description, price } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await addProperty(formData);
      setProperties((prev) => [...prev, response.data]);
      setFormData({
        title: '',
        description: '',
        price: ''
      });
    } catch (error) {
      console.error('Error adding property:', error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-md shadow-md mb-6">
      <h2 className="text-xl font-bold text-gray-700 mb-4">Add New Property</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={title}
          onChange={handleChange}
          className="my-2 p-2 border border-gray-300 rounded-md w-full"
        />
        <textarea
          placeholder="Description"
          name="description"
          value={description}
          onChange={handleChange}
          className="my-2 p-2 border border-gray-300 rounded-md w-full"
        />
        <input
          type="text"
          placeholder="Price"
          name="price"
          value={price}
          onChange={handleChange}
          className="my-2 p-2 border border-gray-300 rounded-md w-full"
        />
        <button type="submit" className="bg-yellow-500 text-white px-4 py-2 rounded-md mt-4 w-full">
          Add Property
        </button>
      </form>
    </div>
  );
}

export default PropertyForm;
