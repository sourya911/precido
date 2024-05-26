import React, { useState } from 'react';
import { Navigate } from 'react-router-dom'; 

const Dashboard = () => {
  const [selection, setSelection] = useState(''); 
  const handleSelection = (selected) => {
    setSelection(selected);
  };

  if (selection === 'buyer') {
    return <Navigate to="/buyer" />;
  } else if (selection === 'seller') {
    return <Navigate to="/seller" />;
  }

  return (
    <div className="bg-green-200 p-4 rounded-md">
      <h2 className="text-lg font-bold text-green-800">Dashboard</h2>
      <p>Select your role:</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 mr-4" onClick={() => handleSelection('buyer')}>
        Buyer
      </button>
      <button className="bg-red-500 text-white px-4 py-2 rounded-md mt-4" onClick={() => handleSelection('seller')}>
        Seller
      </button>
    </div>
  );
}

export default Dashboard;
