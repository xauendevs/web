import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <meta
          name="description"
          content="Comunidad de desarrollo y tecnología de la provincia de Jaén. ¡Únete!"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@xauendevs" />
        <meta name="twitter:creator" content="@xauendevs" />
        <meta
          property="og:description"
          content="Comunidad de desarrollo y tecnología de la provincia de Jaén. ¡Únete!"
        />
        <meta
          property="og:image"
          content="https://xauendevs.vercel.app/img/social/twitter.jpg"
        />
        <meta
          property="og:image:alt"
          content="Comunidad de desarrollo y tecnología de la provincia de Jaén. ¡Únete!"
        />
        <title>XauenDevs - Desarrollo en Jaén</title>
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta
          property="og:title"
          content="XauenDevs - Desarrollo en Jaén | xauendevs.tech"
        />
        <meta name="next-head-count" content="16" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
