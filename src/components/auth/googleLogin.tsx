import styled from "styled-components";
import { RiGoogleFill } from "react-icons/ri";

const GoogleLogin = () => {
    const onGoogleLogin = () => {
        window.location.replace(`${process.env.NEXT_PUBLIC_BASE_API_URL}/auth/google`);
    };

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
