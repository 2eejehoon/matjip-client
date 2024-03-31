import {
    PropsWithChildren,
    ReactNode,
    createContext,
    useContext,
    useState
} from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

export const BottomSheetContext = createContext({
    isBottomSheetOpen: false,
    toggleBottomSheet: () => {},
    openBottomSheet: () => {},
    closeBottomSheet: () => {},
    bottomSheetContent: [] as ReactNode[],
    popContentFromBottomSheet: () => {},
    pushContentToBottomSheet: (component: ReactNode) => {}
});

export const BottomSheetProvider = ({ children }: PropsWithChildren) => {
    const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
    const [bottomSheetContent, setBottomSheetContent] = useState<ReactNode[]>(
        []
    );

    const toggleBottomSheet = () => {
        setIsBottomSheetOpen((prev) => !prev);
    };

    const openBottomSheet = () => {
        setIsBottomSheetOpen(true);
    };

    const closeBottomSheet = () => {
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
                pushContentToBottomSheet
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
    const { isBottomSheetOpen, bottomSheetContent } = useBottomSheetContext();

    if (isBottomSheetOpen) {
        return (
            <Wrapper animate={{ y: 12 }} transition={{ type: "keyframes" }}>
                {bottomSheetContent.at(-1)}
            </Wrapper>
        );
    }

    return null;
};

const Wrapper = styled(motion.div)`
    display: flex;
    flex-direction: column;
    position: fixed;
    bottom: 0;
    border-radius: 24px 24px 0 0;
    padding: 24px 12px 12px 12px;
    width: 100%;
    height: auto;
    border: ${({ theme }) => theme.border.thin};
    background-color: ${({ theme }) => theme.backgroundColor.white};
`;
