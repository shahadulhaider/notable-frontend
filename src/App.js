import React from 'react';
import { render } from 'react-dom';
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
  gql,
} from '@apollo/client';
import { setContext } from '@apollo/link-context';

import Pages from './pages';
import GlobalStyle from './components/GlobalStyle';

const uri = process.env.API_URI;
const httpLink = createHttpLink({ uri });
const cache = new InMemoryCache();

// returns the headers to the context
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? token : '',
    },
  };
});

// Configure Apollo Client
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
  resolvers: {},
  connectToDevTools: true,
});

// check for token in localStorage
const data = {
  isLoggedIn: !!localStorage.getItem('token'),
};

// write cache data on intial load
cache.writeQuery({
  query: gql`
    {
      isLoggedIn @client
    }
  `,
  data,
});

// write cache data after reset
client.onResetStore(() =>
  cache.writeQuery({
    query: gql`
      {
        isLoggedIn @client
      }
    `,
    data,
  }),
);

const App = () => (
  <ApolloProvider client={client}>
    <GlobalStyle />
    <Pages />
  </ApolloProvider>
);

render(<App />, document.getElementById('root'));
