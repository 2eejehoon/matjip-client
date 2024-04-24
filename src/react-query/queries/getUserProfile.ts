import { getUserProfile } from "@/api/user";
import { QUERY_KEY_MAP } from "@/constant/react-query";
import { QueryClient, useQuery } from "@tanstack/react-query";

export const prefetchGetUserProfile = () => {
    const queryClient = new QueryClient();
    queryClient.prefetchQuery({ queryKey: [QUERY_KEY_MAP.USER_PROFILE], queryFn: getUserProfile });
    return queryClient;
};

export const useGetUserProfile = () => {
    return useQuery({ queryKey: [QUERY_KEY_MAP.USER_PROFILE], queryFn: getUserProfile });
};
