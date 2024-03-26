import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
  ApolloProvider, ApolloClient, InMemoryCache,
} from '@apollo/client';
import Routes from './routing/Routes';
import './App.css';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://countries.trevorblades.com',
  connectToDevTools: true,
});

const App = () => (
        <BrowserRouter>
            <ApolloProvider client={client}>
                <Routes />
            </ApolloProvider>
        </BrowserRouter>
);

export default App;
