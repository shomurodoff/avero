import {Html, Head, Main, NextScript} from "next/document";
import React, {Fragment} from "react";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <title>Avero.uz</title>
                <meta
                    name="description"
                    content="Avero.uz"
                    key="desc"
                />
                <meta property="og:title" content="Avero.uz qulay yordamchingiz" />
                <meta
                    property="og:description"
                    content="Avero.uz Joy band qiling, mos ovqat tanlang va boshqalar xizmatlardan foydalaning"
                />
                <meta
                    property="og:image"
                    content="https://example.com/images/cool-page.jpg"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <body>
            <Main/>
            <div id="modal"/>
            <NextScript/>
            </body>
        </Html>
    );
}
