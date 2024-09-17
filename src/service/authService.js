import axios from "../custom-axios/axios.js";

const authService = {
    login: async (email, password) => {
        return axios.post("/auth/login", {
            "email": email,
            "password": password
        })
    },
    signup: async (formData) => {
        return axios.post("/auth/signup", formData, {
            headers: {
                "Content-type": "multipart/form-data"
            }
        })
    }
}

export default authService;