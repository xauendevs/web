import { Analytics } from '@vercel/analytics/react'
import MainLayout from 'layouts/main_layout'
import Head from 'next/head'
import '../node_modules/highlight.js/styles/atom-one-dark.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
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
        {Component.Layout ? (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        ) : (
          <Component {...pageProps} />
        )}
      </MainLayout>
      <Analytics />
    </>
  )
}

export default MyApp
