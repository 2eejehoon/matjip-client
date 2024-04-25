import { useGetUserProfile } from "@/react-query/queries/getUserProfile";
import styled from "styled-components";

const UserInfo = () => {
    const userProfile = useGetUserProfile();

    console.log(userProfile.data);

    return (
        <Wrapper>
            <div>{userProfile.data?.name}</div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    margin: 12px;
    padding: 12px;
    border: ${({ theme }) => theme.border.thin};
    border-radius: ${({ theme }) => theme.borderRadius.small};
    box-shadow: ${({ theme }) => theme.boxShadow};
    display: flex;
    flex-direction: column;
`;

export default UserInfo;
