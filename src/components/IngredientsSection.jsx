import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import styles from './IngredientsSection.module.css'

export default function IngredientsSection() {
  const [inputValue, setInputValue] = useState('')
  const [ingredientsList, setIngredientsList] = useState([])

  const handleInputChange = e => {
    setInputValue(e.target.value)
  }

  const handleAddIngredient = e => {
    e.preventDefault()

    setIngredientsList(prevIngredients => [
      ...prevIngredients,
      { id: uuidv4(), name: inputValue },
    ])

    setInputValue('')
  }

  return (
    <section className={styles.sectionWrapper}>
      <form className={styles.ingredientsForm} onSubmit={handleAddIngredient}>
        <input
          className={styles.ingredientsInput}
          type="text"
          placeholder="Enter your ingredients here one by one..."
          value={inputValue}
          onChange={handleInputChange}
        />
        <button className={styles.ingredientsBtn}>+ Add ingredient</button>
      </form>
      {ingredientsList.length > 0 && (
        <div className={styles.onHandsContainer}>
          <h2 className={styles.onHandsTitle}>Ingredients on hands:</h2>
          <ul className={styles.ingredientsList}>
            {ingredientsList.map(ingredient => (
              <li key={ingredient.id} className={styles.ingredientsListItem}>
                {ingredient.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  )
}
