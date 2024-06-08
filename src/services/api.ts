import axios from 'axios';

const API_URL = 'https://mock-api-endpoint.com/data'; // Replace with your actual API URL

export const fetchData = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
