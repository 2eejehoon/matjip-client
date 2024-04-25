import Axios from "./axios";
import { LoginDto, SignupDto, Token } from "@/types/auth";

export const login = async ({ email, password }: LoginDto): Promise<Token> => {
    const { data } = await Axios.post<Token>("/auth/login", {
        email,
        password
    });

    return data;
};

export const signup = async ({ email, name, password, passwordConfirm }: SignupDto): Promise<Token> => {
    const { data } = await Axios.post<Token>("/auth/signup", { email, name, password, passwordConfirm });

    return data;
};

export const getAccessToken = async (refreshToken: string): Promise<Token> => {
    Axios.defaults.headers.common["Authorization"] = `Bearer ${refreshToken}`;
    const { data } = await Axios.get<Token>("/auth/refreshToken");

    return data;
};
