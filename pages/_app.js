import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import Navbar from '../components/Navbar'
import 'video-react/dist/video-react.css';
import '../components/VideosView/index.css'

function MyApp({ Component, pageProps }) {
    return (
    <ChakraProvider>
      <Navbar />
      <Component {...pageProps} />
    </ChakraProvider>
    )
}

export default MyApp;