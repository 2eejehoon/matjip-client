import { updateProfile } from "@/api/user";
import { MUTATION_KEY_MAP, QUERY_KEY_MAP } from "@/constant/react-query";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useUpdateProfile = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationKey: [MUTATION_KEY_MAP.UPDATE_PROFILE],
        mutationFn: updateProfile,
        onSuccess: (profile) => {
            queryClient.setQueryData([QUERY_KEY_MAP.USER_PROFILE], profile);
        }
    });
};
