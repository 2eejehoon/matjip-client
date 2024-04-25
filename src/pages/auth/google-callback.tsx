import Axios from "@/api/axios";
import { useRouteTo } from "@/utils/route";
import { GetServerSidePropsContext } from "next";
import { useEffect } from "react";

export const getServerSideProps = (context: GetServerSidePropsContext) => {
    const accessToken = context.query.accessToken;
    const refreshToken = context.query.refreshToken;

    return {
        props: {
            accessToken,
            refreshToken
        }
    };
};

type GoogleCallbackPageProps = {
    accessToken: string;
    refreshToken: string;
};

const GoogleCallbackPage = ({ accessToken, refreshToken }: GoogleCallbackPageProps) => {
    const routeTo = useRouteTo();

    useEffect(() => {
        Axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
        localStorage.setItem("refreshToken", refreshToken);
        routeTo("HOME");
    }, []);
};

export default GoogleCallbackPage;
