import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/font.css";
import "./styles/index.css";
import App from "./App";
import { ApolloClient } from "@apollo/client";
import { InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "@mui/material";
import theme from "./components/Theme";
import { BrowserRouter } from "react-router-dom";

const client = new ApolloClient({
  uri:process.env.REACT_APP_GRAPHCMS_URL,
  cache: new InMemoryCache(),
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    </BrowserRouter>
  </ApolloProvider>
);
