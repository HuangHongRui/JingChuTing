import axios, { AxiosPromise } from "axios";

axios.defaults.baseURL = "http://localhost:5000/api";
axios.defaults.withCredentials = true;
axios.defaults.timeout = 5000;

const observe = async (params: PARAMS) => {
  enum Status {
    success = 1,
    Error,
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

const Api: METHODS = {
  get: (url, params, config) => {
    return observe({ method: "GET", url, params, ...config });
  },

  post: (url, params, config) => {
    return observe({ method: "POST", url, params, ...config });
  },
};

export function apiLogin(type: string, code: string) {
  return Api.get(`/login/${type}`, { code });
}

export function apiSearch(value: string) {
  return Api.get(`/search`, { value });
}

export function apiArticle(value?: string) {
  return Api.get(`/article`, { value });
}

export function apiStudySubmit(title: string, content: string) {
  return Api.post(`/study`, { title, content });
}

interface PARAMS {
  method: "GET" | "POST";
  url: string;
  params?: object;
  config?: {};
}

interface METHODS {
  get: {
    (url: string, params: object, config?: object): AxiosPromise;
  };
  post: {
    (url: string, params: object, config?: object): AxiosPromise;
  };
}
