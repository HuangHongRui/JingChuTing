import axios from "axios";

axios.defaults.baseURL = "https://localhost:5000/api";
axios.defaults.timeout = 5000;

const observe = async (params: API_TYPE.PARAMS) => {
  enum Status {
    success = 1,
    Error
  }
  try {
    const { data: res } = await axios(params);
    if (res.status === Status.success) return res;
    throw Error(res.status);
  } catch (err) {
    switch (err.message) {
      case Status.Error:
        return "错误码 0";
      default:
        return "错误码 XXX";
    }
  }
};

const Api: API_TYPE.METHODS = {
  get: (url: string, params?: object, config?: {}) => {
    return observe({ method: "GET", url, params, ...config });
  },

  post: (api: string, arg?: object) => {
    return axios.post(api, arg);
  }
};

export function apiSearch(content: string) {
  return Api.get(`/search`, { value: content });
}

export function apiArticle(content?: string) {
  return Api.get(`/article`, { value: content });
}

namespace API_TYPE {
  export type PARAMS = {
    method: "GET" | "POST";
    url: string;
    params?: object;
    config?: {};
  };

  export interface METHODS {
    get: Function;
    post: Function;
  }
}
