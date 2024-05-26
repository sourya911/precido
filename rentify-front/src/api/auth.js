import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/auth/register`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/auth/login`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
