import Link from "next/link";
import styled from "styled-components";
import { CiUser, CiHome, CiSearch } from "react-icons/ci";
import { ROUTE_MAP } from "@/utils/route";
import BottomSheet, { useBottomSheetContext } from "./bottomSheet";

const Header = () => {
    const { openBottomSheet } = useBottomSheetContext();

    return (
        <Wrapper>
            <Link href={ROUTE_MAP["HOME"]}>
                <Home />
            </Link>
            <SearchContainer onClick={openBottomSheet}>
                <Search />
                <SearchInput placeholder="맛집을 검색해보세요." />
            </SearchContainer>
            <BottomSheet>123</BottomSheet>
            <Link href={ROUTE_MAP["PROFILE"]}>
                <Profile />
            </Link>
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

const SearchContainer = styled.div`
    display: flex;
    gap: 2px;
    width: 50%;
    min-width: 200px;
    padding: 8px;
    border: ${({ theme }) => theme.border.thin};
    border-radius: ${({ theme }) => theme.borderRadius.large};
    box-shadow: ${({ theme }) => theme.boxShadow};

    &:focus-within {
        border-color: black;
    }
`;

const Search = styled(CiSearch)`
    width: ${({ theme }) => theme.element.icon.width};
    height: ${({ theme }) => theme.element.icon.height};
`;

const SearchInput = styled.input`
    width: 100%;
    padding: 4px;
    outline: none;
    border: none;
    color: ${({ theme }) => theme.color.black};
    font-size: ${({ theme }) => theme.fontSize.small};
    font-weight: ${({ theme }) => theme.fontWeight.normal};
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
