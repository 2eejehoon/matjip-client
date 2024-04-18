import {
    ForwardedRef,
    PropsWithChildren,
    ReactNode,
    createContext,
    forwardRef,
    useContext,
    useEffect,
    useRef,
    useState
} from "react";
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
    renderHeader?: () => ReactNode;
};

const BottomSheet = ({
    children,
    defaultHeight = 300,
    expandedHeight = 600,
    snap = 100,
    renderHeader
}: BottomSheetProps) => {
    const { isOpen, close } = useBottomSheetContext();
    const animate = useAnimation();
    const containerRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const touchRef = useRef({
        startY: 0,
        endY: 0
    });
    const heightRef = useRef(defaultHeight);
    const stateRef = useRef<"default" | "expanded">("default");

    useEffect(() => {
        if (isOpen) {
            animate.start("show");
            stateRef.current = "default";
            document.body.style.overflow = "hidden";
            containerRef.current!.style.height = `${defaultHeight}px`;
        } else {
            animate.start("hide");
            document.body.style.overflow = "auto";
        }
    }, [isOpen]);

    useEffect(() => {
        if (!containerRef.current || !contentRef.current) {
            return;
        }

        const container = containerRef.current;
        const content = contentRef.current;

        const onTouchMove = (e: TouchEvent) => {
            if (content.scrollTop > 0) {
                return;
            }
            const diff = e.touches[0].clientY - touchRef.current.startY;
            const newHeight = heightRef.current - diff;
            container.style.height = `${newHeight}px`;
        };

        const onTouchStart = (e: TouchEvent) => {
            if (content.scrollTop > 0) {
                return;
            }
            touchRef.current.startY = e.touches[0].clientY;
            heightRef.current = container.clientHeight;
            container.style.removeProperty("transition");
        };

        const onTouchEnd = (e: TouchEvent) => {
            if (content.scrollTop > 0) {
                return;
            }
            touchRef.current.endY = e.changedTouches[0].clientY;
            container.style.setProperty("transition", "height 0.2s linear");

            const isUpsideSnap = touchRef.current.startY - touchRef.current.endY > snap;
            const isDownsideSnap = touchRef.current.endY - touchRef.current.startY > snap;
            const neither =
                touchRef.current.startY - touchRef.current.endY <= snap &&
                touchRef.current.endY - touchRef.current.startY <= snap;

            if (isUpsideSnap && stateRef.current === "expanded") {
                container.style.height = `${expandedHeight}px`;
                return;
            }

            if (isDownsideSnap && stateRef.current === "expanded") {
                stateRef.current = "default";
                container.style.height = `${defaultHeight}px`;
                return;
            }

            if (neither && stateRef.current === "expanded") {
                container.style.height = `${expandedHeight}px`;
                return;
            }

            if (isUpsideSnap && stateRef.current === "default") {
                stateRef.current = "expanded";
                container.style.height = `${expandedHeight}px`;
                return;
            }

            if (isDownsideSnap && stateRef.current === "default") {
                close();
                return;
            }

            if (neither && stateRef.current === "default") {
                container.style.height = `${defaultHeight}px`;
                return;
            }
        };

        content.addEventListener("touchmove", onTouchMove);
        content.addEventListener("touchstart", onTouchStart);
        content.addEventListener("touchend", onTouchEnd);

        return () => {
            content.removeEventListener("touchmove", onTouchMove);
            content.removeEventListener("touchstart", onTouchStart);
            content.removeEventListener("touchend", onTouchEnd);
        };
    }, []);

    useEffect(() => {
        if (!headerRef.current || !containerRef.current) {
            return;
        }

        const container = containerRef.current;
        const header = headerRef.current;

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

            const isUpsideSnap = touchRef.current.startY - touchRef.current.endY > snap;
            const isDownsideSnap = touchRef.current.endY - touchRef.current.startY > snap;
            const neither =
                touchRef.current.startY - touchRef.current.endY <= snap &&
                touchRef.current.endY - touchRef.current.startY <= snap;

            if (isUpsideSnap && stateRef.current === "expanded") {
                container.style.height = `${expandedHeight}px`;
                return;
            }

            if (isDownsideSnap && stateRef.current === "expanded") {
                stateRef.current = "default";
                container.style.height = `${defaultHeight}px`;
                return;
            }

            if (neither && stateRef.current === "expanded") {
                container.style.height = `${expandedHeight}px`;
                return;
            }

            if (isUpsideSnap && stateRef.current === "default") {
                stateRef.current = "expanded";
                container.style.height = `${expandedHeight}px`;
                return;
            }

            if (isDownsideSnap && stateRef.current === "default") {
                close();
                return;
            }

            if (neither && stateRef.current === "default") {
                container.style.height = `${defaultHeight}px`;
                return;
            }
        };

        header.addEventListener("touchmove", onTouchMove);
        header.addEventListener("touchstart", onTouchStart);
        header.addEventListener("touchend", onTouchEnd);

        return () => {
            header.removeEventListener("touchmove", onTouchMove);
            header.removeEventListener("touchstart", onTouchStart);
            header.removeEventListener("touchend", onTouchEnd);
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
                <Header ref={headerRef}>{renderHeader && renderHeader()}</Header>
                <Content ref={contentRef}>{children}</Content>
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
    width: 100%;
    z-index: 10;
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

type HeaderProps = PropsWithChildren & {};

const Header = forwardRef(({ children }: HeaderProps, ref: ForwardedRef<HTMLDivElement>) => {
    return (
        <_Header ref={ref}>
            <_HeaderBar>
                <Bar />
            </_HeaderBar>
            {children}
        </_Header>
    );
});

Header.displayName = "Header";

const _Header = styled.div`
    display: flex;
    flex-direction: column;
`;

const _HeaderBar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: ${({ theme }) => theme.border.thin};
    border-radius: 12px 12px 0 0;
    padding: 8px 0 8px 0;
`;

const Bar = styled.div`
    width: 20%;
    height: 4px;
    border-radius: 4px;
    background-color: lightgray;
`;

const Content = forwardRef(({ children }: PropsWithChildren, ref: ForwardedRef<HTMLDivElement>) => {
    return <_Content ref={ref}>{children}</_Content>;
});

Content.displayName = "Content";

const _Content = styled.div`
    overflow-y: scroll;
`;

export default BottomSheet;
