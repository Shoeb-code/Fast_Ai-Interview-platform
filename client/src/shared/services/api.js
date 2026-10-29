import axios from "axios";

// Normalize baseURL so it always points to the API prefix
const rawUrl = import.meta.env.VITE_API_URL || "http://localhost:3000/api";
const baseURL = rawUrl.endsWith("/api")
  ? rawUrl
  : `${rawUrl.replace(/\/+$/, "")}/api`;

const api = axios.create({
  baseURL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
