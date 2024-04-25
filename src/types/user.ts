import { User } from "./schema";

export type GetUserProfileResponse = Omit<User, "password" | "refreshToken">;

export type UpdateUserProfileDto = {
    userId: number;
    name?: string;
    photo?: string | null;
};
