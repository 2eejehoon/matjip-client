import BaseLayout from "@/layouts/baseLayout";
import { useQuery } from "@tanstack/react-query";
import { GetServerSidePropsContext } from "next";
import { ReactElement } from "react";
import cookies from "next-cookies";

export const getServerSideProps = (context: GetServerSidePropsContext) => {
    const cookieStore = cookies(context);

    console.log(cookieStore);

    return {
        props: {
            accessToken: cookieStore.accessToken
        }
    };
};

type UserProfilePageProps = {
    accessToken: string;
};

const UserProfilePage = ({ accessToken }: UserProfilePageProps) => {
    const { data: user } = useQuery({
        queryKey: ["USER"],
        queryFn: async () => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/users/profile`, {
                method: "GET",
                credentials: "include",
                headers: {
                    Authorization: `Bearer ${accessToken}`,
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
