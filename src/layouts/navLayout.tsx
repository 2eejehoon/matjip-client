import { PropsWithChildren } from "react";
import styled from "styled-components";

const NavLayout = ({ children }: PropsWithChildren) => {
    return (
        <Page>
            <Header />
            <StickyNavigation />
            <Main>{children}</Main>
        </Page>
    );
};

const Page = styled.div`
    width: 100vw;
    height: 100vh;
`;

const Header = styled.div`
    height: ${({ theme }) => theme.element.header.height};
    border-bottom: ${({ theme }) => theme.border.thin};
    background-color: ${({ theme }) => theme.backgroundColor.white};
`;

const Main = styled.main`
    min-height: calc(100% - ${({ theme }) => theme.element.header.height});
`;

const StickyNavigation = styled.nav`
    position: sticky;
    top: 0;
    height: ${({ theme }) => theme.element.nav.height};
    border-bottom: ${({ theme }) => theme.border.thin};
    background-color: ${({ theme }) => theme.backgroundColor.white};
`;

export default NavLayout;
