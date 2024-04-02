import { ChangeEvent, useState } from "react";
import styled from "styled-components";
import { RiKakaoTalkFill, RiGoogleFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { SiNaver } from "react-icons/si";
import { useRouter } from "next/router";
import Link from "next/link";

const LoginForm = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [passowrd, setPassword] = useState("");

    const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const onLoginClick = () => {
        console.log({ email, passowrd });
    };

    const onGoogleLogin = async () => {
        try {
            const response = await fetch(
                "http://localhost:4000/api/auth/google",
                {
                    method: "GET",
                    credentials: "include"
                }
            );
            console.log(response);
        } catch (error) {}
    };

    return (
        <Wrapper>
            <Title>로그인</Title>
            <Form>
                <div>
                    <Label>이메일</Label>
                    <Input
                        type="email"
                        value={email}
                        onChange={onEmailChange}
                        placeholder="이메일을 입력해주세요."
                        required
                    />
                </div>
                <div>
                    <Label>비밀번호</Label>
                    <Input
                        type="password"
                        value={passowrd}
                        onChange={onPasswordChange}
                        placeholder="비밀번호를 입력해주세요."
                        required
                    />
                </div>
                <LoginButton onClick={onLoginClick}>로그인</LoginButton>
            </Form>
            <FlexBox>
                <Anchor href={"/signup"}>회원가입</Anchor>
                <Divider />
                <Anchor href={"/users/find-email"}>이메일 찾기</Anchor>
                <Divider />
                <Anchor href={"/users/find-passowrd"}>비밀번호 찾기</Anchor>
            </FlexBox>
            <FlexBox>
                <Google onClick={onGoogleLogin} />
                <Kakao />
                <Naver />
                <Github />
            </FlexBox>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 300px;
    padding: 18px;
    gap: 18px;
    border: ${({ theme }) => theme.border.thin};
    border-radius: ${({ theme }) => theme.borderRadius.small};
    background-color: ${({ theme }) => theme.backgroundColor.white};

    &:focus-within {
        border-color: black;
    }
`;

const Title = styled.h4`
    color: ${({ theme }) => theme.color.black};
    font-size: ${({ theme }) => theme.fontSize.large};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    background-color: ${({ theme }) => theme.backgroundColor.white};
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    gap: 18px;
`;

const Label = styled.label`
    display: flex;
    justify-content: flex-start;
    color: ${({ theme }) => theme.color.black};
    font-size: ${({ theme }) => theme.fontSize.medium};
    font-weight: ${({ theme }) => theme.fontWeight.normal};
`;

const Input = styled.input`
    width: 100%;
    padding: 18px;
    outline: none;
    border: ${({ theme }) => theme.border.thin};
    border-radius: ${({ theme }) => theme.borderRadius.small};
    color: ${({ theme }) => theme.color.black};
    font-size: ${({ theme }) => theme.fontSize.medium};
    font-weight: ${({ theme }) => theme.fontWeight.normal};

    &:focus-within {
        border-color: black;
    }
`;

const LoginButton = styled.button`
    width: 100%;
    padding: 18px;
    outline: none;
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius.small};
    color: ${({ theme }) => theme.color.white};
    font-size: ${({ theme }) => theme.fontSize.medium};
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    background-color: ${({ theme }) => theme.backgroundColor.black};

    &:hover {
        cursor: pointer;
    }
`;

const FlexBox = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
`;

const Anchor = styled(Link)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    word-break: keep-all;
    color: ${({ theme }) => theme.color.black};
    font-size: ${({ theme }) => theme.fontSize.medium};
    font-weight: ${({ theme }) => theme.fontWeight.normal};

    &:hover {
        cursor: pointer;
    }
`;

const Divider = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    &::before {
        color: ${({ theme }) => theme.color.black};
        font-size: ${({ theme }) => theme.fontSize.medium};
        font-weight: ${({ theme }) => theme.fontWeight.normal};
        content: "|";
    }
`;

const Google = styled(RiGoogleFill)`
    width: ${({ theme }) => theme.element.icon.width};
    height: ${({ theme }) => theme.element.icon.height};

    &:hover {
        cursor: pointer;
    }
`;

const Kakao = styled(RiKakaoTalkFill)`
    width: ${({ theme }) => theme.element.icon.width};
    height: ${({ theme }) => theme.element.icon.height};

    &:hover {
        cursor: pointer;
    }
`;

const Naver = styled(SiNaver)`
    padding: 4px;
    width: ${({ theme }) => theme.element.icon.width};
    height: ${({ theme }) => theme.element.icon.height};

    &:hover {
        cursor: pointer;
    }
`;

const Github = styled(FaGithub)`
    width: ${({ theme }) => theme.element.icon.width};
    height: ${({ theme }) => theme.element.icon.height};

    &:hover {
        cursor: pointer;
    }
`;

export default LoginForm;
