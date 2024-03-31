import { NextPage } from "next";
import type { AppProps } from "next/app";
import GlobalStyle from "@/styles/globalStyle";
import StyledComponentsThemeProvider from "@/styles/themeProvider";
import { ReactElement, ReactNode } from "react";
import { BottomSheetProvider } from "@/components/bottomSheet";

type MatjipProps = AppProps & {
    Component: NextPage & { getLayout: (page: ReactElement) => ReactNode };
};

export default function App({ Component, pageProps }: MatjipProps) {
    const getLayout = Component.getLayout ?? ((page) => page);

    return (
        <StyledComponentsThemeProvider>
            <GlobalStyle />
            <BottomSheetProvider>
                {getLayout(<Component {...pageProps} />)}
            </BottomSheetProvider>
        </StyledComponentsThemeProvider>
    );
}
