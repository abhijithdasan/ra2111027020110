import axios from 'axios';

const BASE_URL = 'http://localhost:9876'; 

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchNumbers = async (type) => {
  try {
    const response = await api.get(`/numbers/${type}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching numbers:', error);
    throw error;
  }
};
