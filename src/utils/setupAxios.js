const axios = require("axios");
exports.setupAxios = (store) => {
  axios.interceptors.request.use((config) => {
    const { user } = store.getState();
    let accessToken = user.token;
    config.baseURL = "https://stage.api.sloovi.com";
    config.headers.Authorization = accessToken ? `Bearer ${accessToken}` : "";
    return config;
  });
};
