import Head from "next/head";

import "styles/index.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Kaung Myat Hein</title>
        <meta
          name="description"
          content="Hi I'm Kaung Myat Hein, Front-end Developer from Myanmar, Currently Working in Codigo.co"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
