import React from 'react';
import styled from "styled-components";

const StyledLanguageItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    margin: 8px 0;
    background-color: var(--color-silver-100);
    border-radius: 5px;
    box-shadow: var(--shadow-sm);
    transition: background-color 0.3s ease;
    &:hover{
        background-color: var(--color-brand-500);
        cursor: pointer;
    }
`

function LanguageItem({language}) {
    return (
        <StyledLanguageItem>
            {language.description}
        </StyledLanguageItem>
    );
}

export default LanguageItem;