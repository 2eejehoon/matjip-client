import Axios from "./axios";

export const getUserProfile = async () => {
    const { data } = await Axios.get("/users/profile");

    return data;
};
