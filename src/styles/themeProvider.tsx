import { PropsWithChildren } from "react";
import { ThemeProvider, type DefaultTheme } from "styled-components";

type StyledComponentsThemeProvider = PropsWithChildren;

const StyledComponentsThemeProvider = ({
    children
}: StyledComponentsThemeProvider) => {
    const theme: DefaultTheme = {
        color: {
            white: "#FFFFFF",
            black: "#000000"
        },

        fontSize: {},

        fontWeight: {},

        border: {
            thin: "1px solid lightgray",
            medium: "1.5px solid lightgray",
            thick: "2px solid lightgray"
        },

        backgroundColor: {
            white: "#FFFFFF",
            black: "#000000"
        },

        element: {
            header: {
                height: "80px"
            },
            nav: {
                height: "50px"
            },
            menu: {
                width: "24px",
                height: "24px"
            }
        }
    };

    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default StyledComponentsThemeProvider;
