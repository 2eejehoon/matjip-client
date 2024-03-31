import { PropsWithChildren } from "react";
import styled from "styled-components";

const BaseLayout = ({ children }: PropsWithChildren) => {
    return (
        <Page>
            <Header />
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

export default BaseLayout;
