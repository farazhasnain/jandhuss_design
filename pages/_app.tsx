
import type { AppProps } from 'next/app'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Head from 'next/head'
import Spinner from '../components/Spinner'
import { title } from 'process'

export default function App({ Component, pageProps }: AppProps) {
  return <>
  <div className='container-xxl bg-white p-0'>
    <Spinner />
  <Header />
  <Component {...pageProps} />
  <Footer />
  </div>
  
  </>
}
