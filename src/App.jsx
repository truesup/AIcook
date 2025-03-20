import Header from './components/Header'
import IngredientsSection from './components/IngredientsSection'
import styles from './App.module.css'

export default function App() {
  return (
    <div className={styles.appWrapper}>
      <Header />
      <IngredientsSection />
    </div>
  )
}
