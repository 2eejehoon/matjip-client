import { useGetUserProfile } from "@/react-query/queries/getUserProfile";
import styled from "styled-components";

const UserInfo = () => {
    const userProfile = useGetUserProfile();

    console.log(userProfile.data);

    return (
        <Wrapper>
            <div>
                <span>{userProfile.data?.email}</span>
            </div>
            <div>
                <span>{userProfile.data?.name}</span>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    padding: 12px;
    gap: 12px;
    border: ${({ theme }) => theme.border.thin};
    border-radius: ${({ theme }) => theme.borderRadius.small};
    box-shadow: ${({ theme }) => theme.boxShadow};
    display: flex;
    flex-direction: column;
`;

export default UserInfo;
