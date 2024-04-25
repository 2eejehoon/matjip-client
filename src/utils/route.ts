import { useRouter } from "next/router";

export const ROUTE_MAP = {
    HOME: "/",
    POSTS: "/posts",
    POSTS_CREATE: "/posts/create",
    POSTS_SEARCH: "/posts/search",
    AUTH_LOGIN: "/auth/login",
    AUTH_GOOGLE_LGOIN: "/auth/google",
    AUTH_SIGNUP: "/auth/signup",
    USERS: "/users",
    USERS_PROFILE: "/users/profile",
    USERS_FIND_EMAIL: "/users/find-email",
    USERS_FIND_PASSWORD: "/users/find-password"
} as const;

export type ROUTE_KEY = keyof typeof ROUTE_MAP;

export const useRouteTo = () => {
    const router = useRouter();

    const routeTo = (route: ROUTE_KEY) => {
        const to = ROUTE_MAP[route];
        router.push(to);
    };

    return routeTo;
};
