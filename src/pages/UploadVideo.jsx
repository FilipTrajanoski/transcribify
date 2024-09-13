import React, {useState} from 'react';
import Heading from "../ui/Heading.jsx";
import UploadForm from "../ui/UploadForm.jsx";
import FormLayout from "../ui/FormLayout.jsx";
import VideoInfo from "../ui/VideoInfo.jsx";
import VideoResult from "../ui/VideoResult.jsx";
import styled from "styled-components";
import {useChosenLanguage} from "../context/LanguageContext.jsx";
import {NavLink} from "react-router-dom";

const VideoLayout = styled.div`
    display: flex;
    justify-content: space-evenly;
    gap: 3rem;
`

function UploadVideo(props) {
    const [uploadId, setUploadId] = useState(null);
    const [processing, setProcessing] = useState(false);

    const {chosenLanguage} = useChosenLanguage();

    return (
        <FormLayout>
            <Heading>Choose your video for transcription</Heading>
            {chosenLanguage === "auto" ?
                <Heading as={"h4"}>For better performance, please choose the language of your video from
                    the <NavLink to={"/languages"}
                                 style={{color: "var(--color-brand-600)"}}>list</NavLink></Heading> : null}
            <VideoLayout>
                <UploadForm uploadId={uploadId}
                            setUploadId={setUploadId}
                            setProcessing={setProcessing}
                            chosenLanguage={chosenLanguage}/>
                {processing && <VideoResult uploadId={uploadId}/>}
            </VideoLayout>
            <VideoInfo/>
        </FormLayout>
    );
}

export default UploadVideo;