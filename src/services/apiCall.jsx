import axios from 'axios';

const baseUrl = 'http://localhost:1008'
const axiosInstance = axios.create({});

export const apiCall = (method, url, data, headers, params) => {
    return axiosInstance({
        method: method ? method : null,
        url: baseUrl + url,
        data: data ? data : null,
        headers: headers ? headers : null,
        params: params ? params : null,
    })
}