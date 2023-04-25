import axios from 'axios';
import { config } from '../../config/index';

const request = axios.create({
  baseURL: config.API_URL,
  params: {
    '_f': 'json',
    '_l':'uz'
  },
  headers: {
    common: {
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
    },
  },

});
request.interceptors.request.use((config) => {
  return config;
}, (error) => {
  return Promise.reject(error);
});

request.interceptors.response.use((response) => {
  return response;
}, (error) => {
  return Promise.reject(error);
});

export { request };
