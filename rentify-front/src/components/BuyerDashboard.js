import React, { useEffect, useState } from 'react';
import { getAvailableProperties } from '../api/property';

const BuyerDashboard = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await getAvailableProperties();
        setProperties(response.data); 
        console.log(response)
      } catch (error) {
        console.error('Error fetching available properties:', error);
      }
    };

    fetchProperties();
  }, []);

  return (
    <div className="bg-blue-200 p-4 rounded-md">
      <h2 className="text-lg font-bold text-blue-800">Buyer Dashboard</h2>
      <ul>
        {properties.map((property) => (
          <li key={property.id}>
            {property.title} - {property.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BuyerDashboard;
