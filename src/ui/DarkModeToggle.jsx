import React from 'react';
import {useDarkMode} from "../context/DarkModeContext.jsx";
import Button from "./Button.jsx";

function DarkModeToggle(props) {
    const {isDarkMode, toggleDarkMode} = useDarkMode();

    return (
        <Button onClick={toggleDarkMode}>
            {isDarkMode ? 'Light' : 'Dark'}
        </Button>
    );
}

export default DarkModeToggle;