import {useMutation} from "@tanstack/react-query";
import videoService from "../service/videoService.js";

export function useUploadVideo(setUploadId) {
    const {isPending: isUploading, mutate: uploadVideo} = useMutation({
        mutationFn: videoService.uploadVideo,
        onSuccess: (response) => {
            const id = response.data;
            setUploadId(id);
        },
        onError: (error) => {
            console.error('Upload failed:', error);
        },
    })

    return {isUploading, uploadVideo};
}