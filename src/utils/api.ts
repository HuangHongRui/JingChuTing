import axios from "axios";

axios.defaults.baseURL = "https://localhost:5000/api";
axios.defaults.timeout = 5000;
// axios.defaults.withCredentials = true;

const Api: API = {
  get: (url: string, params?: object, config?: {}) => {
    return axios({
      url,
      params,
      method: "get",
      ...config
    });
  },

  post: (api: string, arg?: object) => {
    return axios.post(api, arg);
  }
};

export function apiSearch(content: string) {
  return Api.get(`/search`, { value: content });
}

export interface API {
  get: Function;
  post: Function;
}
