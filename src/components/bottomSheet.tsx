import { PropsWithChildren, createContext, useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";

const BottomSheetContext = createContext({
    isOpen: false,
    open: () => {},
    close: () => {},
    toggle: () => {}
});

export const BottomSheetProvider = ({ children }: PropsWithChildren) => {
    const [isOpen, setIsOpen] = useState(false);

    const open = () => {
        setIsOpen(true);
    };

    const close = () => {
        setIsOpen(false);
    };

    const toggle = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <BottomSheetContext.Provider value={{ isOpen, open, close, toggle }}>{children}</BottomSheetContext.Provider>
    );
};

export const useBottomSheetContext = () => {
    return useContext(BottomSheetContext);
};

type BottomSheetProps = PropsWithChildren & {
    defaultHeight?: number;
    expandedHeight?: number;
    snap?: number;
    withHandle?: boolean;
    title?: string;
    closeText?: string;
};

const BottomSheet = ({
    children,
    defaultHeight = 300,
    expandedHeight = 600,
    snap = 70,
    withHandle,
    title,
    closeText
}: BottomSheetProps) => {
    const { isOpen, close } = useBottomSheetContext();
    const animate = useAnimation();
    const containerRef = useRef<HTMLDivElement>(null);
    const touchRef = useRef({
        startY: 0,
        endY: 0
    });
    const heightRef = useRef(defaultHeight);
    const stateRef = useRef<"hidden" | "default" | "expanded">("hidden");

    useEffect(() => {
        if (isOpen) {
            animate.start("show");
            stateRef.current = "default";
            document.body.style.overflow = "hidden";
            containerRef.current!.style.height = `${defaultHeight}px`;
        } else {
            animate.start("hide");
            stateRef.current = "hidden";
            document.body.style.overflow = "auto";
        }
    }, [isOpen]);

    useEffect(() => {
        if (!containerRef.current) {
            return;
        }

        const container = containerRef.current;

        const onTouchMove = (e: TouchEvent) => {
            const diff = e.touches[0].clientY - touchRef.current.startY;
            const newHeight = heightRef.current - diff;
            container.style.height = `${newHeight}px`;
        };

        const onTouchStart = (e: TouchEvent) => {
            touchRef.current.startY = e.touches[0].clientY;
            heightRef.current = container.clientHeight;
            container.style.removeProperty("transition");
        };

        const onTouchEnd = (e: TouchEvent) => {
            touchRef.current.endY = e.changedTouches[0].clientY;
            container.style.setProperty("transition", "height 0.2s linear");

            const isNeedExpand = touchRef.current.startY - touchRef.current.endY > snap;
            const isNeedShrink = touchRef.current.endY - touchRef.current.startY > snap;

            if (isNeedExpand) {
                stateRef.current = "expanded";
                container.style.height = `${expandedHeight}px`;
            } else if (isNeedShrink) {
                if (stateRef.current === "default") {
                    stateRef.current = "hidden";
                    close();
                }

                if (stateRef.current === "expanded") {
                    stateRef.current = "default";
                    container.style.height = `${defaultHeight}px`;
                }
            } else {
                if (stateRef.current === "default") {
                    container.style.height = `${defaultHeight}px`;
                }

                if (stateRef.current === "expanded") {
                    container.style.height = `${expandedHeight}px`;
                }
            }

            touchRef.current.startY = 0;
            touchRef.current.endY = 0;
        };

        container.addEventListener("touchmove", onTouchMove);
        container.addEventListener("touchstart", onTouchStart);
        container.addEventListener("touchend", onTouchEnd);

        return () => {
            container.removeEventListener("touchmove", onTouchMove);
            container.removeEventListener("touchstart", onTouchStart);
            container.removeEventListener("touchend", onTouchEnd);
        };
    }, []);

    return (
        <>
            <_BottomSheet
                ref={containerRef}
                initial="hidden"
                animate={animate}
                variants={{ show: { y: "0" }, hide: { y: "100%" } }}
                transition={{ type: "spring", damping: 50, stiffness: 500 }}
            >
                {withHandle && <Handle />}
                <Header title={title} closeText={closeText} />
                <Content>{children}</Content>
            </_BottomSheet>
            {isOpen && <Overlay onClick={close} />}
        </>
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
    z-index: 1;
    background-color: ${({ theme }) => theme.backgroundColor.white};
`;

const Overlay = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
`;

const Handle = () => {
    return (
        <_Handle>
            <Handlebar />
        </_Handle>
    );
};

const _Handle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 0 8px 0;
`;

const Handlebar = styled.div`
    width: 20%;
    height: 4px;
    border-radius: 4px;
    background-color: lightgray;
`;

type HeaderProps = {
    title?: string;
    closeText?: string;
};

const Header = ({ title, closeText }: HeaderProps) => {
    const { close } = useBottomSheetContext();

    return (
        <_Header>
            {title && <Title>{title}</Title>}
            {closeText && <Close onClick={close}>{closeText}</Close>}
        </_Header>
    );
};

const _Header = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 12px;
`;

const Title = styled.span`
    color: ${({ theme }) => theme.color.black};
    font-size: ${({ theme }) => theme.fontSize.medium};
    font-weight: ${({ theme }) => theme.fontWeight.normal};
`;

const Close = styled.span`
    position: absolute;
    right: 12px;
    color: ${({ theme }) => theme.color.black};
    font-size: ${({ theme }) => theme.fontSize.medium};
    font-weight: ${({ theme }) => theme.fontWeight.normal};
`;

export default BottomSheet;
