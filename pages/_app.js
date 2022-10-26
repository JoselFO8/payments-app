import Layout from '../components/layout'
import 'bootstrap/dist/css/bootstrap.css'
// import '../styles/globals.scss'
import '../styles/styles.scss'

function MyApp({ Component, pageProps }) {
  return (
  <Layout>
    <Component {...pageProps} />
  </Layout>    
  )
}

export default MyApp
