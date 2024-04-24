import Axios from "./axios";
import { LoginDto, SignupDto, Token } from "@/types/auth";

export const login = async ({ email, password }: LoginDto): Promise<Token> => {
    const { data } = await Axios.post<Token>("/auth/login", {
        email,
        password
    });

    return data;
};

export const signup = async ({ email, password }: SignupDto): Promise<Token> => {
    const { data } = await Axios.post<Token>("/auth/signup", { email, password });

    return data;
};
