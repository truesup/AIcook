import { useState } from 'react'
import { LoadingContext } from './LoadingContext'

export default function LoadingProvider({ children }) {
  const [recipeIsLoaded, setRecipeIsLoaded] = useState(false)

  return (
    <LoadingContext.Provider value={{ recipeIsLoaded, setRecipeIsLoaded }}>
      {children}
    </LoadingContext.Provider>
  )
}
