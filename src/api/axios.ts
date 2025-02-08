import axios from "axios";
import { baseURL } from "../constants/url";

export const Api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

Api.interceptors.response.use(function (response) {
  return response.data;
});
