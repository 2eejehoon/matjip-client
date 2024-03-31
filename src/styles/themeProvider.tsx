import { PropsWithChildren } from "react";
import { ThemeProvider, type DefaultTheme } from "styled-components";

type StyledComponentsThemeProvider = PropsWithChildren;

const StyledComponentsThemeProvider = ({
    children
}: StyledComponentsThemeProvider) => {
    const theme: DefaultTheme = {
        color: {
            black: "black",
            whitesmoke: "whitesmoke"
        },

        fontSize: {},

        fontWeight: {},

        backgroundColor: {
            white: "white",
            tomato: "tomato"
        },

        border: {
            thin: "1px solid lightgray"
        },

        element: {
            header: {
                height: "80px"
            },
            nav: {
                height: "50px"
            },
            sidebar: {
                width: "200px",
                height: "100vh"
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
