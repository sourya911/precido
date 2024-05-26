import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-blue-100 p-6 rounded-md shadow-md max-w-2xl mx-auto mt-10 text-center">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">Welcome to Rentify</h1>
      <p className="text-lg mb-6">Your one-stop solution for renting properties.</p>
      <div className="flex justify-center space-x-4">
        <Link to="/register" className="bg-green-500 text-white px-4 py-2 rounded-md">Register</Link>
        <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded-md">Login</Link>
      </div>
    </div>
  );
}

export default Home;
