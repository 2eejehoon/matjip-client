import { NextPage } from "next";
import type { AppProps } from "next/app";
import GlobalStyle from "@/styles/globalStyle";
import StyledComponentsThemeProvider from "@/styles/themeProvider";
import { ReactElement, ReactNode, useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { setPathToSessionStorage } from "@/utils/path";

type MatjipProps = AppProps & {
    Component: NextPage & { getLayout: (page: ReactElement) => ReactNode };
};

export default function App({ Component, pageProps }: MatjipProps) {
    const router = useRouter();
    const [queryClient] = useState(() => new QueryClient({}));
    const getLayout = Component.getLayout ?? ((page) => page);

    useEffect(() => setPathToSessionStorage(), [router.asPath]);

    return (
        <StyledComponentsThemeProvider>
            <GlobalStyle />
            <QueryClientProvider client={queryClient}>{getLayout(<Component {...pageProps} />)}</QueryClientProvider>
        </StyledComponentsThemeProvider>
    );
}
