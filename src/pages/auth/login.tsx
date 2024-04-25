import LoginForm from "@/components/auth/loginForm";
import BaseLayout from "@/layouts/baseLayout";
import { ReactElement } from "react";
import styled from "styled-components";

const LoginPage = () => {
    return (
        <Wrapper>
            <LoginForm />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - ${({ theme }) => theme.element.header.height});
`;

LoginPage.getLayout = (page: ReactElement) => {
    return <BaseLayout>{page}</BaseLayout>;
};

export default LoginPage;
