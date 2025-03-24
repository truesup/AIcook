import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ExpandProvider from './contexts/ExpandProvider.jsx'
import RecipeProvider from './contexts/RecipeProvider.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ExpandProvider>
      <RecipeProvider>
        <App />
      </RecipeProvider>
    </ExpandProvider>
  </StrictMode>
)
