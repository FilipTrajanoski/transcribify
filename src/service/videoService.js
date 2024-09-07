import axios from "../custom-axios/axios.js";

const videoService = {
    uploadVideo: async (data) => {
        return axios.post('/video/upload', data, {
            headers: {
                'Content-type': 'multipart/form-data'
            }
        })
    },
    getVideoJob: async (id) => {
        return axios.get(`/video/job/${id}`);
    }
}

export default videoService;