import BaseLayout from "@/layouts/baseLayout";
import { useQuery } from "@tanstack/react-query";
import { GetServerSidePropsContext } from "next";
import { ReactElement } from "react";

export const getServerSideProps = (context: GetServerSidePropsContext) => {
    const accessToken = context.query.accessToken;

    if (!accessToken) {
        return {
            redirect: {
                destination: "/login",
                permanent: false
            }
        };
    }

    return {
        props: { accessToken }
    };
};

type GoogleCallbackPageProps = {
    accessToken: string;
};

const GoogleCallbackPage = ({ accessToken }: GoogleCallbackPageProps) => {
    const { data } = useQuery({
        queryKey: ["CURRENT_USER"],
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
};

GoogleCallbackPage.getLayout = (page: ReactElement) => {
    return <BaseLayout>{page}</BaseLayout>;
};

export default GoogleCallbackPage;
