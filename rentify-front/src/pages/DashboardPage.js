import React from 'react';

const BuyerPage = () => {
  return (
    <div className="bg-blue-200 p-4 rounded-md">
      <h2 className="text-lg font-bold text-blue-800">Buyer Page</h2>
      <p>This is the Buyer Page.</p>
    </div>
  );
}

const SellerPage = () => {
  return (
    <div className="bg-red-200 p-4 rounded-md">
      <h2 className="text-lg font-bold text-red-800">Seller Page</h2>
      <p>This is the Seller Page.</p>
    </div>
  );
}

export { BuyerPage, SellerPage };
