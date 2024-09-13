import React from 'react';
import {Label} from "./FormContainer.js";
import styled from "styled-components";

const StyledFormRow = styled.div`
    margin-bottom: 1rem;
    
    &:has(button){
        display: flex;
        justify-content: end;
        margin-bottom: 0;
    }
`

const Error = styled.span`
    font-size: 1.4rem;
    color: var(--color-red-700);
`;

function FormRow({children, label, error}) {
    return (
        <StyledFormRow>
            {label && <Label htmlFor={children.props.id}>{label}</Label>}
            {children}
            {error && <Error>{error}</Error>}
        </StyledFormRow>
    );
}

export default FormRow;