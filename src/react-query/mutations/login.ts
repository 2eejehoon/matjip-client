import { login } from "@/api/auth";
import Axios from "@/api/axios";
import { MUTATION_KEY_MAP } from "@/constant/react-query";
import { useRouteTo } from "@/utils/route";
import { useMutation } from "@tanstack/react-query";

export const useLogin = () => {
    const routeTo = useRouteTo();
    return useMutation({
        mutationKey: [MUTATION_KEY_MAP.LOGIN],
        mutationFn: login,
        onSuccess: ({ accessToken, refreshToken }) => {
            Axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
            localStorage.setItem("refreshToken", refreshToken);
            routeTo("HOME");
        },
        onError: () => {
            delete Axios.defaults.headers.common["Authorization"];
            localStorage.removeItem("refreshToken");
        }
    });
};
