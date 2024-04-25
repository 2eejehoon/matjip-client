import BaseLayout from "@/layouts/baseLayout";
import { ReactElement } from "react";

const UserPage = () => {
    return <></>;
};

UserPage.getLayout = (page: ReactElement) => {
    return <BaseLayout>{page}</BaseLayout>;
};

export default UserPage;
