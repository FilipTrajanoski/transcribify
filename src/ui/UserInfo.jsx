import React from 'react';
import User from "./User.jsx";
import LoginButton from "./LoginButton.jsx";
import SignupButton from "./SignupButton.jsx";
import styled from "styled-components";
import {useQuery} from "@tanstack/react-query";
import LogoutButton from "./LogoutButton.jsx";

const StyledUserInfo = styled.div`
    display: flex;
    gap: 0.4rem;
    margin-left: auto;
    align-items: center;
`

function UserInfo(props) {
    const {data: user} = useQuery({
        queryKey: ["user"],
        queryFn: () => {
            const userData = localStorage.getItem("user");
            return userData ? JSON.parse(userData) : null;
        },
        initialData: null
    });

    return (
        <StyledUserInfo>
            {user ? <>
                    <User user={user}/>
                    <LogoutButton />
                </>
                : <>
                    <LoginButton/> <SignupButton/>
                </>}
        </StyledUserInfo>
    );
}

export default UserInfo;