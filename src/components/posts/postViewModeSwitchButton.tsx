import styled from "styled-components";
import usePostViewModeStore from "@/zustand/postViewMode";

const PostViewModeSwitchButton = () => {
    const { viewMode, setViewMode } = usePostViewModeStore();

    if (viewMode === "LIST") {
        return <Button onClick={() => setViewMode("MAP")}>지도 보기</Button>;
    }

    if (viewMode === "MAP") {
        return <Button onClick={() => setViewMode("LIST")}>목록 보기</Button>;
    }
};

const Button = styled.button`
    position: fixed;
    right: 12px;
    bottom: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px;
    width: auto;
    height: auto;
    color: ${({ theme }) => theme.color.white};
    font-size: ${({ theme }) => theme.fontSize.medium};
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    background-color: ${({ theme }) => theme.backgroundColor.black};
`;

export default PostViewModeSwitchButton;
