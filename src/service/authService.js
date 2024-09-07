import axios from "../custom-axios/axios.js";

const authService = {
    login: async (email, password) => {
        return axios.post("/auth/login", {
            "email": email,
            "password": password
        })
    },
    signup: async (firstName, lastName, email, image, password, role) => {
        return axios.post("/auth/signup", {
            "firstName": firstName,
            "lastName": lastName,
            "email": email,
            "image": image,
            "password": password,
            "role": role
        })
    }
}

export default authService;