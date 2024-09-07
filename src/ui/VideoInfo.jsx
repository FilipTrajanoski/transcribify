import React from 'react';
import styled from "styled-components";

const StyledVideoInfo = styled.div`
    //max-width: 50%;
    margin: auto;
    padding: 2rem;
    background-color: var(--color-grey-300);
    border: 4px solid var(--color-yellow-100);
    box-shadow: var(--shadow-md);
`

function VideoInfo(props) {
    return (
        <StyledVideoInfo>
            <p>Supported formats:</p>
            <p>aac, amr, flac, m4a, mp3, mp4, mpeg, ogg, wav</p>
        </StyledVideoInfo>
    );
}

export default VideoInfo;