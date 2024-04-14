import { PropsWithChildren, ReactNode, createContext, useContext, useState } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import Portal from "./portal";

export const BottomSheetContext = createContext({
    isBottomSheetOpen: false,
    openBottomSheet: () => {},
    closeBottomSheet: () => {},
    animate: {}
});

export const BottomSheetProvider = ({ children }: PropsWithChildren) => {
    const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
    const animate = useAnimation();

    const openBottomSheet = () => {
        animate.start("visible");
        setIsBottomSheetOpen(true);
    };

    const closeBottomSheet = () => {
        animate.start("hidden");
        setIsBottomSheetOpen(false);
    };

    return (
        <BottomSheetContext.Provider
            value={{
                isBottomSheetOpen,
                openBottomSheet,
                closeBottomSheet,
                animate
            }}
        >
            {children}
        </BottomSheetContext.Provider>
    );
};

export const useBottomSheetContext = () => {
    return useContext(BottomSheetContext);
};

type BottomSheetProps = PropsWithChildren & {};

const BottomSheet = ({ children }: BottomSheetProps) => {
    const { isBottomSheetOpen, animate, closeBottomSheet } = useBottomSheetContext();

    return (
        <>
            <Portal>
                <Wrapper
                    initial="hidden"
                    animate={animate}
                    variants={{ visible: { y: "0" }, hidden: { y: "100%" } }}
                    transition={{ type: "spring", damping: 50, stiffness: 500 }}
                >
                    <Handle />
                    {children}
                </Wrapper>
            </Portal>
            {isBottomSheetOpen && <Overlay onClick={closeBottomSheet} />}
        </>
    );
};

const Wrapper = styled(motion.div)`
    display: flex;
    flex-direction: column;
    position: fixed;
    bottom: 0;
    border-radius: 12px 12px 0 0;
    padding: 0 12px 0 12px;
    width: 100%;
    height: auto;
    min-height: 50%;
    z-index: 1;
    border: ${({ theme }) => theme.border.thin};
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

const Handle = styled.div`
    width: 15%;
    height: 5px;
    left: 0;
    right: 0;
    margin-top: 12px;
    margin-bottom: 12px;
    margin-left: auto;
    margin-right: auto;
    background-color: lightgray;
`;

export default BottomSheet;
