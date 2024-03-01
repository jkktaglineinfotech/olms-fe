// axiosClient.js
import axios from "axios";
import { toast } from "react-toastify";

const client = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

// Request interceptor
client.interceptors.request.use(
  (config) => {
    // You can modify the request config here
    const authToken = localStorage.getItem("authToken"); // Retrieve your authentication token
    if (authToken) {
      config.headers["Authorization"] = `Bearer ${authToken}`;
    }

    return config;
  },
  (error) => {
    // Handle request errors here
    return Promise.reject(error);
  }
);

// Response interceptor
client.interceptors.response.use(
  (response) => {
    // You can modify the response data here
    return response;
  },
  (error) => {
    // Handle response errors here
    if (error.response) {
      // The request was made, but the server responded with a status code outside the range of 2xx
      const errorMessage =
        error?.response?.data?.message || "An error occurred";
      toast.error(errorMessage);
    } else if (error.request) {
      // The request was made, but no response was received
      console.error("Request error:", error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("Error:", error.message);
    }
    return Promise.reject(error);
  }
);

export default client;
