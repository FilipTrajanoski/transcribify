import React from 'react';
import Input from "./Input.jsx";
import Button from "./Button.jsx";
import {FormContainer} from "./FormContainer.js";
import {useLogin} from "./useLogin.js";
import {useForm} from "react-hook-form";
import FormRow from "./FormRow.jsx";

function LoginForm(props) {
    const {login, isPending} = useLogin();
    const {register, formState: {errors}, handleSubmit, reset} = useForm();

    function onSubmit({email, password}) {
        if (!email || !password) return;

        login({email, password}, {
            onSettled: () => reset()
        })
    }

    return (
        <FormContainer>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormRow label={"Email"}
                         error={errors?.email?.message}>
                    <Input id={"email"}
                           type={"email"}
                           name={"email"}
                           disabled={isPending}
                           {...register("email", {
                               required: "Email is required",
                               pattern: {
                                   value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                   message: "Please enter a valid email"
                               }
                           })}/>
                </FormRow>

                <FormRow label={"Password"}
                         error={errors?.password?.message}>
                    <Input id={"password"}
                           type={"password"}
                           name={"password"}
                           disabled={isPending}
                           {...register("password", {
                               required: "Password is required"
                           })}/>
                </FormRow>

                <FormRow>
                    <Button disabled={isPending}>{isPending ? 'Submitting' : 'Login'}</Button>
                </FormRow>
            </form>
        </FormContainer>
    );
}

export default LoginForm;