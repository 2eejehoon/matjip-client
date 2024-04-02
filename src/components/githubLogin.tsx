import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

const GithubLogin = () => {
    const onGithubLogin = () => {};

    return <Github onClick={onGithubLogin} />;
};

const Github = styled(FaGithub)`
    width: ${({ theme }) => theme.element.icon.width};
    height: ${({ theme }) => theme.element.icon.height};

    &:hover {
        cursor: pointer;
    }
`;

export default GithubLogin;
