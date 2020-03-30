import axios from "axios";

const api = axios.create({
    baseURL: "http:192.168.0.77:3333"
});

export default api;