import BaseLayout from "@/layouts/baseLayout";
import { useQuery } from "@tanstack/react-query";
import { ReactElement } from "react";
import Cookies from "js-cookie";

const UserProfilePage = () => {
    const { data: user } = useQuery({
        queryKey: ["USER"],
        queryFn: async () => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/users/profile`, {
                method: "GET",
                credentials: "include",
                headers: {
                    Authorization: `Bearer ${Cookies.get("accessToken")}`,
                    "Content-Type": "application/json"
                }
            });

            if (!response.ok) {
                throw new Error();
            }

            return response.json();
        }
    });

    console.log(user);

    return <></>;
};

UserProfilePage.getLayout = (page: ReactElement) => {
    return <BaseLayout>{page}</BaseLayout>;
};

export default UserProfilePage;
