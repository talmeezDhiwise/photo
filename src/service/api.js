import Axios from "axios";
const defaultAxios = Axios.create({
  headers: {},
});
defaultAxios.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    return Promise.reject(err);
  }
);
export const getPosts = ({ data = {}, headers = {}, params = {} } = {}) => {
  return defaultAxios({
    url: "https://jsonplaceholder.typicode.com/posts/:id",
    method: "get",
    params,
    headers,
    data,
  });
};
export const getPosts1 = ({ data = {}, headers = {}, params = {} } = {}) => {
  return defaultAxios({
    url: "https://jsonplaceholder.typicode.com/posts",
    method: "get",
    params,
    headers,
    data,
  });
};
export const getPosts2 = ({ data = {}, headers = {}, params = {} } = {}) => {
  return defaultAxios({
    url: "https://jsonplaceholder.typicode.com/posts/1",
    method: "get",
    params: { test: "test", ...params },
    headers,
    data,
  });
};
export const getTodos = ({ data = {}, headers = {}, params = {} } = {}) => {
  return defaultAxios({
    url: "https://jsonplaceholder.typicode.com/todos/1",
    method: "get",
    params,
    headers,
    data,
  });
};
