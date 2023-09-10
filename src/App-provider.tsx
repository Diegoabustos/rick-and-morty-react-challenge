import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";

import App from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import { THEME } from "./theme/theme.ts";
const queryClient = new QueryClient();

const AppProvider: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={THEME}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ChakraProvider>
    </QueryClientProvider>
  );
};

export default AppProvider;
