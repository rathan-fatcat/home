import axios from 'axios';

const RestAxiosService = (
  url: any,
  method: any = 'GET',
  body: any = null,
  headers: any = {},
  config: any = {}
) => {
  const extraConfig = typeof config === 'object' ? config : {};
  const options = {
    url,
    method: method,
    data: body,
    headers: headers,
  };
  if (options.data === null || method.toLowerCase() === 'get') {
    delete options.data;
  }
  return new Promise((resolve: any, reject: any) => {
    axios.interceptors.request.use((x: any) => {
      x.meta = x.meta || {};
      x.meta.requestStartedAt = new Date().getTime();
      return x;
    });

    axios.interceptors.response.use(
      (x: any) => {
        return x;
      },
      (x) => {
        throw x;
      }
    );
    return axios({ withCredentials: false, ...options, ...extraConfig })
      .then(function (res: any) {
        if (res.status >= 200 && res.status < 300) {
          resolve({ status: res.status, data: res.data });
        } else {
          reject({ status: res.status, data: res.data });
        }
      })
      .catch(function (e: any) {
        if (typeof e === 'object' && typeof e.response === 'object') {
          reject({ status: e.response.status, data: e.response.data });
        } else {
          reject({
            status: 532,
            data: 'Internet Connection Failure or Server is Down',
          });
        }
      });
  });
};

function HttpGet(url: any, headers: any = {}, config: any = {}) {
  return new Promise((resolve, reject) => {
    return RestAxiosService(url, 'GET', null, headers, config).then(
      (response: any) => {
        resolve(response.data);
      },
      (err: any) => {
        reject(err.data);
      }
    );
  });
}

function HttpPost(url: any, body: any, headers: any = {}, config: any = {}) {
  return new Promise((resolve, reject) => {
    return RestAxiosService(url, 'POST', body, headers, config).then(
      (response: any) => {
        resolve(response.data);
      },
      (err: any) => {
        reject(err.data);
      }
    );
  });
}

function HttpPut(url: any, body: any, headers: any = {}, config: any = {}) {
  return new Promise((resolve, reject) => {
    return RestAxiosService(url, 'PUT', body, headers, config).then(
      (response: any) => {
        resolve(response.data);
      },
      (err: any) => {
        reject(err.data);
      }
    );
  });
}

function HttpPatch(url: any, body: any, headers: any = {}, config: any = {}) {
  return new Promise((resolve, reject) => {
    return RestAxiosService(url, 'PUT', body, headers, config).then(
      (response: any) => {
        resolve(response.data);
      },
      (err: any) => {
        reject(err.data);
      }
    );
  });
}

function HttpDelete(url: any, headers: any = {}, config: any = {}) {
  return new Promise((resolve, reject) => {
    return RestAxiosService(url, 'DELETE', null, headers, config).then(
      (response: any) => {
        resolve(response.data);
      },
      (err: any) => {
        reject(err.data);
      }
    );
  });
}

const urls = {
  DRUPAL_BASE__API_URL: '',
  MICRO_SERVICES_API_URL: '',
};

const apiClient = {
  urls,
  get: HttpGet,
  post: HttpPost,
  put: HttpPut,
  patch: HttpPatch,
  delete: HttpDelete,
};

export default apiClient;
