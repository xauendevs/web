import MainLayout from 'layouts/main_layout'
import '../styles/globals.css'
import '../node_modules/highlight.js/styles/atom-one-dark.css'

function MyApp({ Component, pageProps }) {
  if (Component.Layout) {
    const { Layout } = Component
    return (
      <MainLayout>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MainLayout>
    )
  }

  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}

export default MyApp
