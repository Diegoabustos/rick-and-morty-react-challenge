import { extendTheme } from "@chakra-ui/react";

const darkTheme = {
  initialColorMode: "dark",
  useSystemColorMode: true,
  colors: {
    background: "#242424;",
    text: "#FFF",
    primary: {
      50: "#E3F2FD",
      100: "#BBDEFB",
      // ...
    },
    // ...
  },

  styles: {
    global: {
      body: {
        bg: "background",
        color: "text",
      },
      // ...
    },
  },
};

export const THEME = extendTheme({
  config: {
    initialColorMode: "system",
    useSystemColorMode: true,
  },
  ...darkTheme
});