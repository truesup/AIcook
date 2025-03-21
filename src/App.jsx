import { useContext } from 'react'
import { ExpandContext } from './contexts/ExpandContext'
import Header from './components/Header'
import IngredientsSection from './components/IngredientsSection'
import RecipeSection from './components/RecipeSection'
import styles from './App.module.css'

export default function App() {
  const { isExpanded } = useContext(ExpandContext)

  return (
    <div
      className={`${styles.appWrapper} ${isExpanded ? styles.expanded : ''}`}>
      <Header />
      <main className={styles.mainSectionsWrapper}>
        <IngredientsSection />
        {isExpanded && <RecipeSection />}
      </main>
    </div>
  )
}
