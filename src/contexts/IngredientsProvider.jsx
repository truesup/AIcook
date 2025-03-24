import { useState } from 'react'
import { IngredientsContext } from './IngredientsContext'

export default function LoadingProvider({ children }) {
  const [ingredientsList, setIngredientsList] = useState([])

  return (
    <IngredientsContext.Provider
      value={{ ingredientsList, setIngredientsList }}>
      {children}
    </IngredientsContext.Provider>
  )
}
