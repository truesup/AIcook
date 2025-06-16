import ReactMarkdown from 'react-markdown'
import { useContext } from 'react'
import { RecipeContext } from '../contexts/RecipeContext'
import { IngredientsContext } from '../contexts/IngredientsContext'
import { LoadingContext } from '../contexts/LoadingContext'
import { LanguageContext } from '../contexts/LanguageContext'
import translations from '../utils/translations'
import styles from './Recipe.module.css'

export default function Recipe() {
  const { lang } = useContext(LanguageContext)
  const t = translations[lang]

  const { generatedRecipe } = useContext(RecipeContext)
  const { setIngredientsList } = useContext(IngredientsContext)
  const { setRecipeIsLoaded } = useContext(LoadingContext)

  const [prompt, recipe] = generatedRecipe.split('---')

  const handleReset = () => {
    setIngredientsList([])
    setRecipeIsLoaded(false)
    window.location.reload()
  }

  return (
    <section className={styles.recipeWrapper}>
      <h2 className={styles.title}>{t.recipeTitle}</h2>
      <ReactMarkdown>{prompt}</ReactMarkdown>
      <h2 className={styles.title}>{t.recipeSubtitle}</h2>
      <ReactMarkdown>{recipe}</ReactMarkdown>
      <div className={styles.info}>
        <p className={styles.infoText}>{t.recipeInfoText}</p>
        <button className={styles.infoBtn} onClick={handleReset}>
          {t.recipeRestartBtn}
        </button>
      </div>
    </section>
  )
}
