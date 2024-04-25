import { logout } from "@/api/auth";
import Axios from "@/api/axios";
import { MUTATION_KEY_MAP } from "@/constant/react-query";
import { useRouteTo } from "@/utils/route";
import { useMutation } from "@tanstack/react-query";

export const useLogout = () => {
    const routeTo = useRouteTo();
    return useMutation({
        mutationKey: [MUTATION_KEY_MAP.LOGOUT],
        mutationFn: logout,
        onSettled: () => {
            delete Axios.defaults.headers.common["Authorization"];
            localStorage.removeItem("refreshToken");
            routeTo("AUTH_LOGIN");
        }
    });
};
