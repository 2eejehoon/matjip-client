import { useLogout } from "@/react-query/mutations/logout";
import styled from "styled-components";

const UserLogoutButton = () => {
    const logout = useLogout();

    const onLogout = () => {
        logout.mutate();
    };

    return <Button onClick={onLogout}>로그아웃</Button>;
};

const Button = styled.button`
    width: 100%;
    padding: 12px;
    border: ${({ theme }) => theme.border.thin};
    border-radius: ${({ theme }) => theme.borderRadius.small};
    background-color: ${({ theme }) => theme.backgroundColor.white};
    box-shadow: ${({ theme }) => theme.boxShadow};
`;
export default UserLogoutButton;
