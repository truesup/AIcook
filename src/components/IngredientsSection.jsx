import { useContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { RxCross2, RxCheck } from 'react-icons/rx'
import { ExpandContext } from '../contexts/ExpandContext'
import { RecipeContext } from '../contexts/RecipeContext'
import { getRecipe } from '../utils/ai'
import styles from './IngredientsSection.module.css'

export default function IngredientsSection() {
  const [inputValue, setInputValue] = useState('')
  const [ingredientsList, setIngredientsList] = useState([])
  const { isExpanded, setIsExpanded } = useContext(ExpandContext)
  const { setGeneratedRecipe } = useContext(RecipeContext)

  const handleInputChange = e => {
    setInputValue(e.target.value)
  }

  const handleAddIngredient = e => {
    e.preventDefault()
    const trimmedValue = inputValue.trim()

    if (!trimmedValue) return

    setIngredientsList(prevIngredients => [
      ...prevIngredients,
      { id: uuidv4(), name: trimmedValue },
    ])

    setInputValue('')
  }

  const handleDeleteIngredient = id => {
    setIngredientsList(prevIngredients =>
      prevIngredients.filter(ingredient => ingredient.id !== id)
    )
  }

  async function handleGetRecipe() {
    console.log('getting recipe...')
    setIsExpanded(true)

    const ingredientsNames = ingredientsList.map(ingredient => ingredient.name)
    const recipe = await getRecipe(ingredientsNames)
    setGeneratedRecipe(recipe)
  }

  return (
    <section
      className={`${styles.sectionWrapper} ${
        isExpanded ? styles.expanded : ''
      }`}>
      <form
        className={`${styles.ingredientsForm} ${
          isExpanded ? styles.formExpanded : ''
        }`}
        onSubmit={handleAddIngredient}>
        <input
          className={styles.ingredientsInput}
          type="text"
          placeholder="Enter your ingredients here one by one..."
          value={inputValue}
          onChange={handleInputChange}
        />
        <button className={styles.ingredientsBtn} disabled={!inputValue.trim()}>
          + Add ingredient
        </button>
      </form>
      {ingredientsList.length > 0 && (
        <div className={styles.onHandsContainer}>
          <h2 className={styles.onHandsTitle}>Ingredients on hands:</h2>
          <ul
            className={
              isExpanded
                ? styles.ingredientsListExpanded
                : styles.ingredientsList
            }>
            {ingredientsList.map(ingredient => (
              <li
                key={ingredient.id}
                className={
                  isExpanded
                    ? styles.ingredientsListItemExpanded
                    : styles.ingredientsListItem
                }>
                <span className={styles.ingredientName} title={ingredient.name}>
                  {ingredient.name}
                </span>
                {isExpanded ? (
                  <RxCheck
                    className={styles.addedIcon}
                    title="This ingredient was included in the list."
                  />
                ) : (
                  <RxCross2
                    className={styles.deleteIcon}
                    onClick={() => handleDeleteIngredient(ingredient.id)}
                  />
                )}
              </li>
            ))}
          </ul>
          <div
            className={`${styles.ctaContainer} ${
              isExpanded ? styles.ctaContainerExpanded : ''
            }`}>
            <div className={styles.ctaTexts}>
              <h3 className={styles.ctaTitle}>Ready for a recipe?</h3>
              <p className={styles.ctaDescription}>
                Generate a recipe from your list of ingredients.
              </p>
            </div>
            <button className={styles.ctaBtn} onClick={handleGetRecipe}>
              Get a recipe
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
