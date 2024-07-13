// File: /mental_health_support/mobile/src/services/api.ts

import axios from 'axios';

const API_URL = 'http://localhost:5000'; // Replace with your server URL

export const getMentalHealthResources = async () => {
  try {
    const response = await axios.get(`${API_URL}/resources`);
    return response.data;
  } catch (error) {
    console.error('Error fetching mental health resources:', error);
    throw error;
  }
};

export const getSupportGroups = async () => {
  try {
    const response = await axios.get(`${API_URL}/support-groups`);
    return response.data;
  } catch (error) {
    console.error('Error fetching support groups:', error);
    throw error;
  }
};

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

export const registerUser = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/register`, { email, password });
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};
