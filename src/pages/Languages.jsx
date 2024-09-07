import React from 'react';
import LanguageList from "../ui/LanguageList.jsx";
import Heading from "../ui/Heading.jsx";

function Languages(props) {
    return (
        <div>
            <Heading>Available Languages</Heading>
            <LanguageList/>
        </div>
    );
}

export default Languages;