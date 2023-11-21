import type { AppProps } from "next/app";

import Footer from "../components/Footer";
// import '../app/globals.css'
import Navbar from "../components/Navbar";
import { ChakraProvider, chakra } from "@chakra-ui/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <chakra.header id='header' bg='blue.600'>
        <Navbar />
      </chakra.header>
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}
