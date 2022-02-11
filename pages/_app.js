import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import Navbar from '../components/Navbar'
import 'video-react/dist/video-react.css';

function MyApp({ Component, pageProps }) {
    return (
    <ChakraProvider>
      <Navbar />
      <Component {...pageProps} />
    </ChakraProvider>
    )
}

export default MyApp;