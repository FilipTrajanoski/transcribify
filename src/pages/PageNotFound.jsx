import styled from "styled-components";

import Heading from "../ui/Heading";
import Button from "../ui/Button.jsx";
import {useNavigate} from "react-router-dom";

const StyledPageNotFound = styled.main`
    height: 100vh;
    background-color: var(--color-grey-100);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4.8rem;
    gap: 4rem;
`;

function PageNotFound() {
    const navigate = useNavigate();

    return (
        <StyledPageNotFound>
                <Heading as="h1">
                    The page you are looking for could not be found 😢
                </Heading>
                <Button onClick={() => navigate(-1)} size="large">
                    &larr; Go back
                </Button>
        </StyledPageNotFound>
    );
}

export default PageNotFound;