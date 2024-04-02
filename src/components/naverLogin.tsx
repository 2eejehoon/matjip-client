import styled from "styled-components";
import { SiNaver } from "react-icons/si";

const NaverLogin = () => {
    const onNaverLogin = () => {};

    return <Naver onClick={onNaverLogin} />;
};

const Naver = styled(SiNaver)`
    padding: 4px;
    width: ${({ theme }) => theme.element.icon.width};
    height: ${({ theme }) => theme.element.icon.height};

    &:hover {
        cursor: pointer;
    }
`;

export default NaverLogin;
