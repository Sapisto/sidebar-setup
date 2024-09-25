import axios from "axios";
// import { logOut } from "./authUtils";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 50000,
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const requestConfig = error.config;

    // Handle exempted requests
    if (requestConfig.headers.ExemptedRequest === "true") {
      return;
    }

    //Handle 401 unauthorized errors

    if (error.response && error.response.status === 401) {
    //   logOut();
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
      return Promise.reject(error);
    }

    // Handle timeout errors
    if (error.code === "ECONNABORTED") {
      return Promise.reject(
        new Error("Request timed out. Please try again later.")
      );
    }

    return Promise.reject(error);
  }
);

export default api;
