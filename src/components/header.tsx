import Link from "next/link";
import styled from "styled-components";
import { CiUser, CiHome, CiSearch } from "react-icons/ci";
import { ROUTE_MAP } from "@/utils/route";

const Header = () => {
    return (
        <Wrapper>
            <Link href={ROUTE_MAP["HOME"]}>
                <Home />
            </Link>
            <SearchContainer>
                <Search />
                <SearchInput placeholder="맛집을 검색해보세요." />
            </SearchContainer>
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
    box-shadow:
        0 2px 4px rgba(0, 0, 0, 0.19),
        0 1px 1px rgba(0, 0, 0, 0.23);

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
