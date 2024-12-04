import { createRoot } from 'react-dom/client'
import { MantineProvider } from '@mantine/core'

import App from './App.jsx'

import '@mantine/core/styles.css';
import './index.css'

createRoot(document.getElementById('root')).render(
  <MantineProvider
    withGlobalStyles
    withCSSVariables
    theme={{
      primaryColor: 'red',
      primaryShade: 6,
      defaultRadius: 'md',
    }}
  >
    <App />
  </MantineProvider>
)
