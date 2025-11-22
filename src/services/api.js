import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.DEV
    ? "/api/chatSystem"
    : import.meta.env.VITE_API_BASE_URL,
});

export default api;
