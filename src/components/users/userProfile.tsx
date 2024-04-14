import Image from "next/image";
import styled from "styled-components";
import { FiEdit2 } from "react-icons/fi";
import { useRef } from "react";

const UserProfile = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <Wrapper>
            <UserImage>
                <ImageContainer>
                    <ImageWrapper>
                        <Image alt="user-profile-image" src="/static/default.png" width={150} height={150} />
                    </ImageWrapper>
                    <ImageUpload onClick={() => inputRef.current && inputRef.current.click()} />
                    <ImageUploadInput type="file" ref={inputRef} accept="image/*" />
                </ImageContainer>
            </UserImage>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 12px;
    gap: 12px;
`;

const UserImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ImageContainer = styled.div`
    position: relative;
`;

const ImageWrapper = styled.div`
    position: relative;
    border: ${({ theme }) => theme.border.thin};
    border-radius: 50%;
    overflow: hidden;
`;

const ImageUpload = styled(FiEdit2)`
    position: absolute;
    bottom: 0px;
    right: 0px;
    padding: 4px;
    color: ${({ theme }) => theme.color.white};
    width: ${({ theme }) => theme.element.icon.width};
    height: ${({ theme }) => theme.element.icon.height};
    border-radius: 50%;
    background-color: ${({ theme }) => theme.backgroundColor.black};
`;

const ImageUploadInput = styled.input`
    display: none;
`;

export default UserProfile;
