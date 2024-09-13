import {useNavigate} from "react-router-dom";
import {useQueryClient} from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useLogout(){
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const logout = () => {
        localStorage.removeItem("jwt");
        localStorage.removeItem("user");
        toast.success("Logged out")
        queryClient.setQueryData(["user"], null);

        navigate("/", { replace: true });
    };

    return logout;
}