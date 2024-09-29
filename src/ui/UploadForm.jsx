import React, {useEffect, useState} from 'react';
import Input from "./Input.jsx";
import {FormContainer, Label} from "./FormContainer.js";
import Button from "./Button.jsx";
import {useUploadVideo} from "./useUploadVideo.js";
import FormRow from "./FormRow.jsx";

function UploadForm({uploadId, setUploadId, setProcessing, chosenLanguage}) {
    const [videoFile, setVideoFile] = useState("")
    const [videoUrl, setVideoUrl] = useState("")

    const {isUploading, uploadVideo} = useUploadVideo(setUploadId);
    // useEffect(function () {
    //     if (uploadId) console.log('Upload ID:', uploadId);
    // }, [uploadId])

    function handleSubmit(e) {
        e.preventDefault();

        if (!videoFile && !videoUrl) return;

        setUploadId(null);

        const formData = new FormData();

        const config = {
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
        }

        if (videoFile) formData.append("data_file", videoFile);
        else {
            formData.append("url", videoUrl);
            config["fetch_data"] = {"url": videoUrl}
        }


        formData.append("config", JSON.stringify(config));
        uploadVideo(formData)
        setProcessing(true);
        setVideoFile("")
        setVideoUrl("");
    }

    return (
        <FormContainer>
            <form onSubmit={handleSubmit}>
                <FormRow label={"Pick video from your device"}>
                    <Input id={"file"}
                           type={"file"}
                           onChange={(e) => setVideoFile(e.target.files[0])}
                           disabled={isUploading}/>
                </FormRow>
                <FormRow label={"Paste video URL"}>
                    <Input id={"url"}
                           type={"url"}
                           onChange={(e) => setVideoUrl(e.target.value)}
                           disabled={isUploading}/>
                </FormRow>

                <FormRow>
                    <Button disabled={isUploading}>Transcript</Button>
                </FormRow>
            </form>
        </FormContainer>
    );
}

export default UploadForm;