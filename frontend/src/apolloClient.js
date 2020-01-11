import { WebSocketLink } from "apollo-link-ws";
import { HttpLink } from "apollo-link-http";
import { getMainDefinition } from "apollo-utilities";
import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { split } from "apollo-link";

const GRAPHQL_URI = "localhost:4000";
const wsLink = new WebSocketLink({
  uri: `ws://${GRAPHQL_URI}`,
  option: {
    reconnect: true
  }
});
const httpLink = new HttpLink({
  uri: `http://${GRAPHQL_URI}`
});
const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === "OperationDefinition" && operation === "subscription";
  },
  wsLink,
  httpLink
);

export default new ApolloClient({
  link,
  cache: new InMemoryCache(),
  onError: ({ networkError, graphQLErrors }) => {
    console.log("graphQLErrors", graphQLErrors);
    console.log("networkError", networkError);
  }
});
