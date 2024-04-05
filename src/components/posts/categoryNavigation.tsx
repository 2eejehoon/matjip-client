import styled from "styled-components";

const CategoryNavigation = () => {
    return <StickyNavigation></StickyNavigation>;
};

const StickyNavigation = styled.nav`
    position: sticky;
    top: 0;
    height: ${({ theme }) => theme.element.nav.height};
    border-bottom: ${({ theme }) => theme.border.thin};
    background-color: ${({ theme }) => theme.backgroundColor.white};
`;

export default CategoryNavigation;
