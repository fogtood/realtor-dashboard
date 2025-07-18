import axios from "axios"

const API = axios.create({
    baseURL: 'http://localhost:8080/api/v1',
    withCredentials: true, // important to send/receive cookies
});

export default API;