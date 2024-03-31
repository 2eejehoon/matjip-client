import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        color: {
            white: string;
            black: string;
        };

        fontSize: {};

        fontWeight: {};

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
            menu: {
                width: string;
                height: string;
            };
        };
    }
}
