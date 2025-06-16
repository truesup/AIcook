import { v4 as uuidv4 } from 'uuid'
import { RxCross2 } from 'react-icons/rx'
import { useState, useRef, useEffect, useContext } from 'react'
import { getRecipe } from '../utils/ai'
import { LanguageContext } from '../contexts/LanguageContext'
import { RecipeContext } from '../contexts/RecipeContext'
import { LoadingContext } from '../contexts/LoadingContext'
import { IngredientsContext } from '../contexts/IngredientsContext'
import translations from '../utils/translations'
import styles from './Ingredients.module.css'

export default function Ingredients() {
  const inputRef = useRef(null)
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [shouldShake, setShouldShake] = useState(false)
  const [hasError, setHasError] = useState(false)
  const { ingredientsList, setIngredientsList } = useContext(IngredientsContext)
  const { setGeneratedRecipe } = useContext(RecipeContext)
  const { recipeIsLoaded, setRecipeIsLoaded } = useContext(LoadingContext)

  const { lang } = useContext(LanguageContext)
  const t = translations[lang]

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const filterInputByLang = (value, lang) => {
    if (lang === 'ru') {
      return value.replace(/[^а-яёА-ЯЁ\s-]/g, '')
    } else {
      return value.replace(/[^a-zA-Z\s-]/g, '')
    }
  }

  const handleInputChange = e => {
    const raw = e.target.value
    const filtered = filterInputByLang(raw, lang)

    if (raw !== filtered) {
      setShouldShake(true)
      setTimeout(() => setShouldShake(false), 300)
    }

    setInputValue(filtered)
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
    setHasError(false)

    const ingredientsNames = ingredientsList.map(ingredient => ingredient.name)

    try {
      const recipe = await getRecipe(ingredientsNames, lang)

      setGeneratedRecipe(recipe)
      if (recipe) {
        setRecipeIsLoaded(true)
      } else {
        setHasError(true)
      }
    } catch (error) {
      setHasError(true)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className={styles.ingredientsWrapper}>
      <form className={styles.form} onSubmit={handleAddIngredient}>
        <input
          className={`${styles.formInput} ${shouldShake ? styles.shake : ''}`}
          ref={inputRef}
          type="text"
          placeholder={t.inputPlaceholder}
          value={inputValue}
          onChange={handleInputChange}
          disabled={recipeIsLoaded}
        />
        <button
          className={styles.formBtn}
          type="submit"
          disabled={recipeIsLoaded}>
          + {t.addButtonText}
        </button>
      </form>
      {ingredientsList.length > 0 && (
        <div className={styles.ingredientsListWrapper}>
          <h2 className={styles.ingredientsTitle}>{t.ingredientsTitle}</h2>
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
          {ingredientsList.length > 2 && (
            <div className={styles.ctaWrapper}>
              {hasError ? (
                <div className={styles.errBanner}>
                  <p className={styles.errorTitle}>{t.errorTitle}</p>
                  <p className={styles.errorText}>{t.errorHandlingMsg}</p>
                  <button
                    className={styles.retryButton}
                    onClick={() => window.location.reload()}>
                    {t.errRestartBtn}
                  </button>
                </div>
              ) : (
                <>
                  <div className={styles.ctaTexts}>
                    <p className={styles.ctaTitle}>{t.ctaTitle}</p>
                    <p className={styles.ctaInfo}>{t.ctaInfo}</p>
                  </div>
                  <button
                    className={styles.ctaBtn}
                    onClick={handleGetRecipe}
                    disabled={isLoading}>
                    {isLoading ? (
                      <div className={styles.loader}></div>
                    ) : (
                      t.ctaBtn
                    )}
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      )}
    </section>
  )
}
