import React from 'react';
import Logo from "./Logo.jsx";
import styled from "styled-components";
import HeaderNav from "./HeaderNav.jsx";
import UserInfo from "./UserInfo.jsx";
import DarkModeToggle from "./DarkModeToggle.jsx";

const StyledHeader = styled.header`
    background-color: var(--color-grey-0);
    display: flex;
    border-bottom: 1px solid var(--color-grey-200);
    padding: 2rem 4rem;
`

function Header(props) {
    return (
        <StyledHeader>
            <Logo/>
            <HeaderNav/>
            <UserInfo/>
            <DarkModeToggle/>
        </StyledHeader>
    );
}

export default Header;