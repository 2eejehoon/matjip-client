import styled from "styled-components";
import { RiKakaoTalkFill } from "react-icons/ri";

const KakaoLogin = () => {
    const onKakaoLogin = () => {};

    return <Kakao onClick={onKakaoLogin} />;
};

const Kakao = styled(RiKakaoTalkFill)`
    width: ${({ theme }) => theme.element.icon.width};
    height: ${({ theme }) => theme.element.icon.height};

    &:hover {
        cursor: pointer;
    }
`;

export default KakaoLogin;
