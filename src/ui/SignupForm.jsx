import React, {useState} from 'react';
import Input from "./Input.jsx";
import Button from "./Button.jsx";
import {FormContainer, Label} from "./FormContainer.js";
import authService from "../service/authService.js";
import {useNavigate} from "react-router-dom";

function SignupForm(props) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [image, setImage] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        if (!firstName || !lastName || !email || !password) return;
        console.log(firstName, lastName, email, password);
        authService.signup(firstName, lastName, email, image, password, "USER")
            .then( () => navigate("/"));
    }

    return (
        <FormContainer>
            <form onSubmit={handleSubmit}>
                <Label htmlFor={"firstName"}>First Name</Label>
                <Input id={"firstName"}
                       type={"text"}
                       name={"firstName"}
                       value={firstName}
                       onChange={(e) => setFirstName(e.target.value)}
                       required={true}/>

                <Label htmlFor={"lastName"}>Last Name</Label>
                <Input id={"lastName"}
                       type={"text"}
                       name={"lastName"}
                       value={lastName}
                       onChange={(e) => setLastName(e.target.value)}
                       required={true}/>

                <Label htmlFor={"image"}>Image</Label>
                <Input id={"image"}
                       type={"file"}
                       name={"image"}
                       value={image}
                       onChange={(e) => setImage(e.target.value)}/>

                <Label htmlFor={"email"}>Email</Label>
                <Input id={"email"}
                       type={"email"}
                       name={"email"}
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                       required={true}/>

                <Label htmlFor={"password"}>Password</Label>
                <Input id={"password"}
                       type={"password"}
                       name={"password"}
                       value={password}
                       onChange={(e) => setPassword(e.target.value)}
                       required={true}/>

                <Label htmlFor={"passwordConfirm"}>Password Confirm</Label>
                <Input id={"passwordConfirm"}
                       type={"password"}
                       name={"passwordConfirm"}
                       value={passwordConfirm}
                       onChange={(e) => setPasswordConfirm(e.target.value)}
                       required={true}/>
                <Button>Sign up</Button>
            </form>
        </FormContainer>
    );
}

export default SignupForm;