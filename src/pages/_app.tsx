import type { AppProps } from "next/app";
import GlobalStyle from "@/styles/globalStyle";
import StyledComponentsThemeProvider from "@/styles/themeProvider";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <StyledComponentsThemeProvider>
            <GlobalStyle />
            <Component {...pageProps} />
        </StyledComponentsThemeProvider>
    );
}
