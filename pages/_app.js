import { ChakraProvider } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import Layout from '../components/layouts/main'
import theme from '../libs/theme'
import './style.css'

const Website = ({ Component, pageProps, router }) => {
  return (
    <div>
      <ChakraProvider theme={theme}>
        <Layout router={router}>
          <AnimatePresence mode="wait" initial={true}>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </Layout>
      </ChakraProvider>
    </div>
  )
}

export default Website
