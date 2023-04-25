import {useState} from 'react';
import "../assets/styles/index.css";
import type {AppProps} from "next/app";
import Layout from "../layout";
import reactQueryClient from "../config/react-query-config";
import { Hydrate, QueryClientProvider} from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export default function App({Component, pageProps}: AppProps) {
    const [queryClient] = useState(() => reactQueryClient);
    return (
        <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
                <Layout>
                    <Component {...pageProps} />
                    <ReactQueryDevtools initialIsOpen={false} />
                </Layout>
            </Hydrate>
        </QueryClientProvider>
    );
}
