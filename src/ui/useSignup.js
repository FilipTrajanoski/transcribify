import {useMutation, useQueryClient} from "@tanstack/react-query";
import authService from "../service/authService.js";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";

export function useSignup() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const {mutate: signup, isPending} = useMutation({
        mutationFn: authService.signup,
        onSuccess: (res) => {
            localStorage.setItem('user', JSON.stringify(res.data));
            queryClient.setQueryData(["user"], res.data)
            toast.success("Account successfully created!");
            navigate("/", {replace: true});
        },
        onError: (error) => {
            toast.error(error.response?.data?.message || "Something went wrong");
        }
    })

    return {signup, isPending};
}