import BaseLayout from "@/layouts/baseLayout";
import { QueryClient, dehydrate, useQuery } from "@tanstack/react-query";
import { GetServerSidePropsContext } from "next";
import { ReactElement } from "react";
import cookies from "next-cookies";
import { ROUTE_MAP } from "@/utils/route";
import UserNavigation from "@/components/users/userNavigation";
import UserProfile from "@/components/users/userProfile";

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const cookieStore = cookies(context);
    const accessToken = cookieStore.accessToken;

    if (!accessToken) {
        return {
            redirect: {
                destination: `${ROUTE_MAP["LOGIN"]}`
            }
        };
    }

    const queryClient = new QueryClient();
    await queryClient.prefetchQuery({
        queryKey: ["USER"],
        queryFn: async () => {
            try {
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
            } catch (error) {
                throw new Error();
            }
        }
    });

    return {
        props: {
            accessToken,
            dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient)))
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
            try {
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
            } catch (error) {
                throw new Error();
            }
        }
    });

    console.log(user);

    return (
        <>
            <UserNavigation />
            <UserProfile />
        </>
    );
};

UserProfilePage.getLayout = (page: ReactElement) => {
    return <BaseLayout>{page}</BaseLayout>;
};

export default UserProfilePage;
