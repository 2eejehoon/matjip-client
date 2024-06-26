import { PropsWithChildren } from "react";
import { ThemeProvider, type DefaultTheme } from "styled-components";

type StyledComponentsThemeProvider = PropsWithChildren;

const StyledComponentsThemeProvider = ({ children }: StyledComponentsThemeProvider) => {
    const theme: DefaultTheme = {
        color: {
            white: "#FFFFFF",
            black: "#000000",
            lightgray: "#D3D3D3"
        },

        fontSize: {
            small: "12px",
            medium: "16px",
            large: "20px"
        },

        fontWeight: {
            normal: "400",
            bold: "700"
        },

        border: {
            thin: "1px solid lightgray",
            medium: "1.5px solid lightgray",
            thick: "2px solid lightgray"
        },

        borderRadius: {
            small: "6px",
            medium: "12px",
            large: "18px"
        },

        backgroundColor: {
            white: "#FFFFFF",
            black: "#000000"
        },

        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.19), 0 1px 1px rgba(0, 0, 0, 0.23)",

        element: {
            footer: {
                height: "80px"
            },
            nav: {
                height: "50px"
            },
            icon: {
                width: "32px",
                height: "32px"
            }
        }
    };

    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default StyledComponentsThemeProvider;
