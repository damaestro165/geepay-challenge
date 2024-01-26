import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';
import { extendTheme } from '@chakra-ui/react'

// Supports weights 200-800
import '@fontsource-variable/plus-jakarta-sans';

const theme = extendTheme({
  fonts: {
    heading: `'Plus Jakarta Sans Variable', sans-serif;`,
    body: `'Plus Jakarta Sans Variable', sans-serif;`,
  },
})


const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme} >
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)