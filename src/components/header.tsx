import Link from "next/link";
import styled from "styled-components";
import { useBottomSheetContext } from "./bottomSheet";
import { CiMenuBurger, CiSearch, CiUser } from "react-icons/ci";

const Header = () => {
    const { setContentToBottomSheet, openBottomSheet } = useBottomSheetContext();

    const onMenuClick = () => {
        setContentToBottomSheet(<></>);
        openBottomSheet();
    };

    const onSearchClick = () => {
        setContentToBottomSheet(<>검색</>);
        openBottomSheet();
    };

    return (
        <Wrapper>
            <Menu role="button" onClick={onMenuClick} />
            <Rightbar>
                <Search onClick={onSearchClick} />
                <Link href="/login">
                    <Plus />
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

const Menu = styled(CiMenuBurger)`
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

const Search = styled(CiSearch)`
    background-color: ${({ theme }) => theme.backgroundColor.white};
    width: ${({ theme }) => theme.element.icon.width};
    height: ${({ theme }) => theme.element.icon.height};

    &:hover {
        cursor: pointer;
    }
`;

const Plus = styled(CiUser)`
    background-color: ${({ theme }) => theme.backgroundColor.white};
    width: ${({ theme }) => theme.element.icon.width};
    height: ${({ theme }) => theme.element.icon.height};

    &:hover {
        cursor: pointer;
    }
`;

export default Header;
