import {createGetInitialProps} from '@mantine/next'
import Document, {Head, Html, Main, NextScript} from 'next/document'

const getInitialProps = createGetInitialProps()

export default class _Document extends Document {
  static getInitialProps = getInitialProps

  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Titillium+Web:400,900&display=swap"
            rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css?family=Spartan:500,700,800&display=swap" rel="stylesheet"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
