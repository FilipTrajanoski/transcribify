import {useMutation, useQueryClient} from "@tanstack/react-query";
import {useNavigate} from "react-router-dom";
import authService from "../service/authService.js";
import toast from "react-hot-toast";

export function useLogin() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const {mutate: login, isLoading} = useMutation({
        mutationFn: ({email, password}) => authService.login(email, password),
        onSuccess: (res) => {
            localStorage.setItem('jwt', res.data.token);
            localStorage.setItem('user', JSON.stringify(res.data));
            queryClient.setQueryData(["user"], res.data);
            toast.success("Successfully logged in");
            navigate("/", {replace: true});
        },
        onError: (error) => toast.error(error.response.data.message)
    })

    return {login, isLoading};
}