import { PropsWithChildren } from "react";
import styled from "styled-components";
import Header from "@/components/header";

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

const Main = styled.main`
    min-height: calc(100% - ${({ theme }) => theme.element.header.height});
`;

export default BaseLayout;
