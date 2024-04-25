import { getProfile } from "@/api/user";
import { QUERY_KEY_MAP } from "@/constant/react-query";
import { useQuery, QueryClient } from "@tanstack/react-query";

export const usePrefetchGetProfile = () => {
    const queryClient = new QueryClient();
    queryClient.prefetchQuery({ queryKey: [QUERY_KEY_MAP.USER_PROFILE], queryFn: getProfile });
    return queryClient;
};

export const useGetProfile = () => {
    return useQuery({ queryKey: [QUERY_KEY_MAP.USER_PROFILE], queryFn: getProfile });
};
