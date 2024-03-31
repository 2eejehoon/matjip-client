import styled from "styled-components";
import { useBottomSheetContext } from "./bottomSheet";

const Header = () => {
    const { toggleBottomSheet, pushContentToBottomSheet } =
        useBottomSheetContext();

    const onMenuClick = () => {
        toggleBottomSheet();
        pushContentToBottomSheet(
            <div style={{ height: "300px", backgroundColor: "purple" }}>1</div>
        );
    };

    return (
        <Wrapper>
            <Menu onClick={onMenuClick}>SVG</Menu>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: ${({ theme }) => theme.element.header.height};
    border-bottom: ${({ theme }) => theme.border.thin};
    background-color: ${({ theme }) => theme.backgroundColor.white};
`;

const Menu = styled.button`
    border: none;
    outline: none;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.backgroundColor.white};
    width: ${({ theme }) => theme.element.menu.width};
    height: ${({ theme }) => theme.element.menu.height};
`;

export default Header;
