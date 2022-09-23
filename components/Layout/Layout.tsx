import React, { ReactNode } from "react";
import Head from "next/head";
import { Container, Main } from "./Layout.style";

type Props = {
  children?: ReactNode;
};

function Layout({ children }: Props) {
  return (
    <Container>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>{children}</Main>
    </Container>
  );
}

export default Layout;
