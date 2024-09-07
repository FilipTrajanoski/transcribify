import React from 'react';
import FormLayout from "../ui/FormLayout.jsx";
import Heading from "../ui/Heading.jsx";
import SignupForm from "../ui/SignupForm.jsx";

function Signup(props) {
    return (
        <FormLayout>
            <Heading as={"h2"}>Create account</Heading>
            <SignupForm/>
        </FormLayout>
    );
}

export default Signup;