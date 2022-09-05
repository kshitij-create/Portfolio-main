import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Head, Html, Main, NextScript } from 'next/document'
import theme from '../libs/theme'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="eng">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="/images/footprint.ico" />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
