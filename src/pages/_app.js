import React from "react";
import "../styles/globals.scss";
import "../styles/homePage.scss";
// rainbow-kit 設定
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Header from "../components/Header/Header";
import Head from "next/head";
import Logo from "../../src/assets/images/Logo.png";
import { Provider } from "../components/Provider";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const emotionCache = createCache({
  key: "style",
  prepend: true, // ensures styles are prepended to the <head>, instead of appended
});

const colors = { yellow: "#FAC92E", darkBlue: "#425673" };
const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: "",
        color: "black",
        fontFamily: "",
      },
    }),
  },
  colors,
});

const { chains, provider } = configureChains(
  [chain.mainnet],
  [
    alchemyProvider({ apiKey: "5Rbut6tuZaLXz2YsqwJ7Uj3TKtAVkinZ" }),
    // publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <>
      <Head>
        <title>Arjaverse!</title>
        <link rel="icon" href={Logo.src} />
      </Head>
      <WagmiConfig client={wagmiClient}>
        <CacheProvider value={emotionCache}>
          <RainbowKitProvider chains={chains}>
            <ChakraProvider theme={theme}>
              <Provider>
                <Header />
                <div className="pt-[70px]">
                  <Component {...pageProps} />
                </div>
              </Provider>
            </ChakraProvider>
          </RainbowKitProvider>
        </CacheProvider>
      </WagmiConfig>
    </>
  );
}

export default MyApp;
