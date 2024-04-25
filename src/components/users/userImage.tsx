import Image from "next/image";
import styled from "styled-components";
import { useRef } from "react";
import { useGetUserProfile } from "@/react-query/queries/getUserProfile";

const defaultImage = "/static/default.png";

const UserImage = () => {
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
            <ImageContainer>
                <Image alt="user-profile-image" src={imageSrc} width={150} height={150} />
            </ImageContainer>
            <ImageUploadButton onClick={() => inputRef.current && inputRef.current.click()}>
                프로필 변경하기
            </ImageUploadButton>
            <ImageUploadInput type="file" ref={inputRef} accept="image/*" onChange={onUploadImage} />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 12px;
    gap: 12px;
`;

const ImageContainer = styled.div`
    position: relative;
    width: 150px;
    height: 150px;
    border: ${({ theme }) => theme.border.thin};
    border-radius: 50%;
    overflow: hidden;
`;

const ImageUploadButton = styled.button`
    padding: 12px;
    width: 150px;
    border: ${({ theme }) => theme.border.thin};
    border-radius: ${({ theme }) => theme.borderRadius.small};
    background-color: ${({ theme }) => theme.backgroundColor.white};
`;

const ImageUploadInput = styled.input`
    display: none;
`;

export default UserImage;
