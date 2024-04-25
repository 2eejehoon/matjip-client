import BaseLayout from "@/layouts/baseLayout";
import { ReactElement } from "react";
import UserImage from "@/components/users/userImage";
import { prefetchGetUserProfile } from "@/react-query/queries/getUserProfile";
import { dehydrate } from "@tanstack/react-query";
import UserInfo from "@/components/users/userInfo";

export const getServerSideProps = async () => {
    const queryClient = prefetchGetUserProfile();

    return {
        props: {
            dehydratedState: dehydrate(queryClient)
        }
    };
};

const UserProfilePage = () => {
    return (
        <>
            <UserImage />
            <UserInfo />
        </>
    );
};

UserProfilePage.getLayout = (page: ReactElement) => {
    return <BaseLayout>{page}</BaseLayout>;
};

export default UserProfilePage;
