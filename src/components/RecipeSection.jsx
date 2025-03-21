import { useContext } from 'react'
import { ExpandContext } from '../contexts/ExpandContext'
import styles from './RecipeSection.module.css'

export default function RecipeSection() {
  const { isExpanded } = useContext(ExpandContext)

  return (
    <section
      className={`${styles.sectionWrapper} ${
        isExpanded ? styles.expanded : ''
      }`}>
      This is recipe section
    </section>
  )
}
