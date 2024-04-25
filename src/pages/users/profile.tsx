import BaseLayout from "@/layouts/baseLayout";
import { ReactElement } from "react";
import UserImage from "@/components/users/userImage";
import { prefetchGetUserProfile } from "@/react-query/queries/getUserProfile";
import { dehydrate } from "@tanstack/react-query";
import UserInfo from "@/components/users/userInfo";
import UserLogoutButton from "@/components/users/userLogoutButton";
import styled from "styled-components";

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
        <Wrapper>
            <UserImage />
            <UserInfo />
            <UserLogoutButton />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 12px;
    gap: 12px;
`;

UserProfilePage.getLayout = (page: ReactElement) => {
    return <BaseLayout>{page}</BaseLayout>;
};

export default UserProfilePage;
