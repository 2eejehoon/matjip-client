import { FormEvent, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import GoogleLogin from "./googleLogin";
import NaverLogin from "./naverLogin";
import KakaoLogin from "./kakaoLogin";
import GithubLogin from "./githubLogin";
import { useMutation } from "@tanstack/react-query";
import { ROUTE_MAP } from "@/utils/route";

const SignupForm = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const { data, mutate: onSignup } = useMutation({
        mutationKey: ["SIGNUP"],
        mutationFn: async (body: { email: string; name: string; password: string; passwordConfirm: string }) => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/auth/signup`, {
                    method: "POST",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(body)
                });

                if (!response.ok) {
                    throw new Error();
                }

                return response.json();
            } catch (error) {
                throw new Error();
            }
        }
    });

    const onSignupClick = async (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        onSignup(
            { email, name, password, passwordConfirm },
            {
                onSuccess: () => window.location.replace("/login")
            }
        );
    };

    return (
        <Wrapper>
            <Title>회원가입</Title>
            <Form>
                <div>
                    <Label>이메일</Label>
                    <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="이메일을 입력해주세요."
                        required
                    />
                </div>
                <div>
                    <Label>이름</Label>
                    <Input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="이름을 입력해주세요."
                        required
                    />
                </div>
                <div>
                    <Label>비밀번호</Label>
                    <Input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="비밀번호를 입력해주세요."
                        required
                    />
                </div>
                <div>
                    <Label>비밀번호 확인</Label>
                    <Input
                        type="password"
                        value={passwordConfirm}
                        onChange={(e) => setPasswordConfirm(e.target.value)}
                        placeholder="비밀번호를 입력해주세요."
                        required
                    />
                </div>
                <LoginButton onClick={onSignupClick}>회원가입</LoginButton>
            </Form>
            <Container>
                <Anchor href={ROUTE_MAP["SIGNUP"]}>회원가입</Anchor>
                <Divider />
                <Anchor href={ROUTE_MAP["FIND_EMAIL"]}>이메일 찾기</Anchor>
                <Divider />
                <Anchor href={ROUTE_MAP["FIND_PASSWORD"]}>비밀번호 찾기</Anchor>
            </Container>
            <Container>
                <GoogleLogin />
                <KakaoLogin />
                <NaverLogin />
                <GithubLogin />
            </Container>
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

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 12px;
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

export default SignupForm;
