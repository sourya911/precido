import React, { useState } from 'react';
import { registerUser } from '../api/auth';
import { Navigate } from 'react-router-dom'; 

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const [reg,setReg]=useState(false)
  const [error, setError] = useState('');

  const { firstName, lastName, email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form validation
    if (!firstName || !lastName || !email || !password) {
      setError('All fields are required');
      return;
    }

    try {
      const response = await registerUser(formData);
      console.log(response.data); 
      setReg(true)
      
    } catch (error) {
      console.error('Registration error:', error);
      setError('Registration failed. Please try again.');
    }

    if (reg) {
        return <Navigate to="/login" />;
      }
  };

  return (
    <div className="bg-green-100 p-6 rounded-md shadow-md max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Register</h2>
      {error && <p className="text-red-600 mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          value={firstName}
          onChange={handleChange}
          className="my-2 p-2 border border-gray-300 rounded-md w-full"
        />
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={lastName}
          onChange={handleChange}
          className="my-2 p-2 border border-gray-300 rounded-md w-full"
        />
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
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md mt-4 w-full">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
