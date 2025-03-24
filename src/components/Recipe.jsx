import { useContext } from 'react'
import ReactMarkdown from 'react-markdown'
import { RecipeContext } from '../context/RecipeContext'
import styles from './Recipe.module.css'
import { LoadingContext } from '../context/LoadingContext'

export default function Recipe() {
  const { generatedRecipe } = useContext(RecipeContext)
  const { setRecipeIsLoaded } = useContext(LoadingContext)

  const [prompt, recipe] = generatedRecipe.split('---')

  const handleReset = () => {}

  return (
    <section className={styles.recipeWrapper}>
      <h2 className={styles.title}>Here's your prompt to AI:</h2>
      <ReactMarkdown>{prompt}</ReactMarkdown>
      <h2 className={styles.title}>And here's your recipe:</h2>
      <ReactMarkdown>{recipe}</ReactMarkdown>
      <div className={styles.info}>
        <p className={styles.infoText}>
          Sometimes the AI may not work perfectly—these things happen, so please
          don’t worry. You can always refresh the page and try again. If you’re
          satisfied with the outcome, feel free to generate another recipe by
          clicking the button below.
        </p>
        <button className={styles.infoBtn} onClick={handleReset}>
          Restart
        </button>
      </div>
    </section>
  )
}
