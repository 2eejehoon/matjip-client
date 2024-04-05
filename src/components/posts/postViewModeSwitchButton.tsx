import styled from "styled-components";
import usePostVideModeStore from "@/zustand/PostViewMode";

const PostVideModeSwitchButton = () => {
    const { viewMode, setViewMode } = usePostVideModeStore();

    return (
        <Wrapper>
            {(() => {
                switch (viewMode) {
                    case "LIST":
                        return <Button onClick={() => setViewMode("MAP")}>지도 보기</Button>;

                    case "MAP":
                        return <Button onClick={() => setViewMode("LIST")}>목록 보기</Button>;

                    default:
                        return null;
                }
            })()}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: fixed;
    bottom: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    z-index: 1;
    background-color: transparent;
`;

const Button = styled.button`
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

export default PostVideModeSwitchButton;
