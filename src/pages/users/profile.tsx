import BaseLayout from "@/layouts/baseLayout";
import { ReactElement } from "react";

const UserProfilePage = () => {
    return <></>;
};

UserProfilePage.getLayout = (page: ReactElement) => {
    return <BaseLayout>{page}</BaseLayout>;
};

export default UserProfilePage;
