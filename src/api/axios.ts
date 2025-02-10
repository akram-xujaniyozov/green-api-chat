import axios from "axios";
import { baseURL } from "../constants/url";

export const Api = axios.create({
  baseURL,
});

Api.interceptors.request.use(
  (config) => {
    config.headers["Content-Type"] = "application/json";
    return config;
  },
  (error) => Promise.reject(error)
);

Api.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
);
