import { extendTheme, ThemeConfig } from "@chakra-ui/react";

import { colors } from "./colors";
import { fonts } from "./fonts";
import { semanticTokens } from "./semantic-tokens";
import { Button } from "./variants";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

export const theme = extendTheme({
  config,
  colors,
  fonts,
  semanticTokens,
  styles: {
    global: {
      body: {
        bg: "pageBg",
      },
    },
  },
  shadows: {
    outline: "0 0 0 1px accent.400",
  },
  components: {
    Button,
  },
});
