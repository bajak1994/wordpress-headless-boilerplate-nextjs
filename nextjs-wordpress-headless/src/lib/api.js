import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from '@apollo/client';

const link = ApolloLink.from([
  new HttpLink({
    uri: 'http://127.0.0.1:80/graphql',
    useGETForQueries: true,
  })
]);

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  defaultOptions: {
    query: {
      fetchPolicy: "network-only",
    }
  }
});
