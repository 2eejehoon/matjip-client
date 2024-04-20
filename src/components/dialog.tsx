import * as _Dialog from "@radix-ui/react-dialog";
import styled from "styled-components";

type ContentProps = {
    width?: string | number;
    height?: string | number;
    position?: string;
};

const Content = styled(_Dialog.Content)<ContentProps>`
    position: ${({ position = "relative" }) => position};
    padding: 12px;
    width: ${({ width = "100%" }) => (typeof width === "number" ? `${width}px` : width)};
    height: ${({ height = "auto" }) => (typeof height === "number" ? `${height}px` : height)};
    border: ${({ theme }) => theme.border.thin};
    border-radius: ${({ theme }) => theme.borderRadius.small};
    background-color: ${({ theme }) => theme.backgroundColor.white};
`;

const Dialog = {
    Root: _Dialog.Root,
    Trigger: _Dialog.Trigger,
    Close: _Dialog.Close,
    Content: Content
};

export default Dialog;
