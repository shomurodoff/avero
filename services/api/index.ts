import axios from 'axios';
import {config} from '../../config';
import {get} from "lodash"
import {loadState} from "../storage";

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
    const token = get(loadState('settings'), 'state.token', null);
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`
    }
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
