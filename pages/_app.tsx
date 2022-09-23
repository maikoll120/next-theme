import type { AppProps } from "next/app";
import ThemeProvider from "../lib/providers/Theme";
import GlobalStyle from "../styles/global";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
