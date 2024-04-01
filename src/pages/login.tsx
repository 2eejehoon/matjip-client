import BaseLayout from "@/layouts/baseLayout";
import { ReactElement } from "react";

const LoginPage = () => {
    return <>login</>;
};

LoginPage.getLayout = (page: ReactElement) => {
    return <BaseLayout>{page}</BaseLayout>;
};

export default LoginPage;
