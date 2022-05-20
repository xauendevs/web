import MainLayout from 'layouts/main_layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  console.log(Component)
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
