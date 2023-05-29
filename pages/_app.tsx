import client from "@/apollo-client";
import "@/styles/globals.css";
import { ApolloProvider, useQuery } from "@apollo/client";
import type { AppProps } from "next/app";
import { ThemeProvider } from "theme-ui";
import theme from "@/theme/theme";
import Layout from "./Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </ApolloProvider>
  );
}
