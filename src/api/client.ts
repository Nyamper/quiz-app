import axios from 'axios';

// import {baseURL} from '../constants'

const baseURL = 'http://localhost/api';

const client = axios.create({
  baseURL: baseURL,
});

client.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default client;
// !!!!!
// axios.interceptors.request.use(
//   (config) => {
//     config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// const authAxios = axios.create({
//   baseURL: baseURL,
//   headers: {
//     Authorization: `Bearer ${localStorage.getItem('token')}`,
//   },
// });
