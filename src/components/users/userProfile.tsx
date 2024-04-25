import Image from "next/image";
import styled from "styled-components";
import { FiEdit2 } from "react-icons/fi";
import { useRef } from "react";
import { useGetUserProfile } from "@/react-query/queries/getUserProfile";

const defaultImage = "/static/default.png";

const UserProfile = () => {
    const userProfile = useGetUserProfile();
    const inputRef = useRef<HTMLInputElement>(null);
    const imageSrc = userProfile.data?.photo
        ? userProfile.data?.photo
        : userProfile.data?.profile?.photo
          ? userProfile.data?.profile?.photo
          : defaultImage;

    const onUploadImage = () => {};

    return (
        <Wrapper>
            <UserImage>
                <ImageContainer>
                    <ImageWrapper>
                        <Image alt="user-profile-image" src={imageSrc} width={150} height={150} />
                    </ImageWrapper>
                    <ImageUpload onClick={() => inputRef.current && inputRef.current.click()} />
                    <ImageUploadInput type="file" ref={inputRef} accept="image/*" onChange={onUploadImage} />
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
    width: 150px;
    height: 150px;
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
