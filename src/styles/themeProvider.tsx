import { PropsWithChildren } from "react";
import { ThemeProvider, type DefaultTheme } from "styled-components";

type StyledComponentsThemeProvider = PropsWithChildren;

const StyledComponentsThemeProvider = ({
    children
}: StyledComponentsThemeProvider) => {
    const theme: DefaultTheme = {
        color: {
            white: "#fffff",
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
            white: "#fffff",
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
                width: "36px",
                height: "36px"
            }
        }
    };

    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default StyledComponentsThemeProvider;
