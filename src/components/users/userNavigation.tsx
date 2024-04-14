import { ROUTE_MAP } from "@/utils/route";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const UserNavigation = () => {
    const router = useRouter();

    return (
        <Wrapper>
            <Link href={ROUTE_MAP["PROFILE"]}>
                <Item $isActive={router.pathname === ROUTE_MAP["PROFILE"]}>유저 정보</Item>
            </Link>
        </Wrapper>
    );
};

const Wrapper = styled.nav`
    display: flex;
    align-items: center;
    gap: 12px;
    overflow-x: scroll;
    border-bottom: ${({ theme }) => theme.border.thin};
`;

const Item = styled.div<{ $isActive: boolean }>`
    flex: 1 0 auto;
    padding: 12px;
    height: 100%;
    color: ${({ theme }) => theme.color.black};
    font-size: ${({ theme }) => theme.fontSize.small};
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    border-bottom: ${({ theme, $isActive }) => ($isActive ? theme.border.thick : "none")};
`;

export default UserNavigation;
