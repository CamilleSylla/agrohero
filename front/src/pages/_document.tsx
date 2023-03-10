import { Html, Head, Main, NextScript } from 'next/document'
import Navigation from '../../components/Navigation'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Navigation />
        <div className=' mt-20'>
          <Main />
          <NextScript />
        </div>
      </body>
    </Html>
  )
}
