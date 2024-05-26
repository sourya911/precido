import axios from 'axios';

const BASE_URL = 'http://localhost:5000'; 

export const getAllProperties = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/properties`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getSellerProperties = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/properties/seller`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getAvailableProperties = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/properties/available`)
    ;
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const createProperty = async (propertyData) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/properties`, propertyData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
