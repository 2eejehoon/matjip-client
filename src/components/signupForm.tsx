import { ChangeEvent, useState } from "react";
import styled from "styled-components";
import { RiKakaoTalkFill, RiGoogleFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { SiNaver } from "react-icons/si";
import { useRouter } from "next/router";

const SignupForm = () => {
    const router = useRouter();
    const [id, setId] = useState("");
    const [passowrd, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    const onIdChange = (e: ChangeEvent<HTMLInputElement>) => {
        setId(e.target.value);
    };

    const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const onPasswordConfirmChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPasswordConfirm(e.target.value);
    };

    const onSignupClick = () => {
        console.log("login");
    };

    const onLoginClick = () => {
        router.push("/login");
    };

    const onFindIdClick = () => {
        router.push("/user/find-id");
    };

    const onFindPasswordClick = () => {
        router.push("/user/find-password");
    };

    return (
        <Wrapper>
            <Title>회원가입</Title>
            <Form>
                <div>
                    <Label>아이디</Label>
                    <Input
                        type="text"
                        value={id}
                        onChange={onIdChange}
                        placeholder="아이디를 입력해주세요."
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
                <div>
                    <Label>비밀번호 확인</Label>
                    <Input
                        type="password"
                        value={passwordConfirm}
                        onChange={onPasswordConfirmChange}
                        placeholder="비밀번호를 입력해주세요."
                        required
                    />
                </div>
                <LoginButton onClick={onSignupClick}>회원가입</LoginButton>
            </Form>
            <FlexBox>
                <Anchor onClick={onLoginClick}>로그인</Anchor>
                <Divider />
                <Anchor onClick={onFindIdClick}>아이디 찾기</Anchor>
                <Divider />
                <Anchor onClick={onFindPasswordClick}>비밀번호 찾기</Anchor>
            </FlexBox>
            <FlexBox>
                <Google />
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

const Anchor = styled.a`
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

export default SignupForm;
