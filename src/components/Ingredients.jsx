import { useState, useRef, useEffect, useContext } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { RxCross2 } from 'react-icons/rx'
import { RecipeContext } from '../context/RecipeContext'
import { getRecipe } from '../utils/ai'
import styles from './Ingredients.module.css'
import { LoadingContext } from '../context/LoadingContext'

export default function Ingredients() {
  const inputRef = useRef(null)
  const [inputValue, setInputValue] = useState('')
  const [ingredientsList, setIngredientsList] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const { setGeneratedRecipe } = useContext(RecipeContext)
  const { setRecipeIsLoaded } = useContext(LoadingContext)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const handleInputChange = e => {
    setInputValue(e.target.value)
  }

  const handleAddIngredient = e => {
    e.preventDefault()

    if (!inputValue.trim()) return

    setIngredientsList(prevIngredients => [
      ...prevIngredients,
      { id: uuidv4(), name: inputValue },
    ])
    setInputValue('')
  }

  const handleDeleteIngredient = id => {
    setIngredientsList(prevIngredients =>
      prevIngredients.filter(ingredient => ingredient.id !== id)
    )
  }

  const handleGetRecipe = async () => {
    setIsLoading(true)

    const ingredientsNames = ingredientsList.map(ingredient => ingredient.name)
    const recipe = await getRecipe(ingredientsNames)
    setGeneratedRecipe(recipe)

    if (recipe) {
      setIsLoading(false)
      setRecipeIsLoaded(true)
    }
  }

  return (
    <section className={styles.ingredientsWrapper}>
      <form className={styles.form} onSubmit={handleAddIngredient}>
        <input
          className={styles.formInput}
          ref={inputRef}
          type="text"
          placeholder="Put ingredient name here..."
          value={inputValue}
          onChange={handleInputChange}
        />
        <button className={styles.formBtn} type="submit">
          + Add ingredient
        </button>
      </form>
      {ingredientsList.length > 0 && (
        <div className={styles.ingredientsListWrapper}>
          <h2 className={styles.ingredientsTitle}>Ingredients on hand:</h2>
          <ul className={styles.ingredientsList}>
            {ingredientsList.map(ingredient => (
              <li className={styles.ingredientsListItem} key={ingredient.id}>
                <span className={styles.ingredientsListItemName}>
                  {ingredient.name}
                </span>
                <RxCross2
                  className={styles.deleteIcon}
                  onClick={() => handleDeleteIngredient(ingredient.id)}
                />
              </li>
            ))}
          </ul>
          {ingredientsList.length > 3 && (
            <div className={styles.ctaWrapper}>
              <div className={styles.ctaTexts}>
                <p className={styles.ctaTitle}>Ready for a recipe?</p>
                <p className={styles.ctaInfo}>
                  Generate a recipe from your list of ingredients.
                </p>
              </div>
              <button
                className={styles.ctaBtn}
                onClick={handleGetRecipe}
                disabled={isLoading}>
                {isLoading ? (
                  <div className={styles.loader}></div>
                ) : (
                  'Get a recipe'
                )}
              </button>
            </div>
          )}
        </div>
      )}
    </section>
  )
}
