import React from 'react';
import Header from "./Header.jsx";
import {Outlet} from "react-router-dom";
import styled from "styled-components";
import Footer from "./Footer.jsx";

const StyledAppLayout = styled.div`
    display: grid;
    grid-template-rows: auto 1fr auto;
    height: 100vh;
`

const Main = styled.main`
    background-color: var(--color-grey-100);
    padding: 4rem 4.8rem 6.4rem;
    //overflow: scroll;
`

const Container = styled.div`
    max-width: 120rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
`

function AppLayout(props) {
    return (
        <StyledAppLayout>
            <Header/>
            <Main>
                <Container>
                    <Outlet/>
                </Container>
            </Main>
            <Footer/>
        </StyledAppLayout>
    );
}

export default AppLayout;