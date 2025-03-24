import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import RecipeProvider from './context/RecipeProvider.jsx'
import LoadingProvider from './context/LoadingProvider.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RecipeProvider>
      <LoadingProvider>
        <App />
      </LoadingProvider>
    </RecipeProvider>
  </StrictMode>
)
