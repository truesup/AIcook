import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import LanguageProvider from './contexts/LanguageProvider.jsx'
import IngredientsProvider from './contexts/IngredientsProvider.jsx'
import LoadingProvider from './contexts/LoadingProvider.jsx'
import RecipeProvider from './contexts/RecipeProvider.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider>
      <IngredientsProvider>
        <RecipeProvider>
          <LoadingProvider>
            <App />
          </LoadingProvider>
        </RecipeProvider>
      </IngredientsProvider>
    </LanguageProvider>
  </StrictMode>
)
