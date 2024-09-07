import styled from "styled-components";

const Input = styled.input`
    width: 100%;
    padding: 0.75rem;
    margin-bottom: 1rem;
    border: 1px solid var(--color-grey-300);
    border-radius: var(--border-radius-sm);
    color: var(--color-grey-800);

    &:focus {
        border-color: var(--color-brand-500);
        outline: none;
    }
`;

export default Input;