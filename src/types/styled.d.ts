import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        color: {
            white: string;
            black: string;
            lightgray: string;
        };

        fontSize: {
            small: string;
            medium: string;
            large: string;
        };

        fontWeight: {
            normal: string;
            bold: string;
        };

        border: {
            thin: string;
            medium: string;
            thick: string;
        };

        borderRadius: {
            small: string;
            medium: string;
            large: string;
        };

        backgroundColor: {
            white: string;
            black: string;
        };

        boxShadow: string;

        element: {
            footer: {
                height: string;
            };
            nav: {
                height: string;
            };
            icon: {
                width: string;
                height: string;
            };
        };
    }
}
