import React from 'react';
import Heading from "../ui/Heading.jsx";
import LoginForm from "../ui/LoginForm.jsx";
import FormLayout from "../ui/FormLayout.jsx";

function Login(props) {
    return (
        <FormLayout>
            <Heading as={"h2"}>Log in to your account</Heading>
            <LoginForm/>
        </FormLayout>
    );
}

export default Login;