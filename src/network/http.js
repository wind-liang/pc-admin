import server from "./server";
const request = function (url, params, config, method) {
  return new Promise((resolve, reject) => {
    server[method](url, params, Object.assign({}, config))
      .then(
        (response) => {
          resolve(response.data);
        },
        (err) => {
          if (err.Cancel) {
            console.log(err);
          } else {
            reject(err);
          }
        }
      )
      .catch((err) => {
        reject(err);
      });
  });
};

export const post = (url, params, config) => {
  return request(url, params, config, "post");
};

export const get = (url, params, config) => {
  return request(url, { params }, config, "get");
};
