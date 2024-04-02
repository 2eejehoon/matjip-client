import styled from "styled-components";
import { RiGoogleFill } from "react-icons/ri";

const GoogleLogin = () => {
    const onGoogleLogin = () => {};

    return <Google onClick={onGoogleLogin} />;
};

const Google = styled(RiGoogleFill)`
    width: ${({ theme }) => theme.element.icon.width};
    height: ${({ theme }) => theme.element.icon.height};

    &:hover {
        cursor: pointer;
    }
`;

export default GoogleLogin;
