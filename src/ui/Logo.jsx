import React from 'react';
import styled from "styled-components";
import {useNavigate} from "react-router-dom";

const StyledLogo = styled.img`
    cursor: pointer;
    height: 48px;
`

function Logo(props) {
    const navigate = useNavigate();

    return (
        <StyledLogo src={"/logo-transparent.png"}
                    alt={"logo"}
                    onClick={() => navigate("/")}/>
    );
}

export default Logo;