import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        color: {
            white: string;
            black: string;
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

        backgroundColor: {
            white: string;
            black: string;
        };

        element: {
            header: {
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
