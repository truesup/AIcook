import { useContext } from 'react'
import { LoadingContext } from './contexts/LoadingContext'
import Header from './components/Header'
import Ingredients from './components/Ingredients'
import Recipe from './components/Recipe'
import Footer from './components/Footer'
import styles from './App.module.css'

export default function App() {
  const { recipeIsLoaded } = useContext(LoadingContext)

  return (
    <>
      <div className={styles.appWrapper}>
        <Header />
        <main className={styles.mainWrapper}>
          <Ingredients />
          {recipeIsLoaded && <Recipe />}
        </main>
      </div>
      <Footer />
    </>
  )
}
