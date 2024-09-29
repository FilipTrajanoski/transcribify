import React, {useEffect} from 'react';
import Spinner from "./Spinner.jsx";
import Heading from "./Heading.jsx";
import {useVideoResult} from "./useVideoResult.js";
import {VideoContainer} from "./VideoContainer.jsx";

function VideoResult({uploadId}) {
    const {isLoading, transcription} = useVideoResult(uploadId);

    // if (isLoading || !uploadId) return <Spinner/>

    const {results, summary} = transcription ? transcription.data : {};
    let accuracy = 0;

    // Helper function to render transcription text
    const renderTranscription = (results) => {
        let content = [];
        let currentSpeaker = null;

        results.forEach((el, index) => {
            const wordData = el.alternatives[0];
            const word = wordData.content;
            accuracy += wordData.confidence;
            const speaker = wordData.speaker;

            // Check for speaker change and add a separator if needed
            if (currentSpeaker !== speaker) {
                if (currentSpeaker !== null) {
                    content.push(<br key={`br-${index}`}/>);
                }
                currentSpeaker = speaker;
                content.push(<strong key={`speaker-${index}`}>Speaker {speaker}:</strong>, ' ');
            }

            // Add the word with proper spacing
            if (el.type === 'word') {
                content.push(word, ' ');
            } else if (el.type === 'punctuation') {
                content[content.length - 1] = word + ' '; // Replace the last space with the punctuation
            }
        });

        accuracy = (accuracy / results.length * 100).toFixed(2);

        return content;
    };

    // useEffect(function () {
    //     videoService.getVideoJob(uploadId).then(response => {
    //         console.log(response.data)
    //         setTranscription(response.data);
    //         setProcessing(false);
    //     });
    // }, [setProcessing, uploadId])

    return (
        <VideoContainer>
            {isLoading || !uploadId ? (
                <>
                    <Heading as={"h4"}>Processing video</Heading>
                    <Spinner/>
                </>
            ) : (
                <div>
                    <Heading as={"h3"}>Result</Heading>
                    <p>{renderTranscription(results)}</p>
                    <p style={{marginTop: "3rem"}}><strong>Accuracy of transcription: </strong> {accuracy}%</p>
                    <p style={{marginTop: "3rem"}}><strong>Summary of video:</strong> {summary.content}</p>
                </div>
            )}
        </VideoContainer>
    );
}

export default VideoResult;