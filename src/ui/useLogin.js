import {useMutation, useQueryClient} from "@tanstack/react-query";
import {useNavigate} from "react-router-dom";
import authService from "../service/authService.js";

export function useLogin() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const {mutate: login, isLoading} = useMutation({
        mutationFn: ({email, password}) => authService.login(email, password),
        onSuccess: (user) => {
            queryClient.setQueryData(["user"], user.user);
            navigate("/", {replace: true});
        },
        onError: () => alert("Provided email or password are incorrect")
    })

    return {login, isLoading};
}