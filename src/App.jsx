import Header from './components/Header'
import Ingredients from './components/Ingredients'
import Footer from './components/Footer'
import styles from './App.module.css'

export default function App() {
  return (
    <div className={styles.appWrapper}>
      <Header />
      <main className={styles.mainWrapper}>
        <Ingredients />
        {/* <Recipe /> */}
      </main>
      {/* <Footer /> */}
    </div>
  )
}
