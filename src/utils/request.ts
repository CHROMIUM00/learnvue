import axios from "axios";

const httpInstance = axios.create({
    baseURL: "https://api.chromium00.com",
    timeout: 5000,
})


httpInstance.interceptors.request.use(
    function (config) {
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
)

httpInstance.interceptors.response.use(
    resp => {
        return resp;
    },
    error => {
        return Promise.reject(error);
    }
)


export default httpInstance;
