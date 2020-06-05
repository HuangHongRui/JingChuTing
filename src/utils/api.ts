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
  get: (url, params) => {
    return observe({ method: "GET", url, params });
  },

  post: (url, params) => {
    return observe({ method: "POST", url, params });
  },
};

export function apiLogin(type: string, code: string): AxiosPromise {
  return Api.get(`/login/${type}`, { code });
}

export function apiIsLogin(): AxiosPromise {
  return Api.get(`/islogin`);
}

export function apiLogout(): AxiosPromise {
  return Api.get(`/logout`);
}

export function apiSearch(value: string): AxiosPromise {
  return Api.get(`/search`, { value });
}

export function apiArticle(value?: string): AxiosPromise {
  return Api.get(`/article`, { value });
}

export function apiStudySubmit(title: string, content: string): AxiosPromise {
  return Api.post(`/study`, { title, content });
}

type Param = {
  title?: string;
  value?: string;
  content?: string;
  code?: string;
};

type PARAMS = {
  method: "GET" | "POST";
  url: string;
  params?: Param;
};

interface METHODS {
  get: {
    (url: string, params?: Param): AxiosPromise;
  };
  post: {
    (url: string, params: Param): AxiosPromise;
  };
}
