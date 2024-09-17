import React from 'react';
import {useImage} from "./useImage.js";
import styled from "styled-components";

const StyledUser = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`

const StyledImg = styled.img`
    border-radius: 40px;
    box-shadow: var(--shadow-md);
    width: 40px;
    border: 1px solid black;
`

function User({user}) {
    const {imageUrl} = useImage(user.image);

    return (
        <StyledUser>
            <StyledImg src={imageUrl}
                 alt={"..."}/>
            <span>{user.firstName} {user.lastName}</span>
        </StyledUser>
    );
}

export default User;