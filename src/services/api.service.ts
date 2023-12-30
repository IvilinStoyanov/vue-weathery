import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const baseUrl = "https://api.weatherapi.com/v1/";
const apiKey = "c0e14ef47b5b41e4af155613202008";

interface ApiService {
  query<T>(resource: string, params?: AxiosRequestConfig): Promise<T>;
  get<T>(resource: string, params?: Record<string, any>): Promise<T>;
  post<T>(resource: string, params?: AxiosRequestConfig): Promise<T>;
  update<T>(
    resource: string,
    slug: string,
    params?: AxiosRequestConfig
  ): Promise<T>;
  put<T>(resource: string, params?: AxiosRequestConfig): Promise<T>;
  delete<T>(resource: string): Promise<T>;
}

const ApiService: ApiService = {
  async query<T>(resource: string, params?: AxiosRequestConfig): Promise<T> {
    try {
      const response: AxiosResponse<T> = await axios.get(resource, params);
      return response.data;
    } catch (error) {
      throw new Error(`[RWV] ApiService ${error}`);
    }
  },

  async get<T>(resource: string, params: Record<string, any>): Promise<T> {
    try {
      const queryParams = objectToQueryString(params);

      const response: AxiosResponse<T> = await axios.get(
        `${baseUrl}${resource}?key=${apiKey}&${queryParams}`
      );
      return response.data;
    } catch (error) {
      throw new Error(`[RWV] ApiService ${error}`);
    }
  },

  async post<T>(resource: string, params?: AxiosRequestConfig): Promise<T> {
    try {
      const response: AxiosResponse<T> = await axios.post(resource, params);
      return response.data;
    } catch (error) {
      throw new Error(`[RWV] ApiService ${error}`);
    }
  },

  async update<T>(
    resource: string,
    slug: string,
    params?: AxiosRequestConfig
  ): Promise<T> {
    try {
      const response: AxiosResponse<T> = await axios.put(
        `${resource}/${slug}`,
        params
      );
      return response.data;
    } catch (error) {
      throw new Error(`[RWV] ApiService ${error}`);
    }
  },

  async put<T>(resource: string, params?: AxiosRequestConfig): Promise<T> {
    try {
      const response: AxiosResponse<T> = await axios.put(resource, params);
      return response.data;
    } catch (error) {
      throw new Error(`[RWV] ApiService ${error}`);
    }
  },

  async delete<T>(resource: string): Promise<T> {
    try {
      const response: AxiosResponse<T> = await axios.delete(resource);
      return response.data;
    } catch (error) {
      throw new Error(`[RWV] ApiService ${error}`);
    }
  },
};

function objectToQueryString(params: Record<string, any>): string {
  const queryString = Object.keys(params)
    .map((key) => {
      const value = params[key];
      return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
    })
    .join("&");

  return queryString;
}

export default ApiService;
