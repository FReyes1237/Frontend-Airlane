import axios from 'axios';

axios.defaults.baseURL="https://localhost:44345/api";

const requestGenerico = {
    get : (url) => axios.get(url),
    post : (url, body) => axios.post(url, body) 
};

export default requestGenerico;