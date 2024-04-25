import { PropsWithChildren } from "react";
import styled from "styled-components";
import Footer from "@/components/footer";

const BaseLayout = ({ children }: PropsWithChildren) => {
    return (
        <Page>
            <Main>{children}</Main>
            <Footer />
        </Page>
    );
};

const Page = styled.div``;

const Main = styled.main`
    min-height: calc(100% - ${({ theme }) => theme.element.footer.height});
`;

export default BaseLayout;
