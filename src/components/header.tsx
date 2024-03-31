import styled from "styled-components";

const Header = () => {
    return <Wrapper></Wrapper>;
};

const Wrapper = styled.div`
    height: ${({ theme }) => theme.element.header.height};
    border-bottom: ${({ theme }) => theme.border.thin};
    background-color: ${({ theme }) => theme.backgroundColor.white};
`;

export default Header;
