import type { AppProps } from "next/app";
import Head from "next/head";
import { Fragment } from "react";
import Footer from "../components/Footer";
// import '../app/globals.css'
import Navbar from "../components/Navbar";
import { ChakraProvider, chakra } from "@chakra-ui/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Fragment>
        <Head>
          <title>TNTT Sinh Hoạt Library</title>
        </Head>
      </Fragment>
      <chakra.header id="header" bg="blue.600">
        <Navbar />
      </chakra.header>
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}
