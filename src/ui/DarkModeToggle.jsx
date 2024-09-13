import React from 'react';
import {useDarkMode} from "../context/DarkModeContext.jsx";
import ButtonIcon from "./ButtonIcon.js";
import {HiOutlineMoon, HiOutlineSun} from "react-icons/hi2";

function DarkModeToggle(props) {
    const {isDarkMode, toggleDarkMode} = useDarkMode();

    return (
        <ButtonIcon style={{marginLeft: "2rem", border: "1px solid var(--color-grey-300)"}} onClick={toggleDarkMode}>
            {isDarkMode ? <HiOutlineSun/> : <HiOutlineMoon/>}
        </ButtonIcon>
    );
}

export default DarkModeToggle;