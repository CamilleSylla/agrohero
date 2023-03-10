import '@/styles/globals.css'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {

  const client = new ApolloClient({
    uri: 'http://localhost:3333/graphql', // Replace with your GraphQL API URL
    cache: new InMemoryCache()
  });
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
