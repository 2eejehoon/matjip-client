import {
    PropsWithChildren,
    ReactNode,
    createContext,
    useCallback,
    useContext,
    useState
} from "react";
import styled from "styled-components";

export const BottomSheetContext = createContext({
    isOpen: false,
    toggle: () => {},
    content: []
});

export const BottomSheetProvider = ({ children }: PropsWithChildren) => {
    const [isOpen, setIsOpen] = useState(false);
    const [content, setContent] = useState<ReactNode[]>([]);

    const toggle = useCallback(() => {
        setIsOpen((isOpen) => !isOpen);
    }, []);

    const close = () => {
        setIsOpen(false);
    };

    const open = () => {
        setIsOpen(true);
    };

    return (
        <BottomSheetContext.Provider value={{ isOpen, toggle, content: [] }}>
            {children}
        </BottomSheetContext.Provider>
    );
};

export const useBottomSheetContext = () => {
    return useContext(BottomSheetContext);
};

const Sidebar = () => {
    const [isOpen, toggle] = useBottomSheetContext();

    return <Wrapper></Wrapper>;
};

const Wrapper = styled.section``;

export default Sidebar;
