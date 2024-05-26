import React, { useEffect, useState } from 'react';
import { getAllProperties } from '../api/property';

const PropertyList = ({ properties }) => {
  const [propertyList, setPropertyList] = useState(properties);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await getAllProperties();
        setPropertyList(response.data);
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };

    if (!properties.length) {
      fetchProperties();
    }
  }, [properties]);

  return (
    <div className="bg-gray-100 p-6 rounded-md shadow-md">
      <h2 className="text-xl font-bold text-gray-700 mb-4">Property List</h2>
      <ul className="space-y-4">
        {propertyList.map((property) => (
          <li key={property.id} className="bg-white p-4 rounded-md shadow">
            <h3 className="text-lg font-bold">{property.title}</h3>
            <p>{property.description}</p>
            <p className="text-green-600">${property.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PropertyList;
