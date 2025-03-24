import { useContext, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import { ExpandContext } from '../contexts/ExpandContext'
import { RecipeContext } from '../contexts/RecipeContext'
import styles from './RecipeSection.module.css'

export default function RecipeSection() {
  const { isExpanded } = useContext(ExpandContext)
  const { generatedRecipe } = useContext(RecipeContext)

  const [prompt, recipe] = generatedRecipe.split('---')

  const titleStyles = {
    fontSize: '1.3rem',
    fontWeight: 'var(--font-medium)',
    textDecoration: 'underline',
  }

  return (
    <section
      className={`${styles.sectionWrapper} ${
        isExpanded ? styles.expanded : ''
      }`}>
      <h2 style={titleStyles}>Your prompt to AI:</h2>
      <ReactMarkdown>{prompt}</ReactMarkdown>
      {/* <hr
        style={{
          width: '100%',
          marginBlock: '20px',
          border: '1px solid var(--color-accent)',
          borderRadius: 'var(--border-radius-small)',
        }}
      /> */}
      <h2 style={titleStyles}>Your recipe:</h2>
      <ReactMarkdown>{recipe}</ReactMarkdown>
    </section>
  )
}
