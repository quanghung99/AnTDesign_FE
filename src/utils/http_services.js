// @ts-nocheck
import axios from 'axios'

const qs = require("qs")

const axiosClient = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 36000,
    paramsSerializer: function (param)  {
        return qs.stringify(param, {
            encode: true
        })
    }
})
axiosClient.interceptors.request.use(function (config) {
    // Do something before request is sent

    const token = localStorage.getItem('access') || ''

    if (token) {
        config.headers.common['Authorization'] = token
    }

    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axiosClient.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });
export default axiosClient