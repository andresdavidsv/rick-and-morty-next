import { AppProps } from 'next/app';
import Layout from '@components/LayoutComponent/Layout';

//CSS
import 'tailwindcss/tailwind.css';

// Services
import { ApolloProvider } from '@apollo/client';
import apolloClient from '../lib/apollo';

  function MyApp({ Component, pageProps }:AppProps) {
    return (
      <ApolloProvider client={apolloClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    )
  }

export default MyApp;