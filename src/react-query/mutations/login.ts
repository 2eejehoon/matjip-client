import { login } from "@/api/auth";
import Axios from "@/api/axios";
import { MUTATION_KEY_MAP } from "@/constant/react-query";
import { getPrevPathFromSessionStorage } from "@/utils/path";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";

export const useLogin = () => {
    const router = useRouter();
    return useMutation({
        mutationKey: [MUTATION_KEY_MAP.LOGIN],
        mutationFn: login,
        onSuccess: ({ accessToken, refreshToken }) => {
            Axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
            localStorage.setItem("refreshToken", refreshToken);
            const prevePath = getPrevPathFromSessionStorage();
            if (prevePath) {
                router.push(prevePath);
            } else {
                router.push("/");
            }
        },
        onError: (error) => {
            console.log(error)
            delete Axios.defaults.headers.common["Authorization"];
            localStorage.removeItem("refreshToken");
        }
    });
};
