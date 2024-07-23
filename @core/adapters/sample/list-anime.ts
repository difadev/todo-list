import { api } from "../apiAdapter";

export const fetchListAnime = async (endpoint: string) => {
  const response = await api.get(endpoint);
  return response.data;
  
};