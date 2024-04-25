import Link from "next/link";
import styled from "styled-components";
import { CiUser, CiHome, CiSearch, CiCirclePlus, CiViewList } from "react-icons/ci";
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
                        <Anchor href={ROUTE_MAP["POSTS"]}>
                            <ArticleList />
                            <Text>목록</Text>
                        </Anchor>
                    </ListItem>
                    <ListItem>
                        <Anchor href={ROUTE_MAP["POSTS_CREATE"]}>
                            <Plus />
                            <Text>글쓰기</Text>
                        </Anchor>
                    </ListItem>
                    <ListItem>
                        <Anchor href={ROUTE_MAP["POSTS_SEARCH"]}>
                            <Search />
                            <Text>검색</Text>
                        </Anchor>
                    </ListItem>
                    <ListItem>
                        <Anchor href={ROUTE_MAP["USERS"]}>
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
    gap: 4px;
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
`;

const ArticleList = styled(CiViewList)`
    background-color: ${({ theme }) => theme.backgroundColor.white};
    width: ${({ theme }) => theme.element.icon.width};
    height: ${({ theme }) => theme.element.icon.height};
`;

const Plus = styled(CiCirclePlus)`
    background-color: ${({ theme }) => theme.backgroundColor.white};
    width: ${({ theme }) => theme.element.icon.width};
    height: ${({ theme }) => theme.element.icon.height};
`;

const Search = styled(CiSearch)`
    background-color: ${({ theme }) => theme.backgroundColor.white};
    width: ${({ theme }) => theme.element.icon.width};
    height: ${({ theme }) => theme.element.icon.height};
`;

const Profile = styled(CiUser)`
    background-color: ${({ theme }) => theme.backgroundColor.white};
    width: ${({ theme }) => theme.element.icon.width};
    height: ${({ theme }) => theme.element.icon.height};
`;

export default Footer;
