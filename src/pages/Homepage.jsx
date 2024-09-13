import React from 'react';
import styled, {keyframes} from 'styled-components';

// Define the animation separately
const slideUp = keyframes`
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const Slogan = styled.h1`
    font-size: 7rem;
    font-weight: bold;
    overflow: hidden;
    display: inline-block;
    align-self: center;

    & span {
        display: inline-block;
        opacity: 0;
        transform: translateY(100%);
        animation: ${slideUp} 0.5s forwards;
    }
`;

function Homepage() {
    const firstSentence = ["Let", "Your", "Videos", "Speak."]
    const secondSentence = ["We", "Will", "Write."];

    return (
        <Slogan>
            <div>
                {firstSentence.map((word, index) => (
                    <span key={index}
                          style={{animationDelay: `${0.1 * index}s`}}>
                    {word}&nbsp;
                </span>
                ))}
            </div>
            <div>
                {secondSentence.map((word, index) => (
                    <span key={index}
                          style={{animationDelay: `${0.1 * (firstSentence.length + index)}s`}}>
                    {word}&nbsp;
                </span>
                ))}
            </div>
        </Slogan>
    );
}

export default Homepage;
