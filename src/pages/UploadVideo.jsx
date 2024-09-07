import React, {useState} from 'react';
import Heading from "../ui/Heading.jsx";
import UploadForm from "../ui/UploadForm.jsx";
import FormLayout from "../ui/FormLayout.jsx";
import VideoInfo from "../ui/VideoInfo.jsx";
import VideoResult from "../ui/VideoResult.jsx";
import styled from "styled-components";

const VideoLayout = styled.div`
    display: flex;
    justify-content: space-evenly;
    gap: 3rem;
`

function UploadVideo(props) {
    const [uploadId, setUploadId] = useState(null);
    const [processing, setProcessing] = useState(false)

    return (
        <FormLayout>
            <Heading>Choose your video for transcription</Heading>
            <VideoLayout>
                <UploadForm uploadId={uploadId}
                            setUploadId={setUploadId}
                            setProcessing={setProcessing}/>
                {processing && <VideoResult uploadId={uploadId}/>}
            </VideoLayout>
            <VideoInfo/>
        </FormLayout>
    );
}

export default UploadVideo;