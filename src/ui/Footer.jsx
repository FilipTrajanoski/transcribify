import React from 'react';
import styled from "styled-components";

const StyledFooter = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    background-color: var(--color-grey-0);
`

function Footer(props) {
    return (
        <StyledFooter>
            &copy; Developed by Filip Trajanoski {new Date().getFullYear()}
        </StyledFooter>
    );
}

export default Footer;