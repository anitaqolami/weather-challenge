import Axios from "axios";

class Api {
  access_token: string | null = null;
  axios = Axios;
  _axios;
  subscribers = [];
  isRefreshTokenInIssued = false;
  constructor() {
    this._axios = this.axios.create();
    // this._axios.defaults.headers["Authorization"] = ``;     set token in header
    this._axios.defaults.headers.common.Accept = "application/json";
    this._axios.defaults.headers.common["Content-Type"] = "application/json";
  }

  async get(url: string, params: Record<string, any> | {} = {}, headers = {}) {
    return this._axios
      .get(url, {
        params,
        headers: {
          ...headers,
        },
      })
      .catch((err) => {
        throw err.response;
      });
  }

  async post(
    url: string,
    data = {},
    params: { [key: string]: any } | {} = {},
    token = true,
    headers = {}
  ) {
    return this._axios
      .post(url, data, {
        params,
        headers: {
          ...headers,
        },
      })
      .catch((err) => {
        throw err.response;
      });
  }

  async put(
    url: string,
    data: Record<string, any> | {} = {},
    params: Record<string, any> | null = null,
    headers = {}
  ) {
    return this._axios
      .put(url, data, {
        params,
        headers: {
          ...headers,
        },
      })
      .catch((err) => {
        throw err.response;
      });
  }

  async patch(
    url: string,
    data: Record<string, any> | {} = {},
    params: Record<string, any> | {} = {},
    token = true,
    headers = {}
  ) {
    return this._axios
      .patch(url, data, {
        params,
        headers: {
          ...headers,
        },
      })
      .catch((err) => {
        throw err.response;
      });
  }

  async delete(
    url: string,
    params: Record<string, any> | {} = {},
    headers = {}
  ) {
    return this._axios
      .delete(url, {
        params,
        headers: {
          ...headers,
        },
      })
      .catch((err) => {
        throw err.response;
      });
  }

  multipleRequest = async (requests = []) => {
    return this.axios
      .all(requests)
      .then(
        this.axios.spread((...response) => {
          return response;
        })
      )
      .catch((errors) => {
        console.log(errors, "errorsMultireq");
      });
  };
}

const api = new Api();
export default api;
