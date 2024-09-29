import React from 'react';
import Input from "./Input.jsx";
import Button from "./Button.jsx";
import {FormContainer} from "./FormContainer.js";
import {useForm} from "react-hook-form";
import FormRow from "./FormRow.jsx";
import {useSignup} from "./useSignup.js";

function SignupForm(props) {
    const {signup, isLoading: isPending} = useSignup();
    const {register, formState: {errors}, getValues, handleSubmit, reset} = useForm();

    function onSubmit({firstName, lastName, email, password, image}) {
        if (!firstName || !lastName || !email || !password) return;

        const role = "USER"
        const formData = new FormData();
        formData.append("firstName", firstName);
        formData.append("lastName", lastName);
        formData.append("email", email);
        formData.append("password", password)
        formData.append("role", role);

        if(image && image[0]){
            formData.append("image", image[0]);
        }

        signup(formData, {
            onSettled: () => reset()
        });
    }

    return (
        <FormContainer>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormRow label={"First Name"}
                         error={errors?.firstName?.message}>
                    <Input id={"firstName"}
                           type={"text"}
                           name={"firstName"}
                           disabled={isPending}
                           {...register("firstName", {
                               required: "First name is required"
                           })}/>
                </FormRow>

                <FormRow label={"Last Name"}
                         error={errors?.lastName?.message}>
                    <Input id={"lastName"}
                           type={"text"}
                           name={"lastName"}
                           disabled={isPending}
                           {...register("lastName", {
                               required: "Last name is required",
                           })}/>
                </FormRow>
                <FormRow label={"Email"}
                         error={errors?.email?.message}>
                    <Input id={"email"}
                           type={"email"}
                           name={"email"}
                           disabled={isPending}
                           {...register("email", {
                               required: "Please provide your email",
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
                               required: "Password is required",
                               minLength: {
                                   value: 10,
                                   message: "Password must be at least 10 characters long"
                               }
                           })}/>
                </FormRow>
                <FormRow label={"Password Confirm"}
                         error={errors?.passwordConfirm?.message}>
                    <Input id={"passwordConfirm"}
                           type={"password"}
                           name={"passwordConfirm"}
                           disabled={isPending}
                           {...register("passwordConfirm", {
                               required: "This field is required",
                               validate: (value) => value === getValues().password || "Passwords need to match"
                           })}/>
                </FormRow>
                <FormRow label={"Image"}>
                    <Input id={"image"}
                           type={"file"}
                           name={"image"}
                           accept={"image/*"}
                           disabled={isPending}
                           {...register("image")}
                    />
                </FormRow>

                <FormRow>
                    <Button disabled={isPending}>Sign up</Button>
                </FormRow>
            </form>
        </FormContainer>
    );
}

export default SignupForm;