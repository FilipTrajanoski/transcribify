import axios from "../custom-axios/axios.js";

const imageService = {
    getImage: async (filename) => {
        const response = await axios.get(`/image/${filename}`, {
            responseType: 'blob',
        });
        return response.data;
    }
}

export default imageService;