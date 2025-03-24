import { useContext } from 'react'
import ReactMarkdown from 'react-markdown'
import { RecipeContext } from '../context/RecipeContext'
import styles from './Recipe.module.css'

export default function Recipe() {
  const { generatedRecipe } = useContext(RecipeContext)

  const [prompt, recipe] = generatedRecipe.split('---')

  return (
    <section className={styles.recipeWrapper}>
      <h2 className={styles.title}>Here's your prompt to AI:</h2>
      <ReactMarkdown>{prompt}</ReactMarkdown>
      <h2 className={styles.title}>And here's your recipe:</h2>
      <ReactMarkdown>{recipe}</ReactMarkdown>
    </section>
  )
}
