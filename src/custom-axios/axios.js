import axios from "axios"
import toast from "react-hot-toast";

const instance = axios.create({
    baseURL: "http://localhost:8080/api/v1",
    withCredentials: true,
})

// Add a request interceptor to include the token in every request
instance.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    response => response,
    error => {
        if (error.response.status === 401) {
            // Token expired or invalid
            localStorage.removeItem("user");
            toast("Session expired. Please log in again.", {
                icon: '😕',
                duration: 3000
            });
        }
        return Promise.reject(error);
    }
)

export default instance;