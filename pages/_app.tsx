import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

import { appNavigation } from "@/constants";
import { theme, AppNavigation } from "@/ui";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <AppNavigation navigationItems={appNavigation} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
