import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ExpandProvider from './contexts/ExpandProvider.jsx'

createRoot(document.getElementById('root')).render(
  <ExpandProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </ExpandProvider>
)
