import { signup } from "@/api/auth";
import { MUTATION_KEY_MAP } from "@/constant/react-query";
import { useMutation } from "@tanstack/react-query";

export const useSignup = () => {
    return useMutation({ mutationKey: [MUTATION_KEY_MAP.SIGNUP], mutationFn: signup });
};
