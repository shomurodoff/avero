import axios from 'axios';
import {config} from '../../config';

const request = axios.create({
    baseURL: config.API_URL,
    params: {},
    headers: {
        common: {
            'Accept-Language': 'uz'
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

export {request};
