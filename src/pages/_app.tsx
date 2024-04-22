import { NextPage } from "next";
import type { AppProps } from "next/app";
import GlobalStyle from "@/styles/globalStyle";
import StyledComponentsThemeProvider from "@/styles/themeProvider";
import { ReactElement, ReactNode, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

type MatjipProps = AppProps & {
    Component: NextPage & { getLayout: (page: ReactElement) => ReactNode };
};

export default function App({ Component, pageProps }: MatjipProps) {
    const [queryClient] = useState(() => new QueryClient({}));
    const getLayout = Component.getLayout ?? ((page) => page);

    return (
        <StyledComponentsThemeProvider>
            <GlobalStyle />
            <QueryClientProvider client={queryClient}>{getLayout(<Component {...pageProps} />)}</QueryClientProvider>
        </StyledComponentsThemeProvider>
    );
}
