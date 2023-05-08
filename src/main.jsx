import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import "swiper/css/bundle";
import ScrollTop from "./Components/ScrollTop.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollTop>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </ScrollTop>
    </BrowserRouter>
  </React.StrictMode>
);
