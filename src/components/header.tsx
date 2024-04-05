import Link from "next/link";
import styled from "styled-components";
import { useBottomSheetContext } from "./bottomSheet";
import { CiUser, CiHome } from "react-icons/ci";
import { ROUTE_MAP } from "@/utils/route";

const Header = () => {
    const { setContentToBottomSheet, openBottomSheet } = useBottomSheetContext();

    return (
        <Wrapper>
            <Link href={ROUTE_MAP["HOME"]}>
                <Home />
            </Link>
            <Rightbar>
                <Link href={ROUTE_MAP["PROFILE"]}>
                    <Profile />
                </Link>
            </Rightbar>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 12px 0 12px;
    height: ${({ theme }) => theme.element.header.height};
    border-bottom: ${({ theme }) => theme.border.thin};
    background-color: ${({ theme }) => theme.backgroundColor.white};
`;

const Home = styled(CiHome)`
    background-color: ${({ theme }) => theme.backgroundColor.white};
    width: ${({ theme }) => theme.element.icon.width};
    height: ${({ theme }) => theme.element.icon.height};

    &:hover {
        cursor: pointer;
    }
`;

const Rightbar = styled.div`
    display: flex;
    gap: 12px;
`;

const Profile = styled(CiUser)`
    background-color: ${({ theme }) => theme.backgroundColor.white};
    width: ${({ theme }) => theme.element.icon.width};
    height: ${({ theme }) => theme.element.icon.height};

    &:hover {
        cursor: pointer;
    }
`;

export default Header;
