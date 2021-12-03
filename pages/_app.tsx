import { AppProps } from 'next/app';
import Layout from '@components/LayoutComponent/Layout';
import 'tailwindcss/tailwind.css';

  function MyApp({ Component, pageProps }:AppProps) {
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
  }

export default MyApp;