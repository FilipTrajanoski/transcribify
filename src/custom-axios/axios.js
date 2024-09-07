import axios from "axios"

export const getAuthToken = () => {
    return window.localStorage.getItem('auth_token');
};

export const setAuthHeader = (token) => {
    if (token !== null) {
        window.localStorage.setItem("auth_token", token);
    } else {
        window.localStorage.removeItem("auth_token");
    }
};

const instance = axios.create({
    baseURL: "http://localhost:8080/api/v1"
})

export default instance;