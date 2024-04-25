import Image from "next/image";
import styled from "styled-components";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useGetProfile } from "@/react-query/queries/getProfile";
import { useUpdateProfile } from "@/react-query/mutations/updateProfile";

const defaultImage = "/static/default.png";

const UserProfile = () => {
    const userProfile = useGetProfile();
    const updateUserProfile = useUpdateProfile();
    const inputRef = useRef<HTMLInputElement>(null);
    const [name, setName] = useState("");
    const imageSrc = userProfile.data?.photo ? userProfile.data?.photo : defaultImage;

    const onClickChangePhoto = () => {
        inputRef.current && inputRef.current.click();
    };

    const onDeletePhoto = () => {
        userProfile.data?.userId && updateUserProfile.mutate({ userId: userProfile.data.userId, photo: null });
    };

    const onUpdatePhoto = () => {};

    const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const onUpdateName = () => {
        userProfile.data?.userId && updateUserProfile.mutate({ userId: userProfile.data.userId, name });
    };

    console.log(userProfile.data);

    useEffect(() => {
        userProfile.data?.name && setName(userProfile.data.name);
    }, [userProfile.isLoading]);

    return (
        <Wrapper>
            <ImageContainer>
                <Image alt="user-profile-image" src={imageSrc} width={150} height={150} />
            </ImageContainer>
            <ImageButtonContainer>
                <ImageButton onClick={onClickChangePhoto}>변경하기</ImageButton>
                <ImageButton onClick={onDeletePhoto}>삭제하기</ImageButton>
            </ImageButtonContainer>
            <ImageUploadInput type="file" ref={inputRef} accept="image/*" onChange={onUpdatePhoto} />
            <NameContainer>
                <Label>이름</Label>
                <Input value={name} onChange={onChangeName} />
                <NameSubmitButton onClick={onUpdateName}>수정하기</NameSubmitButton>
            </NameContainer>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 12px;
    gap: 24px;
`;

const ImageContainer = styled.div`
    position: relative;
    width: 150px;
    height: 150px;
    border: ${({ theme }) => theme.border.thin};
    border-radius: 50%;
    overflow: hidden;
`;

const ImageButtonContainer = styled.div`
    width: 100%;
    display: flex;
    gap: 8px;
`;

const ImageButton = styled.button`
    flex: 1 1 0;
    padding: 12px;
    border: ${({ theme }) => theme.border.thin};
    border-radius: ${({ theme }) => theme.borderRadius.small};
    background-color: ${({ theme }) => theme.backgroundColor.white};
    color: ${({ theme }) => theme.color.black};
    font-size: ${({ theme }) => theme.fontSize.medium};
    font-weight: ${({ theme }) => theme.fontWeight.normal};
`;

const ImageUploadInput = styled.input`
    display: none;
`;

const NameContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 8px;
`;

const Label = styled.label`
    color: ${({ theme }) => theme.color.black};
    font-size: ${({ theme }) => theme.fontSize.medium};
    font-weight: ${({ theme }) => theme.fontWeight.normal};
`;

const Input = styled.input`
    width: 100%;
    border: ${({ theme }) => theme.border.thin};
    border-radius: ${({ theme }) => theme.borderRadius.small};
    outline: none;
    padding: 12px;
    color: ${({ theme }) => theme.color.black};
    font-size: ${({ theme }) => theme.fontSize.large};
    font-weight: ${({ theme }) => theme.fontWeight.normal};
`;

const NameSubmitButton = styled.button`
    width: 100%;
    padding: 12px;
    border: ${({ theme }) => theme.border.thin};
    border-radius: ${({ theme }) => theme.borderRadius.small};
    background-color: ${({ theme }) => theme.backgroundColor.white};
    color: ${({ theme }) => theme.color.black};
    font-size: ${({ theme }) => theme.fontSize.medium};
    font-weight: ${({ theme }) => theme.fontWeight.normal};
`;

export default UserProfile;
