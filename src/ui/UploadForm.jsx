import React, {useEffect, useState} from 'react';
import Input from "./Input.jsx";
import {FormContainer, Label} from "./FormContainer.js";
import Button from "./Button.jsx";
import {useUploadVideo} from "./useUploadVideo.js";

function UploadForm({uploadId, setUploadId, setProcessing, chosenLanguage}) {
    const [videoFile, setVideoFile] = useState("")
    const [videoUrl, setVideoUrl] = useState("")

    const {isUploading, uploadVideo} = useUploadVideo(setUploadId);
    // useEffect(function () {
    //     if (uploadId) console.log('Upload ID:', uploadId);
    // }, [uploadId])

    function handleSubmit(e) {
        e.preventDefault();
        console.log(chosenLanguage);
        if (!videoFile && !videoUrl) return;

        setUploadId(null);

        const formData = new FormData();
        formData.append("data_file", videoFile);

        const config = JSON.stringify({
            "type": "transcription",
            "summarization_config": {
                "content_type": "auto",
                "summary_length": "brief",
                "summary_type": "paragraphs"
            },
            "transcription_config": {
                "language": chosenLanguage,
                "diarization": "speaker",
                "operating_point": "enhanced",
                "audio_filtering_config": {
                    "volume_threshold": 0
                }
            }
        })

        formData.append("config", config)
        uploadVideo(formData)
        setProcessing(true);
    }

    return (
        <FormContainer>
            <form onSubmit={handleSubmit}>
                <Label htmlFor={"file"}>Pick video from your device</Label>
                <Input id={"file"}
                       type={"file"}
                       onChange={(e) => setVideoFile(e.target.files[0])}
                       disabled={isUploading}/>

                <Label htmlFor={"url"}>Paste video URL</Label>
                <Input id={"url"}
                       type={"url"}
                       onChange={(e) => setVideoUrl(e.target.value)}
                       disabled={isUploading}/>
                <Button disabled={isUploading}>Transcript</Button>
            </form>
        </FormContainer>
    );
}

export default UploadForm;