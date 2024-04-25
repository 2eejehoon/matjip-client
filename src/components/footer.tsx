import Link from "next/link";
import styled from "styled-components";
import { CiUser, CiHome } from "react-icons/ci";
import { ROUTE_MAP } from "@/utils/route";

const Footer = () => {
    return (
        <Wrapper>
            <Nav>
                <List>
                    <ListItem>
                        <Anchor href={ROUTE_MAP["HOME"]}>
                            <Home />
                            <Text>홈</Text>
                        </Anchor>
                    </ListItem>
                    <ListItem>
                        <Anchor href={ROUTE_MAP["LOGIN"]}>
                            <Profile />
                            <Text>로그인</Text>
                        </Anchor>
                    </ListItem>
                    <ListItem>
                        <Anchor href={ROUTE_MAP["PROFILE"]}>
                            <Profile />
                            <Text>마이페이지</Text>
                        </Anchor>
                    </ListItem>
                    <ListItem>
                        <Anchor href={ROUTE_MAP["PROFILE"]}>
                            <Profile />
                            <Text>마이페이지</Text>
                        </Anchor>
                    </ListItem>
                    <ListItem>
                        <Anchor href={ROUTE_MAP["PROFILE"]}>
                            <Profile />
                            <Text>마이페이지</Text>
                        </Anchor>
                    </ListItem>
                </List>
            </Nav>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: ${({ theme }) => theme.element.footer.height};
    border-top: ${({ theme }) => theme.border.thin};
    background-color: ${({ theme }) => theme.backgroundColor.white};
`;

const Nav = styled.nav`
    width: 100%;
`;

const List = styled.ul`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
`;

const ListItem = styled.li`
    flex: 1;
    flex-grow: 1;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Anchor = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Text = styled.span`
    color: ${({ theme }) => theme.color.black};
    font-size: ${({ theme }) => theme.fontSize.small};
    font-weight: ${({ theme }) => theme.fontWeight.normal};
`;

const Home = styled(CiHome)`
    background-color: ${({ theme }) => theme.backgroundColor.white};
    width: ${({ theme }) => theme.element.icon.width};
    height: ${({ theme }) => theme.element.icon.height};

    &:hover {
        cursor: pointer;
    }
`;

const Profile = styled(CiUser)`
    background-color: ${({ theme }) => theme.backgroundColor.white};
    width: ${({ theme }) => theme.element.icon.width};
    height: ${({ theme }) => theme.element.icon.height};

    &:hover {
        cursor: pointer;
    }
`;

export default Footer;
