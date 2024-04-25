import { Profile } from "@/types/schema";
import Axios from "./axios";
import { UpdateUserProfileDto } from "@/types/user";

export const getProfile = async (): Promise<Profile> => {
    const { data } = await Axios.get<Profile>("/users/profile");

    return data;
};

export const updateProfile = async (updateUserProfileDto: UpdateUserProfileDto): Promise<Profile> => {
    const { data } = await Axios.put("/users/profile", updateUserProfileDto);

    return data;
};
