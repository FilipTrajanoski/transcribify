import React from 'react';
import {useLanguages} from "./useLanguages.js";
import LanguageItem from "./LanguageItem.jsx";
import Spinner from "./Spinner.jsx";
import styled from "styled-components";
import Heading from "./Heading.jsx";

const StyledLanguageList = styled.ul`
    max-width: 120rem;
    margin: 5rem auto;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 3rem;
`

function LanguageList(props) {
    const {isLoading, languages} = useLanguages();

    if (isLoading) return <Spinner/>

    return (
        <>
            <Heading as={"h4"} style={{margin: "3rem"}}>Pick the language of your video</Heading>
            <StyledLanguageList>
                {languages.map(language => <LanguageItem key={language.code}
                                                         language={language}/>)}
            </StyledLanguageList>
        </>
    );
}

export default LanguageList;