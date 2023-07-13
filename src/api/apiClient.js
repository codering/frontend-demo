import axios from "axios";

export const BASE_URL = "https://your-service-api.com";

export const api = axios.create({
  baseURL: BASE_URL,
});
