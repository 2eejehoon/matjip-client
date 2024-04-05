import { ReactElement } from "react";
import BaseLayout from "@/layouts/baseLayout";
import Cookies from "js-cookie";

const HomePage = () => {
    const accessToken = Cookies.get("accessToken");
    console.log(accessToken);
    return <></>;
};

HomePage.getLayout = (page: ReactElement) => {
    return <BaseLayout>{page}</BaseLayout>;
};

export default HomePage;
