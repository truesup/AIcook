import Header from './components/Header'
import Footer from './components/Footer'
import styles from './App.module.css'

export default function App() {
  return (
    <div className={styles.appWrapper}>
      <Header />
      <main className={styles.mainSectionsWrapper}>This is main</main>
      <Footer />
    </div>
  )
}
