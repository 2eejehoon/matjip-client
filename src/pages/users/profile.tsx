import BaseLayout from "@/layouts/baseLayout";
import { ReactElement } from "react";
import UserNavigation from "@/components/users/userNavigation";
import UserProfile from "@/components/users/userProfile";
import { prefetchGetUserProfile } from "@/react-query/queries/getUserProfile";
import { dehydrate } from "@tanstack/react-query";

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
            <UserNavigation />
            <UserProfile />
        </>
    );
};

UserProfilePage.getLayout = (page: ReactElement) => {
    return <BaseLayout>{page}</BaseLayout>;
};

export default UserProfilePage;
