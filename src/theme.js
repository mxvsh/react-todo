// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react";

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  fonts: {
    heading: "Exo",
    body: "Raleway",
  },
  colors: {
    brand: {
      50: "#e5f2ff",
      100: "#c2dfff",
      200: "#9ccbff",
      300: "#76b7ff",
      400: "#61a6ff",
      500: "#5796ff",
      600: "#5787ff",
      700: "#5473ea",
      800: "#5261d7",
      900: "#4d3fb6",
    },
  },
});

export default theme;
