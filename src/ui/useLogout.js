import {useNavigate} from "react-router-dom";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import toast from "react-hot-toast";
import authService from "../service/authService.js";

export function useLogout(){
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const {mutate: logout, isPending} = useMutation({
        mutationFn: authService.logout,
        onSuccess: () => {
            localStorage.removeItem("user");
            toast.success("Logged out")
            queryClient.setQueryData(["user"], null);

            navigate("/", { replace: true });
        },
        onError: (error) => toast.error(error.response.data.message)
    })

    return {logout, isPending};
}