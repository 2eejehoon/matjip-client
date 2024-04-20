import { ReactElement } from "react";
import BaseLayout from "@/layouts/baseLayout";

const HomePage = () => {
    return <></>;
};

HomePage.getLayout = (page: ReactElement) => {
    return <BaseLayout>{page}</BaseLayout>;
};

export default HomePage;
