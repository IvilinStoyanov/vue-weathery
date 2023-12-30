import axios, { AxiosResponse, AxiosError } from "axios";
import store from "../store/index";

// Axios request interceptor
axios.interceptors.request.use(
  (config) => {
    // Start loader before making the request
    store.dispatch("startLoading");
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Axios response interceptor
axios.interceptors.response.use(
  (response: AxiosResponse) => {
    // Stop loader after receiving the response
    store.dispatch("stopLoading");
    return response;
  },
  (error: AxiosError) => {
    // Stop loader on response error
    store.dispatch("stopLoading");
    return Promise.reject(error);
  }
);
