import { PropsWithChildren, ReactNode, useEffect, useRef } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";

type BottomSheetProps = PropsWithChildren & {
    isOpen: boolean;
    defaultHeight?: number;
    expandedHeight?: number;
    snap?: number;
};

const BottomSheet = ({ children, isOpen, defaultHeight = 300, expandedHeight = 700, snap = 70 }: BottomSheetProps) => {
    const animate = useAnimation();
    const bottomSheetRef = useRef<HTMLDivElement>(null);
    const touchRef = useRef({
        startY: 0,
        endY: 0
    });
    const bottomSheetStateRef = useRef<"hidden" | "visible" | "expanded">("hidden");

    useEffect(() => {
        if (isOpen) {
            animate.start("show");
            bottomSheetStateRef.current = "visible";
            if (bottomSheetRef.current) {
                bottomSheetRef.current.style.height = `${defaultHeight}px`;
            }
            document.body.style.overflow = "hidden";
        } else {
            animate.start("hide");
            bottomSheetStateRef.current = "hidden";
            document.body.style.overflow = "auto";
        }
    }, [isOpen]);

    useEffect(() => {
        if (!bottomSheetRef.current) {
            return;
        }

        const bottomSheetDiv = bottomSheetRef.current;

        const onTouchMove = (e: TouchEvent) => {
            const newHeight = window.innerHeight - e.touches[0].clientY;
            bottomSheetDiv.style.height = `${newHeight}px`;
        };

        const onTouchStart = (e: TouchEvent) => {
            touchRef.current.startY = e.touches[0].clientY;
            bottomSheetDiv.style.removeProperty("transition");
        };

        const onTouchEnd = (e: TouchEvent) => {
            touchRef.current.endY = e.changedTouches[0].clientY;
            bottomSheetDiv.style.setProperty("transition", "height 0.2s linear");

            const isNeedExpand = touchRef.current.startY - touchRef.current.endY > snap;
            const isNeedShrink = touchRef.current.endY - touchRef.current.startY > snap;

            if (isNeedExpand) {
                bottomSheetStateRef.current = "expanded";
                bottomSheetDiv.style.height = `${expandedHeight}px`;
            } else if (isNeedShrink) {
                if (bottomSheetStateRef.current === "visible") {
                    bottomSheetStateRef.current = "hidden";
                    animate.start("hide");
                }

                if (bottomSheetStateRef.current === "expanded") {
                    bottomSheetStateRef.current = "visible";
                    bottomSheetDiv.style.height = `${defaultHeight}px`;
                }
            } else {
                if (bottomSheetStateRef.current === "visible") {
                    bottomSheetDiv.style.height = `${defaultHeight}px`;
                }

                if (bottomSheetStateRef.current === "expanded") {
                    bottomSheetDiv.style.height = `${expandedHeight}px`;
                }
            }

            touchRef.current.startY = 0;
            touchRef.current.endY = 0;
        };

        bottomSheetDiv.addEventListener("touchmove", onTouchMove);
        bottomSheetDiv.addEventListener("touchstart", onTouchStart);
        bottomSheetDiv.addEventListener("touchend", onTouchEnd);

        return () => {
            bottomSheetDiv.removeEventListener("touchmove", onTouchMove);
            bottomSheetDiv.removeEventListener("touchstart", onTouchStart);
            bottomSheetDiv.removeEventListener("touchend", onTouchEnd);
        };
    }, []);

    return (
        <_BottomSheet
            ref={bottomSheetRef}
            initial="hidden"
            animate={animate}
            variants={{ show: { y: "0" }, hide: { y: "100%" } }}
            transition={{ type: "spring", damping: 50, stiffness: 500 }}
        >
            {children}
        </_BottomSheet>
    );
};

const _BottomSheet = styled(motion.div)`
    display: flex;
    flex-direction: column;
    position: fixed;
    bottom: 0;
    border-radius: 16px 16px 0 0;
    width: 100%;
    border: ${({ theme }) => theme.border.thin};
    background-color: ${({ theme }) => theme.backgroundColor.white};
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
`;

type HeaderProps = {
    renderTitle?: () => ReactNode;
};

const Header = ({ renderTitle }: HeaderProps) => {
    return (
        <_Header>
            <Handle />
            {renderTitle && renderTitle()}
        </_Header>
    );
};

const _Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 0 8px 0;
`;

const Handle = styled.div`
    width: 20%;
    height: 4px;
    border-radius: 4px;
    background-color: lightgray;
`;

type OverlayProps = {
    close: () => void;
};

const Overlay = ({ close }: OverlayProps) => {
    return <_Overlay onClick={close} />;
};

const _Overlay = styled.div`
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    background-color: black;
`;

BottomSheet.Header = Header;
BottomSheet.Overlay = Overlay;

export default BottomSheet;
