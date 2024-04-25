import { User } from "@/types/schema";
import Axios from "./axios";

type UserProfile = Omit<User, "password" | "refreshToken">;

export const getUserProfile = async (): Promise<UserProfile> => {
    const { data } = await Axios.get<UserProfile>("/users/profile");

    return data;
};
