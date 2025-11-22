import axios from "axios";

const api = axios.create({
  baseURL: "/api/chatSystem",
});

export default api;
