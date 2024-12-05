import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Common Meta Data */}
        {/* <Meta /> */}
        <meta name="theme-color" content="#000" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
