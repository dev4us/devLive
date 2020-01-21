import React from "react";
import ReactDOM from "react-dom";

import Routes from "./Routes";

import { ApolloProvider } from "react-apollo-hooks";
import { GlobalProvider } from "./GlobalState/store";

import client from "./apolloClient";
import GlobalStyle from "./global-styles";

ReactDOM.render(
  <>
    <GlobalProvider>
      <ApolloProvider client={client}>
        <Routes />
        <GlobalStyle />
      </ApolloProvider>
    </GlobalProvider>
  </>,
  document.getElementById("root")
);
