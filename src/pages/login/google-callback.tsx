import BaseLayout from "@/layouts/baseLayout";
import { useRouter } from "next/router";
import { ReactElement } from "react";

const GoogleLoginCallbackPage = () => {
    const router = useRouter();
    console.log(router.query.accessToken);

    return <>callback</>;
};

GoogleLoginCallbackPage.getLayout = (page: ReactElement) => {
    return <BaseLayout>{page}</BaseLayout>;
};

export default GoogleLoginCallbackPage;
