import React from 'react';
import User from "./User.jsx";
import LoginButton from "./LoginButton.jsx";
import SignupButton from "./SignupButton.jsx";
import styled from "styled-components";

const StyledUserInfo = styled.div`
    display: flex;
    gap: 0.4rem;
    margin-left: auto;
    align-items: center;
`

function UserInfo(props) {
    const isLoggedIn = false;

    return (
        <StyledUserInfo>
            {isLoggedIn ? <User/>
                : <>
                    <LoginButton/> <SignupButton/>
                </>}
        </StyledUserInfo>
    );
}

export default UserInfo;