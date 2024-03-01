import { Html, Head, Main, NextScript } from "next/document";

import { nexethBannerDark } from "@/ui";

const title = "Nexeth";
const description = "Nexeth";
const image = nexethBannerDark;
const url = "https://www.nexeth.xyz";

const AppDocument = () => (
  <Html lang="en">
    <Head>
      <meta charSet="UTF-8" />
      <meta name="description" content={description} />
      <meta httpEquiv="Content-Language" content="en" />

      {/* Open Graph meta tags */}
      <meta property="og:title" content="Nexeth - AI Pipelines Made Easy" />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* Twitter Card meta tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* SEO Tags */}
      <meta name="keywords" content="Nexeth" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default AppDocument;
