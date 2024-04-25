import { User } from "@/types/schema";
import Axios from "./axios";

type UserAndProfile = Omit<User, "password" | "refreshToken">;

export const getUserAndProfile = async (): Promise<UserAndProfile> => {
    const { data } = await Axios.get<UserAndProfile>("/users/profile");

    return data;
};
