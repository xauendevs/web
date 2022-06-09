import MainLayout from 'layouts/main_layout'
import '../styles/globals.css'
import '../node_modules/highlight.js/styles/atom-one-dark.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  if (Component.Layout) {
    const { Layout } = Component
    return (
      <>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, minimum-scale=1.0"
          />
        </Head>
        <MainLayout>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MainLayout>
      </>
    )
  }

  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}

export default MyApp
