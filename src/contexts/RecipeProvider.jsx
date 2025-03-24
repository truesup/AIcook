import { useState } from 'react'
import { RecipeContext } from './RecipeContext'

export default function RecipeProvider({ children }) {
  const [generatedRecipe, setGeneratedRecipe] = useState('')

  return (
    <RecipeContext.Provider value={{ generatedRecipe, setGeneratedRecipe }}>
      {children}
    </RecipeContext.Provider>
  )
}
