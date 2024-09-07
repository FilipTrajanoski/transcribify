import {useQuery} from "@tanstack/react-query";
import videoService from "../service/videoService.js";

export function useVideoResult(id){
    const {isLoading, data: transcription} = useQuery({
        queryKey: ["transcription_result", id],
        queryFn: () => videoService.getVideoJob(id),
        refetchOnWindowFocus: false,
        enabled: !!id,
    })

    return {isLoading, transcription};
}