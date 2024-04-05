import { useRouter } from "next/router";

export const ROUTE_MAP = {
    HOME: "/",
    POSTS: "/posts",
    POST_DETAIL: "/posts/",
    LOGIN: "/auth/login",
    GOOGLE_LGOIN: "/auth/google",
    SIGNUP: "/auth/signup",
    PROFILE: "/users/profile",
    FIND_EMAIL: "/users/find-email",
    FIND_PASSWORD: "/users/find-password"
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
