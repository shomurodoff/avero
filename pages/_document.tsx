import {Html, Head, Main, NextScript} from "next/document";
import React, {Fragment} from "react";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta name="keywords" content="website, pdp, university, it"/>
                <meta name="description" content="PDP University - O'zbekistondagi to'laqonli IT universitet."/>
                <meta property="title" content="PDP University"/>
                <meta itemProp="image" content="/logo.png"/>
                <meta property="og:title" content="PDP University"/>
                <meta property="og:image" content="/logo.png"/>
                <meta property="og:description" content="PDP University - O'zbekistondagi to'laqonli IT universitet."/>
                <meta property="og:url" content="https://university.pdp.uz"/>
                <meta property="og:site_name" content="PDP University"/>
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
