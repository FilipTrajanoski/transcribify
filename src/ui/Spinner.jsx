import React from 'react';
import styled, { keyframes } from 'styled-components';

// Define keyframes for the spinner animation
const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

// Styled component for the spinner
const Spinner = styled.div`
  //display: inline-block;
  width: 6.8rem;
  height: 6.8rem;
  border: 0.4rem solid var(--color-grey-400);
  border-radius: 50%;
  border-top-color: var(--color-brand-500);
  animation: ${spin} 1s ease-in-out infinite;
  margin: 4.8rem auto;
`;

export default Spinner;
