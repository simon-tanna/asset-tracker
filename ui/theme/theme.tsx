import { extendTheme, ThemeConfig } from "@chakra-ui/react";

import { colors } from "./colors";
import { fonts } from "./fonts";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

export const theme = extendTheme({
  config,
  colors,
  fonts,
  components: {
    Button: {
      sizes: {
        sm: { fontSize: "md" },
      },
      variants: {
        base: {
          bg: "orange.50",
          fontSize: "md",
          fontColor: "black",
        },
      },
    },
    Heading: {
      sizes: {
        xl: {
          fontSize: "4xl",
        },
      },
    },
    Text: {
      sizes: {
        md: {
          fontSize: "md",
          fontWeight: 500,
        },
      },
    },
  },
  // Declare global styles here
  styles: {
    global: {
      body: {
        bg: "gray.50",
        color: "orange.50",
      },
    },
  },
});
