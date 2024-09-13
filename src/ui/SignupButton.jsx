import React from 'react';
import Button from "./Button.jsx";
import {useNavigate} from "react-router-dom";

function SignupButton(props) {
    const navigate = useNavigate();

    return (
        <Button variation={"secondary"} onClick={() => navigate("/signup")}>Sign up</Button>
    );
}

export default SignupButton;