
import type { AppProps } from 'next/app'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Head from 'next/head'
import Spinner from '../components/Spinner'
import { title } from 'process'
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
  return <>
  <Script src='https://code.jquery.com/jquery-3.4.1.min.js'></Script>
  {/* <Script src="https://code.jquery.com/jquery-3.4.1.min.js" /> */}
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js" />
        <Script src="lib/wow/wow.min.js" />
        <Script src="js/main.js" />
  <div className='container-xxl bg-white p-0'>
    <Spinner />
  <Header />
  <Component {...pageProps} />
  <Footer />
  </div>
  
  </>
}
