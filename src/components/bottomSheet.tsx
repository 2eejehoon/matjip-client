import { PropsWithChildren, useEffect, useRef } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";

const MIN_HEIGHT = 300;
const MAX_HEIGHT = 700;
const TEMP = 30;

type BottomSheetProps = PropsWithChildren & {
    isOpen: boolean;
};

const BottomSheet = ({ children, isOpen }: BottomSheetProps) => {
    const animate = useAnimation();
    const bottomSheetRef = useRef<HTMLDivElement>(null);
    const touchRef = useRef({
        startY: 0,
        endY: 0
    });
    const bottomSheetStateRef = useRef<"hidden" | "visible" | "expanded">("hidden");

    useEffect(() => {
        if (isOpen) {
            animate.start("visible");
            bottomSheetStateRef.current = "visible";
            document.body.style.overflow = "hidden";
        } else {
            animate.start("hidden");
            bottomSheetStateRef.current = "hidden";
            document.body.style.overflow = "auto";
        }
    }, [isOpen, animate]);

    useEffect(() => {
        if (!bottomSheetRef.current) {
            return;
        }

        const bottomSheetDiv = bottomSheetRef.current;

        const onTouchMove = (e: TouchEvent) => {
            const newHeight = window.innerHeight - e.touches[0].clientY;
            if (newHeight < MIN_HEIGHT) {
                bottomSheetDiv.style.height = `${MIN_HEIGHT}px`;
                return;
            }

            if (newHeight > MAX_HEIGHT) {
                bottomSheetDiv.style.height = `${MAX_HEIGHT}px`;
                return;
            }

            bottomSheetDiv.style.height = `${newHeight}px`;
        };

        const onTouchStart = (e: TouchEvent) => {
            touchRef.current.startY = e.touches[0].clientY;
            bottomSheetDiv.style.removeProperty("transition");
        };

        const onTouchEnd = (e: TouchEvent) => {
            touchRef.current.endY = e.changedTouches[0].clientY;
            bottomSheetDiv.style.setProperty("transition", "height 0.2s linear");

            if (touchRef.current.startY - touchRef.current.endY > TEMP) {
                bottomSheetStateRef.current = "expanded";
                bottomSheetDiv.style.height = `${MAX_HEIGHT}px`;
                return;
            }

            if (touchRef.current.endY - touchRef.current.startY > TEMP) {
                if (bottomSheetStateRef.current === "visible") {
                    bottomSheetStateRef.current = "hidden";
                    animate.start("hidden");
                } else if (bottomSheetStateRef.current === "expanded") {
                    bottomSheetStateRef.current = "visible";
                    bottomSheetDiv.style.height = `${MIN_HEIGHT}px`;
                }
                return;
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
            variants={{ visible: { y: "0" }, hidden: { y: "100%" } }}
            transition={{ type: "spring", damping: 50, stiffness: 500 }}
        >
            <Header />
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
    height: 300px;
    border: ${({ theme }) => theme.border.thin};
    background-color: ${({ theme }) => theme.backgroundColor.white};
`;

const Header = () => {
    return (
        <_Header>
            <Handle />
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

export default BottomSheet;
