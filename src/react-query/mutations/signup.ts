import { signup } from "@/api/auth";
import { MUTATION_KEY_MAP } from "@/constant/react-query";
import { useRouteTo } from "@/utils/route";
import { useMutation } from "@tanstack/react-query";

export const useSignup = () => {
    const routeTo = useRouteTo();
    return useMutation({
        mutationKey: [MUTATION_KEY_MAP.SIGNUP],
        mutationFn: signup,
        onSuccess: () => {
            routeTo("AUTH_LOGIN");
        },
        onError: () => {}
    });
};
