import BaseLayout from "@/layouts/baseLayout";
import { ReactElement } from "react";
import UserProfile from "@/components/users/userProfile";
import { prefetchGetUserProfile } from "@/react-query/queries/getProfile";
import { dehydrate } from "@tanstack/react-query";
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
            <UserProfile />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    min-height: calc(100vh - ${({ theme }) => theme.element.footer.height});
    display: flex;
    justify-content: center;
    align-items: center;
`;

UserProfilePage.getLayout = (page: ReactElement) => {
    return <BaseLayout>{page}</BaseLayout>;
};

export default UserProfilePage;
