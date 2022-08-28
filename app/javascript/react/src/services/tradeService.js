import axios from "axios";

const baseUrl = "http://localhost:3000/trades"

const getTrades = async () => {
  const { data } = await axios.get(`${baseUrl}/all`);
  return data
};

const createTrade = async (newTrade) => {
  const response = await axios.post(`${baseUrl}`, {trade: newTrade})
  return response.data
};

const todoService = {
  getTrades,
  createTrade,
};

export default todoService
