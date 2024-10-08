import styled from "styled-components";

const FormContainer = styled.div`
    //max-width: 400px;
    width: 25dvw;
    //margin: auto;
    padding: 2rem;
    background-color: var(--color-grey-0);
    border-radius: 8px;
    box-shadow: var(--shadow-md);
    border: 1px solid var(--color-grey-300);
    height: fit-content;
`;

const Label = styled.label`
    margin-bottom: 0.5rem;
    color: var(--color-grey-800);
`;

export {FormContainer, Label};