import React from 'react';
import Button from "./Button.jsx";
import {useNavigate} from "react-router-dom";

function LoginButton(props) {
    const navigate = useNavigate();

    return (
        <Button onClick={() => navigate("/login")}>Login</Button>
    );
}

export default LoginButton;