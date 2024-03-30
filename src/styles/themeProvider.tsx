import { PropsWithChildren } from "react";
import { ThemeProvider, type DefaultTheme } from "styled-components";

type StyledComponentsThemeProvider = PropsWithChildren;

const StyledComponentsThemeProvider = ({
    children
}: StyledComponentsThemeProvider) => {
    const theme: DefaultTheme = {
        color: {},

        fontSize: {},

        fontWeight: {},

        backgroundColor: {}
    };

    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default StyledComponentsThemeProvider;
