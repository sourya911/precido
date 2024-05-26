import React, { useEffect, useState } from 'react';
import { getSellerProperties } from '../api/property';

const SellerDashboard = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await getSellerProperties();
        setProperties(response.data); // Assuming the API returns an array of properties
      } catch (error) {
        console.error('Error fetching properties:', error);
        // Add logic to show error message
      }
    };

    fetchProperties();
  }, []);

  return (
    <div className="bg-yellow-100 p-6 rounded-md shadow-md max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-bold text-yellow-700 mb-4">Seller Dashboard</h2>
      <ul className="space-y-4">
        {properties.map((property) => (
          <li key={property.id} className="bg-white p-4 rounded-md shadow">
            <h3 className="text-lg font-bold">{property.title}</h3>
            <p className="text-gray-700">${property.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SellerDashboard;
