import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";

import ApplicationContainer from "@/components/containers/ApplicationContainer";
import { theme } from "@/ui";

const queryClient = new QueryClient();

const App = ({ Component, pageProps }: AppProps) => (
  <QueryClientProvider client={queryClient}>
    <ChakraProvider theme={theme}>
      <ApplicationContainer>
        <Component {...pageProps} />
      </ApplicationContainer>
    </ChakraProvider>
  </QueryClientProvider>
);

export default App;
