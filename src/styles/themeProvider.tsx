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
            medium: "14px",
            large: "16px"
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

        element: {
            header: {
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
