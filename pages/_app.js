import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './partials/footer'
import Header from './partials/header'

function MyApp({ Component, pageProps }) {
  
  return(
  <>
  <Header/>
   <Component {...pageProps} />
  <Footer/>
  </>)
}

export default MyApp
