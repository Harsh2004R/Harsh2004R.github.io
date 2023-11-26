import React from "react";
import { BrowserRouter } from "react-router-dom"
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import AllRoutes from "./Routes/AllRoutes";
const theme = extendTheme({
  breakpoints: {
    base: "0px",
    sm: "480px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
  },
});
function App() {
  return (
    <>
      <BrowserRouter>
        <ChakraProvider theme={theme}>
          <AllRoutes />
        </ChakraProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
