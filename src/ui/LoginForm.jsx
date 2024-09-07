import React, {useState} from 'react';
import Input from "./Input.jsx";
import Button from "./Button.jsx";
import {FormContainer, Label} from "./FormContainer.js";
import {useLogin} from "./useLogin.js";
import Spinner from "./Spinner.jsx";

function LoginForm(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {login, isLoading} = useLogin();

    function handleSubmit(e) {
        e.preventDefault();

        if (!email || !password) return;

        login({email, password}, {
            onSettled: () => {
                setEmail("");
                setPassword("");
            }
        })
    }

    return (
        <FormContainer>
            <form onSubmit={handleSubmit}>
                <Label htmlFor={"email"}>Email</Label>
                <Input id={"email"}
                       type={"email"}
                       name={"email"}
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                       required={true}
                       disabled={isLoading}/>

                <Label htmlFor={"password"}>Password</Label>
                <Input id={"password"}
                       type={"password"}
                       name={"password"}
                       value={password}
                       onChange={(e) => setPassword(e.target.value)}
                       required={true}
                       disabled={isLoading}/>
                <Button>{isLoading ? 'Submitting' : 'Login'}</Button>
            </form>
        </FormContainer>
    );
}

export default LoginForm;