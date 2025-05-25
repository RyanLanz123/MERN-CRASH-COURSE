import React from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import system from './theme';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
        <ChakraProvider value={system}>
          <App />
        </ChakraProvider>
      </BrowserRouter>
  </React.StrictMode>
);
