import {
    PropsWithChildren,
    ReactNode,
    createContext,
    useContext,
    useState
} from "react";
import styled from "styled-components";
import { animate, motion, useAnimation } from "framer-motion";

export const BottomSheetContext = createContext({
    isBottomSheetOpen: false,
    toggleBottomSheet: () => {},
    openBottomSheet: () => {},
    closeBottomSheet: () => {},
    bottomSheetContent: [] as ReactNode[],
    popContentFromBottomSheet: () => {},
    pushContentToBottomSheet: (component: ReactNode) => {},
    animate: {}
});

export const BottomSheetProvider = ({ children }: PropsWithChildren) => {
    const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
    const [bottomSheetContent, setBottomSheetContent] = useState<ReactNode[]>(
        []
    );
    const animate = useAnimation();

    const toggleBottomSheet = () => {
        if (isBottomSheetOpen) {
            animate.start("hidden");
        } else {
            animate.start("visible");
        }

        setIsBottomSheetOpen((prev) => !prev);
    };

    const openBottomSheet = () => {
        animate.start("visible");
        setIsBottomSheetOpen(true);
    };

    const closeBottomSheet = () => {
        animate.start("hidden");
        setIsBottomSheetOpen(false);
    };

    const popContentFromBottomSheet = () => {
        bottomSheetContent.pop();
        setBottomSheetContent([...bottomSheetContent]);
    };

    const pushContentToBottomSheet = (component: ReactNode) => {
        setBottomSheetContent(bottomSheetContent.concat(component));
    };

    return (
        <BottomSheetContext.Provider
            value={{
                isBottomSheetOpen,
                toggleBottomSheet,
                openBottomSheet,
                closeBottomSheet,
                bottomSheetContent,
                popContentFromBottomSheet,
                pushContentToBottomSheet,
                animate
            }}
        >
            {children}
            <BottomSheet />
        </BottomSheetContext.Provider>
    );
};

export const useBottomSheetContext = () => {
    return useContext(BottomSheetContext);
};

const BottomSheet = () => {
    const { bottomSheetContent, animate } = useBottomSheetContext();

    return (
        <Wrapper
            initial="hidden"
            animate={animate}
            variants={{ visible: { y: "0" }, hidden: { y: "100%" } }}
            transition={{ type: "spring", damping: 15, stiffness: 100 }}
        >
            <Handle />
            {bottomSheetContent.at(-1)}
        </Wrapper>
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
    overflow: auto;
    border: ${({ theme }) => theme.border.thin};
    background-color: ${({ theme }) => theme.backgroundColor.white};
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
