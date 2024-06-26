import SignupForm from "@/components/auth/signupForm";
import BaseLayout from "@/layouts/baseLayout";
import { ReactElement } from "react";
import { styled } from "styled-components";

const SignupPage = () => {
    return (
        <Wrapper>
            <SignupForm />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - ${({ theme }) => theme.element.footer.height});
`;

SignupPage.getLayout = (page: ReactElement) => {
    return <BaseLayout>{page}</BaseLayout>;
};

export default SignupPage;
