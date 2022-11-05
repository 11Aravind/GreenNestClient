import axios from "axios";

export const httpRequest = (data, url) => {
  return new Promise((resolve, reject) => {
    axios.post(window.$apiBaseUrl + url, data, {
      // headers: getAPI_Header()
    }).then(function (response) {
      resolve(response.data);
    }).catch(function (error) {
      reject(error);
    });
  });
};
