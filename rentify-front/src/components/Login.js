import React, { useState } from 'react';
import { loginUser } from '../api/auth';
import { Navigate } from 'react-router-dom'; 
const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please enter your email and password');
      return;
    }

    try {
      const response = await loginUser(formData);
      console.log(response); 
      setIsLoggedIn(true); 
    } catch (error) {
      console.error('Login error:', error);
      setError('Login failed. Please check your credentials and try again.');
    }
  };

  if (isLoggedIn) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="bg-blue-100 p-6 rounded-md shadow-md max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Login</h2>
      {error && <p className="text-red-600 mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleChange}
          className="my-2 p-2 border border-gray-300 rounded-md w-full"
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleChange}
          className="my-2 p-2 border border-gray-300 rounded-md w-full"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 w-full">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
