import { useContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { RxCross2 } from 'react-icons/rx'
import { ExpandContext } from '../contexts/ExpandContext'
import styles from './IngredientsSection.module.css'

export default function IngredientsSection() {
  const [inputValue, setInputValue] = useState('')
  const [ingredientsList, setIngredientsList] = useState([])
  // const [isLoading, setIsLoading] = useState(false)
  const { isExpanded, setIsExpanded } = useContext(ExpandContext)

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

  const handleGetRecipe = () => {
    // setIsLoading(prevValue => !prevValue)
    console.log('getting recipe...')
    setIsExpanded(true)
  }

  return (
    <section
      className={`${styles.sectionWrapper} ${isExpanded && styles.expanded}`}>
      <form className={styles.ingredientsForm} onSubmit={handleAddIngredient}>
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
          <ul className={styles.ingredientsList}>
            {ingredientsList.map(ingredient => (
              <li key={ingredient.id} className={styles.ingredientsListItem}>
                <span className={styles.ingredientName} title={ingredient.name}>
                  {ingredient.name}
                </span>
                <RxCross2
                  className={styles.deleteIcon}
                  onClick={() => handleDeleteIngredient(ingredient.id)}
                />
              </li>
            ))}
          </ul>
          <div className={styles.ctaContainer}>
            <div className={styles.ctaTexts}>
              <h3 className={styles.ctaTitle}>Ready for a recipe?</h3>
              <p className={styles.ctaDescription}>
                Generate a recipe from your list of ingredients.
              </p>
            </div>
            <button className={styles.ctaBtn} onClick={handleGetRecipe}>
              {/* {isLoading ? (
                <div className={styles.ctaBtnLoader}></div>
              ) : (
                'Get a recipe'
              )} */}
              Get a recipe
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
