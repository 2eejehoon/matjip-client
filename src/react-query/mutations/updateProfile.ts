import { updateProfile } from "@/api/user";
import { MUTATION_KEY_MAP, QUERY_KEY_MAP } from "@/constant/react-query";
import { QueryClient, useMutation } from "@tanstack/react-query";

export const useUpdateUserProfile = () => {
    const queryClient = new QueryClient();
    return useMutation({
        mutationKey: [MUTATION_KEY_MAP.UPDATE_PROFILE],
        mutationFn: updateProfile,
        onSuccess: (profile) => {
            queryClient.invalidateQueries({ queryKey: [QUERY_KEY_MAP.USER_PROFILE] });
            queryClient.setQueryData([QUERY_KEY_MAP.USER_PROFILE], profile);
        }
    });
};
