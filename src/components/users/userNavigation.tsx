import Link from "next/link";
import styled from "styled-components";

const UserNavigation = () => {
    return (
        <Wrapper>
            <Anchor href="/users/profile">유저 정보</Anchor>
        </Wrapper>
    );
};

const Wrapper = styled.nav`
    display: flex;
    align-items: center;
    padding: 12px;
    gap: 12px;
    overflow-x: scroll;
    border-bottom: ${({ theme }) => theme.border.thin};
`;

const Anchor = styled(Link)`
    flex: 1 0 auto;
    color: ${({ theme }) => theme.color.black};
    font-size: ${({ theme }) => theme.fontSize.small};
    font-weight: ${({ theme }) => theme.fontWeight.normal};
`;

export default UserNavigation;
