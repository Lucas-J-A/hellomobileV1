import { Html, Head, Main, NextScript } from "next/document";
import MetaIndex from "../../components/Meta/Index";
import GoogleTagManager from "../../components/Meta/GoogleTagManager";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <MetaIndex />
      </Head>
      <body>
        <GoogleTagManager />
        <Script
            src="//tag.goadopt.io/injector.js?website_code=6f190bd1-05e0-462c-9023-40087fd097cd"
            strategy="lazyOnload"
            className="adopt-injector"
          />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
