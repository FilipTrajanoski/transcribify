import React from 'react';
import styled from "styled-components";
import {useChosenLanguage} from "../context/LanguageContext.jsx";
import {useNavigate} from "react-router-dom";

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

    &:hover {
        background-color: var(--color-brand-500);
        cursor: pointer;
    }
`

function LanguageItem({language}) {
    const {setChosenLanguage} = useChosenLanguage();
    const navigate = useNavigate();

    function handleClick(){
        setChosenLanguage(language.code);
        navigate("/upload-video")
    }

    return (
        <StyledLanguageItem onClick={handleClick}>
            {language.description}
        </StyledLanguageItem>
    );
}

export default LanguageItem;