import { Html, Head, Main, NextScript } from "next/document";
import React, {Fragment} from "react";

export default function Document() {
  return (
    <Html lang="en">
        <Head>
            <title>Avero | Home</title>
            <meta name="description" content="Avero.uz"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
      <body>
        <Main />
        <div id="modal" />
        <NextScript />
      </body>
    </Html>
  );
}
