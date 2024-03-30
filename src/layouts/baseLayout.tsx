import { PropsWithChildren } from "react";
import Footer from "./footer";
import Header from "./header";
import styled from "styled-components";

const BaseLayout = ({ children }: PropsWithChildren) => {
    return (
        <Page>
            <Header />
            <Main>{children}</Main>
            <Footer />
        </Page>
    );
};

const Page = styled.div`
    width: 100vw;
    height: 100vh;
    min-height: 100vh;
`;

const Main = styled.main`
    width: 100%;
    height: 100%;
`;

export default BaseLayout;
