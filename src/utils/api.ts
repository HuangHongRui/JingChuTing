import axios from "axios";

function request(mode: "GET" | "POST", api: string, arg?: object) {
  axios({
    baseURL: "https://127.0.0.1/api",
    timeout: 5000,
    method: mode,
    url: api,
    data: arg
  })
    .then(res => {
      return res;
    })
    .catch(err => {
      switch (err.status) {
        case 0:
          break;
        default:
      }
    });
}

function get(api: string, arg?: object) {
  return request("GET", api, arg);
}

function post(api: string, arg?: object) {
  return request("POST", api, arg);
}

export function apiSearch(content: string) {
  return get(`/search?value=${content}`);
}
