import {useQuery} from "@tanstack/react-query";
import imageService from "../service/imageService.js";

export function useImage(filename){
    const {isLoading, data: imageBlob} = useQuery({
        queryKey: ["image"],
        queryFn: () => imageService.getImage(filename),
        refetchOnWindowFocus: false,
        enabled: !!filename,
    })

    const imageUrl = imageBlob ? URL.createObjectURL(imageBlob) : null;

    return {isLoading, imageUrl};
}