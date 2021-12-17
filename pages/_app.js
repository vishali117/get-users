import '../styles/globals.css'
import Layout from '../components/layout'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function MyApp({ Component, pageProps }) {
  return <Layout>
      <Component {...pageProps} />
  </Layout>
}

export default MyApp
