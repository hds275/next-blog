import '../styles/globals.css'
import Header from '../components/header'
import '../lib/nprogress'
import Footer from '../components/footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
