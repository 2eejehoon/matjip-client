import BaseLayout from "@/layouts/baseLayout";
import { ReactElement } from "react";

const UserPage = () => {
    return (
        <>
            <button onClick={() => window.location.replace("/users/profile")}>프로필</button>
        </>
    );
};

UserPage.getLayout = (page: ReactElement) => {
    return <BaseLayout>{page}</BaseLayout>;
};

export default UserPage;
